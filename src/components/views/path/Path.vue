<template>
  <section class='content'>
    <div class='span12'>
      <div class='box'>
        <!--Box content-->
        <div class='box-content'>
          <div class='btn-toolbar pull-right clearfix'>
            <div class='btn-group'>
              <a class='btn btn-circle show-tooltip export-to-file' name='bodega.xls' title='Exportar a Excel' v-on:click='exportExcel' data-table='table-terminals'>
                <i class='fa fa-file-excel-o'></i>
              </a>
              <a class='btn btn-circle show-tooltip export-to-file' title='Exportar a PDF' v-on:click='exportPDF' data-table='table-terminals'>
                <i class='fa fa-file-pdf-o'></i>
              </a>
              <router-link class='pageLink' to='/createPath'>
                <a class='btn btn-circle show-tooltip' title='Añadir ruta' href='/createPath'>
                  <i class='fa fa-plus'></i>
                </a>
              </router-link>             
              <router-link class='pageLink' to='/path'>
                <a class='btn btn-circle show-tooltip' title='Actualizar' v-on:click='refresh' id='refresh-administrators' >
                  <i class='fa fa-repeat'></i>
                </a>
              </router-link>
            </div>
          </div>
          <br />
          <br />
        </div>
        <!-- END Box Content -->

        <div class='row center-block'>
          <div class='col-md-12'>
            <!--Box-body-->
            <div class='box-body'>
              <div class='dataTables_wrapper form-inline dt-bootstrap' id='example1_wrapper'>
                <div class='row'>
                  <div class='col-sm-6'>
                    <div id='example1_length' class='dataTables_length'>
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-sm-12 table-responsive'>
                      <table aria-describedby='Table_of_elements' role='grid' id='table_path' class='table table-bordered table-striped dataTable'>
                        <thead>
                          <tr role='row'>
                            <th aria-label='ID: activate to sort column descending' aria-sort='ascending' style='width: 15px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting_asc TextCenterTH'>ID</th>
                            <th aria-label='Boxcar: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Furgón</th>
                            <th aria-label='StarDate: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Fecha inicio </th>
                            <th aria-label='EndDate: activate to sort column ascending'colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Hora inicio</th>
                            <th aria-label='StarDate: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Fecha fin </th>
                            <th aria-label='EndDate: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Hora fin</th>
                            <th aria-label='TemperaturaMaxIdeal: activate to sort column ascending'  colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Temperatura máxima ideal</th>
                            <th aria-label='TemperaturaMinIdeal: activate to sort column ascending'  colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Temperatura mínima ideal </th>
                            <th aria-label='TemperaturaMaxAp: activate to sort column ascending'  colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Temperatura máxima aceptable</th>
                            <th aria-label='TemperaturaMinAp: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Temperatura mínima aceptable </th>
                            <th aria-label='Device: activate to sort column ascending'  colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Dispositivo</th>
                            <th class="JustifyButtonTD"></th>
                          </tr>
                        </thead>
                        <tbody id='fields'>
                          <tr class='even' role='row' v-for='dato,index in dataGet '>
                            <td class='sorting_1 TextFieldC'>{{dato.id}}</td>
                            <td class="TextFieldC">{{dato.furgon.numFurgon}}</td>
                            <td class="TextFieldC">{{dato.start_date}}</td>
                            <td class="TextFieldC">{{dato.start_hour}}</td>
                            <td class="TextFieldC">{{dato.end_date}}</td>
                            <td class="TextFieldC">{{dato.end_hour}}</td>
                            <td class="TextFieldC">{{dato.temp_max_ideal}}</td>
                            <td class="TextFieldC">{{dato.temp_min_ideal}}</td>
                            <td class="TextFieldC">{{dato.temp_max_ap}}</td>
                            <td class="TextFieldC">{{dato.temp_min_ap}}</td>
                            <td class="TextFieldC">{{dato.device_id}}</td>
                            <td class='JustifyButtonTD'>
                              <a class='btn btn-circle btn-danger show-tooltip confirm hidden-xs' title='Eliminar' message='Are you sure to delete this device?' v-on:click='deleteOne(index)'>
                                <i class='fa fa-trash-o'></i>
                              </a>
                              <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Editar">
                                <i class="fa fa-pencil"></i>
                              </a>
                              <!-- Modal / Ventana / Overlay en HTML  -->
                              <div v-bind:id="index+'s'" class="modal fade">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <!--modal header-->
                                    <div class="modal-header">
                                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                      <h4 class="modal-title">Editar</h4>
                                    </div>
                                    <!--end modal-header-->
                                    <!--Modal-body-->
                                    <div class="modal-body col-md-25">
                                      <form action="/create" method="POST" class="form-horizontal" id="bodega-form">
                                        <div class="form-group ">
                                          <label class=" col-sm-6 control-label">Número de Furgón</label>
                                          <div class="col-sm-6 controls">
                                            <select v-model="selectedFurgon" v-on:click="loadDevices" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoL in furgones.dataGet ">{{ datoL.numFurgon }}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Familia del dispositivo</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedFamily" v-on:click="loadDevices" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoF in families.dataGet">{{ datoF.family }}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Dispositivo</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedDevice" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoD in devices.listDevices ">{{ datoD }}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Seleccione la fecha de inicio</label>
                                          <div class="col-sm-3 controls">
                                            <input type="date" class="FormatDate" v-model="dataPostDel.start_date" name="fechaInicio">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Seleccione la Hora de inicio</label>
                                          <div class="col-sm-10 controls">
                                            <input type="time" class="FormatHour" v-model="dataPostDel.start_hour" name="hora_inicio">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Seleccione la fecha Fin</label>
                                          <div class="col-sm-9 controls">
                                            <input type="date" class="FormatDate" v-model="dataPostDel.end_date" name="end_date">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Seleccione la Hora de fin</label>
                                          <div class="col-sm-10 controls">
                                            <input type="time" class="FormatHour" v-model="dataPostDel.end_hour" name="end_hour">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Ingrese temperatura máxima ideal</label>
                                          <div class="col-sm-9  controls">
                                            <input type="number" class="form-control-modal" v-model="dataPostDel.temp_max_ideal" v-bind:placeholder="dato.temp_max_ideal"name="temp_max_ideal" maxlength="50" value="">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Ingrese temperatura mínima ideal</label>
                                          <div class="col-sm-9  controls">
                                            <input type="number" class="form-control-modal" v-model="dataPostDel.temp_min_ideal" v-bind:placeholder="dato.temp_min_ideal" name="temp_min_ideal" maxlength="50" value="">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Ingrese temperatura máxima aceptable</label>
                                          <div class="col-sm-9 controls">
                                            <input type="number" class="form-control-modal" v-model="dataPostDel.temp_max_ap" v-bind:placeholder="dato.temp_max_ap" name="temp_max_ap" maxlength="50" value="">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Ingrese temperatura mínima aceptable</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <input type="number" class="form-control-modal" v-model="dataPostDel.temp_min_ap" v-bind:placeholder="dato.temp_min_ap" name="temp_min_ap" maxlength="50" value="">
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <!--end modal-body-->
                                    <!--Modal-footer-->
                                    <div class="modal-footer">
                                      <router-link class="pageLink" to="/path">
                                        <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                        <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="save(index)">Guardar</button>
                                      </router-link>
                                    </div>
                                    <!--end modal-footer-->
                                  </div>
                                </div>
                              </div>
                              <!--end modal-->
                            </td>
                          </tr>
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!--End Box-body -->
          </div>
          <!--End Box-->
        </div>
      </div>
    </div>
    <!--</div>-->
    <!--End content-->
  </section>
