<template>
  <section class='content'>
    <div class='span12'>
      <div class='box'>
        <!--Box content-->
        <div class='box-content'>
          <div class='btn-toolbar pull-right clearfix'>
            <div class='btn-group'>
              <a class='btn btn-circle show-tooltip export-to-file' name='bodega.xls' title='Export to Excel'  data-table='table-terminals'>
                <i class='fa fa-file-excel-o'></i>
              </a>
              <a class='btn btn-circle show-tooltip export-to-file' title='Export to PDF'  data-table='table-terminals'>
                <i class='fa fa-file-pdf-o'></i>
              </a>
              <router-link class='pageLink' to='/createPath'>
                <a class='btn btn-circle show-tooltip' title='Add new element' href='/createPath'>
                  <i class='fa fa-plus'></i>
                </a>
              </router-link>             
              <router-link class='pageLink' to='/path'>
                <a class='btn btn-circle show-tooltip' title='Refresh' id='refresh-administrators' >
                  <i class='fa fa-repeat'></i>
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
                  <div class='col-sm-6'>
                    <div id='example1_length' class='dataTables_length'>
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-sm-12 table-responsive'>
                      
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
