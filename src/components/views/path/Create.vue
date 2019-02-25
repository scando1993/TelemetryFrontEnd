<template>
  <section class="content">
    <div class="span12"> 
        <div class="row center-block">
          <div class="col-md-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Añadir una nueva ruta</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <div class="box-content">
                  <form action="/create" method="POST" class="form-horizontal" id="profile-form">
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">No.Furgón</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <select v-model="selectedLocal">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoL in dataGet ">{{ datoL.numFurgon }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Seleccione la fecha de inicio</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="date" v-model="dataPostDel.start_date" name="fechaInicio">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Seleccione la Hora de inicio</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="time" v-model="dataPostDel.start_hour" name="fechaInicio">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Seleccione la fecha Fin</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="date" v-model="dataPostDel.end_date" name="fechaFin">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 col-lg-2 control-label">Seleccione la Hora de fin</label>
                      <div class="col-sm-9 col-lg-10 controls">
                        <input type="time" v-model="dataPostDel.end_hour" name="fechaInicio">
                      </div>
                    </div>
                    <!-- Submit and cancel -->
                    <div class="form-group">
                      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                        <router-link class="pageLink" to="/path">
                          <button type="submit" class="btn btn-primary" v-on:click="save"><i class="fa fa-ok"></i> Guardar</button>
                          <a href="/path" type="button" class="btn">Cancelar </a>
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
        console.log(this.dataPostDel.start_date + '----' + this.dataPostDel.end_date)
        // se obtienne los ids de las ubicaciones
        // api.getAll(this.apiBack, this.$data)
        console.log(this.dataGet)
        var id = ''
        console.log(id + 'neh')
        for (var i = 0; i < this.dataGet.length; i++) {
          if (this.DataGet[i]['furgon']['numFurgon'] === this.selectedLocal) {
            id = this.DataGet[i]['id']
          }
        }
        console.log('A  qui el id')
        console.log(id)
        console.log(this.dataPostDel)
        api.post(this.apiBack + '/' + id, this.$data)
      }
    },
    data() {
      return {
        apiBack: '/api/path',
        apiBackFurgon: '/api/furgon',
        error: '',
        selectedLocal: '',
        dataGet: [],
        dataPostDel: { // este es basicamente un JSON
          start_date: '',
          start_hour: '',
          end_date: '',
          end_hour: ''
        }
      }
    },
    mounted() {
      // se obtiene las ubicaciones
      api.getAll(this.apiBackFurgon, this.$data)
    }
  }
</script>