</template>
<script>
  import $ from 'jquery'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  import api from '@/api/goApi.js'

  export default {
    data() {
      return {
        inicialDelay: 3000,
        apiBack: '/api/ruta',
        apiBackFurgon: '/api/furgon',
        apiFamilies: 'http://104.209.223.100/chaintrack/auth/api/tracking/getAllFamilies',
        apiDevices: 'http://104.209.223.100/chaintrack/auth/api/tracking/groupby?family=',
        apiNameDevice: 'http://104.209.223.100/chaintrack/auth/api/tracking/getAllDevice?family=',
        selectedFurgon: '',
        selectedFamily: '',
        selectedDevice: '',
        nameToExport: 'Rutas',
        error: '', // aqui se guardara el ultimo status de error
        dataGet: [], // debe dejarse como arreglo vacio, ahora unicamente como prueba
        furgones: {
          error: '',
          dataGet: []
        },
        deviceNameid: {
          IdDevice: 0,
          Family: '',
          Name: ''
        },
        devices: {
          error: '',
          dataGet: [],
          listDevices: []
        },
        families: {
          erro: '',
          dataGet: []
        },
        dataPostDel: { // este es basicamente un JSON
          start_date: '',
          start_hour: '',
          end_date: '',
          end_hour: '',
          temp_max_ideal: 0,
          temp_min_ideal: 0,
          temp_max_ap: 0,
          temp_min_ap: 0,
          device_id: 0
        }
      }
    },
    name: 'Ruta',
    mounted() {
      setTimeout(e => {
        this.$nextTick(() => {
          $('#table_path').DataTable()
        })
      }, this.inicialDelay)
      this.get()
      api.getAll(this.apiBackFurgon, this.furgones)
      api.getGeneral(this.apiFamilies, this.families)
    },
    methods: {
      searchIdDevice() {
        return api.search(this.devices.dataGet, 'Name', String(this.selectedDevice)).IdDevice
      },
      refresh() {
        location.reload()
      },
      get() {
        api.getAll(this.apiBack, this.$data)
      },
      post() {
        api.post(this.apiBack, this.$data)
      },
      delete(id) {
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      deleteOne(key) {
        this.dataPostDel = this.dataGet[key]
        this.dataGet.splice(key, 1)
        var id = this.dataPostDel.id
        this.delete(id)
      },
      resto() {
        var newDevices = []
        this.devices.listDevices = []
        this.devices.dataGet.forEach(element => {
          newDevices.push(element.Name)
        })
        this.devices.listDevices = newDevices
      },
      loadDevices() {
        api.getGeneral(this.apiNameDevice + this.selectedFamily, this.devices)
        setTimeout(this.resto, 500)
      },
      save(index) {
        var id = this.dataGet[index].id
        this.dataPostDel.device_id = this.searchIdDevice()
        this.dataPostDel.n
        api.put(this.apiBack + '/' + id, this.$data)
        this.get()
      },
      exportExcel() {
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        rep.forEach(element => {
          element.furgon = element.furgon.numFurgon
        })
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        rep.forEach(element => {
          element.furgon = element.furgon.numFurgon
        })
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Número del furgón', dataKey: 'furgon' },
          { title: 'Fecha inicio', dataKey: 'start_date' },
          { title: 'Hora inicio', dataKey: 'start_hour' },
          { title: 'Fecha fin', dataKey: 'end_date' },
          { title: 'Hora fin', dataKey: 'end_hour' },
          { title: 'Dispositivo', dataKey: 'device_id' },
          { title: 'Temperatura máxima ideal', dataKey: 'temp_max_ideal' },
          { title: 'Temperatura mínima ideal', dataKey: 'temp_min_ideal' },
          { title: 'Temperatura máxima aceptable', dataKey: 'temp_max_ap' },
          { title: 'Temperatura mínima aceptable', dataKey: 'temp_min_ap' }
        ]
        api.exportPDF(this.nameToExport, 'La Favorita', columns, rep)
      }
    }
  }
</script>
<style>

    /* Using the bootstrap style, but overriding the font to not draw in
     the Glyphicons Halflings font as an additional requirement for sorting icons.

     An alternative to the solution active below is to use the jquery style
     which uses images, but the color on the images does not match adminlte.

  @import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
  */

    @import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

    table.dataTable thead .sorting:after,
    table.dataTable thead .sorting_asc:after,
    table.dataTable thead .sorting_desc:after {
      font-family: 'FontAwesome';
    }

    table.dataTable thead .sorting:after {
      content: '\f0dc';
    }

    table.dataTable thead .sorting_asc:after {
      content: '\f0dd';
    }

    table.dataTable thead .sorting_desc:after {
      content: '\f0de';
    }
</style>
