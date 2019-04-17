<template>
  <section class="content">
    <div class="span12">
      <div class="box">
        <!--Box content-->
        <div class="box-content">
          <div class="btn-toolbar pull-right clearfix">
            <div class='btn-group'>
              <a class='btn btn-circle show-tooltip export-to-file' name='bodega.xls' title='Exportar a Excel' v-on:click='exportExcel' data-table='table-terminals'>
                <i class='fa fa-file-excel-o'></i>
              </a>
              <a class='btn btn-circle show-tooltip export-to-file' title='Exportar a PDF' v-on:click='exportPDF' data-table='table-terminals'>
                <i class='fa fa-file-pdf-o'></i>
              </a>
              <router-link class='pageLink' to='/createLocal'>
                <a class='btn btn-circle show-tooltip' title='Añadir local' href='/createLocal'>
                  <i class='fa fa-plus'></i>
                </a>
              </router-link>
              <router-link class='pageLink' to='/locals'>
                <a class='btn btn-circle show-tooltip' title='Actualizar' v-on:click='refresh' id='refresh-administrators'>
                  <i class='fa fa-repeat'></i>
                </a>
              </router-link>
            </div>
          </div><br /><br />
        </div>
        <!-- END Box Content -->

        <div class="row center-block">
          <div class="col-md-12">
            <!--Box-body-->
            <div class="box-body">
              <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
                <div class="row">
                  <div class="col-sm-6">
                    <div id="example1_length" class="dataTables_length">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 table-responsive">
                    <table aria-describedby="example1_info" role="grid" id="table_locals" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="No.Loc: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">ID</th>
                          <th aria-label="No.Loc: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">No. Loc</th>
                          <th aria-label="Name: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Nombre</th>
                          <th aria-label="Zone: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Zona</th>
                          <th aria-label="Province: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Provincia</th>
                          <th aria-label="City: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Ciudad</th>
                          <th aria-label="Family : activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Familia</th>
                          <th aria-label="Length: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Longitud</th>
                          <th aria-label="Latitude: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Latitud</th>
                          <th class="ToButtons"></th>
                        </tr>
                      </thead>
                      <tbody v-if="full" >
                        <tr class="even" role="row" v-for="dato,index in dataGet">
                          <td class="TextFieldC">{{dato.idLocal}}</td>
                          <td class="TextFieldC">{{dato.numLoc}}</td>
                          <td class="TextFieldC">{{dato.nameLocal}}</td>
                          <td class="TextFieldC">{{dato.nameZona}}</td>
                          <td class="TextFieldC">{{dato.nameProvincia}}</td>
                          <td class="TextFieldC">{{dato.nameCiudad}}</td>
                          <td class="TextFieldC">{{dato.family}}</td>
                          <td class="TextFieldC">{{dato.length}}</td>
                          <td class="TextFieldC">{{dato.latitude}}</td>

                          <td class="JustifyButtonTD" style="width: 150px;"><label>{{dato.idLocal}}-{{index}}</label>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" data-target="#modalConfig" role="button" title="Añadir MACs">
                              <i class="fa fa-plus"></i>
                            </a>
                            <!-- Modal Edit / Ventana / Overlay en HTML  -->
                            <div v-bind:id="index+'s'" class="modal fade" id="modalConfig">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <!--modal header-->
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">Añadir MACs{{dato.idLocal}}{{index}}</h4>
                                  </div>
                                  <!--end modal-header-->
                                  <!--Modal-body-->
                                  <div class="modal-body">
                                    <form action="/create" method="POST" class="form-horizontal" id="bodega-form">
                                      <div id="Locales" class="textAreaMac">
                                        <textarea rows="10" cols="65%" v-model="text"></textarea>
                                        <br>
                                        <text-reader @load="text = $event"></text-reader>
                                      </div>
                                    </form>
                                  </div>
                                  <!--end modal-body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/locals">
                                      <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                      <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="sendMACs(dato.idLocal)">Guardar</button>
                                    </router-link>
                                  </div>
                                  <!--end modal-footer Config-->
                                </div>
                              </div>
                            </div>
                            <!--end modal Config-->
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Delete" message="Are you sure to delete the selected device?" v-on:click='deleteOne(index)'>
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Edit" data-target="#modalEdit" >
                              <i class="fa fa-pencil"></i>
                            </a>
                            <!-- Modal / Ventana / Overlay en HTML  -->
                            <div v-bind:id="index+'s'" class="modal fade" id="modalEdit">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <!--modal header-->
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">Editar{{dato.idLocal}}</h4>
                                  </div>
                                  <!--End Modal-Header-->
                                  <!--Modal-Body-->
                                  <div class="modal-body">
                                    <form action="/create" method="POST" class="form-horizontal" id="bodega-form">
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">No.Loc</label>
                                        <div class="col-sm-9 controls">
                                          <input type="number" class="form-control-modal" v-bind:placeholder="dato.numLoc" v-model="dataPostDel.numLoc" name="name" id="noLoc" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Nombre</label>
                                        <div class="col-sm-9 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.name" v-model="dataPostDel.name" name="name" id="name" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Familia</label>
                                        <div class="col-sm-9 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.family" v-model="dataPostDel.family" name="name" id="family" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-3 control-label">Zona</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <select v-model="selectedZone" v-on:click="loadProvinces" class="FormatSelect">
                                            <option disabled value="">Por favor seleccionar uno</option>
                                            <option v-for="datoB in zones.dataGet[0].zonas">{{datoB.name}}</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-3 control-label">Provincia</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <select v-model="selectedProvince" v-on:click="loadCities" class="FormatSelect">
                                            <option disabled value="">Por favor seleccionar uno</option>
                                            <option v-for="datoP in provinces.dataGet[0].provincias">{{datoP.name}}</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-3 control-label">Ciudad</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <select v-model="selectedCity" class="FormatSelect">
                                            <option disabled value="">Por favor seleccionar uno</option>
                                            <option v-for="datoC in cities.dataGet[0].ciudads">{{datoC.name}}</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Longitud</label>
                                        <div class="col-sm-9 controls">
                                          <input type="number" class="form-control-modal" v-bind:placeholder="dato.numLoc" v-model="dataPostDel.length" name="name" id="noLoc" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Latitud</label>
                                        <div class="col-sm-9 controls">
                                          <input type="number" class="form-control-modal" v-bind:placeholder="dato.numLoc" v-model="dataPostDel.latitude" name="name" id="noLoc" maxlength="50" value="">
                                        </div>
                                      </div>

                                    </form>
                                  </div>
                                  <!--End Modal-Body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/locals">
                                      <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                      <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="save(dato.idLocal)">Guardar</button>
                                    </router-link>
                                  </div>
                                  <!--End Modal-Footer-->
                                </div>
                              </div>
                            </div>
                            <!--End Modal-->
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
  import GoogleMap from './../../Geocalization/GoogleMap.vue'
  import { setTimeout } from 'timers'
  import TextReader from './TextReader'
  export default {
    components: {
      GoogleMap,
      TextReader
    },
    data() {
      return {
        inicialDelay: 3000,
        apiBack: '/localeses',
        apiBackGetLocals: '/getLocales',
        apiBackZone: '/zonas',
        apiBackCity: '/ciudads',
        apiBackProvince: '/provincias',
        selectedZone: '',
        selectedProvince: '',
        selectedCity: '',
        dataRespond: [],
        dataGet: [],
        full: false,
        text: '',
        ciu: [],
        prov: [],
        zon: [],
        zones: {
          dataGet: [
            {
              zone: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        provinces: {
          dataGet: [
            {
              provinces: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        cities: {
          dataGet: [
            {
              cities: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        locals: {
          error: '',
          dataGet: [
            {
              localeses: [{
                numLoc: 0,
                name: '',
                family: '',
                length: 0,
                latitude: 0
              }]
            }]
        },
        nameToExport: 'Locales',
        dataPostDel: { // este es basicamente un JSON
          numLoc: 0,
          name: '',
          family: '',
          length: 0,
          latitude: 0,
          cadena: ''
        }
      }
    },
    name: 'Locales',
    beforeMount() {
      api.getAll(this.apiBack, this.locals)
      api.getAll(this.apiBackZone, this.zones)
      api.getAll(this.apiBackGetLocals, this.$data)
    },
    mounted() {
      setTimeout(e => {
        api.getAll(this.apiBackGetLocals, this.$data)
        console.log(this.dataGet)
        if (this.dataGet.length !== 0) { this.full = true }
        this.$nextTick(() => {
          $('#table_locals').DataTable()
        })
      }, this.inicialDelay)
    },
    methods: {
      refresh() {
        location.reload()
      },
      sendMACs(id) {
        this.dataPostDel.cadena = this.text + ''
        //  console.log(this.dataPostDel.cadena.split('\n')[2])
        api.post('/saveMacLocales?localid=' + id, this.$data)
        console.log(this.text)
      },
      deleteOne(key) {
        this.dataPostDel = this.dataGet[key]
        this.dataGet.splice(key, 1)
        var id = this.dataPostDel.idLocal
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      loadProvinces() {
        var url = api.search(this.zones.dataGet[0].zonas, 'name', this.selectedZone)._links.provincias.href
        api.getGeneral(url, this.provinces)
      },
      loadCities() {
        var url = api.search(this.provinces.dataGet[0].provincias, 'name', this.selectedProvince)._links.ciudades.href
        api.getGeneral(url, this.cities)
      },
      save(id) {
        console.log(id)
        if (this.dataPostDel.name.trim() !== '' && this.dataPostDel.family.trim() !== '') {
          var idCity = api.search(this.cities.dataGet[0].ciudads, 'name', this.selectedCity).id
          this.dataPostDel.name = this.dataPostDel.name.trim()
          this.dataPostDel.family = this.dataPostDel.family.trim()
          api.put(this.apiBack + '/' + id, this.$data)
          var head = '/ciudads/' + idCity
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + id + '/ciudad', head)
            this.$router.push(this.page)
          }, 1100)
        }
      },
      exportExcel() {
        api.exportExcel(this.nameToExport, this.local.dataGet)
      },
      exportPDF() {
        var columns = [
          { title: 'ID', dataKey: 'idLocal' },
          { title: 'No.Local', dataKey: 'numLoc' },
          { title: 'Nombre', dataKey: 'nameLocal' },
          { title: 'Familia', dataKey: 'family' },
          { title: 'Zona', dataKey: 'nameZona' },
          { title: 'Provincia', dataKey: 'nameProvincia' },
          { title: 'Ciudad', dataKey: 'nameCiudad' },
          { title: 'Longitud', dataKey: 'length' },
          { title: 'Latitud', dataKey: 'latitude' }
        ]
        api.exportPDF(this.nameToExport, 'La Favorita', columns, this.local.dataGet)
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
    content: "\f0dc";
  }

  table.dataTable thead .sorting_asc:after {
    content: "\f0dd";
  }

  table.dataTable thead .sorting_desc:after {
    content: "\f0de";
  }
</style>
