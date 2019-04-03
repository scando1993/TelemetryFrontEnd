<template>
    <div id ='main'>
      <select v-model="devices.selectedDeviceName" v-on:change="getGetData">
        <option v-for="(item, index) in devices.lastDevices" :key="index">{{item.name}}</option>
      </select>
      <button v-on:click="getGetData">Reload</button>
      <div class='span12'>
      <div class='box'>
      <div class='row center-block'>
          <div class='col-md-12'>
            <div class='box-body'>
              <div class='dataTables_wrapper form-inline dt-bootstrap' id='example1_wrapper'>
                <div class='row'>
                  <div class='col-sm-12 table-responsive'>
                    <table class='table table-bordered table-striped dataTable'>
                      <tr role='row'> 
                          <td>Nombre</td> 
                          <td>Telemetria</td>
                          <td>Valor</td>
                          <td>Ubicacion</td>
                          <td>DTM</td>
                      </tr>
                      <tr role='row' v-for="data1, index1 in telemetries.t">
                            <td>{{devices.selectedDevice.name}}</td>
                            <td>{{data1.name}}</td>
                            <td>{{data1.value}}</td>
                            <td>{{trackings.t[index1].location}}</td>
                            <td>{{trackings.t[index1].dtm}}</td>           
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </div>
      </div>
    </div>
</template>
<<script>
  import api from '@/api/goApi.js'
  export default {
    data() {
      return {
        endPointDevices: '/devices',
        endPointTelemtries: '/telemtries',
        endPointLastTelemtry: '/getLastTelemetry?device=',
        endPointLastTracking: '/getLastTracking?device=',
        timer: 0,
        DEF_DELAY: 5000,
        devices: {
          error: '',
          dataGet: [],
          lastDevices: [],
          lastTelemetries: [],
          lastTrackings: [],
          selectedDeviceName: '',
          selectedDevice: ''
        },
        telemetries: {
          error: '',
          dataGet: [],
          t: []
        },
        trackings: {
          error: '',
          dataGet: [],
          t: []
        }
      }
    },
    mounted() {
      this.getDevices()
      // this.timer = setInterval(this.getGetData, 20000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      async getDevices() {
        api.getAll(this.endPointDevices, this.devices)
        await this.sleep()
        this.devices.lastDevices = this.devices.dataGet[0].devices
        // this.getLastTelemetries()
      },
      async getSelectedTelemetries() {
        var url = this.devices.selectedDevice._links.telemetrias.href
        url = '/' + url.split('/').slice(3).join('/')
        console.log(url)
        api.getAll(url, this.telemetries)
        // await this.sleep()
        setTimeout(e => {
          this.telemetries.t = this.telemetries.dataGet[0].telemetrias
        }, 2000)
        // console.log(this.telemetries)
      },
      async getSelectedTrackings() {
        var url = this.devices.selectedDevice._links.trackings.href
        url = '/' + url.split('/').slice(3).join('/')
        console.log(url)
        api.getAll(url, this.trackings)
        // await this.sleep()
        setTimeout(e => {
          this.trackings.t = this.trackings.dataGet[0].trackings
        }, 2000)
      },
      async getLastTelemetries() {
        this.devices.lastDevices.forEach(element => {
          var name = element.name
          api.getAll(this.endPointLastTelemtry + name, this.telemetries)
          api.getAll(this.endPointLastTracking + name, this.trackings)
          setTimeout(e => {
            var response = this.telemetries.dataGet
            var response2 = this.trackings.dataGet
            var track = {
              location: response2[1]
            }
            var telemetry = {
              sensor: response[2],
              value: response[3],
              dtm: response[1]
            }
            this.devices.lastTelemetries.push(telemetry)
            this.devices.lastTrackings.push(track)
          }, 3000)
        })
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, this.DEF_DELAY))
      },
      cancelAutoUpdate() {
        clearInterval(this.timer)
      },
      getSelectDevice(deviceName) {
        this.devices.selectedDevice = api.search(this.devices.lastDevices, 'name', deviceName)
      },
      getGetData() {
        this.getSelectDevice(this.devices.selectedDeviceName)
        this.getSelectedTelemetries()
        this.getSelectedTrackings()
      }
    }
  }
</script>
<style>
@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');
</style>
