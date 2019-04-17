<template>
  <section class='content'>
    <div class='span12'>
      <div class='box'>
        <!--Box content-->
        <div class='box-content'>
          <div class='btn-toolbar pull-right clearfix'>
            <div class='btn-group'>
              <!--<TableMenu/>-->
              <a class='btn btn-circle show-tooltip export-to-file' name='device.xls' title='Exportar a Excel' v-on:click='exportExcel' data-table='table-terminals'>
                <i class='fa fa-file-excel-o'></i>
              </a>
              <a class='btn btn-circle show-tooltip export-to-file' title='Exportar a PDF' v-on:click='exportPDF' data-table='table-terminals'>
                <i class='fa fa-file-pdf-o'></i>
              </a>
              <router-link class='pageLink' to='/createDevice'>
                <a class='btn btn-circle show-tooltip' title='Añadir dispositivo' href='/createDevice'>
                  <i class='fa fa-plus'></i>
                </a>
              </router-link>             
              <router-link class="pageLink" to="/devices">
                <a class="btn btn-circle show-tooltip" title="Actualizar" v-on:click='refresh' id="refresh-administrators" href="/devices">
                  <i class="fa fa-repeat"></i>
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
                  <div class='col-sm-12 table-responsive'>
                      <table aria-describedby='Table_of_elements' role='grid' id='table_device' class='table table-bordered table-striped dataTable'>
                        <thead>
                          <tr role='row'>
                            <th aria-label='UUID: activate to sort column descending' aria-sort='ascending' style='width: 35px;' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting_asc TextCenterTH'>UUID</th>
                            <th aria-label='Nombre: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Nombre</th>
                            <th aria-label='Familia: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Familia</th>
                            <th aria-label='Familia: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Grupo</th>
                            <th aria-label='Status: activate to sort column ascending' colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Estado</th>
                            <th class="JustifyButtonTD"></th>
                          </tr>
                        </thead>
                        <tbody id='fields'>
                          <tr class='even' role='row' v-for='dato,index in devices.dataGet[0].devices'>
                            <td class='sorting_1 TextFieldC'>{{dato.uuid}}</td>
                            <td class="TextFieldC"><a v-bind:href="'#'+index+'s'" v-on:click="showMore(index, dato.id)">{{dato.name}}</a></td>
                            <td class="TextFieldC">{{dato.family}}</td>
                            <td class="TextFieldC">{{dato.group["name"]}}</td>
                            <td class="TextFieldC">
                              <b><u>{{dato.description}}</u></b><br/>
                              <span v-if="full && index===indexSelect">
                                <tdd id="moveView1"><small><b>Batería:</b> {{showMoreText[1]}}</small></tdd><br />
                                <tdd id="moveView2"><small><b>Última transmisión: </b> {{showMoreText[2]}}</small></tdd><br />
                                <tdd id="moveView3"><small><b>Nivel de la señal: </b>{{showMoreText[3]}}</small></tdd><br />
                                <tdd id="moveView4"><small><b>Última actualización: </b>{{showMoreText[4]}}</small></tdd>
                              </span>
                            </td>
                            <!--Start Buttom-->
                            <td class='JustifyButtonTD'>
                              <a class='btn btn-circle btn-danger show-tooltip confirm hidden-xs' title='Delete' message='Are you sure to delete this device?' v-on:click='deleteOne(index)'>
                                <i class='fa fa-trash-o'></i>
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
                                      <button type="button" class="close" data-dismiss="modal"  aria-hidden="true">&times;</button>
                                      <h4 class="modal-title">Editar</h4>
                                    </div>
                                    <!--end modal-header-->
                                    <!--Modal-body-->
                                    <div class="modal-body">
                                      <form action="/create" method="POST" class="form-horizontal" id="bodega-form">
                                        <div class="form-group">
                                          <label class="col-sm-3 col-lg-2 control-label">UUID</label>
                                          <div class="col-sm-12 col-lg-15 controls">
                                            <input type="text" required class="form-control-modal" name="uuid" v-bind:placeholder="dato.uuid" v-model="dataPostDel.uuid" id="uuid" maxlength="50" value="">
                                            <br />
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-3 col-lg-2 control-label">Nombre</label>
                                          <div class="col-sm-12 col-lg-15 controls">
                                            <input type="text" required class="form-control-modal" name="name" v-bind:placeholder="dato.name" v-model="dataPostDel.name" id="name" maxlength="50" value="">
                                            <br />
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-3 col-lg-2 control-label">Familia</label>
                                          <div class="col-sm-12 col-lg-15 controls">
                                            <input type="text" required class="form-control-modal" name="family" v-bind:placeholder="dato.family" v-model="dataPostDel.family" id="family" maxlength="50" value="">
                                            <br />
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="col-sm-3 control-label">Grupos</label>
                                          <div class="col-sm-9 col-lg-10 controls">
                                            <select v-model="selectedGroup" required class="FormatSelect">
                                              <option disabled value="">Por favor seleccionar uno</option>
                                              <option v-for="datoB in group.dataGet[0].groups">{{datoB.name}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <br />
                                      </form>
                                    </div>
                                    <!--end modal-body-->
                                    <!--Modal-footer-->
                                    <div class="modal-footer">
                                      <router-link class="pageLink" to="/devices">
                                        <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                        <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="save(dato.id,dato.description)">Guardar</button>
                                      </router-link>
                                    </div>
                                    <!--end modal-footer-->
                                  </div>
                                </div>
                              </div>
                              <!--end modal-->
                            </td>
                            <!--End Buttom-->
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
  import 'datatables.net'
  import 'datatables.net-bs'
  import api from '@/api/goApi.js'
  //  import TableMenu from './../TableMenu'
  export default {
    //  components: { TableMenu },
    data() {
      return {
        inicialDelay: 3000,
        apiBack: '/devices',
        apiBackGroup: '/groups',
        apiBackStatus: '/statuses',
        apiBackGetStatus: '/getLastStatus?deviceid=',
        nameToExport: 'Dispositivos',
        showMoreText: [],
        full: false,
        indexSelect: 0,
        selectedGroup: '',
        dataRespond: [],
        devices: {
          dataGet: [
            {
              devices: [{
                id: '',
                uuid: '',
                name: '',
                family: '',
                group: {
                  'id': 0,
                  'name': ''
                },
                _links: {}
              }]
            }
          ],
          error: ''
        },
        group: {
          dataGet: [
            {
              groups: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        error: '', // aqui se guardara el ultimo status de error
        dataGet: [], // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          name: '',
          uuid: '',
          family: '',
          description: ''
        }
      }
    },
    name: 'Devices',
    mounted() {
      setTimeout(e => {
        this.$nextTick(() => {
          $('#table_device').DataTable()
        })
      }, this.inicialDelay)
      api.getAll(this.apiBack, this.devices)
      api.getAll(this.apiBackGroup, this.group)
    },
    methods: {
      activeStatus(text) {
        if (text[2] !== null && this.full === false) {
          this.full = true
        } else if (this.full === true) {
          this.full = false
        } else { }
      },
      showMore(index, id) {
        console.log('mostrando mas info...')
        if (this.devices.dataGet[0].devices[index].description === 'Activo') {
          //  var link = this.devices.dataGet[0].devices[index]._links.status.href
          //  var statu = { dataGet: [] }
          var statu = []
          statu = api.getAll(this.apiBackGetStatus + id, statu)
          setTimeout(e => {
            this.showMoreText = statu.dataGet
            this.indexSelect = index
            this.activeStatus(this.showMoreText)
          }, 300)
        } else { }
      },
      refresh() {
        location.reload()
      },
      deleteOne(key) {
        var elementDeleted = this.devices.dataGet[0].devices.splice(key, 1)
        var id = elementDeleted[0].id
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      save(index, description) {
        var id = api.search(this.devices.dataGet[0].devices, 'id', index).id
        var idGroup = api.search(this.group.dataGet[0].groups, 'name', this.selectedGroup).id
        this.dataPostDel.name = this.dataPostDel.name.trim()
        this.dataPostDel.family = this.dataPostDel.family.trim()
        this.dataPostDel.description = description
        api.put(this.apiBack + '/' + id, this.$data)
        setTimeout(e => {
          var head = '/groups/' + idGroup
          api.postWithHeader(this.apiBack + '/' + id + '/groupFamily', head)
          this.$router.push(this.page)
        }, 1600)
      },
      exportExcel() {
        var rep = JSON.parse(JSON.stringify(this.devices.dataGet[0].devices))
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.devices.dataGet[0].devices))
        var columns = [
          {title: 'ID', dataKey: 'id'},
          { title: 'Nombre', dataKey: 'name' },
          { title: 'UUID', dataKey: 'uuid' },
          { title: 'Familia', dataKey: 'family' },
          { title: 'Descripción', dataKey: 'description' }
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
      content: '\f0dc';
    }

    table.dataTable thead .sorting_asc:after {
      content: '\f0dd';
    }

    table.dataTable thead .sorting_desc:after {
      content: '\f0de';
    }
</style>
