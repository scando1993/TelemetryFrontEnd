import moment from 'moment'
import api from '@/api/goApi.js'

var apiAlertsRuta = '/getAlertasRuta?rutaid=-1'
var alerts = [{}]

//  export var alertitas = []
export function printAlerts(id, alertitas) {
  alerts = [{}]
  alerts = api.getAll(apiAlertsRuta, alerts).dataGet
  var path = {}
  path = api.search(alerts, 'id', id)
  console.log(path)
  setTimeout(e => {
    alerts.dataGet.forEach(function (k, index) {
      var group = {
        dtm: k.Dtm.split('T')[0],
        timeline: []
      }
      k.Alertas.forEach(function (m, index) {
        var hour = m.dtm.split('T')[0] + ' ' + m.dtm.split('T')[1]
        var timeli = { title: '' }
        console.log(hour)
        if (m.typeAlert === 'inicio_ruta') {
          timeli = {
            icon: 'icofont-map-pins',
            color: 'blue',
            title: 'Inicio de ruta',
            time: moment(hour, 'YYYY-MM-DD HH:mm').format('MMMM Do YYYY, h:mm:ss a'),
            body: m.mensaje
          }
        } else if (m.typeAlert === 'llego_ruta') {
          timeli = {
            icon: 'icofont-industries-4',
            color: 'yellow',
            title: 'Llego a ...',
            time: moment(hour, 'YYYY-MM-DD HH:mm').format('MMMM Do YYYY, h:mm:ss a'),
            body: m.mensaje
          }
        } else if (m.typeAlert === 'cambio_zona') {
          timeli = {
            icon: 'icofont-industries-4',
            color: 'orange',
            title: 'Cambio de zona',
            time: moment(hour, 'YYYY-MM-DD HH:mm').format('MMMM Do YYYY, h:mm:ss a'),
            body: m.mensaje
          }
        } else if (m.typeAlert === 'fin_ruta') {
          timeli = {
            icon: 'icofont-pin',
            color: 'purple',
            title: 'Llego a ...',
            time: moment(hour, 'YYYY-MM-DD HH:mm').format('MMMM Do YYYY, h:mm:ss a'),
            body: m.mensaje
          }
        } else if (m.typeAlert === 'temperatura_limite_maximas') {
          timeli = {
            icon: 'icofont-eye-alt',
            color: 'red',
            title: 'ALERTA!',
            time: moment(hour, 'YYYY-MM-DD HH:mm').format('MMMM Do YYYY, h:mm:ss a'),
            body: m.mensaje
          }
        }
        if (timeli.title !== '') {
          group.timeline.push(timeli)
        }
      })
      console.log('grupo')
      alertitas.push(group)
      console.log(alertitas)
    })
  }, 500)
  return alertitas
}
