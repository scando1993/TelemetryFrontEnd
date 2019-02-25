<template>
  <section class="content">
    <div class="span12">
      <div class="box">
        <!--Box content-->
        <div class="box-content">
          <div class="btn-toolbar pull-right clearfix">
            <div class="btn-group">
              <a class="btn btn-circle show-tooltip export-to-file" title="Export to Excel" v-on:click='exportExcel' data-table="table-terminals">
                <i class="fa fa-file-excel-o"></i>
              </a>
              <a class="btn btn-circle show-tooltip export-to-file" title="Export to PDF" v-on:click='exportPDF' data-table="table-terminals">
                <i class="fa fa-file-pdf-o"></i>
              </a>
              <router-link class="pageLink" to="/createloc">
                <a class="btn btn-circle show-tooltip" title="Add new element" href="/createloc">
                  <i class="fa fa-plus"></i>
                </a>
              </router-link>
               
                <a class="btn btn-circle show-tooltip" title="Refresh" v-on:click='refresh' id="refresh-administrators" href="/locales">
                  <i class="fa fa-repeat"></i>
                </a>
            </div>
          </div>
          <br />
          <br />
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
                    <table aria-describedby="example1_info" role="grid" id="tabla_locales" class="table table-bordered table-striped dataTable">
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
                          <td>{{dato.numeroLoc}}</td>
                          <td>{{dato.nombre}}</td>
                          <td>{{dato.lugar}}</td>
                          <td>{{dato.longitud}}</td>
                          <td>{{dato.latitud}}</td>
                          <td class="col-lg-2 col-md-1 col-sm-1 col-xs-1">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Delete" message="Are you sure to delete the selected device?" v-on:click='deleteOne(index)'>
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" href="#victorModal" data-toggle="modal" role="button" title="Edit" >
                              <i class="fa fa-pencil"></i>
                            </a>
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

        <!-- Filter communication and configuration -->

        <div id="client-navigation" style="display: none">
          <div class="table-client-link">
            <a id="client-link-title" href="/client/show/#ID#">#clientNavigationID#</a>
          </div>
        </div>

        <div id="terminal-navigation" style="display: none">
          <div class="table-terminal-link">
            <a id="terminal-link-title" href="/terminal/show/#ID#">#terminalNavigationID#</a>
          </div>
        </div>


        <div class="terminal-btn-group hidden">
          <div class="btn-group">
            <a class="btn btn-circle show-tooltip" title="View" href="/terminal/show/#ID#">
              <i class="fa fa-search-plus"></i>
            </a>
            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Delete" message="Are you sure to delete the selected device?" href="/terminal/delete/#ID#">
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
        nameToExport: 'Locales',
        error: '', // aqui se guardara el ultimo status de error
        dataGet: Object.values(jSon), // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          id: '',
          numeroLoc: '',
          nombre: '',
          lugar: '',
          longitud: '',
          latitud: ''
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
        $('#tabla_locales').DataTable()
      })
      this.get()
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
        console.log('--------------------------dta a eleiminar')
        console.log(this.dataPostDel)
        // se elimina localmente
        this.dataGet.splice(key, 1)
        // se actualiza la base de datos
        var id = this.dataPostDel.id
        this.delete(id)
      },
      save (index) {
        console.log('Aun no hace nada')
        console.log(index)
        console.log(this.dataGet[index])
        var id = this.dataPostDel.id
        api.put(this.apiBack + '/' + id, this.$data)
        this.get()
      },
      exportExcel() {
        api.exportExcel(this.nameToExport, this.dataGet)
      },
      exportPDF() {
        var columns = [
          {title: 'ID', dataKey: 'id'},
          {title: 'No.Local', dataKey: 'numeroLoc'},
          {title: 'Ubicaciones', dataKey: 'ubicaciones'},
          {title: 'Nombre', dataKey: 'nombre'},
          {title: 'Lugar', dataKey: 'lugar'},
          {title: 'Longitud', dataKey: 'longitud'},
          {title: 'Latitud', dataKey: 'latitud'}
        ]
        api.exportPDF(this.nameToExport, 'Hola Mundo', columns, this.dataGet)
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
