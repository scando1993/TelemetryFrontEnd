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
              <router-link class='pageLink' to='/createBoxcar'>
                <a class='btn btn-circle show-tooltip' title='Añadir furgón' href='/createBoxcar'>
                  <i class='fa fa-plus'></i>
                </a>
              </router-link>
              <router-link class='pageLink' to='/boxcar'>
                <a class='btn btn-circle show-tooltip' title='Actualizar' v-on:click='refresh' id='refresh-administrators'>
                  <i class='fa fa-repeat'></i>
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
                    <table aria-describedby="Table_of_elements" role="grid" id="table_boxcar" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="ID: activate to sort column descending" aria-sort="ascending" colspan="1" rowspan="1" style="width:34px;" aria-controls="example1" tabindex="0" class="sorting_asc TextCenterTH">ID</th>
                          <th aria-label="NoFurgon: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Número del Furgón</th>
                          <th aria-label="Nombre: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Nombre</th>
                          <th class="JustifyButtonTD"></th>
                        </tr>
                      </thead>
                      <tbody id="fields">
                        <tr class="even" role="row" v-for="dato, index in dataGet ">
                          <td class="sorting_1 TextFieldC">{{dato.id}}</td>
                          <td class="TextFieldC">{{dato.numFurgon}}</td>
                          <td class="TextFieldC">{{dato.name}}</td>
                          <td class="JustifyButtonTD">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Eliminar" message="Are you sure to delete the selected device?" v-on:click='deleteOne(index)'>
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Editar" v-on:click='editOne(index)'>
                              <i class="fa fa-pencil"></i>
                            </a>
                            <!-- Modal / Ventana / Overlay en HTML  -->
                            <div v-bind:id="index+'s'" class="modal fade">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <!--modal header-->
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" @click="editOne(index)" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">Editar</h4>
                                  </div>
                                  <!--end modal-header-->
                                  <!--Modal-body-->
                                  <div class="modal-body">
                                    <form action="/create" method="POST" class="form-horizontal" id="bodega-form">
                                      <div class="form-group">
                                        <label class="col-sm-5 control-label">Número de Furgón</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="number" class="form-control-modal" v-bind:placeholder="dato.numFurgon" name="name" v-model="dataPostDel.numFurgon" id="name_store" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-5 control-label">Nombre</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.name" name="name" v-model="dataPostDel.name" id="name_store" value="">
                                        </div>
                                      </div>                                  
                                    </form>
                                  </div>
                                  <!--end modal-body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/boxcar">
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
  // Require needed datatables modules
  import 'datatables.net'
  import 'datatables.net-bs'
  import api from '@/api/goApi.js'

  export default {
    data() {
      return {
        inicialDelay: 3000,
        apiBack: '/furgon',
        nameToExport: 'Furgón',
        error: '', // aqui se guardara el ultimo status de error
        dataGet: [], // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          numFurgon: 0,
          name: ''
        }
      }
    },
    name: 'Boxcar',
    mounted() {
      setTimeout(e => {
        this.$nextTick(() => {
          $('#table_boxcar').DataTable()
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
      deleteOne(key) {
        var id = this.dataGet[key].id
        this.dataGet.splice(key, 1)
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      save(index) {
        var id = this.dataGet[index].id
        api.put(this.apiBack + '/' + id, this.$data)
        this.get()
      },
      exportExcel() {
        api.exportExcel(this.nameToExport, this.dataGet)
      },
      exportPDF() {
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Numero Furgón', dataKey: 'numFurgon' },
          { title: 'Nombre', dataKey: 'name' }
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
