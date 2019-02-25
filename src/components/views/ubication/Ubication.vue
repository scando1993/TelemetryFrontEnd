<template>
  <section class="content">
    <div class="span12">
      <div class="box">
        <!--Box content-->
        <div class="box-content">
          <div class="btn-toolbar pull-right clearfix">
            <div class="btn-group">
              <a class="btn btn-circle show-tooltip export-to-file" title="Export to Excel" data-table="table-terminals">
                <i class="fa fa-file-excel-o"></i>
              </a>
              <a class="btn btn-circle show-tooltip export-to-file" title="Export to PDF" data-table="table-terminals">
                <i class="fa fa-file-pdf-o"></i>
              </a>
              <router-link class="pageLink" to="/createUbication">
                <a class="btn btn-circle show-tooltip" title="Add new element" href="/createUbication">
                  <i class="fa fa-plus"></i>
                </a>
              </router-link>

              <router-link class="pageLink" to="/ubication">
                <a class="btn btn-circle show-tooltip" title="Refresh" id="refresh-administrators" href="/ubication">
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
                        <tr class="even" role="row" v-for="dato in myJson ">
                          <td class="sorting_1">{{dato.id}}</td>
                          <td>{{dato.zona}}</td>
                          <td>{{dato.regional}}</td>
                          <td>{{dato.provincia}}</td>
                          <td>{{dato.ciudad}}</td>
                          <td>
                            <tdd v-for="formato, index in dato.formatos" v-bind:data="index" v-bind:key="index.text">{{formato.nombre}}<br /></tdd>
                          </td>
                          <td>
                            <tdd v-for="local, index2 in dato.locales" v-bind:data="index2" v-bind:key="index2.text">{{local.nombre}}<br /></tdd>
                          </td>
                          <td>
                            <tdd v-for="bodega, index3 in dato.bodegas" v-bind:data="index3" v-bind:key="index3.text">{{bodega.nombre}}<br /></tdd>
                          </td>
                          <td class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Delete" message="Are you sure to delete the selected device?">
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Edit" v-on:click='editOne(index)'>
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
                                        <label class="col-sm-1  control-label">Nombre</label>
                                        <div class="col-sm-12 col-lg-15 controls">
                                          <input type="text" class="form-control" name="name" v-model="dataGet[index].nombre" id="name_store" maxlength="50" value="">
                                          <br />
                                        </div>
                                      </div><br />
                                      <div class="form-group">
                                        <label class="col-sm-3 col-lg-2 control-label">Ubicación</label>
                                        <div class="col-sm-12 col-lg-15 controls">
                                          <select v-model="selectedBodega">
                                            <option disabled value="">Por favor seleccionar uno</option>
                                            <option v-for="datoB in myJson3 ">{{ datoB.zone }}</option>
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
                                      <button type="button" class="btn-circle" v-on:click="save(index)">Guardar</button>
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
        error: '', // aqui se guardara el ultimo status de error
        dataGet: Object.values(jSon), // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          id: '',
          zona: '',
          regional: '',
          provincia: '',
          ciudad: '',
          formatos: [],
          locales: [],
          bodegas: []
        }
      }
    },
    name: 'Ubication',
    mounted() {
      this.$nextTick(() => {
        $('#table_ubication').DataTable()
      })
      this.get()
    },
    methods: {
      updateData(newData) {
        this.error = newData.error
        this.dataGet = newData.dataGet
        this.dataPostDel = newData.dataPostDel
      },
      updateDefaultJSON(id = '', zone = '') {
        this.dataPostDel = {
          id: id,
          zone: zone
        }
      },
      get() {
        api.getAll('/api/ubicacion', this.$data)
      },
      getCustom(objectFields) {
        api.getCustom(objectFields, '/getCustomUbicacion', this.$data)
      },
      post() {
        api.post('/postUbicacion', this.$data)
      },
      delete(id) {
        api.delete('/api/ubicacion/' + id, this.$data)
      },
      // se elimina los datos del Json ubicados en la pos del index
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
      crearUbicacion() {
        // se actualiza la data a realizar el post
        this.updateDefaultJSON()
      },
      save(index) {
        console.log('Aun no hace nada')
        console.log(index)
        console.log(this.dataGet[index])
      },
      editOne(index) {
        console.log('Edit one still does not do nothing')
        console.log(index)
      },
      exportExcel() {
        api.exportExcel('ubicacion', this.dataGet)
      },
      exportPDF() {
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Ubicacion', dataKey: 'ubicacion' },
          { title: 'Nombre', dataKey: 'nombre' }
        ]
        api.exportPDF('bodega', 'Hola Mundo', columns, this.dataGet)
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

