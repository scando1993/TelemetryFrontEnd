<template>
  <!-- Main content -->
  <section class="content ">
    <div class="radioGroup">
      <input type="radio" id="all" value="all" v-model="picked">
      <label for="all">Todas</label>
      <input type="radio" id="products" value="products" v-model="picked">
      <label for="products">Productos</label>
      <input type="radio" id="devices" value="devices" v-model="picked">
      <label for="devices">Dispositivos</label>
      <br />
    </div>
    <div class="routeDialog info-box form-horizontal" v-if="picked=='all'">
      <!--<label for="one">Mostrando todo</label>-->
      <div class="form-group">
        <ul id="checkboxPath" class="GroupCheckbox">
          <li v-for="datoL, indexU in pathsActive" class="col-sm-12 controls">
            <input type="radio" v-on:click="loadDataRoute(datoL.id)" :value="datoL.id" :id="datoL.id" v-model="pickedAll" >
            <label :for="datoL.id">Ruta{{datoL.id}} con Device:  {{datoL.device.name}}</label>
          </li>
        </ul>
      </div>
      <!--Graph View-->
      <componentAll v-if="showing && pickedAll!=''" :listRegions="listRegions" :showing="showing" :titleGraph="titleGraph" :pickedAll="pickedAll" :temperatures="temperatures" :timeL="timeL" :max="RouteProductObj.temp_max" :min="RouteProductObj.temp_min" :maxIdeal="RouteProductObj.temp_max_ideal" :minIdeal="RouteProductObj.temp_min_ideal"></componentAll>
    </div>

    <div class="routeDialog info-box form-horizontal" v-if="picked=='products'">
      <!--<label for="one">Mostrando lista productos</label>-->
      <div class="form-group">
        <ul id="checkboxZone" class="GroupCheckbox">
          <li v-for="datoL, indexU in prod" class="col-sm-12 controls">
            <input type="checkbox" :value="datoL.id" :id="datoL.id" v-model="checkedProducts" @click="check($event)">
            <label>{{datoL.name}}</label>
          </li>
        </ul>
      </div>
      <div class="lineButton">
        <button class="btn btn-default " v-on:click="getRoutesOfProduct()">Generar Gráficas</button>
      </div>
      <!--Graph View-->
      <div v-for="dato, index in AllProduct">
        <componentProducts v-if="showing" :listRegions="dato.listRegions" :listTemp="dato.listTemp" :titleGraph="dato.titleGraph" :showing="showing" :listDTMs="dato.listDTMs" :Max="dato.Max" :Min="dato.Min" :MaxIdeal="dato.MaxIdeal" :MinIdeal="dato.MinIdeal"></componentProducts>
      </div>
    </div>

    <div class="routeDialog info-box form-horizontal" v-if="picked=='devices'">
      <!--<label for="one">Mostrando devices</label>-->
      <div class="form-group">
        <ul id="checkboxZone" class="GroupCheckbox">
          <li v-for="datoL, indexU in devi" class="col-sm-12 controls">
            <input type="checkbox" :value="datoL.id" :id="datoL.id" v-model="checkedDevices" @click="check($event)">
            <label>{{datoL.name}}</label>
          </li>
        </ul>
      </div>
      <div class="lineButton">
        <button class="btn btn-default " v-on:click="getRoutesOfDevice()">Generar Gráficas</button>
      </div>
      <div v-for="dato, index in AllDevice">
        <componentDevice v-if="showing" :listRegions="dato.listRegions" :listTemp="dato.listTemp" :titleGraph="dato.titleGraph" :showing="showing" :listDTMs="dato.listDTMs" :Max="dato.Max" :Min="dato.Min" :MaxIdeal="dato.MaxIdeal" :MinIdeal="dato.MinIdeal"></componentDevice>
      </div>
    </div>
</section>
  <!-- /.content -->
