<template>
  <section class="content">
    <div class="span12"> 
        <div class="row center-block">
          <div class="col-md-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Añadir nuevo elemento</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <div class="box-content">
                  <form method="POST" class="form-horizontal" id="profile-form">

                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="text" class="form-control" name="name" v-model="dataPostDel.name" id="name_store" maxlength="50" value="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Ubicación</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <select v-model="selectedLocal">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoB in dataGet ">{{ datoB.zone }} - {{datoB.province}} - {{datoB.city}}</option>
                        </select>
                      </div>
                    </div>
                    <!-- Submit and cancel -->
                    <div class="form-group">
                      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                        <router-link class="pageLink" to="/store">
                          <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                          <a href="/store" type="button" class="btn">Cancelar </a>
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
  // import jsonUbiBox from './../ubication/data.json'

  export default {
    methods: {
      save() {
        console.log(this.dataPostDel.name + '----')
        // se obtienne los ids de las ubicaciones
        // api.getAll(this.apiBack, this.$data)
        console.log(this.dataGet)
        var id = api.search(this.dataGet, 'zone', this.selectedLocal.split(' - ')[0]).id
        console.log('A  qui el id')
        console.log(id)
        console.log(this.dataPostDel)
        api.post(this.apiBack + '/' + id, this.$data)
      }
    },
    data() {
      return {
        apiBack: '/api/bodega',
        apiBackUbication: '/api/ubicacion',
        error: '',
        selectedLocal: '',
        dataGet: [],
        dataPostDel: { // este es basicamente un JSON
          name: ''
        }
      }
    },
    mounted() {
      // se obtiene las ubicaciones
      api.getAll(this.apiBackUbication, this.$data)
    }
  }
</script>
