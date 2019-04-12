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
            <input type="radio" :value="datoL.id" :id="datoL.id" v-model="pickedAll" v-on:click="loadData(datoL.id)">
            <label>Ruta{{datoL.id}} con fecha fin:  {{datoL.end_date}}</label>
          </li>
        </ul>
      </div>
      <componentAll v-if="pickedAll!='' && showing == true" :showing="showing" :pickedAll="pickedAll" :temperatures="temperatures" :timeL="timeL" :max="ToProduc[0].dataGet[1]" :min="ToProduc[0].dataGet[2]" :maxIdeal="ToProduc[0].dataGet[3]" :minIdeal="ToProduc[0].dataGet[4]"></componentAll>

    </div>

    <div class="routeDialog info-box form-horizontal" v-if="picked=='products'">
      <!--<label for="one">Mostrando lista productos</label>-->
      <div class="form-group">
        <ul id="checkboxZone" class="GroupCheckbox">
          <li v-for="datoL, indexU in prod" class="col-sm-12 controls">
            <input type="checkbox" :value="datoL.dataGet[0]" :id="datoL.dataGet[0]" v-model="checkedProducts" @click="check($event)">
            <label>{{datoL.dataGet[5]}}</label>
          </li>
        </ul>
      </div>
      <div class="lineButton">
        <button class="btn btn-default " v-on:click="getRoutesOfProduct()">Generar Gráficas</button>
      </div>
      <div v-for="dato, index in AllProduct">
        <componentProducts v-if="showing" :listTemp="dato.listTemp" :showing="showing" :listDTMs="dato.listDTMs" :Max="dato.Max" :Min="dato.Min" :MaxIdeal="dato.MaxIdeal" :MinIdeal="dato.MinIdeal"></componentProducts>
      </div>
    </div>

    <div class="routeDialog info-box form-horizontal" v-if="picked=='devices'">
      <!--<label for="one">Mostrando devices</label>-->
      <div class="form-group">
        <ul id="checkboxZone" class="GroupCheckbox">
          <li v-for="datoL, indexU in devi" class="col-sm-12 controls">
            <input type="checkbox" :value="datoL.dataGet[0]" :id="datoL.dataGet[0]" v-model="checkedDevices" @click="check($event)">
            <label>{{datoL.dataGet[2]}}</label>
          </li>
          <componentDevice v-if="checkedDevices.length!=0"></componentDevice>
        </ul>
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
        apiBackDevice: '/devices',
        apiBackProduct: '/productoes',
        apiBackGetProduct: '/getProductos',
        picked: 'all',
        showing: false,
        pickedAll: '',
        ProductsTelem: [{}],
        AllProduct: [{}],
        telemetry: {
          dataGet: [
            {
              telemetrias: [{
                dtm: '',
                value: 0
              }]
            }],
          error: ''
        },
        listLines: [],
        temperatures: [],
        timeL: [],
        ToProduc: [{ dataGet: [] }],
        pathP: '',
        devi: [],
        prod: [],
        checkedProducts: [],
        checkedDevices: [],
        checkedPaths: [],
        paths: {
          dataGet: [
            {
              rutas: [{
                start_date: '',
                end_date: '',
                status: ''
              }]
            }],
          error: ''
        },
        pathsActive: [],
        devices: {
          dataGet: [
            {
              devices: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        products: {
          dataGet: [
            {
              productoes: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        }
      }
    },
    components: {
      'componentAll': () => import('./ViewAll'),
      'componentProducts': () => import('./ViewProductsGraph'),
      'componentDevice': () => import('./ViewDeviceGraph')
    },
    methods: {
      check: function (e) {
      },
      fillOut() {
        var temperature = ['Temperatura']
        var listTime = ['date']
        console.log(this.telemetry.dataGet[0].telemetrias)
        this.telemetry.dataGet[0].telemetrias.forEach(function (k, index) {
          temperature.push(k.value)
          console.log('horaaaaa')
          console.log(k.dtm)
          listTime.push(new Date(k.dtm)) // .toISOString()
        })
        this.temperatures = temperature
        this.timeL = listTime
        this.showing = true
      },
      loadData(p) {
        this.showing = false
        var pathSelect = api.search(this.paths.dataGet[0].rutas, 'id', p)
        var listTelemetry = {
          dataGet: [
            {
              telemetrias: [{
                dtm: '',
                value: 0
              }]
            }],
          error: ''
        }
        var product = []
        var urlProd = pathSelect._links.producto.href
        var urlDev = pathSelect._links.device.href
        setTimeout(e => {
          var varProduct = {}
          var varDevice = {}
          api.getGeneral(urlProd, varProduct)
          api.getGeneral(urlDev, varDevice)
          setTimeout(e => {
            console.log(varProduct)
            product.push(varProduct)
            setTimeout(e => {
              var urlTelemetry = varDevice.dataGet[6].telemetrias.href
              listTelemetry = api.getGeneral(urlTelemetry, listTelemetry)
              console.log('algo aquiii ')
              console.log(listTelemetry)
              setTimeout(e => {
                this.telemetry = listTelemetry
                setTimeout(e => {
                  this.fillOut()
                }, 250)
              }, 250)
            }, 250)
          }, 250)
        }, 200)
        this.ToProduc = product
      },
      getActiveDevice() {
        console.log('Obteniendo dispos activos...')
        var activePath = []
        var device = []
        var product = []
        this.paths.dataGet[0].rutas.forEach(function (k, index) {
          console.log(k._links.device.href)
          console.log(k.status)
          var urlProduct = k._links.producto.href
          var urlDevice = k._links.device.href
          var varDevice = {}
          var varProduct = {}
          setTimeout(e => {
            api.getGeneral(urlDevice, varDevice)
            api.getGeneral(urlProduct, varProduct)
            setTimeout(e => {
              if (k.status === 'Activo' || k.status === 'No efectivo' || k.status === 'No ideal') {
                console.log('activo')
                console.log(varDevice)
                activePath.push(k)
                device.push(varDevice)
                product.push(varProduct)
              }
            }, 600)
          }, 500)
        })
        this.pathsActive = activePath
        this.devi = device
        this.prod = product
      },
      getRoutesOfProduct() {
        this.showing = false
        this.AllProduct = [{}]
        for (var i = 0, n = this.checkedProducts.length; i < n; i++) {
          var AllProduct = {
            listDTMs: [],
            listTemp: [],
            Max: 0,
            Min: 0,
            MaxIdeal: 0,
            MinIdeal: 0
          }
          console.log(this.checkedProducts[i])
          // buscamos cada producto y obtenemos las URL de cada ruta
          var product = api.search(this.ProductsTelem.dataGet, 'id', this.checkedProducts[i])
          for (var j = 0, k = product.rutas.length; j < k; j++) {
            AllProduct = {
              listDTMs: [],
              listTemp: [],
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
            var title = 'Temperatura-' + product.name + '-'
            if (product.rutas[j].status === 'Activo' || product.rutas[j].status === 'No ideal' || product.rutas[j].status === 'No efectiva') {
              var temperatures = [title + 'Ruta' + product.rutas[j].id + '-Estado: ' + product.rutas[j].status]
              var dtms = []
              console.log('una vez mas')
              for (var p = 0, m = product.rutas[j].device.telemetrias.length; p < m; p++) {
                temperatures.push(product.rutas[j].device.telemetrias[p].value)
                dtms.push(product.rutas[j].device.telemetrias[p].dtm)
              }
              AllProduct.listTemp = temperatures
              AllProduct.listDTMs = dtms
              this.AllProduct.push(AllProduct)
            }
          }
          console.log(this.AllProduct)
        }
        this.showing = true
        this.checkedProducts = []
      }
    },
    beforeMount() {
      api.getAll(this.apiBackProduct, this.products)
      api.getAll(this.apiBackGetProduct, this.ProductsTelem)
    },
    mounted() {
      api.getAll(this.apiBack, this.paths)
      setTimeout(e => {
        this.getActiveDevice()
      }, 500)
      api.getAll(this.apiBackDevice, this.devices)
      console.log(this.products)
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
