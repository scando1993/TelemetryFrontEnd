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
              <div class="box-body ">
                <div class="box-content table-responsive">
                  <form action="save" method="POST" class="form-horizontal-create" id="profile-form">
                    <div class="form-group ">
                      <label class=" col-sm-6 control-label">Furgón</label>
                      <div class="col-sm-6 controls-create">
                        <select required v-model="selectedBoxcar" class="FormatSelect">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoF in boxcar.dataGet ">{{ datoF.name}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-12 control-label">Dispositivo</label>
                      <div class="col-sm-9 col-lg-10 controls-create">
                        <select required v-model="selectedDevice" class="FormatSelect">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoD in devices.dataGet">{{ datoD.name }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group ">
                      <label class=" col-sm-6 control-label">Producto</label>
                      <div class="col-sm-6 controls-create">
                        <select required v-model="selectedProduct" class="FormatSelect">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoP in products.dataGet ">{{ datoP.name}}</option>
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
                          <option v-for="datoL in locals.dataGet ">{{ datoL.name}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group ">
                      <label class=" col-sm-6 control-label">Local Fin</label>
                      <div class="col-sm-6 controls-create">
                        <select required v-model="selectedEndLocal"  class="FormatSelect">
                          <option disabled value="">Por favor seleccionar uno</option>
                          <option v-for="datoL in locals.dataGet ">{{ datoL.name}}</option>
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
        var idBoxcar = api.search(this.boxcar.dataGet, 'name', this.selectedBoxcar).id
        var idDevice = api.search(this.devices.dataGet, 'name', this.selectedDevice).id
        var idProduct = api.search(this.products.dataGet, 'name', this.selectedProduct).id
        var idStartLocal = api.search(this.locals.dataGet, 'name', this.selectedStartLocal).id
        var idEndLocal = api.search(this.locals.dataGet, 'name', this.selectedEndLocal).id
        this.dataPostDel.start_date = new Date(this.startDate + 'T' + this.start_hour)
        this.dataPostDel.end_date = new Date(this.endDate + 'T' + this.end_hour)
        console.log(this.apiBack + '/' + idBoxcar + '/' + idDevice + '/' + idProduct + '/' + idStartLocal + '/' + idEndLocal)
        api.post(this.apiBack + '/' + idBoxcar + '/' + idDevice + '/' + idProduct + '/' + idStartLocal + '/' + idEndLocal, this.$data)
        this.$router.push(this.page)
      }
    },
    data() {
      return {
        apiBack: '/ruta',
        apiBoxcar: '/furgon',
        apiDevice: '/device',
        apiProduct: '/producto',
        apiLocals: '/locales',
        page: '/path',
        selectedBoxcar: '',
        selectedDevice: '',
        selectedProduct: '',
        selectedStartLocal: '',
        selectedEndLocal: '',
        error: '',
        dataGet: [],
        dataPostDel: { // este es basicamente un JSON
          start_date: '',
          end_date: ''
        },
        boxcar: {
          error: '',
          dataGet: []
        },
        devices: {
          error: '',
          dataGet: []
        },
        startDate: '',
        start_hour: '',
        endDate: '',
        end_hour: '',
        products: {
          error: '',
          dataGet: []
        },
        locals: {
          error: '',
          dataGet: []
        }
      }
    },
    mounted() {
      api.getAll(this.apiBack, this.$data)
      api.getAll(this.apiBoxcar, this.boxcar)
      api.getAll(this.apiDevice, this.devices)
      api.getAll(this.apiProduct, this.products)
      api.getAll(this.apiLocals, this.locals)
    }
  }
</script>
