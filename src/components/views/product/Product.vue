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
              <router-link class="pageLink" to="/createProduct">
                <a class="btn btn-circle show-tooltip" title="Añadir nueva ubicación" href="/createProduct">
                  <i class="fa fa-plus"></i>
                </a>
              </router-link>
              <router-link class="pageLink" to="/products">
                <a class="btn btn-circle show-tooltip" v-on:click='refresh' title="Actualizar" id="refreshed" href="/products">
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
                    <table aria-describedby="Table_of_Products" role="grid" id="table_products" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="Name: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Nombre</th>
                          <th aria-label="Temperatura máxima: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Temperatura máxima</th>
                          <th aria-label="Temperatura mínima: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Temperatura mínima</th>
                          <th aria-label="Temperatura máxmima ideal: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Temperatura máxima ideal</th>
                          <th aria-label="Temperatura mínima ideal: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Temperatura mínima ideal</th>
                          <th class="JustifyButtonTD" ></th>
                        </tr>
                      </thead>
                      <tbody id="fields">
                        <tr class="even" role="row" v-for="dato, index in products.dataGet[0].productoes">
                          <td class="TextFieldC">{{dato.name}}</td>
                          <td class="TextFieldC">{{dato.temp_max}}</td>
                          <td class="TextFieldC">{{dato.temp_min}}</td>
                          <td class="TextFieldC">{{dato.temp_max_ideal}}</td>
                          <td class="TextFieldC">{{dato.temp_min_ideal}}</td>
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
                                        <label class="col-sm-12 col-lg-12 control-label">Nombre</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.name" v-model="dataPostDel.name" id="name_product" maxlength="100" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-12 col-lg-12 control-label">Temperatura máxima</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.temp_max" v-model="dataPostDel.temp_max" id="temp_max" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-12 col-lg-12 control-label">Temperatura mínima</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.temp_min" v-model="dataPostDel.temp_min" id="temp_min" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-3 col-lg-12 control-label">Temperatura máxima ideal</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.temo_max_ideal" v-model="dataPostDel.temp_max_ideal" id="temp_max_ideal" maxlength="100" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-3 col-lg-12 control-label">Temperatura mínima ideal</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.temp_min_ideal" v-model="dataPostDel.temp_min_ideal" id="temp_min_ideal" maxlength="100" value="">
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                  <!--end modal-body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/products">
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
  import api from '@/api/goApi.js'
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  export default {
    data() {
      return {
        inicialDelay: 3000,
        apiBack: '/productoes',
        nameToExport: 'Productos',
        dataPostDel: { // este es basicamente un JSON
          name: '',
          temp_max: 0,
          temp_min: 0,
          temp_max_ideal: 0,
          temp_min_ideal: 0
        },
        products: {
          error: '',
          dataGet: [
            {
              productoes: [{
                name: '',
                temp_max: 0,
                temp_min: 0,
                temp_max_ideal: 0,
                temp_min_ideal: 0
              }]
            }]
        }
      }
    },
    name: 'Product',
    mounted() {
      setTimeout(e => {
        $('#table_products').DataTable()
      }, this.inicialDelay)
      this.get()
    },
    methods: {
      refresh() {
        location.reload()
      },
      get() {
        api.getAll(this.apiBack, this.products)
      },
      deleteOne(key) {
        var elementDeleted = this.products.dataGet[0].productoes.splice(key, 1)
        var id = elementDeleted[0].id
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      save(id) {
        if (this.dataPostDel.name.trim() !== '' && this.dataPostDel.temp_max.toString() !== '' && this.dataPostDel.temp_min.toString() !== '' && this.dataPostDel.temp_max_ideal.toString() !== '' && this.dataPostDel.temp_min_ideal.toString() !== '') {
          this.dataPostDel.name = this.dataPostDel.name.trim()
          api.put(this.apiBack + '/' + id, this.$data)
          this.$router.push(this.page)
        }
      },
      exportExcel() {
        api.exportExcel(this.nameToExport, this.dataGet)
      },
      exportPDF() {
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Nombre', dataKey: 'name' },
          { title: 'Temperatura máxima aceptable', dataKey: 'temp_max' },
          { title: 'Temperatura mínima aceptable', dataKey: 'temp_min' },
          { title: 'Temperatura máxima ideal', dataKey: 'temp_max_ideal' },
          { title: 'Temperatura mínima ideal', dataKey: 'temp_min_ideal' }
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

