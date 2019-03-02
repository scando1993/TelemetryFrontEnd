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
                          <th aria-label="ID: activate to sort column descending" aria-sort="ascending" style="width: 15px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="ToButtons sorting_asc">ID</th>
                          <th aria-label="Zona: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Zona</th>
                          <th aria-label="Regional: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Regional</th>
                          <th aria-label="Provincia: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Provincia</th>
                          <th aria-label="Ciudad: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Ciudad</th>
                          <th aria-label="Formatos: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Formatos</th>
                          <th aria-label="Locales: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Locales</th>
                          <th aria-label="Bodegas: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Bodegas</th>
                          <th class="JustifyButtonTD" ></th>
                        </tr>
                      </thead>
                      <tbody id="fields">
                        <tr class="even" role="row" v-for="dato, index in dataGet">
                          <td class="sorting_1 TextFieldC">{{dato.id}}</td>
                          <td class="TextFieldC">{{dato.zone}}</td>
                          <td class="TextFieldC">{{dato.regional}}</td>
                          <td class="TextFieldC">{{dato.province}}</td>
                          <td class="TextFieldC">{{dato.city}}</td>
                          <td class="TextFieldC">
                            <tdd tdd v-for="formato, index1 in dato.formatos" v-bind:data="index1" v-bind:key="index1.text">{{formato.name}}<br /></tdd>
                          </td>
                          <td class="TextFieldC">
                            <tdd v-for="local, index2 in dato.locales" v-bind:data="index2" v-bind:key="index2.text">{{local.name}}<br /></tdd>
                          </td>
                          <td class="TextFieldC">
                            <tdd v-for="bodega, index3 in dato.bodegas" v-bind:data="index3" v-bind:key="index3.text">{{bodega.name}}<br /></tdd>
                          </td>
                          <td class="JustifyButtonTD">
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
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.zone" v-model="dataPostDel.zone" id="name_store" maxlength="100" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-12 col-lg-12 control-label">Regional</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.regional" v-model="dataPostDel.regional" id="name_store" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-12 col-lg-12 control-label">Provincia</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.province" v-model="dataPostDel.province" id="name_store" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-3 col-lg-12 control-label">Ciudad</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.city" v-model="dataPostDel.city" id="name_store" maxlength="100" value="">
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
  import api from '@/api/goApi.js'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  export default {
    data() {
      return {
        inicialDelay: 3000,
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
        this.dataPostDel = this.dataGet[key]
        this.dataGet.splice(key, 1)
        var id = this.dataPostDel.id
        this.delete(id)
      },
      save(index) {
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
        rep.formatos = cad
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        var cad = ''
        var cad2 = ''
        var cad3 = ''
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

