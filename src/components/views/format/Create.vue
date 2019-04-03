<template>
  <section class="content">
    <div class="span12">
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir un nuevo formato</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-content table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form  method="POST" target="hiddenFrame" class="form-horizontal-create" id="profile-form">
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required v-model="dataPostDel.name" name="name" maxlength="50" >
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Código</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" required v-model="dataPostDel.code" name="code" maxlength="50" >
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Local</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <select v-model="selectedLocal" required="required" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoL in locals.dataGet[0].localeses ">{{ datoL.name }}</option>
                      </select>
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
        if (this.dataPostDel.name.trim() !== '' && this.dataPostDel.code.trim() !== '') {
          var idLocal = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedLocal).id
          this.dataPostDel.name = this.dataPostDel.name.trim()
          this.dataPostDel.code = this.dataPostDel.code.trim()
          api.post(this.apiBack, this.$data)
          var head = '/localeses/' + idLocal
          setTimeout(e => {
            console.log(this.dataRespond[0])
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/locales', head)
            this.$router.push(this.page)
          }, 1200)
        }
      }
    },
    data() {
      return {
        page: '/format',
        apiBack: '/formatoes',
        apiBackLocals: '/localeses',
        selectedLocal: '',
        dataRespond: [],
        formats: {
          error: '',
          dataGet: [
            {
              formatoes: [{
                name: '',
                code: ''
              }]
            }]
        },
        locals: {
          error: '',
          dataGet: [
            {
              localeses: [{
                name: ''
              }]
            }]
        },
        dataPostDel: { // este es basicamente un JSON
          name: '',
          code: ''
        }
      }
    },
    mounted() {
      api.getAll(this.apiBackLocals, this.locals)
    }
  }
</script>
