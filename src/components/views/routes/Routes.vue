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
      <span>Picked: {{ picked }}</span>
    </div>
    <div class="routeDialog info-box form-horizontal" v-if="picked=='all'">
      <!--<label for="one">Mostrando todo</label>-->
      <div class="form-group">
        <ul id="checkboxPath" class="GroupCheckbox">
          <li v-for="datoL, indexU in pathsActive" class="col-sm-12 controls">
            <input type="radio" :value="datoL.id" :id="datoL.id" v-model="pickedAll" v-on:click="loadData(datoL.id)">
            <label>{{datoL.start_date}}****{{datoL.end_date}}</label>
            <span>Picked: {{ pickedAll }}</span>
            <br /><br />
          </li>
          <componentAll v-if="pickedAll!='' && showing == true" :showing="showing" :pickedAll="pickedAll" :temperatures="temperatures" :timeL="timeL" :max="ToProduc[0].dataGet[1]" :min="ToProduc[0].dataGet[2]" :maxIdeal="ToProduc[0].dataGet[3]" :minIdeal="ToProduc[0].dataGet[4]"></componentAll>
          
        </ul>
      </div>
    </div>

    <div class="routeDialog info-box form-horizontal" v-if="picked=='products'">
      <!--<label for="one">Mostrando lista productos</label>-->
      <div class="form-group">
        <ul id="checkboxZone" class="GroupCheckbox">
          <li v-for="datoL, indexU in prod" class="col-sm-12 controls">
            <input type="checkbox" :value="datoL.dataGet[0]" :id="datoL.dataGet[0]" v-model="checkedProducts" @click="check($event)">
            <label>{{datoL.dataGet[5]}}</label>
          </li>
          <componentProducts  v-if="checkedProducts.length!=0" :checkedProducts="checkedProducts" :listCte="listLines"></componentProducts>
        </ul>
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
        picked: 'all',
        showing: false,
        pickedAll: '',
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
      fillOut() {
        var temperature = ['Temperatura']
        var listTime = []
        console.log('oeoeoeooe')
        console.log(this.telemetry)
        this.telemetry.dataGet[0].telemetrias.forEach(function (k, index) {
          temperature.push(k.value)
          listTime.push(new Date(k.dtm).toISOString())
        })
        console.log(this.showing)
        this.temperatures = temperature
        this.timeL = listTime
        this.showing = true
        console.log(this.showing)
      },
      loadData(p) {
        console.log('pciked--' + p)
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
              api.getGeneral(urlTelemetry, listTelemetry)
              setTimeout(e => {
                this.fillOut()
              }, 250)
            }, 250)
          }, 250)
        }, 200)
        this.ToProduc = product
        this.telemetry = listTelemetry
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
              if (k.status === 'Activo') {
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
      getListLines() {
        console.log('enlistando products')
        var listlines = []
        this.checkedProducts.forEach(function (k, index) {
          var productElement = api.search(this.products.dataGet[0].productoes, 'id', k)
          setTimeout(e => {
            console.log(productElement)
            var max = productElement.dataGet[2]
            var min = productElement.dataGet[3]
            var maxIdeal = productElement.dataGet[4]
            var minIdeal = productElement.dataGet[5]
            listlines.push(max)
            listlines.push(min)
            listlines.push(maxIdeal)
            listlines.push(minIdeal)
          }, 200)
        })
        console.log(listlines)
        this.listLines = listlines
      }
    },
    mounted() {
      api.getAll(this.apiBack, this.paths)
      setTimeout(e => {
        console.log('heyyyyyyyyyy route')
        console.log(this.paths)
        this.getActiveDevice()
      }, 500)
      api.getAll(this.apiBackDevice, this.devices)
      api.getAll(this.apiBackProduct, this.products)
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
