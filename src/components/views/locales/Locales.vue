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
                    <table aria-describedby="example1_info" role="grid" id="tabla_locals" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="Local ID: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">ID</th>
                          <th aria-label="No.Loc: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">No. Loc</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Nombre</th>
                          <th aria-label="Lugar : activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Lugar</th>
                          <th aria-label="Longitud: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Longitud</th>
                          <th aria-label="Latitud: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Latitud</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even" role="row" v-for="dato,index in dataGet ">
                          <td class="sorting_1">{{dato.id}}</td>
                          <td>{{dato.numLoc}}</td>
                          <td>{{dato.name}}</td>
                          <td>{{dato.place}}</td>
                          <td>{{dato.length}}</td>
                          <td>{{dato.latitude}}</td>
                          <td class="col-lg-2 col-md-1 col-sm-1 col-xs-1">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Delete" message="Are you sure to delete the selected device?" v-on:click='deleteOne(index)'>
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Edit" v-on:click='editOne(index)'>
                              <i class="fa fa-pencil"></i>
                            </a>
                            <!-- Modal / Ventana / Overlay en HTML  -->
                            <div v-bind:id="index+'s'" class="modal fade">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <!--Modal header-->
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">Editar</h4>
                                  </div>
                                  <!--End Modal-Header-->
                                  <!--Modal-Body-->
                                  <div class="modal-body">
                                    <form action="/create" method="POST" class="form-horizontal" id="bodega-form">
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">No.Loc</label>
                                        <div class="col-sm-9 controls">
                                          <input type="number" class="form-control" v-bind:placeholder="dato.numLoc" v-model="dataPostDel.numLoc" name="name" id="noLoc" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Nombre</label>
                                        <div class="col-sm-9 controls">
                                          <input type="text" class="form-control" v-bind:placeholder="dato.name" v-model="dataPostDel.name" name="name" id="name" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Lugar</label>
                                        <div class="col-sm-9 controls">
                                          <input type="text" class="form-control" v-bind:placeholder="dato.place" v-model="dataPostDel.place" name="name" id="place" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Longitud</label>
                                        <div class="col-sm-9 controls">
                                          <input type="number" class="form-control" v-bind:placeholder="dato.numLoc" v-model="dataPostDel.length" name="name" id="noLoc" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Latitud</label>
                                        <div class="col-sm-9 controls">
                                          <input type="number" class="form-control" v-bind:placeholder="dato.numLoc" v-model="dataPostDel.latitude" name="name" id="noLoc" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-5  control-label">Ubicaciones</label>
                                        <div class="col-sm-9  controls">
                                          <select v-model="selectedLocal">
                                            <option disabled value="">Por favor seleccionar uno</option>
                                            <option v-for="datoL in ubications.dataGet ">{{ datoL.zone }}</option>
                                          </select>
                                        </div>
                                      </div>

                                    </form>
                                  </div>
                                  <!--End Modal-Body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/locals">
                                      <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                      <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="save(index)">Guardar</button>
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
                      <tfoot>
                        <tr>
                          <th colspan="1" rowspan="1">ID</th>
                          <th colspan="1" rowspan="1">No. Loc.</th>
                          <th colspan="1" rowspan="1">Nombre</th>
                          <th colspan="1" rowspan="1">Lugar</th>
                          <th colspan="1" rowspan="1">Longitud</th>
                          <th colspan="1" rowspan="1">Latitud</th>
                          <th></th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!--End Box-body -->
            <hr class="visible-xs-block">
            <div class="col-sm-12 col-xs-12">
              <p class="text-center">
                <strong>Distribucion de locales</strong>
              </p>
              <!--<canvas id="languagePie"></canvas>-->
              <google-map /><br />
            </div>
          </div>
          <!--End Box-->
        </div>
        <div class="terminal-btn-group hidden">
          <div class="btn-group">
            <a class="btn btn-circle show-tooltip" title="View" href="/terminal/show/#ID#">
              <i class="fa fa-search-plus"></i>
            </a>
            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Delete" message="Are you sure to delete the selected device?">
              <i class="fa fa-trash-o"></i>
            </a>
          </div>
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
  import GoogleMap from './../../Geocalization/GoogleMap.vue'
  export default {
    components: {
      GoogleMap
    },
    data() {
      return {
        myJson: jSon,
        apiBack: '/api/locales',
        apiBackUbication: '/api/ubicacion',
        selectedLocal: '',
        ubications: {
          error: '',
          dataGet: []
        },
        nameToExport: 'Locales',
        error: '', // aqui se guardara el ultimo status de error
        dataGet: Object.values(jSon), // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          numLoc: 0,
          name: '',
          place: '',
          length: 0,
          latitude: 0
        },
        generateRandomNumbers(numbers, max, min) {
          var a = []
          for (var i = 0; i < numbers; i++) {
            a.push(Math.floor(Math.random() * (max - min + 1)) + max)
          }
          return a
        }
      }
    },
    name: 'Locales',
    mounted() {
      this.$nextTick(() => {
        $('#tabla_locals').DataTable()
      })
      this.get()
      api.getAll(this.apiBackUbication, this.ubications)
    },
    methods: {
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
      save(index) {
        console.log('Guardando..')
        console.log('*******************************************')
        console.log(this.dataPostDel)
        console.log('*******************************************')
        api.post(this.apiBack, this.$data)
        // this.dataPostDel = this.dataGet[index]
        var id = this.dataGet[index].id
        var idUbication = api.search(this.ubications.dataGet, 'zone', this.selectedLocal).id
        console.log('El ide foraneo es' + idUbication + 'El id de formato es' + id)
        api.put(this.apiBack + '/' + id + '/' + idUbication, this.$data)
        this.get()
      },
      exportExcel() {
        api.exportExcel(this.nameToExport, this.dataGet)
      },
      exportPDF() {
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'No.Local', dataKey: 'numLoc' },
          { title: 'Nombre', dataKey: 'name' },
          { title: 'Lugar', dataKey: 'place' },
          { title: 'Longitud', dataKey: 'length' },
          { title: 'Latitud', dataKey: 'latitude' }
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
    content: "\f0dc";
  }

  table.dataTable thead .sorting_asc:after {
    content: "\f0dd";
  }

  table.dataTable thead .sorting_desc:after {
    content: "\f0de";
  }
</style>
