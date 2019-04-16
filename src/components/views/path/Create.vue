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
              <div class="box-content table-responsive">
                <iframe name="hiddenFrame" class="hide"></iframe>
                <form method="POST" target="hiddenFrame" class="form-horizontal-create" id="profile-form">
                  <div class="form-group ">
                    <label class=" col-sm-6 control-label">Furgón</label>
                    <div class="col-sm-6 controls-create">
                      <select required v-model="selectedBoxcar" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoF in boxcars.dataGet[0].furgons ">{{ datoF.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-12 control-label">Dispositivo</label>
                    <div class="col-sm-9 col-lg-10 controls-create">
                      <select required v-model="selectedDevice" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoD in devices.dataGet[0].devices">{{ datoD.name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group ">
                    <label class=" col-sm-6 control-label">Producto</label>
                    <div class="col-sm-6 controls-create">
                      <select required v-model="selectedProduct" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoP in products.dataGet[0].productoes ">{{ datoP.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-12 control-label">Seleccione la fecha y hora de inicio</label>
                    <div class="col-sm-3 controls-create">
                      <input required type="date" class="FormatDate" v-model="$data.startDate" name="startDate">
                      <input required type="time" class="FormatHour" v-model="$data.start_hour" name="startHour">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-12 control-label">Seleccione la fecha y hora Fin</label>
                    <div class="col-sm-9 controls-create">
                      <input required type="date" class="FormatDate" v-model="$data.endDate" name="endDate">
                      <input required type="time" class="FormatHour" v-model="$data.end_hour" name="endHour">
                    </div>
                  </div>
                  <div class="form-group ">
                    <label class=" col-sm-6 control-label">Local Inicio</label>
                    <div class="col-sm-6 controls-create">
                      <select required v-model="selectedStartLocal" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoL in locals.dataGet[0].localeses ">{{ datoL.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group ">
                    <label class=" col-sm-6 control-label">Local Fin</label>
                    <div class="col-sm-6 controls-create">
                      <select required v-model="selectedEndLocal" class="FormatSelect">
                        <option disabled value="">Por favor seleccionar uno</option>
                        <option v-for="datoL in locals.dataGet[0].localeses ">{{ datoL.name}}</option>
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
      async save4() {
        this.dataPostDel.start_date = new Date(this.startDate + 'T' + this.start_hour)
        this.dataPostDel.end_date = new Date(this.endDate + 'T' + this.end_hour)
        console.log(this.dataPostDel.start_date)
        console.log(this.dataPostDel.end_date)
        console.log(this.getPath)
        if (this.dataPostDel.start_date !== this.dataPostDel.end_date) {
          var idLocIn = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedStartLocal).id
          var idLocFn = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedEndLocal).id
          var idProd = api.search(this.products.dataGet[0].productoes, 'name', this.selectedProduct).id
          var idDevi = api.search(this.devices.dataGet[0].devices, 'name', this.selectedDevice).id
          var idBoxc = api.search(this.boxcars.dataGet[0].furgons, 'name', this.selectedBoxcar).id
          await api.post(this.apiBackAlerts, this.$data)
          var idAlert = this.dataRespond[0]
          console.log(idAlert)
          console.log('alertaaa!')
          setTimeout(e => {
            api.post(this.apiBack, this.$data)
          }, 100)
          var headIni = '/localeses/' + idLocIn
          var headFin = '/localeses/' + idLocFn
          var headProd = '/productoes/' + idProd
          var headDevi = '/devices/' + idDevi
          var headBoxc = '/furgons/' + idBoxc
          var headAlert = '/rutas/' + this.dataRespond[0]
          console.log(this.dataRespond[0])
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/localInicio', headIni)
          }, 100)
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/localFin', headFin)
          }, 100)
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/producto', headProd)
          }, 100)
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/device', headDevi)
          }, 100)
          setTimeout(e => {
            api.postWithHeader(this.apiBackAlerts + '/' + idAlert + '/ruta', headAlert)
          }, 100)
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/furgon', headBoxc)
          }, 100)
          setTimeout(e => {
            this.$router.push(this.page)
          }, 200)
        }
      },
      async save() {
        this.dataPostDel.start_date = new Date(this.startDate + 'T' + this.start_hour)
        this.dataPostDel.end_date = new Date(this.endDate + 'T' + this.end_hour)
        console.log(this.dataPostDel.start_date)
        console.log(this.dataPostDel.end_date)
        if (this.dataPostDel.start_date !== this.dataPostDel.end_date) {
          var idLocIn = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedStartLocal).id
          var idLocFn = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedEndLocal).id
          var idProd = api.search(this.products.dataGet[0].productoes, 'name', this.selectedProduct).id
          var idDevi = api.search(this.devices.dataGet[0].devices, 'name', this.selectedDevice).id
          var idBoxc = api.search(this.boxcars.dataGet[0].furgons, 'name', this.selectedBoxcar).id
          api.post(this.apiBackAlerts, this.$data)
          setTimeout(e => {
            var idAlert = this.dataRespond[0]
            console.log(idAlert)
            console.log('alertaaa!')
            api.post(this.apiBack, this.$data)
            setTimeout(e => {
              var headIni = '/localeses/' + idLocIn
              var headFin = '/localeses/' + idLocFn
              var headProd = '/productoes/' + idProd
              var headDevi = '/devices/' + idDevi
              var headBoxc = '/furgons/' + idBoxc
              var headAlert = '/rutas/' + this.dataRespond[0]
              console.log(this.dataRespond[0])
              setTimeout(e => {
                api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/localInicio', headIni)
                setTimeout(e => {
                  api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/localFin', headFin)
                  setTimeout(e => {
                    api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/producto', headProd)
                    setTimeout(e => {
                      api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/device', headDevi)
                      setTimeout(e => {
                        api.postWithHeader(this.apiBackAlerts + '/' + idAlert + '/ruta', headAlert)
                      }, 100)
                      setTimeout(e => {
                        api.postWithHeader(this.apiBack + '/' + this.dataRespond[0] + '/furgon', headBoxc)
                        setTimeout(e => {
                          this.$router.push(this.page)
                        }, 150)
                      }, 120)
                    }, 120)
                  }, 120)
                }, 120)
              }, 120)
            }, 1000)
          }, 1000)
        }
      }
    },
    data() {
      return {
        apiBack: '/rutas',
        apiBackPath: '/getAllRutas',
        apiBackBoxcar: '/furgons',
        apiBackDevice: '/devices',
        apiBackProduct: '/productoes',
        apiBackLocals: '/localeses',
        apiBackAlerts: '/alertas',
        page: '/path',
        selectedBoxcar: '',
        selectedDevice: '',
        selectedProduct: '',
        selectedStartLocal: '',
        selectedEndLocal: '',
        getPath: [],
        box: [],
        devi: [],
        prod: [],
        localStart: [],
        localEnd: [],
        dataRespond: [],
        dataPostDel: { // este es basicamente un JSON
          start_date: '',
          end_date: '',
          status: 'Registrada',
          typeAlert: 'ruta_registrada',
          mensaje: 'Se ha registrado la ruta',
          dtm: ''
        },
        boxcars: {
          dataGet: [
            {
              furgons: [{
                id: '',
                name: '',
                numFrgon: 0
              }]
            }],
          error: ''
        },
        devices: {
          dataGet: [
            {
              devices: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        products: {
          dataGet: [
            {
              productoes: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        locals: {
          dataGet: [
            {
              localeses: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        startDate: '',
        start_hour: '',
        endDate: '',
        end_hour: ''
      }
    },
    mounted() {
      api.getAll(this.apiBackPath, this.getPath)
      api.getAll(this.apiBackBoxcar, this.boxcars)
      api.getAll(this.apiBackDevice, this.devices)
      api.getAll(this.apiBackProduct, this.products)
      api.getAll(this.apiBackLocals, this.locals)
    }
  }
</script>
