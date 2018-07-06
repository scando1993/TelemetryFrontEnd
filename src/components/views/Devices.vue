<template xmlns:font-size="http://www.w3.org/1999/xhtml">
  <ul class="sidebar-menu">
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
                      <th aria-label="" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class=""></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="even" role="row" id="1">
                      <td class="sorting_1">Blink</td>
                      <td>Iridium  54.0</td>
                      <td>GNU/Linux</td>
                      <td>54</td>
                      <td>A</td>
                      <td>0</td>
                      <td>

                        <button @click="removeRow()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <li class="treeview">
                          <a href="#">
                            <i class="fa fa-folder-o"></i>
                            <span>Files</span>
                            <span class="pull-right-container">
                              <i class="fa fa-angle-left fa-fw pull-right"></i>
                            </span>
                          </a>
                          <ul class="treeview-menu">
                            <li>
                              <a href="#">
                                <i class="fa fa-file-word-o"></i> Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-file-picture-o"></i> Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-file-pdf-o"></i> Item 3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="2">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 1.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.7</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow1()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="even" role="row" id="3">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 1.5</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow2()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="4">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 2.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow3()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="even" role="row" id="5">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 3.0</td>
                      <td>Win 2k+ / OSX.3+</td>
                      <td>1.9</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow4()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="6">
                      <td class="sorting_1">Gecko</td>
                      <td>Camino 1.0</td>
                      <td>OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow5()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="even" role="row" id="7">
                      <td class="sorting_1">Gecko</td>
                      <td>Camino 1.5</td>
                      <td>OSX.3+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow6()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="8">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape 7.2</td>
                      <td>Win 95+ / Mac OS 8.6-9.2</td>
                      <td>1.7</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow7()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="even" role="row" id="9">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Browser 8</td>
                      <td>Win 98SE+</td>
                      <td>1.7</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow8()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="10">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow9()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="11">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow10()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="12">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow11()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="13">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow12()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
                    </tr>
                    <tr class="odd" role="row" id="14">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>0</td>
                      <td>
                        <button @click="removeRow13()" style="font-size:10px;color:red"><i class="fa fa-trash-o"></i></button>
                        <button style="font-size:10px"><i class="fa fa-angle-double-down"></i></button>
                        <button style="font-size:10px"><i class="fa fa-search"></i></button>
                      </td>
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
  </ul>
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
    },
    methods: {
      removeRow: function () {
        $('#1').remove()
      },
      removeRow1: function () {
        $('#2').remove()
      },
      removeRow2: function () {
        $('#3').remove()
      },
      removeRow3: function () {
        $('#4').remove()
      },
      removeRow4: function () {
        $('#5').remove()
      },
      removeRow5: function () {
        $('#6').remove()
      },
      removeRow6: function () {
        $('#7').remove()
      },
      removeRow7: function () {
        $('#8').remove()
      },
      removeRow8: function () {
        $('#9').remove()
      },
      removeRow9: function () {
        $('#10').remove()
      },
      removeRow10: function () {
        $('#11').remove()
      },
      removeRow11: function () {
        $('#12').remove()
      },
      removeRow12: function () {
        $('#13').remove()
      },
      removeRow13: function () {
        $('#14').remove()
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
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
