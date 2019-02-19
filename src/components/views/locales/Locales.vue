<template>
  <section class="content">
    <div class="span12">
      <div class="box">
        <!--Box content-->
        <div class="box-content">
          <div class="btn-toolbar pull-right clearfix">
            <div class="btn-group">
              <a class="btn btn-circle show-tooltip export-to-file" title="Export to Excel" href="./options/exportExcel" data-table="table-terminals">
                <i class="fa fa-file-excel-o"></i>
              </a>
              <a class="btn btn-circle show-tooltip export-to-file" title="Export to PDF" href="./options/exportPDF" data-table="table-terminals">
                <i class="fa fa-file-pdf-o"></i>
              </a>
              <router-link class="pageLink" to="/createloc">
                <a class="btn btn-circle show-tooltip" title="Add new element" href="/createloc">
                  <i class="fa fa-plus"></i>
                </a>
              </router-link>
                <a class="btn btn-circle show-tooltip link-checkbox-all visible-lg" title="Edit Selected" href="./options/edit-multiple">
                  <i class="fa fa-pencil"></i>
                </a>
                <a class="btn btn-circle show-tooltip link-checkbox-all visible-lg" message="Are you sure to delete selected devices?" title="Delete selected" href="./options/delete">
                  <i class="fa fa-trash-o"></i>
                </a>
                <a class="btn btn-circle show-tooltip" title="Refresh" id="refresh-administrators" href="/locales">
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
            <!--<div class="box">-->
            <div class="box-header">
              <h3 class="box-title">Lista de Locales</h3>
            </div>
            <!-- /.box-header -->
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
                        <tr class="even" role="row" v-for="dato in myJson ">
                          <td class="sorting_1">{{dato.id}}</td>
                          <td>{{dato.numero}}</td>
                          <td>{{dato.nombre}}</td>
                          <td>{{dato.lugar}}</td>
                          <td>{{dato.longitud}}</td>
                          <td>{{dato.latitud}}</td>
                          <td class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Delete" message="Are you sure to delete the selected device?" href="/bodega/delete/#ID#">
                              <i class="fa fa-trash-o"></i>
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
  export default {
    data() {
      return {
        myJson: jSon
      }
    },
    name: 'Locales',
    mounted() {
      this.$nextTick(() => {
        $('#tabla_locales').DataTable()
      })
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