</template>
<script type="text/javascript">
  import api from '@/api/goApi.js'
  export default {
    data() {
      return {
        apiBack: '/rutas',
        apiBackGetProduct: '/getProductos',
        apiBackGetDevice: '/getDevices',
        apiBackGetRoutes: '/getRutas',
        apiBackRegion: '/getDataTrack?rutaid=',
        picked: 'all',
        pickedAll: '',
        showing: false,
        dataGet: [],
        listRegions: [],
        listRegionsD: [],
        listRegionsP: [],
        RouteProductObj: {}, // All: Objeto Producto para la ruta seleccionada
        ProductsTelem: [{}], // contiene el json del API
        DeviceTelem: [{}], // json del API
        RoutesAll: [{}],
        AllProduct: [{}], // Todas las rutas de un producto
        AllDevice: [{}], // Todas las rutas de un device
        listLines: [],
        temperatures: [],
        timeL: [],
        titleGraph: '',
        pathsActive: [], // Para Input All
        devi: [], // Para input device
        prod: [], // Para input producto
        checkedProducts: [],
        checkedDevices: []
      }
    },
    components: {
      'componentAll': () => import('./ViewAll'),
      'componentProducts': () => import('./ViewProductsGraph'),
      'componentDevice': () => import('./ViewDeviceGraph')
    },
    methods: {
      check: function (e) {
        this.showing = false
      },
      async loadDataRoute(id) {
        console.log(id + '--------')
        this.showing = false
        await api.getAll(this.apiBackRegion + id.toString(), this.$data)
        this.listRegions = this.dataGet
        var pathSelect = api.search(this.RoutesAll.dataGet, 'id', id)
        this.RouteProductObj = pathSelect.producto // object
        var temperature = ['Temperatura']
        var listTime = ['date']
        pathSelect.device.telemetrias.forEach(function (k, index) {
          temperature.push(k.value)
          listTime.push(new Date(k.dtm)) // .toISOString()
        })
        this.titleGraph = 'Ruta' + pathSelect.id + ' - Device: ' + pathSelect.device.name + ' - Producto: ' + pathSelect.producto.name
        this.temperatures = temperature
        this.timeL = listTime
        this.showing = true
        this.pickedAll = ''
      },
      //  Método para Obtener Productos, devices de Rutas Activas
      getRoutesActive(listAct) {
        console.log('Obteniendo dispos activos...')
        var activePath = []
        var device = []
        var product = []
        console.log(listAct)
        listAct.forEach(function (k, index) {
          if (k.status === 'Activo' || k.status === 'No efectiva' || k.status === 'No ideal') {
            activePath.push(k)
            device.push(k.device)
            product.push(k.producto)
          }
        })
        this.pathsActive = activePath
        this.devi = device
        this.prod = product
        console.log(this.pathsActive)
      },
      //  Método para obtener las rutas de un producto enviarlo a graficar
      async getRoutesOfProduct() {
        this.showing = false
        this.AllProduct = [{}]
        for (var i = 0, n = this.checkedProducts.length; i < n; i++) {
          var AllProduct = {
            listDTMs: [],
            listTemp: [],
            listRegions: [],
            Max: 0,
            Min: 0,
            MaxIdeal: 0,
            MinIdeal: 0
          }
          console.log(this.checkedDevices[i])
          // buscamos cada producto y obtenemos las URL de cada ruta
          var product = api.search(this.ProductsTelem.dataGet, 'id', this.checkedProducts[i])
          for (var j = 0, k = product.rutas.length; j < k; j++) {
            AllProduct = {
              listDTMs: [],
              listTemp: [],
              listRegions: [],
              titleGraph: '',
              Max: 0,
              Min: 0,
              MaxIdeal: 0,
              MinIdeal: 0
            }
            // agregamos en ese orden los límites de la gráfica
            AllProduct.Max = product.temp_max
            AllProduct.Min = product.temp_min
            AllProduct.MaxIdeal = product.temp_max_ideal
            AllProduct.MinIdeal = product.temp_min_ideal
            if (product.rutas[j].status === 'Activo' || product.rutas[j].status === 'No ideal' || product.rutas[j].status === 'No efectiva') {
              var title = 'Ruta' + product.rutas[j].id + ' - Producto: ' + product.name + ' - Device: ' + product.rutas[j].device.name + ' - Estado: ' + product.rutas[j].status
              var temperatures = ['Temperatura']
              var dtms = ['date']
              for (var p = 0, m = product.rutas[j].device.telemetrias.length; p < m; p++) {
                temperatures.push(product.rutas[j].device.telemetrias[p].value)
                dtms.push(new Date(product.rutas[j].device.telemetrias[p].dtm))
              }
              api.getAll(this.apiBackRegion + product.rutas[j].id.toString(), this.$data)
              AllProduct.titleGraph = title
              AllProduct.listTemp = temperatures
              AllProduct.listDTMs = dtms
              AllProduct.listRegions = this.dataGet
              this.AllProduct.push(AllProduct)
            }
          }
        }
        this.showing = true
        this.checkedProducts = []
      },
      // Método para obtener las telemetrias de un device
      async getRoutesOfDevice() {
        this.showing = false
        this.AllDevice = [{}]
        for (var i = 0, n = this.checkedDevices.length; i < n; i++) {
          var AllDevice = {
            listDTMs: [],
            listTemp: [],
            listRegions: [],
            Max: 0,
            titleGraph: '',
            Min: 0,
            MaxIdeal: 0,
            MinIdeal: 0
          }
          // buscamos cada device y obtenemos las URL de cada ruta
          var device = api.search(this.DeviceTelem.dataGet, 'id', this.checkedDevices[i])
          if (device.ruta.status === 'Activo' || device.ruta.status === 'No ideal' || device.ruta.status.trim() === 'No efectiva') {
            // agregamos en ese orden los límites de la gráfica
            api.getAll(this.apiBackRegion + device.ruta.id.toString(), this.$data)
            AllDevice.Max = device.ruta.producto.temp_max
            AllDevice.Min = device.ruta.producto.temp_min
            AllDevice.MaxIdeal = device.ruta.producto.temp_max_ideal
            AllDevice.MinIdeal = device.ruta.producto.temp_min_ideal
            var title = 'Ruta' + device.ruta.id + ' - Device: ' + device.name + ' - Producto: ' + device.ruta.producto.name + ' - Estado: ' + device.ruta.status
            var temperatures = ['Temperatura']
            var dtms = ['date']
            for (var p = 0, m = device.telemetrias.length; p < m; p++) {
              temperatures.push(device.telemetrias[p].value)
              dtms.push(new Date(device.telemetrias[p].dtm))
            }
            AllDevice.titleGraph = title
            AllDevice.listTemp = temperatures
            AllDevice.listDTMs = dtms
            AllDevice.listRegions = this.dataGet
            this.AllDevice.push(AllDevice)
          }
        }
        this.showing = true
        //  this.checkedDevices = []
      }
    },
    beforeMount() {
      api.getAll(this.apiBackGetProduct, this.ProductsTelem)
      api.getAll(this.apiBackGetDevice, this.DeviceTelem)
      api.getAll(this.apiBackGetRoutes, this.RoutesAll)
    },
    mounted() {
      setTimeout(e => {
        api.getAll(this.apiBackGetRoutes, this.RoutesAll)
        this.getRoutesActive(this.RoutesAll.dataGet)
      }, 1500)
    }
}</script>
<style>

  .info-box {
    cursor: pointer;
  }

  .info-box-content {
    text-align: left;
    vertical-align: middle;
    display: inherit;
  }

  .fullCanvas {
    width: 100%;
  }
</style>
