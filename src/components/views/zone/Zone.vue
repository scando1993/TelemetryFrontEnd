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
              <router-link class="pageLink" to="/createZone">
                <a class="btn btn-circle show-tooltip" title="Añadir nueva zona" href="/createZone">
                  <i class="fa fa-plus"></i>
                </a>
              </router-link>
              <router-link class="pageLink" to="/zone">
                <a class="btn btn-circle show-tooltip" v-on:click='refresh' title="Actualizar" id="refreshed" href="/zone">
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
                          <th aria-label="Name: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Nombre</th>
                          <th aria-label="Provinces: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Provincias asociadas</th>
                          <th class="JustifyButtonTD" ></th>
                        </tr>
                      </thead>
                      <tbody id="fields">
                        <tr class="even" role="row" v-for="dato, index in dataGet">
                          <td class="sorting_1 TextFieldC">{{dato.id}}</td>
                          <td class="TextFieldC">{{dato.name}}</td>
                          <td class="TextFieldC">
                            <tdd tdd v-for="provincia, index1 in dato.provincias" v-bind:data="index1" v-bind:key="index1.text">{{provincia.name}}<br /></tdd>
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
                                    <form action="#" method="post"  class="form-horizontal" id="bodega-form">

                                      <div class="form-group">
                                        <label class="col-sm-12 col-lg-12 control-label">Nombre</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" required v-bind:placeholder="dato.name" v-model="dataPostDel.name" id="name_zone" maxlength="100" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-5 control-label">Seleccione la(s) Provincia(s)</label>
                                        <ul id="checkboxZone" class="GroupCheckbox">
                                          <li v-for="datoL, indexU in province.dataGet" class="controls-modal">
                                            <input required type="checkbox" :value="datoL.id" :id="datoL.id" v-model="checkedNames" @click="check($event)">
                                            <label>{{datoL.name}}</label>
                                          </li>
                                        </ul>
                                      </div>
                                    </form>
                                  </div>
                                  <!--end modal-body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/zone">
                                      <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                      <button type="submit" id="saveButton" class="btn btn-default" data-dismiss="modal"  v-on:click="save(index)">Guardar</button>
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
        apiBack: '/zona',
        apiBackProvince: '/provincia',
        nameToExport: 'Zonas',
        validated: true,
        el: '#checkboxZone',
        checkedNames: [],
        error: '', // aqui se guardara el ultimo status de error
        zone: {
          error: '',
          dataGet: []
        },
        province: {
          error: '',
          dataGet: []
        },
        dataGet: [], // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          name: ''
        }
      }
    },
    name: 'Zone',
    mounted() {
      setTimeout(e => {
        this.$nextTick(() => {
          $('#table_ubication').DataTable()
        })
      }, this.inicialDelay)
      api.getAll(this.apiBack, this.$data)
      api.getAll(this.apiBack, this.zone)
      api.getAll(this.apiBackProvince, this.province)
    },
    methods: {
      check: function (e) {
        if (e.target.checked) {
          console.log(e.target.value)
        }
      },
      save(index) {
        var provinces = ''
        for (var i = 0; i < this.checkedNames.length; i++) {
          if (i === 0) {
            provinces = provinces + this.checkedNames[i]
          } else { provinces = provinces + ',' + this.checkedNames[i] }
        }
        var id = this.zone.dataGet[index].id
        api.put(this.apiBack + '/' + id + '/' + provinces, this.$data)
      },
      refresh() {
        location.reload()
      },
      deleteOne(key) {
        this.dataPostDel = this.dataGet[key]
        this.dataGet.splice(key, 1)
        var id = this.dataPostDel.id
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      exportExcel() {
        // var rep = this.dataGet
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        var cad = ''
        rep.forEach(element => {
          element.provincias.forEach(e => {
            cad = cad + e.name + ', '
          })
          element.provincias = cad
          cad = ''
        })
        rep.provincias = cad
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        var cad = ''
        rep.forEach(element => {
          element.provincias.forEach(e => {
            cad = cad + e.name + ', '
          })
          element.provincias = cad
          cad = ''
        })
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Nombre', dataKey: 'name' },
          { title: 'Provincias asociadas', dataKey: 'provincias' }
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

