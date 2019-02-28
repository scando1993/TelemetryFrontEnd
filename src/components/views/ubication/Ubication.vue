<template>
  <section class="content">
    <div class="span12">
      <div class="box">
        <!--Box content-->
        <div class="box-content">
          <div class="btn-toolbar pull-right clearfix">
            <div class="btn-group">
              <a class="btn btn-circle show-tooltip export-to-file" title="Exportar a Excel" v-on:click='exportExcel' data-table="table-terminals">
                <i class="fa fa-file-excel-o"></i>
              </a>
              <a class="btn btn-circle show-tooltip export-to-file" title="Exportar a PDF" v-on:click='exportPDF' data-table="table-terminals">
                <i class="fa fa-file-pdf-o"></i>
              </a>
              <router-link class="pageLink" to="/createUbication">
                <a class="btn btn-circle show-tooltip" title="Añadir nueva ubicación" href="/createUbication">
                  <i class="fa fa-plus"></i>
                </a>
              </router-link>
              <router-link class="pageLink" to="/ubication">
                <a class="btn btn-circle show-tooltip" v-on:click='refresh' title="Actualizar" id="refreshed" href="/ubication">
                  <i class="fa fa-repeat"></i>
                </a>
              </router-link>
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
                    <table aria-describedby="Table_of_Ubications" role="grid" id="table_ubication" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="ID: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">ID</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Zona</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Regional</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Provincia</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Ciudad</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Formatos</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Locales</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Bodegas</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody id="fields">
                        <tr class="even" role="row" v-for="dato, index in dataGet ">
                          <td class="sorting_1">{{dato.id}}</td>
                          <td>{{dato.zone}}</td>
                          <td>{{dato.regional}}</td>
                          <td>{{dato.province}}</td>
                          <td>{{dato.city}}</td>
                          <td>
                            <tdd tdd v-for="formato, index1 in dato.formatos" v-bind:data="index1" v-bind:key="index1.text">{{formato.name}}<br /></tdd>
                          </td>
                          <td>
                            <tdd v-for="local, index2 in dato.locales" v-bind:data="index2" v-bind:key="index2.text">{{local.name}}<br /></tdd>
                          </td>
                          <td>
                            <tdd v-for="bodega, index3 in dato.bodegas" v-bind:data="index3" v-bind:key="index3.text">{{bodega.name}}<br /></tdd>
                          </td>
                          <td class="col-lg-2 col-md-1 col-sm-1 col-xs-1">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Eliminar" message="Are you sure to delete the selected device?" v-on:click='deleteOne(index)'>
                              <i class="fa fa-trash-o"></i>
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
                                  <div class="modal-body">
                                    <form action="/create" method="POST" class="form-horizontal" id="bodega-form">

                                      <div class="form-group">
                                        <label class="col-sm-12 col-lg-12 control-label">Zona</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control" v-bind:placeholder="dato.zone" v-model="dataPostDel.zone" id="name_store" maxlength="100" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-12 col-lg-12 control-label">Regional</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control" v-bind:placeholder="dato.regional" v-model="dataPostDel.regional" id="name_store" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-12 col-lg-12 control-label">Provincia</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control" v-bind:placeholder="dato.province" v-model="dataPostDel.province" id="name_store" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-3 col-lg-12 control-label">Ciudad</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control" v-bind:placeholder="dato.city" v-model="dataPostDel.city" id="name_store" maxlength="100" value="">
                                        </div>
                                      </div>

                                    </form>
                                  </div>
                                  <!--end modal-body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/ubication">
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
                          <th colspan="1" rowspan="1">ID</th>
                          <th colspan="1" rowspan="1">Zona</th>
                          <th colspan="1" rowspan="1">Regional</th>
                          <th colspan="1" rowspan="1">Provincia</th>
                          <th colspan="1" rowspan="1">Ciudad</th>
                          <th colspan="1" rowspan="1">Formatos</th>
                          <th colspan="1" rowspan="1">Locales</th>
                          <th colspan="1" rowspan="1">Bodegas</th>
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
  import api from '@/api/goApi.js'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  export default {
    data() {
      return {
        myJson: jSon,
        inicialDelay: 15000,
        apiBack: '/api/ubicacion',
        nameToExport: 'Ubicaciones',
        error: '', // aqui se guardara el ultimo status de error
        dataGet: [], // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          zone: '',
          regional: '',
          province: '',
          city: ''
        }
      }
    },
    name: 'Ubication',
    mounted() {
      setTimeout(e => {
        this.$nextTick(() => {
          $('#table_ubication').DataTable()
        })
      }, this.inicialDelay)
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
        console.log('--------------------------data a eliminar')
        console.log(this.dataPostDel)
        // se elimina localmente
        this.dataGet.splice(key, 1)
        // se actualiza la base de datos
        var id = this.dataPostDel.id
        this.delete(id)
      },
      save(index) {
        console.log('Aun no hace nada')
        console.log(index)
        console.log(this.dataGet[index])
        // this.dataPostDel = this.dataGet[index]
        var id = this.dataGet[index].id
        api.put(this.apiBack + '/' + id + '/', this.$data)
        this.get()
      },
      exportExcel() {
        // var rep = this.dataGet
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        var cad = ''
        var cad2 = ''
        var cad3 = ''
        console.log('Aqi esta la parte de rep')
        console.log(rep)
        rep.forEach(element => {
          element.formatos.forEach(e => {
            cad = cad + e.name + ', '
          })
          element.bodegas.forEach(u => {
            cad2 = cad2 + u.name + ', '
          })
          element.locales.forEach(y => {
            cad3 = cad3 + y.name + ', '
          })
          element.bodegas = cad2
          element.formatos = cad
          element.locales = cad3
          cad = ''
          cad2 = ''
          cad3 = ''
        })
        console.log('Aqui la cadena' + cad)
        rep.formatos = cad
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        var cad = ''
        var cad2 = ''
        var cad3 = ''
        console.log('Aqi esta la parte de rep')
        console.log(rep)
        rep.forEach(element => {
          element.formatos.forEach(e => {
            cad = cad + e.name + ', '
          })
          element.bodegas.forEach(u => {
            cad2 = cad2 + u.name + ', '
          })
          element.locales.forEach(y => {
            cad3 = cad3 + y.name + ', '
          })
          element.bodegas = cad2
          element.formatos = cad
          element.locales = cad3
          cad = ''
          cad2 = ''
          cad3 = ''
        })
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Zona', dataKey: 'zone' },
          { title: 'Regional', dataKey: 'regional' },
          { title: 'Provincia', dataKey: 'province' },
          { title: 'Ciudad', dataKey: 'city' },
          { title: 'Formatos', dataKey: 'formatos' },
          { title: 'Locales', dataKey: 'locales' },
          { title: 'Bodegas', dataKey: 'bodegas' }
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
    content: "\f0dc";
  }

  table.dataTable thead .sorting_asc:after {
    content: "\f0dd";
  }

  table.dataTable thead .sorting_desc:after {
    content: "\f0de";
  }
</style>

