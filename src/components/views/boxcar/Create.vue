<template>
  <section class="content">
    <div class="span12">
      <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Añadir nuevo Furgón</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="box-content">
                <form action="/create" method="POST" class="form-horizontal" id="profile-form">

                  <div class="form-group">
                    <label class="col-sm-3 control-label">No.Furgón</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="number" class="form-control" name="name" v-model="dataPostDel.numFurgon" id="name_store" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3  control-label">Nombre</label>
                    <div class="col-sm-9 col-lg-10 controls">
                      <input type="text" class="form-control" name="name" v-model="dataPostDel.name" id="name_store" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-offset-4 control-label">Seleccione las Ubicaciones</label><br/>
                    <div   class="col-sm-3  controls" id="checkboxUbiCreate">
                      <input v-for="datoL, indexUb in dataGet" type="checkbox"  value="indexUb+'s'" id="indexUb+'s'" v-model="checkedNames">
                      <label>{{datoL.zone}}--{{ datoL.province}}--{{datoL.city}}</label>
                    </div>
                  </div>
                  <!-- Submit and cancel -->
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                      <router-link class="pageLink" to="/boxcar">
                        <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                        <a href="/boxcar" type="button" class="btn">Cancelar</a>
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
        console.log(this.dataPostDel.nunFurgon + '----' + this.dataPostDel.name)
        // se obtienne los ids de las ubicaciones
        // api.getAll(this.apiBack, this.$data)
        console.log(this.dataGet)
        var id = api.search(this.dataGet, 'zone', this.checkedNames).id
        console.log('A  qui el id')
        console.log(id)
        console.log(this.dataPostDel)
        api.post(this.apiBack + '/' + id, this.$data)
      }
    },
    data() {
      return {
        el: '#checkboxUbiCreate',
        apiBack: '/api/furgon',
        apiBackUbication: '/api/ubicacion',
        error: '',
        checkedNames: [],
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
