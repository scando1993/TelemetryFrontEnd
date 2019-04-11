<template>
  <section class="content">
    <div class="span12">
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir un nuevo producto</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-content table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form  method="POST" target="hiddenFrame" class="form-horizontal-create" id="profile-form">
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" required class="form-control" v-model="dataPostDel.name" name="name" maxlength="50">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Temperatura máxima</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" required class="form-control" v-model="dataPostDel.temp_max" name="temp_max" maxlength="10">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Temperatura mínima</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" required class="form-control" v-model="dataPostDel.temp_min" name="temp_min" maxlength="10" >
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Temperatura máxima ideal </label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" required class="form-control" v-model="dataPostDel.temp_max_ideal" name="temp_max_ideal" maxlength="10">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Temperatura mínima ideal</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" required class="form-control" v-model="dataPostDel.temp_min_ideal" name="temp_min_ideal" maxlength="10" >
                    </div>
                  </div>
                  
                  <!-- Submit and cancel -->
                  <div class="form-group">
                    <div class="SaveCancel">
                      <p>
                        <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                        <button class="btn btn-default" v-on:click="cancel">Cancelar </button>
                      </p>
                    </div>
                  </div>
                  <!--End Submit and cancel-->
                </form>
              </div>
              <!-- /.box-body -->
            </div>
            <!--End Box-->
          </div>
        </div>
      </div>
    </div>
    <!--</div>-->
    <!--End content-->
  </section>
</template>
<script>
  import api from '@/api/goApi.js'
  export default {
    methods: {
      cancel() {
        this.$router.push(this.page)
      },
      save() {
        if (this.dataPostDel.name.trim() !== '' && this.dataPostDel.temp_max.toString() !== '' && this.dataPostDel.temp_max_ideal.toString() !== '' && this.dataPostDel.temp_min.toString() !== '' && this.dataPostDel.temp_min_ideal.toString() !== '') {
          this.dataPostDel.name = this.dataPostDel.name.trim()
          api.post(this.apiBack, this.$data)
          setTimeout(e => {
            this.$router.push(this.page)
          }, 700)
        }
      }
    },
    data() {
      return {
        apiBack: '/productoes',
        page: '/products',
        products: {
          error: '',
          dataGet: [
            {
              productoes: [{
                name: '',
                temp_max: 0,
                temp_min: 0,
                temp_max_ideal: 0,
                temp_min_ideal: 0
              }]
            }]
        },
        dataPostDel: { // este es basicamente un JSON
          name: '',
          temp_max: 0,
          temp_min: 0,
          temp_max_ideal: 0,
          temp_min_ideal: 0
        }
      }
    }
  }
</script>
