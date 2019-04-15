<template>
  <section class="content">
    <div id='main'>
      <select v-model="devices.selectedDeviceName" v-on:change="getGetData" class="FormatSelectTelem">
        <option v-for="(item, index) in devices.lastDevices" :key="index">{{item.name}}</option>
      </select>
      <button class="btn btn-default" v-on:click="getGetData">Reload</button>
      <div class='span12'>
        <div class='box'>
          <div class='row center-block'>
            <div class='col-md-12'>
              <div class='box-body'>
                <div class='dataTables_wrapper form-inline dt-bootstrap' id='example1_wrapper'>
                  <div class='row'>
                    <div class='col-sm-12 table-responsive'>
                      <table aria-describedby='Table_of_elements' role='grid' id='table_deviceTelemetry' class='table table-bordered table-striped dataTable'>
                        <thead>
                          <tr role='row'>
                            <th colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Nombre</th>
                            <th colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Telemetria</th>
                            <th colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Valor</th>
                            <th colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>Ubicacion</th>
                            <th colspan='1' rowspan='1' aria-controls='example1' tabindex='0' class='sorting ToButtons'>DTM</th>
                          </tr>
                        </thead>
                        <tr role='row' v-for="data1, index1 in trackings.t" >
                          <td class="TextFieldC">{{devices.selectedDevice.name}}</td>
                          <td class="TextFieldC">{{telemetries.t[index1].name}}</td>
                          <td class="TextFieldC">{{telemetries.t[index1].value}}</td>
                          <td class="TextFieldC">{{data1.location}}</td>
                          <td class="TextFieldC">{{telemetries.t[index1].dtm}}</td>
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
  </section>
</template>
<<script>
  import api from '@/api/goApi.js'
  export default {
    data() {
      return {
        endPointDevices: '/devices',
        endPointTelemtries: '/telemtries',
        endPointTelemtry: '/getDeviceTelemetry?device=',
        endPointTracking: '/getDeviceTrack?device=',
        endPointTelemetryBetweenDates: '/getTelemetryBetweenDates',
        endPointTrackingBetweenDates: '/getTrackingBetweenDates',
        timer: 0,
        updateJson: {},
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
        },
        updateTracks: {
          error: '',
          dataGet: [],
          dataPostDel: {}
        },
        updateTelemetries: {
          error: '',
          dataGet: [],
          dataPostDel: {}
        }
      }
    },
    mounted() {
      this.getDevices()
      // this.timer = setInterval(this.getUpdateData, 20000)
    },
    beforeDestroy() {
      if (this.devices.selectedDevice !== '') {
        clearInterval(this.timer)
      }
    },
    methods: {
      async getDevices() {
        api.getAll(this.endPointDevices, this.devices)
        await this.sleep()
        this.devices.lastDevices = this.devices.dataGet[0].devices
        // this.getLastTelemetries()
      },
      async getSelectedTelemetries() {
        // var url = this.devices.selectedDevice._links.telemetrias.href
        // url = '/' + url.split('/').slice(3).join('/')
        // console.log(url)
        console.log(this.endPointTelemtry + this.devices.selectedDeviceName)
        api.getAll(this.endPointTelemtry + this.devices.selectedDeviceName, this.telemetries)
        // await this.sleep()
        setTimeout(e => {
          this.telemetries.t = this.telemetries.dataGet
          // this.telemetries.t = this.telemetries.dataGet[0].telemetrias
        }, 2000)
        // console.log(this.telemetries)
      },
      async getSelectedTrackings() {
        // var url = this.devices.selectedDevice._links.trackings.href
        // url = '/' + url.split('/').slice(3).join('/')
        // console.log(url)
        console.log(this.endPointTracking + this.devices.selectedDeviceName)
        api.getAll(this.endPointTracking + this.devices.selectedDeviceName, this.trackings)
        // await this.sleep()
        setTimeout(e => {
          this.trackings.t = this.trackings.dataGet
          // this.trackings.t = this.trackings.dataGet[0].trackings
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
        this.getActualTime()
        this.getSelectDevice(this.devices.selectedDeviceName)
        this.getSelectedTelemetries()
        this.getSelectedTrackings()
      },
      getActualTime() {
        var date = new Date()
        var initialDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + 'T' + date.getHours() + ':' + date.getMinutes()
        console.log(this.initialDate)
        this.updateJson = {
          device: this.devices.selectedDeviceName,
          startDate: initialDate,
          endDate: 'now'
        }
        this.updateTelemetries.dataPostDel = this.updateJson
        this.updateTracks.dataPostDel = this.updateJson
      },
      getUpdateData() {
        api.getWithData(this.endPointTelemetryBetweenDates, this.updateTelemetries)
        api.getWithData(this.endPointTrackingBetweenDates, this.updateTracks)
        setTimeout(e => {
          this.setUpdateDate()
        }, 5000)
      },
      setUpdateDate() {
        this.updateTracks.dataGet.forEach(element => {
          var id = element.id
          if (api.boolSearch(this.trackings.dataGet, 'id', id)) {
            this.trackings.push(element)
          }
        })
        this.updateTelemetries.dataGet.forEach(element => {
          var id = element.id
          if (api.boolSearch(this.telemetries.dataGet, 'id', id)) {
            this.telemetries.push(element)
          }
        })
      }
    }
  }
</script>
<style>
@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');
</style>
