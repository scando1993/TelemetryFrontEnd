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
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form action="/create" method="POST" target="hiddenFrame" class="form-horizontal" id="profile-form">              
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" v-model="dataPostDel.name" name="name"  maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Ruta</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" v-model="dataPostDel.ruta" name="ruta"  maxlength="50" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 col-lg-2 control-label">Ubicaciones</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <select v-model="selectedLocal" >
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoL in dataGet ">{{ datoL.zone }}</option>
                      </select>
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
      updateData(newData) {
        this.error = newData.error
        this.dataPostDel = newData.dataPostDel
      },
      get() {
        api.getAll(this.apiBack, this.$data)
      },
      save() {
        console.log(this.dataPostDel.name + '----' + this.dataPostDel.ruta)
        // se obtienne los ids de las ubicaciones
        // api.getAll(this.apiBack, this.$data)
        console.log(this.dataGet)
        var id = api.search(this.dataGet, 'zone', this.selectedLocal).id
        console.log('A  qui el id')
        console.log(id)
        console.log(this.dataPostDel)
        api.post(this.apiBack + '/' + id, this.$data)
      }
    },
    data() {
      return {
        apiBack: '/api/formato',
        apiBackUbication: '/api/ubicacion',
        error: '',
        selectedLocal: '',
        dataGet: [],
        dataPostDel: { // este es basicamente un JSON
          name: '',
          ruta: ''
        }
      }
    },
    mounted() {
      // se obtiene las ubicaciones
      api.getAll(this.apiBackUbication, this.$data)
    }
  }
</script>
