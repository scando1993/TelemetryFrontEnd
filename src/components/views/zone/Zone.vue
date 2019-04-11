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
                    <table aria-describedby="Table_of_Ubications" role="grid" id="table_zone"  class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="ID: activate to sort column descending" aria-sort="ascending" style="width: 15px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="ToButtons sorting_asc">ID</th>
                          <th aria-label="Name: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Nombre</th>
                          <th aria-label="Provinces: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Provincias asociadas</th>
                          <th class="JustifyButtonTD" ></th>
                        </tr>
                      </thead>
                      <tbody id="fields" v-if="full">
                        <tr class="even" role="row" v-for="dato, index in zone.dataGet[0].zonas">
                          <td class="sorting_1 TextFieldC">{{dato.id}}</td>
                          <td class="TextFieldC">{{dato.name}}</td>
                          <td class="TextFieldC">
                            <tdd tdd v-for="provincia, index1 in prov[index].dataGet[0].provincias" v-bind:data="index1" v-bind:key="index1.text">{{provincia.name}}<br /></tdd>
                          </td>
                          
                          <td class="JustifyButtonTD">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Eliminar" message="Are you sure to delete the selected device?" v-on:click='deleteOne(index)'>
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Edit">
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
                                    <form action="#" method="post" class="form-horizontal" id="bodega-form">
                                      <div class="form-group">
                                        <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control-modal" required name="name" v-bind:placeholder="dato.name" v-model="dataPostDel.name" id="name_zone" maxlength="100" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-5 control-label">Seleccione la(s) Provincia(s)</label>
                                        <ul id="checkboxZone" class="GroupCheckbox">
                                          <li v-for="datoL, indexU in province.dataGet[0].provincias" class="col-sm-12 controls">
                                            <input type="checkbox" :value="datoL.id" :id="datoL.id" v-model="checkedNames" @click="check($event)">
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
                                      <button class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                      <button type="submit" id="saveButton" class="btn btn-default" data-dismiss="modal"  v-on:click="save(dato.id)">Guardar</button>
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
        checkedNames: [],
        apiBack: '/zonas',
        apiBackProvince: '/provincias',
        page: '/zone',
        nameToExport: 'Zonas',
        DEF_DELAY: 5000,
        prov: [],
        full: false,
        listProvinces: [],
        dataRespond: [],
        province: {
          dataGet: [
            {
              provincias: [{
                id: '',
                name: '',
                _links: {}
              }]
            }
          ],
          error: ''
        },
        zone: {
          dataGet: [
            {
              zonas: [{
                id: '',
                name: '',
                _links: {}
              }]
            }
          ],
          error: ''
        },
        dataPostDel: { // este es basicamente un JSON
          name: ''
        }
      }
    },
    name: 'Zone',
    mounted() {
      api.getAll(this.apiBack, this.zone)
      setTimeout(e => {
        this.loadData()
      }, 1100)
      setTimeout(e => {
        $('#table_zone').DataTable()
      }, this.inicialDelay)
      api.getAll(this.apiBackProvince, this.province)
    },
    methods: {
      check: function (e) {
        if (e.target.checked) {
          console.log(e.target.value)
        }
      },
      async loadData() {
        var pro = []
        this.zone.dataGet[0].zonas.forEach(function (k, index) {
          var urlProv = k._links.provincias.href
          var listProv = []
          api.getGeneral(urlProv, listProv)
          setTimeout(e => {
            pro.push(listProv)
          }, 320)
        })
        this.prov = pro
        if (this.prov !== 0) { this.full = true }
      },
      save(id) {
        if (this.dataPostDel.name.trim() !== '' && this.checkedNames.length !== 0) {
          this.dataPostDel.name = this.dataPostDel.name.trim()
          console.log(this.$data)
          api.put(this.apiBack + '/' + id, this.$data)
          setTimeout(e => {
            for (var i = 0; i < this.checkedNames.length; i++) {
              var head = '/zonas/' + id
              console.log(head)
              console.log(this.checkedNames[i])
              api.postWithHeader(this.apiBackProvince + '/' + this.checkedNames[i] + '/zona', head)
            }
            this.$router.push(this.page)
          }, 1300)
        }
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, this.DEF_DELAY))
      },
      refresh() {
        location.reload()
      },
      async deleteOne(key) {
        var elementDeleted = this.zone.dataGet[0].zonas.splice(key, 1)
        var id = elementDeleted[0].id
        api.delete(this.apiBack + '/' + id, this.$data)
        this.dataPostDel = this.dataGet[key]
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

