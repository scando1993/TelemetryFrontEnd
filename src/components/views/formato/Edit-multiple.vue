<template>
  <section class="content">
    <div class="span12">
      <div class="box">

        <div class="box-content">
          <div class="btn-toolbar pull-right clearfix">
            <div class="btn-group">
              <a class="btn btn-circle show-tooltip export-to-file" title="Export to Excel" href="/terminal/list/export/xlsx" data-table="table-terminals">
                <i class="fa fa-file-excel-o"></i>
              </a>
              <a class="btn btn-circle show-tooltip export-to-file" title="Export to PDF" href="/terminal/list/export/pdf" data-table="table-terminals">
                <i class="fa fa-file-pdf-o"></i>
              </a>
              <a class="btn btn-circle show-tooltip" title="Add new Device" href="/terminal/create">
                <i class="fa fa-plus"></i>
              </a>
              <a class="btn btn-circle show-tooltip link-checkbox-all visible-lg" title="Edit Selected" href="/terminal/edit-multiple">
                <i class="fa fa-pencil"></i>
              </a>
              <a class="btn btn-circle show-tooltip link-checkbox-all visible-lg" message="Are you sure to delete selected devices?" title="Delete selected" href="/terminal/delete">
                <i class="fa fa-trash-o"></i>
              </a>
              <a class="btn btn-circle show-tooltip" title="Refresh" id="refresh-administrators" href="/terminal/">
                <i class="fa fa-repeat"></i>
              </a>
            </div>
          </div>
          <br />
          <br />
        </div>
   <!-- END Main Content -->
   
        <div class="row center-block">
          <div class="col-md-12">
            <!--<div class="box">-->
              <div class="box-header">
                <h3 class="box-title">Device Table With Its Features</h3>
              </div>
              <!-- /.box-header -->
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
                      <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                        <thead>
                          <tr role="row">
                            <th aria-label="Device ID: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Device ID</th>
                            <th aria-label="Hardware: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Hardware</th>
                            <th aria-label="Description: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Description</th>
                            <th aria-label="Last Communication : activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Last Communication</th>
                            <th aria-label="Last Update: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Last Update</th>
                            <th aria-label="Entity: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Entity</th>
                            <!--<th class="col-lg-1 col-md-2 col-sm-2 col-xs-1 buttons all">&nbsp;</th>-->
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="even" role="row">
                            <td class="sorting_1">00001</td>
                            <td>Iridium  54.0</td>
                            <td>GNU/Linux</td>
                            <td>54</td>
                            <td>A</td>
                            <td>A</td>
                          </tr>
                          <tr class="odd" role="row">
                            <td class="sorting_1">00002</td>
                            <td>Firefox 1.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.7</td>
                            <td>A</td>
                            <td>A</td>
                          </tr>
                          <tr class="even" role="row">
                            <td class="sorting_1">00003</td>
                            <td>Firefox 1.5</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            <td>Favorita</td>
                          </tr>
                          <tr class="odd" role="row">
                            <td class="sorting_1">00005</td>
                            <td>Firefox 2.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            <td>Semgroup</td>
                          </tr>
                          <tr class="even" role="row">
                            <td class="sorting_1">00006</td>
                            <td>Firefox 3.0</td>
                            <td>Win 2k+ / OSX.3+</td>
                            <td>1.9</td>
                            <td>A</td>
                            <td>Semgroup</td>
                          </tr>
                          <tr class="odd" role="row">
                            <td class="sorting_1">00007</td>
                            <td>Camino 1.0</td>
                            <td>OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            <td>Semgroup</td>
                          </tr>
                          <tr class="even" role="row">
                            <td class="sorting_1">00009</td>
                            <td>Camino 1.5</td>
                            <td>OSX.3+</td>
                            <td>1.8</td>
                            <td>A</td>
                            <td>Leonard</td>
                          </tr>
                          <tr class="odd" role="row">
                            <td class="sorting_1">151236</td>
                            <td>Netscape 7.2</td>
                            <td>Win 95+ / Mac OS 8.6-9.2</td>
                            <td>1.7</td>
                            <td>A</td>
                            <td>A</td>
                          </tr>
                          <tr class="even" role="row">
                            <td class="sorting_1">185263</td>
                            <td>Netscape Browser 8</td>
                            <td>Win 98SE+</td>
                            <td>1.7</td>
                            <td>A</td>
                            <td>A</td>
                          </tr>
                          <tr class="odd" role="row">
                            <td class="sorting_1">185239</td>
                            <td>Netscape Navigator 9</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            <td>A</td>
                          </tr>
                          <tr class="even" role="row">
                            <td class="sorting_1">179852</td>
                            <td>Mozilla 1.0</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>1</td>
                            <td>A</td>
                            <td>A</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th colspan="1" rowspan="1">Device ID</th>
                            <th colspan="1" rowspan="1">Hardware</th>
                            <th colspan="1" rowspan="1">Description</th>
                            <th colspan="1" rowspan="1">Last Communication</th>
                            <th colspan="1" rowspan="1">Last Update</th>
                            <th colspan="1" rowspan="1">Entity</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.box-body -->
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
// Require needed datatables modules
import 'datatables.net'
import 'datatables.net-bs'

export default {
  name: 'Devices',
  mounted () {
    this.$nextTick(() => {
      $('#example1').DataTable()
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
