import moment from 'moment'
import api from '@/api/goApi.js'

var apiBackAlerts = '/getAlertasOrder'
var apiAlertsRuta = '/getAlertasRuta?rutaid='
var alerts = [{}]

//  export var alertitas = []
export async function printAlerts(id, alertitas) {
  console.log(id)
  //  var alertitas = []
  alerts = [{}]
  await api.getAll(apiBackAlerts, alerts)
  setTimeout(e => {
    if (id !== 's') {
      alerts = api.getAll(apiAlertsRuta + id, alerts)
    }
    setTimeout(e => {
      console.log(alerts.dataGet)
      alerts.dataGet.forEach(function (k, index) {
        var group = {
          dtm: k.Dtm.split('T')[0],
          timeline: []
        }
        k.Alertas.forEach(function (m, index) {
          var hour = m.dtm.split('T')[0] + ' ' + m.dtm.split('T')[1]
          var timeli = { title: '' }
          //  console.log(hour)
          if (m.typeAlert === 'inicio_ruta') {
            timeli = {
              icon: 'icofont-racing-flag-alt',
              color: 'blue',
              title: 'Inicio de ruta',
              time: moment(hour, 'YYYY-MM-DD HH:mm').format('MMMM Do YYYY, h:mm:ss a'),
              body: m.mensaje
            }
          } else if (m.typeAlert === 'ruta_registrada') {
            timeli = {
              icon: 'icofont-paper',
              color: 'black',
              title: 'Registro de ruta',
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
              icon: 'icofont-map-pins',
              color: 'orange',
              title: 'Cambio de zona',
              time: moment(hour, 'YYYY-MM-DD HH:mm').format('MMMM Do YYYY, h:mm:ss a'),
              body: m.mensaje
            }
          } else if (m.typeAlert === 'fin_ruta') {
            timeli = {
              icon: 'icofont-pin',
              color: 'purple',
              title: 'Ha concluído la ruta',
              time: moment(hour, 'YYYY-MM-DD HH:mm').format('MMMM Do YYYY, h:mm:ss a'),
              body: m.mensaje
            }
          } else if (m.typeAlert === 'temperatura_limite_maximas' || m.typeAlert === 'temperatura_limite_ideales') {
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
  }, 500)
  return alertitas
}
