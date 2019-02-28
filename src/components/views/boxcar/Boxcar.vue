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
              <router-link class='pageLink' to='/createBoxcar'>
                <a class='btn btn-circle show-tooltip' title='Añadir ruta' href='/createBoxcar'>
                  <i class='fa fa-plus'></i>
                </a>
              </router-link>
              <router-link class='pageLink' to='/boxcar'>
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
                    <table aria-describedby="Table_of_elements" role="grid" id="table_store" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="ID: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">ID</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Número del Furgón</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Nombre</th>
                          <th aria-label="Nombre: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Ubicaciones</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody id="fields">
                        <tr class="even" role="row" v-for="dato, index in dataGet ">
                          <td class="sorting_1">{{dato.id}}</td>
                          <td>{{dato.numFurgon}}</td>
                          <td>{{dato.name}}</td>
                          <td>
                            <tdd v-for="ubicacion, indexUbi in dato.Ubicaciones" v-bind:data="indexUbi" v-bind:key="indexUbi.text">{{ubicacion.zone}}<br /></tdd>
                          </td>
                          <td class="col-lg-2 col-md-1 col-sm-1 col-xs-1">
                            <a class="btn btn-circle btn-danger show-tooltip confirm hidden-xs" title="Eliminar" message="Are you sure to delete the selected device?" v-on:click='deleteOne(index)'>
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a class="btn btn-circle btn-link show-tooltip confirm hidden-xs" v-bind:href="'#'+index+'s'" data-toggle="modal" role="button" title="Editar" v-on:click='editOne(index)'>
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
                                        <label class="col-sm-5 control-label">No.Furgón</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="number" class="form-control" v-bind:placeholder="dato.numFurgon" name="name" v-model="dataPostDel.numFurgon" id="name_store" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-5 control-label">Nombre</label>
                                        <div class="col-sm-9 col-lg-10 controls">
                                          <input type="text" class="form-control" v-bind:placeholder="dato.name" name="name" v-model="dataPostDel.name" id="name_store" value="">
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="col-sm-offset-3 control-label">Seleccione las Ubicaciones</label>
                                        <br />
                                      </div>
                                      <div id="checkboxUbi" class="form-group">
                                        <ul>
                                          <li v-for="datoL, indexU in ubications.dataGet" class="col-sm-3  controls">
                                            <input type="checkbox" :value="datoL.id" :id="datoL.id" v-model="checkedNames" @click="check($event)">
                                            <label>{{datoL.zone}}--{{datoL.city}}</label>
                                          </li>
                                        </ul>
                                      </div>
                                      
                                    </form>
                                  </div>
                                  <!--end modal-body-->
                                  <!--Modal-footer-->
                                  <div class="modal-footer">
                                    <router-link class="pageLink" to="/boxcar">
                                      <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">Cerrar</button>
                                      <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="save(index)">Guardar</button>
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
                      <tfoot>
                        <tr>
                          <th colspan="1" rowspan="1">ID</th>
                          <th colspan="1" rowspan="1">Número del Furgón</th>
                          <th colspan="1" rowspan="1">Nombre</th>
                          <th colspan="1" rowspan="1">Ubicaciones</th>
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
  import api from '@/api/goApi.js'

  export default {
    data() {
      return {
        el: '#checkboxUbi',
        inicialDelay: 35000,
        myJson: jSon,
        apiBack: '/api/furgon',
        apiBackUbication: '/api/ubicacion',
        apiBackUbicationFurgon: 'api/ubicacionFurgon',
        checkedNames: [],
        ubications: {
          error: '',
          dataGet: []
        },
        ubicacionFurgon: {
          error: '',
          dataGet: []
        },
        nameToExport: 'Furgón',
        error: '', // aqui se guardara el ultimo status de error
        dataGet: [], // debe dejarse como arreglo vacio, ahora unicamente como prueba
        dataPostDel: { // este es basicamente un JSON
          numFurgon: '',
          name: ''
        }
      }
    },
    name: 'Furgon',
    mounted() {
      setTimeout(e => {
        this.$nextTick(() => {
          $('#table_store').DataTable()
        })
      }, this.inicialDelay)
      this.get()
      api.getAll(this.apiBackUbication, this.ubications)
      api.getAll(this.apiBackUbicationFurgon, this.ubicacionFurgon)
    },
    methods: {
      check: function (e) {
        if (e.target.checked) {
          console.log(e.target.value)
        }
      },
      searchUbication() {
        var ubicationsArray = []
        for (var i = 0; i < this.checkedNames.length; i++) {
          for (var j = 0; j < this.dataGet.length; j++) {
            if (this.dataGet[i] === this.checkedNames[j]) {
              ubicationsArray.append(this.dataGet[i])
            }
          }
        }
        return ubicationsArray
      },
      refresh() {
        location.reload()
      },
      get() {
        api.getAll(this.apiBack, this.$data)
      },
      post() {
        api.post(this.apiBack, this.$data)
      },
      delete(id) {
        api.delete(this.apiBack + '/' + id, this.$data)
      },
      deleteOne(key) {
        // se actualiza la info a eliminar
        var id = this.dataGet[key].id
        this.dataGet.splice(key, 1)
        this.delete(id)
      },
      save(index) {
        console.log('Aun no hace nada')
        console.log(index)
        console.log(this.dataGet[index])
        // this.dataPostDel = this.dataGet[index]
        var idFurgon = this.dataGet[index].id
        // var idUbication = api.search(this.ubications.dataGet, 'zone', this.selectedLocal.split('--')[0]).id
        var idRelacion = ''
        this.ubicacionFurgon.dataGet.forEach(element => {
          if (element.furgon.id === Number(idFurgon)) {
            idRelacion = element.id
          }
        })
        console.log('El idRelacion es: ' + idRelacion + '\nSe procede a hacer el put de furgon')
        console.log(this.apiBack + '/' + idFurgon)
        api.put(this.apiBack + '/' + idFurgon)
        // console.log('El ide foraneo es' + idUbication + 'El id de formato es' + id)
        console.log('Ahora se elimina la relacion:')
        console.log(this.apiBackUbicationFurgon + '/' + idRelacion)
        api.delete(this.apiBackUbicationFurgon + '/' + idRelacion)
        console.log('Ahora los campos seleccionados: ')
        console.log(this.checkedNames)
        this.checkedNames.forEach(idUbicacion => {
          console.log(this.apiBackUbicationFurgon + '/' + idRelacion + '/' + idUbicacion + '/' + idFurgon)
          api.put(this.apiBackUbicationFurgon + '/' + idUbicacion + '/' + idFurgon)
        })
        console.log('Listo!!')
        // api.put(this.apiBack + '/' + id + '/' + idUbication, this.$data)
        this.get()
      },
      exportExcel() {
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        var cad = ''
        console.log('Aqi esta la parte de rep')
        console.log(rep)
        rep.forEach(element => {
          element.Ubicaciones.forEach(e => {
            cad = cad + e.zone + '-' + e.city + ', '
          })
          element.Ubicaciones = cad
          cad = ''
        })
        console.log('Aqui la cadena' + cad)
        rep.formatos = cad
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.dataGet))
        var cad = ''
        console.log('Aqi esta la parte de rep')
        console.log(rep)
        rep.forEach(element => {
          element.Ubicaciones.forEach(e => {
            cad = cad + e.zone + '-' + e.city + ', '
          })
          element.Ubicaciones = cad
          cad = ''
        })
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Numero Furgón', dataKey: 'numFurgon' },
          { title: 'Nombre', dataKey: 'name' },
          {title: 'Ubicaciones', dataKey: 'Ubicaciones'}
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
