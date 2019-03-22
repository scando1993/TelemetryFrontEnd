<template>
  <section class='content'>
    <div class='span12'>
      <div class='box'>
        <!--Box content-->
        <div class='box-content'>
          <div class='btn-toolbar pull-right clearfix'>
            <div class='btn-group'>
              <!--<TableMenu/>-->
              <a class='btn btn-circle show-tooltip export-to-file' name='bodega.xls' title='Exportar a Excel' v-on:click='exportExcel' data-table='table-terminals'>
                <i class='fa fa-file-excel-o'></i>
              </a>
              <a class='btn btn-circle show-tooltip export-to-file' title='Exportar a PDF' v-on:click='exportPDF' data-table='table-terminals'>
                <i class='fa fa-file-pdf-o'></i>
              </a>
              <router-link class='pageLink' to='/createStore'>
                <a class='btn btn-circle show-tooltip' title='Añadir bodega' href='/createStore'>
                  <i class='fa fa-plus'></i>
                </a>
              </router-link>             
              <router-link class="pageLink" to="/store">
                <a class="btn btn-circle show-tooltip" title="Actualizar" v-on:click='refresh' id="refresh-administrators" href="/store">
                  <i class="fa fa-repeat"></i>
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
                  <div class='col-sm-12 table-responsive'>
                      <table aria-describedby='Table_of_elements' role='grid' id='table_store' class='table table-bordered table-striped dataTable'>
                        <thead>
                          <tr role='row'>
                            <th aria-label='ID: activate to sort column descending' aria-sort='ascending' style='width: 35px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting_asc TextCenterTH'>ID</th>
                            <th aria-label='Nombre: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Nombre</th>
                            <th aria-label='Zone: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Zona</th>
                            <th aria-label='Province: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Provincia</th>
                            <th aria-label='City: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Ciudad</th>
                            <th class="JustifyButtonTD"></th>
                          </tr>
                        </thead>
                        <tbody id='fields'>
                          <tr class='even' role='row' v-for='dato,index in bodegas.dataGet '>
                            <td class='sorting_1 TextFieldC'>{{dato.id}}</td>
                            <td class="TextFieldC">{{dato.name}}</td>
                            <td class="TextFieldC">{{dato.zoneName}}</td>
                            <td class="TextFieldC">{{dato.provinceName}}</td>
                            <td class="TextFieldC">{{dato.cityName}}</td>
                            <!--Start Buttom-->
                            <td class='JustifyButtonTD'>
                              <a class='btn btn-circle btn-danger show-tooltip confirm hidden-xs' title='Delete' message='Are you sure to delete this device?' v-on:click='deleteOne(index)'>
                                <i class='fa fa-trash-o'></i>
                              </a>
                              <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Edit">
                                <i class="fa fa-pencil"></i>
                              </a>
                              <!-- Modal / Ventana / Overlay en HTML  -->
                              <div v-bind:id="index+'s'" class="modal fade">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <!--modal header-->
                                    <div class="modal-header">
                                      <button type="button" class="close" data-dismiss="modal" @click="editar(index)" aria-hidden="true">&times;</button>
                                      <h4 class="modal-title">Editar</h4>
                                    </div>
                                    <!--end modal-header-->
                                    <!--Modal-body-->
                                    <div class="modal-body">
                                      <form action="/create" method="POST" class="form-horizontal" id="bodega-form">
                                        <div class="form-group">
                                          <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                                          <div class="col-sm-12 col-lg-15 controls">
                                            <input type="text" required class="form-control-modal" name="name" v-bind:placeholder="dato.name" v-model="dataPostDel.name" id="name_store" maxlength="50" value="">
                                            <br />
                                          </div>
                                        </div>
                                        <br />
                                        <div class="form-group">
                                          <label class="col-sm-3 control-label">Zona</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedZone" required="required" v-on:click="loadProvinces" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoB in zone.dataGet">{{datoB.name}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-3 control-label">Provincia</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedProvince" required="required" v-on:click="loadCities" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoP in province.listProvinces">{{datoP.name}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-3 control-label">Ciudad</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedCity" required="required" class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoC in city.listCities">{{datoC.name}}</option>
                                            </select>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <!--end modal-body-->
                                    <!--Modal-footer-->
                                    <div class="modal-footer">
                                      <router-link class="pageLink" to="/store">
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
                            <!--End Buttom-->
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
  import 'datatables.net'
  import 'datatables.net-bs'
  import api from '@/api/goApi.js'
  //  import TableMenu from './../TableMenu'
  export default {
    //  components: { TableMenu },
    data() {
      return {
        inicialDelay: 3000,
        apiBack: '/bodega',
        apiBackZone: '/zona',
        nameToExport: 'Bodega',
        selectedZone: '',
        selectedProvince: '',
        selectedCity: '',
        zone: {
          error: '',
          dataGet: []
        },
        province: {
          error: '',
          dataGet: [],
          listProvinces: []
        },
        city: {
          error: '',
          dataGet: [],
          listCities: []
        },
        bodegas: {
          error: '',
          dataGet: {}
        },
        error: '', // aqui se guardara el ultimo status de error
        dataGet: [], // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          name: ''
        }
      }
    },
    name: 'Store',
    mounted() {
      setTimeout(e => {
        this.$nextTick(() => {
          $('#table_store').DataTable()
        })
      }, this.inicialDelay)
      api.getAll(this.apiBack, this.bodegas)
      api.getAll(this.apiBackZone, this.zone)
    },
    methods: {
      refresh() {
        location.reload()
      },
      loadProvinces() {
        this.province.listProvinces = api.search(this.zone.dataGet, 'name', this.selectedZone).provincias
      },
      loadCities() {
        this.city.listCities = api.search(this.province.listProvinces, 'name', this.selectedProvince).ciudades
      },
      deleteOne(key) {
        this.dataPostDel = this.bodegas.dataGet[key]
        this.bodegas.dataGet.splice(key, 1)
        var id = this.dataPostDel.id
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      save (index) {
        var id = this.bodegas.dataGet[index].id
        var idCity = api.search(this.city.listCities, 'name', this.selectedCity).id
        api.put(this.apiBack + '/' + id + '/' + idCity, this.$data)
      },
      exportExcel() {
        var rep = JSON.parse(JSON.stringify(this.bodegas.dataGet))
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.bodegas.dataGet))
        var columns = [
          {title: 'ID', dataKey: 'id'},
          { title: 'Nombre', dataKey: 'name' },
          { title: 'Zona', dataKey: 'zoneName' },
          { title: 'Provincia', dataKey: 'provinceName' },
          { title: 'Ciudad', dataKey: 'cityName' }
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
