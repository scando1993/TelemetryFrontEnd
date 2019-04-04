<template>
  <section class='content'>
    <div class='span12'>
      <div class='box'>
        <!--Box content-->
        <div class='box-content'>
          <div class='btn-toolbar pull-right clearfix'>
            <div class='btn-group'>
              <a class='btn btn-circle show-tooltip export-to-file' name='path.xls' title='Exportar a Excel' v-on:click='exportExcel' data-table='table-terminals'>
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
                            <th aria-label='Boxcar: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Furgón</th>
                            <th aria-label='Device: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Dispositivo</th>
                            <th aria-label='Product: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Producto</th>
                            <th aria-label='StartDate: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Fecha inicio </th>
                            <th aria-label='StarHour: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Hora inicio </th>
                            <th aria-label='EndDate: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Fecha fin </th>
                            <th aria-label='EndHour: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Hora fin </th>
                            <th aria-label='StartLocal: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Local Inicio </th>
                            <th aria-label='EndLocal: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Local de LLegada</th>
                            <th class="JustifyButtonTD"></th>
                          </tr>
                        </thead>
                        <tbody id='fields'>
                          <tr class='even' role='row' v-for='dato,index in paths.dataGet[0].rutas '>
                            <td class="TextFieldC">{{dato.id}}</td>
                            <td class="TextFieldC">{{dato.id}}</td>
                            <td class="TextFieldC">{{dato.id}}</td>
                            <td class="TextFieldC">{{dato.start_date.split('T')[0]}}</td>
                            <td class="TextFieldC">{{dato.start_date.split('T')[1]}}</td>
                            <td class="TextFieldC">{{dato.end_date.split('T')[0]}}</td>
                            <td class="TextFieldC">{{dato.end_date.split('T')[1]}}</td>
                            <td class="TextFieldC">{{dato.id}}</td>
                            <td class="TextFieldC">{{dato.id}}</td>
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
                                      <form action="/create" method="POST" class="form-horizontal" id="path-form">
                                        <div class="form-group ">
                                          <label class=" col-sm-6 control-label">Furgón</label>
                                          <div class="col-sm-6 controls">
                                            <select v-model="selectedBoxcar" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoF in boxcars.dataGet[0].furgons ">{{ datoF.name}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Dispositivo</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedDevice" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoD in devices.dataGet[0].devices">{{ datoD.name }}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group ">
                                          <label class=" col-sm-6 control-label">Producto</label>
                                          <div class="col-sm-6 controls">
                                            <select v-model="selectedProduct" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoP in products.dataGet[0].productoes ">{{ datoP.name}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Seleccione la fecha y hora de inicio</label>
                                          <div class="col-sm-3 controls">
                                            <input type="date" class="FormatDate" v-model="$data.startDate" name="startDate">
                                            <input type="time" class="FormatHour" v-model="$data.start_hour" name="startHour">
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-12 control-label">Seleccione la fecha y hora Fin</label>
                                          <div class="col-sm-9 controls">
                                            <input type="date" class="FormatDate" v-model="$data.endDate" name="endDate">
                                            <input type="time" class="FormatHour" v-model="$data.end_hour" name="endHour">
                                          </div>
                                        </div>
                                        <div class="form-group ">
                                          <label class=" col-sm-6 control-label">Local Inicio</label>
                                          <div class="col-sm-6 controls">
                                            <select v-model="selectedStartLocal" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoL in locals.dataGet[0].localeses ">{{ datoL.name}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group ">
                                          <label class=" col-sm-6 control-label">Local Fin</label>
                                          <div class="col-sm-6 controls">
                                            <select v-model="selectedEndLocal" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoL in locals.dataGet[0].localeses ">{{ datoL.name}}</option>
                                            </select>
                                          </div>
                                        </div>

                                      </form>
                                    </div>
                                    <!--end modal-body-->
                                    <!--Modal-footer-->
                                    <div class="modal-footer">
                                      <router-link class="pageLink" to="/path">
                                        <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                        <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="save(dato.id)">Guardar</button>
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
        apiBack: '/rutas',
        apiBackBoxcar: '/furgons',
        apiBackDevice: '/devices',
        apiBackProduct: '/productoes',
        apiBackLocals: '/localeses',
        selectedBoxcar: '',
        selectedDevice: '',
        selectedProduct: '',
        selectedStartLocal: '',
        selectedEndLocal: '',
        dataRespond: [],
        box: [],
        devi: [],
        prod: [],
        local: [],
        nameToExport: 'Rutas',
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
        paths: {
          dataGet: [
            {
              rutas: [{
                start_date: '',
                end_date: ''
              }]
            }],
          error: ''
        },
        startDate: '',
        start_hour: '',
        endDate: '',
        end_hour: '',
        dataPostDel: { // este es basicamente un JSON
          start_date: '',
          end_date: ''
        }
      }
    },
    name: 'Rutas',
    mounted() {
      setTimeout(e => {
        //  this.loadData()
      }, 1000)
      setTimeout(e => {
        $('#table_path').DataTable()
      }, this.inicialDelay)
      api.getAll(this.apiBack, this.paths)
      api.getAll(this.apiBackBoxcar, this.boxcars)
      api.getAll(this.apiBackDevice, this.devices)
      api.getAll(this.apiBackProduct, this.products)
      api.getAll(this.apiBackLocals, this.locals)
    },
    methods: {
      refresh() {
        location.reload()
      },
      /*  async loadData() {
        var boxcar = []
        var product = []
        var device = []
        var loc = []
        this.paths.dataGet[0].rutas.forEach(function (k, index) {
          var urlBoxcar = k._links.furgon.href
          var varBoxcar = {}
          api.getGeneral(urlBoxcar, varBoxcar)
          setTimeout(e => {
            ciud.push(city.dataGet[1])
            var provinc = {}
            provinc = api.getGeneral(city.dataGet[2].provincia.href, provinc)
            setTimeout(e => {
              var zone = {}
              pro.push(provinc.dataGet[1])
              zone = api.getGeneral(provinc.dataGet[2].zona.href, zone)
              setTimeout(e => {
                zona.push(zone.dataGet[1])
              }, 300)
            }, 300)
          }, 320)
        })
        this.box = boxcar
        this.prod = product
        this.devi = device
        this.local = loc
      },  */
      deleteOne(key) {
        var elementDeleted = this.paths.dataGet[0].rutas.splice(key, 1)
        var id = elementDeleted[0].id
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      save(id) {
        if (this.dataPostDel.start_date !== this.dataPostDel.end_date) {
          this.dataPostDel.start_date = new Date(this.startDate + 'T' + this.start_hour)
          this.dataPostDel.end_date = new Date(this.endDate + 'T' + this.end_hour)
          var idLocIn = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedStartLocal).id
          var idLocFn = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedEndLocal).id
          var idProd = api.search(this.products.dataGet[0].productoes, 'name', this.selectedProduct).id
          var idDevi = api.search(this.devices.dataGet[0].devices, 'name', this.selectedDevice).id
          var idBoxc = api.search(this.boxcars.dataGet[0].furgons, 'name', this.selectedBoxcar).id
          api.put(this.apiBack + '/' + id, this.$data)
          var headIni = '/localeses/' + idLocIn
          var headFin = '/localeses/' + idLocFn
          var headProd = '/productoes/' + idProd
          var headDevi = '/devices/' + idDevi
          var headBoxc = '/furgons/' + idBoxc
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + id + '/localInicio', headIni)
            api.postWithHeader(this.apiBack + '/' + id + '/localFin', headFin)
            api.postWithHeader(this.apiBack + '/' + id + '/producto', headProd)
            api.postWithHeader(this.apiBack + '/' + id + '/device', headDevi)
            api.postWithHeader(this.apiBack + '/' + id + '/furgon', headBoxc)
            this.$router.push(this.page)
          }, 1100)
        }
        this.get()
      },
      exportExcel() {
        api.exportExcel(this.nameToExport, this.dataGet)
      },
      exportPDF() {
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Número del furgón', dataKey: 'nameFurgon' },
          { title: 'Dispositivo', dataKey: 'nameDevice' },
          { title: 'Producto', dataKey: 'nameProduct' },
          { title: 'Fecha inicio', dataKey: 'startDate' },
          { title: 'Fecha fin', dataKey: 'endDate' },
          { title: 'Local Inicio', dataKey: 'nameStartLocal' },
          { title: 'Local Fin', dataKey: 'nameEndLocal' }
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
