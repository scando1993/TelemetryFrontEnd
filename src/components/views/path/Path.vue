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
                            <th aria-label='ID: activate to sort column descending' aria-sort='ascending' style='width: 167px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting_asc'>ID</th>
                            <th aria-label='Boxcar: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Furgón</th>
                            <th aria-label='StarDate: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Fecha inicio </th>
                            <th aria-label='EndDate: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Hora inicio</th>
                            <th aria-label='StarDate: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Fecha fin </th>
                            <th aria-label='EndDate: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Hora fin</th>
                            <th aria-label='TemperaturaMaxIdeal: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Temperatura máxima ideal</th>
                            <th aria-label='TemperaturaMinIdeal: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Temperatura mínima ideal </th>
                            <th aria-label='TemperaturaMaxAp: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Temperatura máxima aceptable</th>
                            <th aria-label='TemperaturaMinAp: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Temperatura mínima aceptable </th>
                            <th aria-label='Device: activate to sort column ascending' style='width: 207px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting'>Dispositivo</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody id='fields'>
                          <tr class='even' role='row' v-for='dato,index in dataGet '>
                            <td class='sorting_1'>{{dato.id}}</td>
                            <td>{{dato.furgon.numFurgon}}</td>
                            <td>{{dato.start_date}}</td>
                            <td>{{dato.start_hour}}</td>
                            <td>{{dato.end_date}}</td>
                            <td>{{dato.end_hour}}</td>
                            <td>{{dato.temp_max_ideal}}</td>
                            <td>{{dato.temp_min_ideal}}</td>
                            <td>{{dato.temp_max_ap}}</td>
                            <td>{{dato.temp_min_ap}}</td>
                            <td>{{dato.device_id}}</td>
                            <td class='col-lg-2 col-md-1 col-sm-1 col-xs-1'>
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
                                          <label class="col-xs-12 col-sm-6 control-label">No.Furgón</label>
                                          <div class="col-xs-12 col-sm-6 col-lg-8 controls">
                                            <select v-model="selectedFurgon" v-on:click="loadDevices">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoL in furgones.dataGet ">{{ datoL.numFurgon }}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-12 col-sm-12 col-lg-10 control-label form-inline">Familia del dispositivo</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedFamily" v-on:click="loadDevices">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoF in families.dataGet">{{ datoF.family }}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-12 col-sm-5 form-inline control-label">Dispositivo</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedDevice">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoD in devices.listDevices ">{{ datoD }}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-15 col-sm-15 col-lg-15 form-inline control-label">Seleccione la fecha de inicio</label>
                                          <div class="col-sm-9 controls">
                                            <input type="date" v-model="dataPostDel.start_date" name="fechaInicio">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-15 col-sm-25 col-lg-25 form-horizontal control-label">Seleccione la Hora de inicio</label>
                                          <div class="col-sm-10 controls">
                                            <input type="time" v-model="dataPostDel.start_hour" name="hora_inicio">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-15 col-sm-13 col-lg-15 form-horizontal control-label">Seleccione la fecha Fin</label>
                                          <div class="col-sm-9 controls">
                                            <input type="date" v-model="dataPostDel.end_date" name="end_date">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-15 col-sm-15 col-lg-15 form-inline control-label">Seleccione la Hora de fin</label>
                                          <div class="col-sm-10 controls">
                                            <input type="time" v-model="dataPostDel.end_hour" name="end_hour">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class=" col-sm-15 col-lg-15 form-inline control-label">Ingrese temperatura máxima ideal</label>
                                          <div class="col-sm-9  controls">
                                            <input type="number" class="form-control" v-model="dataPostDel.temp_max_ideal" v-bind:placeholder="dato.temp_max_ideal"name="temp_max_ideal" maxlength="50" value="">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-15 col-sm-15 col-lg-15 form-inline control-label">Ingrese temperatura mínima ideal</label>
                                          <div class="col-sm-9  controls">
                                            <input type="number" class="form-control" v-model="dataPostDel.temp_min_ideal" v-bind:placeholder="dato.temp_min_ideal" name="temp_min_ideal" maxlength="50" value="">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-15 col-sm-15 col-lg-15 form-inline  control-label">Ingrese temperatura máxima aceptable</label>
                                          <div class="col-sm-9 controls">
                                            <input type="number" class="form-control" v-model="dataPostDel.temp_max_ap" v-bind:placeholder="dato.temp_max_ap" name="temp_max_ap" maxlength="50" value="">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-xs-15 col-sm-15 col-lg-15 form-inline control-label">Ingrese temperatura mínima aceptable</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <input type="number" class="form-control" v-model="dataPostDel.temp_min_ap" v-bind:placeholder="dato.temp_min_ap" name="temp_min_ap" maxlength="50" value="">
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
                    <tfoot>
                      <tr>
                        <th colspan='1' rowspan='1'>ID</th>
                        <th colspan='1' rowspan='1'>Furgón</th>
                        <th colspan='1' rowspan='1'>Fecha Inicio</th>
                        <th colspan='1' rowspan='1'>Hora Inicio</th>
                        <th colspan='1' rowspan='1'>Fecha Fin</th>
                        <th colspan='1' rowspan='1'>Hora Fin</th>
                        <th colspan='1' rowspan='1'>Temperatura máxima ideal</th>
                        <th colspan='1' rowspan='1'>Temperatura mínima ideal</th>
                        <th colspan='1' rowspan='1'>Temperatura máxima aceptable</th>
                        <th colspan='1' rowspan='1'>Temperatura mínima aceptable</th>
                        <th colspan='1' rowspan='1'>Dispositivo</th>
                        <th></th>
                      </tr>
                    </tfoot>
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
  import jSon from './data.json'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  import api from '@/api/goApi.js'

  export default {
    data() {
      return {
        myJson: jSon,
        inicialDelay: 3000,
        apiBack: '/api/ruta',
        apiBackFurgon: '/api/furgon',
        apiFamilies: 'http://104.209.223.100/chaintrack/auth/api/tracking/getAllFamilies',
        apiDevices: 'http://104.209.223.100/chaintrack/auth/api/tracking/groupby?family=',
        apiNameDevice: 'http://104.209.223.100/chaintrack/auth/api/tracking/getDeviceInfo?deviceId=',
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
      nameOfDevice(idDevice) {
        var response = api.getGeneralDev(this.apiNameDevice + String(idDevice)).then((res) => { console.log(res) })
        console.log('.............named')
        console.log(response)
        console.log('.............d')
        return response
      },
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
        // se actualiza la info a eliminar
        this.dataPostDel = this.dataGet[key]
        console.log('--------------------------data a eliminar')
        console.log(this.dataPostDel)
        // se elimina localmente
        this.dataGet.splice(key, 1)
        // se actualiza la base de datos
        var id = this.dataPostDel.id
        this.delete(id)
      },
      loadDevices() {
        console.log('LA familia es ' + this.selectedFamily)
        api.getGeneral(this.apiDevices + this.selectedFamily, this.devices)
        var newDevices = []
        this.devices.listDevices = []
        this.devices.dataGet.forEach(element => {
          element.Devices.forEach(e => {
            newDevices.push(e.DeviceName)
          })
        })
        console.log('Aqui la lista de dis--------------')
        console.log(newDevices)
        this.devices.listDevices = newDevices
      },
      save(index) {
        var id = this.dataGet[index].id
        var idFurgon = api.search(this.furgones.dataGet, 'numFurgon', Number(this.selectedFurgon)).id
        console.log(idFurgon)
        setTimeout(this.searchIdDevice, 500)
        this.dataPostDel.device_id = this.searchIdDevice()
        //  var idDevice = api.search(this.devices.dataGet[0].Devices, 'DeviceName', this.selectedDevice).id
        api.put(this.apiBack + '/' + id, this.$data)
        this.get()
      },
      exportExcel() {
        api.exportExcel(this.nameToExport, this.dataGet)
      },
      exportPDF() {
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Número del furgón', dataKey: 'numFurgon' },
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
        api.exportPDF(this.nameToExport, 'La Favorita', columns, this.dataGet)
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
