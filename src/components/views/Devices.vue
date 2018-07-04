<template>
  <section class="content">
    <div class="row center-block">
      <h2>Data tables</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Data Table With Full Features</h3>
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
                      <th aria-label="Devices id: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Devices id</th>
                      <th aria-label="Hardware: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Hardware</th>
                      <th aria-label="Description: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Description</th>
                      <th aria-label="Last Communication: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Last Communication</th>
                      <th aria-label="Last Update: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Last Upgrade</th>
                      <th aria-label="Entity: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Entity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="even" role="row">
                      <td class="sorting_1">Blink</td>
                      <td>Iridium  54.0</td>
                      <td>GNU/Linux</td>
                      <td>54</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 1.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.7</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 1.5</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 2.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 3.0</td>
                      <td>Win 2k+ / OSX.3+</td>
                      <td>1.9</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Camino 1.0</td>
                      <td>OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Camino 1.5</td>
                      <td>OSX.3+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape 7.2</td>
                      <td>Win 95+ / Mac OS 8.6-9.2</td>
                      <td>1.7</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Browser 8</td>
                      <td>Win 98SE+</td>
                      <td>1.7</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Mozilla 1.0</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td>1</td>
                      <td>A</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <th colspan="1" rowspan="1">Devices id</th>
                      <th colspan="1" rowspan="1">Hardware</th>
                      <th colspan="1" rowspan="1">Description</th>
                      <th colspan="1" rowspan="1">Last Commnunication</th>
                      <th colspan="1" rowspan="1">Last Update</th>
                      <th colspan="1" rowspan="1">Entity</th>
                    </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
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
