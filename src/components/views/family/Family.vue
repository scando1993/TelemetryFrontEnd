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
              <router-link class="pageLink" to="/createFamily">
                <a class="btn btn-circle show-tooltip" title="Añadir nueva zona" href="/createZFamily">
                  <i class="fa fa-plus"></i>
                </a>
              </router-link>
              <router-link class="pageLink" to="/family">
                <a class="btn btn-circle show-tooltip" v-on:click='refresh' title="Actualizar" id="refreshed" href="/family">
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
                    <table aria-describedby="Table_of_family" role="grid" id="table_family"  class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="Name: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Nombre</th>
                          <th aria-label="Group: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Grupo</th>
                          <th class="JustifyButtonTD" ></th>
                        </tr>
                      </thead>
                      <tbody id="fields" v-if="full">
                        <tr class="even" role="row" v-for="dato, index in family.dataGet[0].families">
                          
                          <td class="TextFieldC">{{dato.name}}</td>
                          <td class="TextFieldC">{{dato.group.name}}</td>

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
                                        <label class="col-sm-3 control-label">Grupo</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <select v-model="selectedGroup" required class="FormatSelect">
                                            <option disabled value="">Por favor seleccionar uno</option>
                                            <option v-for="datoB in group.dataGet[0].groups">{{datoB.name}}</option>
                                          </select>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                  
                                  <!--end modal-body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/family">
                                      <button class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                      <button type="submit" id="saveButton" class="btn btn-default" data-dismiss="modal" v-on:click="save(dato.id)">Guardar</button>
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
        apiBack: '/families',
        apiBackGroup: '/groups',
        page: '/family',
        nameToExport: 'Familias',
        selectedGroup: '',
        DEF_DELAY: 5000,
        full: false,
        dataRespond: [],
        group: {
          dataGet: [
            {
              groups: [{
                id: '',
                name: '',
                _links: {}
              }]
            }
          ],
          error: ''
        },
        family: {
          dataGet: [
            {
              families: [{
                id: '',
                name: '',
                group: { name: '' }
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
      api.getAll(this.apiBackGroup, this.group)
      api.getAll(this.apiBack, this.family)
      setTimeout(e => {
        console.log(this.family.dataGet[0].families)
        if (this.family.dataGet[0].families.length !== 0) { this.full = true }
        this.$nextTick(() => {
          $('#table_family').DataTable()
        })
      }, this.inicialDelay)
    },
    methods: {
      async save(id) {
        this.dataPostDel.name = this.dataPostDel.name.trim()
        if (this.dataPostDel.name !== '') {
          var idGroup = api.search(this.group.dataGet[0].groups, 'name', this.selectedGroup).id
          await api.put(this.apiBack + '/' + id, this.$data)
          var head = '/groups/' + idGroup
          console.log(head)
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + id + '/groupFamily', head)
            this.$router.push(this.page)
          }, 1100)
        }
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, this.DEF_DELAY))
      },
      refresh() {
        location.reload()
      },
      async deleteOne(key) {
        var elementDeleted = this.family.dataGet[0].families.splice(key, 1)
        var id = elementDeleted[0].id
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      exportExcel() {
        // var rep = this.dataGet
        var rep = JSON.parse(JSON.stringify(this.family.dataGet[0].families))
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.family.dataGet[0].families))
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Nombre', dataKey: 'name' },
          { title: 'Grupos', dataKey: 'group.name' }
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

