<template>
  <ul class="table-menu">
    <!--Box content-->
    <v-button class='btn btn-circle show-tooltip export-to-file fa fa-file-excel-o' name='bodega.xls' title='Exportar a Excel' v-on:click='exportExcel' data-table='table-terminals'>
    </v-button>
    <v-button class='btn btn-circle show-tooltip export-to-file fa fa-file-pdf-o' title='Exportar a PDF' v-on:click='exportPDF' data-table='table-terminals'>
    </v-button>
    <router-link class='pageLink' to='/createStore'>
      <v-button class='btn btn-circle show-tooltip fa fa-plus' title='Añadir nuevo' href='/createStore'>
      </v-button>
    </router-link>
    <router-link class="pageLink" to="/store">
      <v-button class="btn btn-circle show-tooltip fa fa-repeat" title="Actualizar" v-on:click='refresh' id="refresh-administrators" href="/store">
      </v-button>
    </router-link>
  </ul>
</template>
<script>
  import api from '@/api/goApi.js'
  export default {
    data() {
      return {
        apiBack: '/api/',
        nameToExport: 'bodega',
        views: {
          error: '',
          dataGet: {}
        }
      }
    },
    name: 'TableMenu',
    methods: {
      exportExcel() {
        api.getAll(this.apiBack + this.nameToExport, this.views)
        var rep = JSON.parse(JSON.stringify(this.views.dataGet))
        api.exportExcel(this.nameToExport, rep)
      },
      exportPDF() {
        var rep = JSON.parse(JSON.stringify(this.views.dataGet))
        var columns = [
          { title: 'ID', dataKey: 'id' },
          { title: 'Ubicacion', dataKey: 'zone' },
          { title: 'Nombre', dataKey: 'name' }
        ]
        api.exportPDF(this.nameToExport, 'La Favorita', columns, rep)
      }
    }
  }
</script>
<style>
  /* override default */
  .sidebar-menu > li > a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active > a > .fa-angle-left, .sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
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
