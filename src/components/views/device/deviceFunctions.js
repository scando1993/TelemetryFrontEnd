import api from '@/api/goApi.js'
export default {
  saveDevice(data) {
    var idGroup = api.search(data.group.dataGet[0].groups, 'name', data.selectedGroup).id
    data.dataPostDel.name = data.dataPostDel.name.trim()
    data.dataPostDel.family = data.dataPostDel.family.trim()
    data = api.post(data.apiBack, data)
    console.log(data.dataRespond)
    setTimeout(e => {
      var head = '/groups/' + idGroup
      api.postWithHeader(data.apiBack + '/' + data.dataRespond[0] + '/groupFamily', head)
      setTimeout(e => {
        var headStatus = 'devices/' + data.dataRespond[0]
        data = api.post(data.apiBackStatus, data)
        setTimeout(e => {
          api.postWithHeader(data.apiBackStatus + '/' + data.dataRespond[0] + '/device', headStatus)
          //  this.$router.push(this.page)
        }, 1000)
      }, 1400)
    }, 1800)
    return data
  }
  /*  async loadDevicesA(data) {
    var statusDevices = []
    $.each(data.devices.dataGet[0].devices, function (key, devc) {
      console.log('******ini')
      console.log(devc._links.status.href)
      console.log('******fin')
      var statu = { dataGet: [] }
      api.getGeneral(devc._links.status.href, statu)
      console.log('******status')
      console.log(statu.dataGet[2])
      console.log('******status')
      if (statu.dataGet[1] === 0 && statu.dataGet[2] === null && statu.dataGet[3] === 0 && statu.dataGet[4] === null) {
        console.log('vale')
        statusDevices.push('Registrado')
      } else {
        statusDevices.push('Activo')
      }
    })
    console.log('iiiiiiiiiiiiiiiiiiiii')
    console.log(statusDevices)
    return statusDevices
  } */
}
