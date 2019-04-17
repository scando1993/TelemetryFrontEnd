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
              <router-link class='pageLink' to='/createFormat'>
                <a class='btn btn-circle show-tooltip' title='Añadir formato' href='/createFormat'>
                  <i class='fa fa-plus'></i>
                </a>
              </router-link>
              <router-link class='pageLink' to='/format'>
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
                    <table aria-describedby="Tabla_de_elementos" role="grid" id="table_format" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="Nombre: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Nombre</th>
                          <th aria-label="Codigo: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Código</th>
                          <th aria-label="Local: activate to sort column ascending" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting ToButtons">Local</th>
                          <th class="JustifyButtonTD"></th>
                        </tr>
                      </thead>
                      <tbody id="fields_boxcar" v-if="full">
                        <tr class="even" role="row" v-for="dato,index in getFormat.dataGet">
                          <td class="TextFieldC">{{dato.nameFormato}}</td>
                          <td class="TextFieldC">{{dato.code}}</td>
                          <td class="TextFieldC">{{dato.nameLocal}}</td>
                          <td class="JustifyButtonTD">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Delete" v-on:click='deleteOne(index)'>
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Edit" v-on:click='editOne(index)'>
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
                                    <form action="/create" method="POST" class="form-horizontal" id="bodega-form">
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Nombre</label>
                                        <div class="col-sm-9  controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.name" v-model="dataPostDel.name" name="name" maxlength="50" value="">
                                        </div>
                                      </div><br />
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Código</label>
                                        <div class="col-sm-9 controls">
                                          <input type="text" class="form-control-modal" v-bind:placeholder="dato.code" v-model="dataPostDel.code" name="code" maxlength="50" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-4 control-label">Local</label>
                                        <div class="col-sm-9 controls">
                                          <select v-model="selectedLocal" class="FormatSelect">
                                            <option disabled value="">Por favor seleccionar uno</option>
                                            <option v-for="datoL in locals.dataGet[0].localeses">{{ datoL.name }}</option>
                                          </select>
                                        </div>
                                      </div>

                                    </form>
                                  </div>
                                  <!--end modal-body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/format">
                                      <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                      <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="save(dato.idFormato)">Guardar</button>
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
        inicialDelay: 2100,
        apiBack: '/formatoes',
        apiBackForm: '/formato',
        apiBackLocals: '/localeses',
        apiBackGetFormats: '/getFormatoes',
        selectedLocal: '',
        getFormat: [],
        local: [],
        full: false,
        formats: {
          error: '',
          dataGet: [
            {
              formatoes: [{
                name: '',
                code: ''
              }]
            }]
        },
        locals: {
          error: '',
          dataGet: [
            {
              localeses: [{
                name: ''
              }]
            }]
        },
        nameToExport: 'Formato',
        error: '', // aqui se guardara el ultimo status de error
        dataGet: [], // debe dejarse como arreglo vacio
        dataPostDel: { // este es basicamente un JSON
          name: '',
          code: ''
        }
      }
    },
    name: 'Formato',
    beforeMount() {
      api.getAll(this.apiBackGetFormats, this.getFormat)
    },
    mounted() {
      api.getAll(this.apiBack, this.formats)
      //  setTimeout(e => {
      //  this.loadData()
      //  }, 100)
      setTimeout(e => {
        //  api.getAll(this.apiBackGetFormats, this.getFormat)
        console.log(this.getFormat.dataGet)
        if (this.getFormat.dataGet.length !== 0) { this.full = true }
        this.$nextTick(() => {
          $('#table_format').DataTable()
        })
      }, this.inicialDelay)
      api.getAll(this.apiBackLocals, this.locals)
    },
    methods: {
      refresh() {
        location.reload()
      },
      async loadData() {
        var loc = []
        this.formats.dataGet[0].formatoes.forEach(function (k, index) {
          var urlLocal = k._links.locales.href
          var locResp = {}
          api.getGeneral(urlLocal, locResp)
          setTimeout(e => {
            console.log(locResp)
            loc.push(locResp.dataGet[4])
          }, 200)
        })
        this.local = loc
        if (this.local !== 0) { this.full = true }
      },
      deleteOne(key) {
        this.dataPostDel = this.getFormat.dataGet[key]
        this.getFormat.dataGet.splice(key, 1)
        var id = this.dataPostDel.idFormato
        console.log(id)
        console.log(api.delete(this.apiBackForm + '/' + id, this.$data))
      },
      save(id) {
        if (this.dataPostDel.name.trim() !== '' && this.dataPostDel.code.trim() !== '') {
          var idLocal = api.search(this.locals.dataGet[0].localeses, 'name', this.selectedLocal).id
          this.dataPostDel.name = this.dataPostDel.name.trim()
          this.dataPostDel.code = this.dataPostDel.code.trim()
          api.put(this.apiBack + '/' + id, this.$data)
          var head = '/localeses/' + idLocal
          setTimeout(e => {
            api.postWithHeader(this.apiBack + '/' + id + '/locales', head)
            this.$router.push(this.page)
          }, 1100)
        }
      },
      exportExcel() {
        api.exportExcel(this.nameToExport, this.getFormat.dataGet)
      },
      exportPDF() {
        var columns = [
          { title: 'ID', dataKey: 'idFormato' },
          { title: 'Nombre', dataKey: 'nameFormato' },
          { title: 'Código', dataKey: 'code' },
          { title: 'Local', dataKey: 'nameLocal' }
        ]
        api.exportPDF(this.nameToExport, 'La Favorita', columns, this.getFormat.dataGet)
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
