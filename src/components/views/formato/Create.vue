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
              <div class="box-content">

                <form  method="POST" class="form-horizontal" id="profile-form">
              
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" v-model="name" name="name"  maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Ruta</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" v-model="path" name="path"  maxlength="50" value="">
                    </div>
                  </div>

                  <!-- Submit and cancel -->
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                      <router-link class="pageLink" to="/format">
                        <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                        <a href="/format" type="button" class="btn">Cancelar</a>
                      </router-link>
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
      save() {
        console.log(this.dataPostDel.id + '----' + this.dataPostDel.nombre)
        api.post(this.apiBack, this.$data)
      }
    },
    data() {
      return {
        apiBack: '/api/formato',
        error: '',
        dataPostDel: { // este es basicamente un JSON
          id: '',
          nombre: '',
          ruta: ''
        }
      }
    }
  }
</script>
