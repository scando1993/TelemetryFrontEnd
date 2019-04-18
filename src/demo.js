import moment from 'moment'
import api from '@/api/goApi.js'

var apiBackAlerts = '/getAlertasOrder'
var apiAlertsRuta = '/getAlertasRuta?rutaid='
var alerts = [{}]

//  export var alertitas = []
export function printAlerts(id, alertitas) {
  //  var alertitas = []
  alerts = [{}]
  if (id === 's') {
    alerts = api.getAll(apiBackAlerts, alerts)
  } else {
    alerts = api.getAll(apiAlertsRuta + id, alerts)
  }
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
  return alertitas
}

//  export const timeline = [{
//  icon: 'icofont-map-pins',
//  color: 'blue',
//  title: 'Inicio de la ruta',
//  time: moment().endOf('day').fromNow(),
//  body: 'El furgón F85 con dispositivo *device1* y producto *product1* inicia el recorrido desde el Local *nameStartLocal* hasta *nameEndLocal* con fecha de inicio *start_date* y fecha estimada de llegada *end_date*. La temperatura del producto empieza con 26ºC'
//  }
//  {
//    icon: 'icofont-industries-4',
//    color: 'yellow',
//    title: 'Llegó a la bodega N',
//    time: moment().endOf('day').fromNow(),
//    body: 'El furgón F259 ha llegado al local/bodega *name*. Producto *p* posee una temperatura de 26ºC.'
//    //  buttons: [{
//    //  type: 'primary',
//    //  message: 'Read more',
//    //  href: 'https://github.com/misterGF/CoPilot',
//    //  target: '_blank'
//    //  }]
//  },
//  {
//    icon: 'fa fa-truck',
//    color: 'green',
//    title: 'En ruta',
//    time: moment('20150620', 'MMM Do YY').fromNow()
//  },
//  {
//    icon: 'icofont-eye-alt',
//    color: 'red',
//    title: 'ALERTA!!',
//    time: moment('20130620', 'YYYYMMDD').fromNow(),
//    body: 'Temperatura alta : 25ºC'
//  //  body: '<div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="/routes" frameborder="0" allowfullscreen></iframe></div>'
//  }
// ]

//  export const servers = [{
//    name: 'www01',
//    status: 'success',
//    icon: 'globe',
//    description: 'Web server that runs our sites'
//  }, {
//    name: 'sql01',
//    status: 'danger',
//    icon: 'database',
//    description: 'mySQL server used for reporting'
//  }, {
//    name: 'mongoDB01',
//    status: 'info',
//    icon: 'file-code-o',
//    description: 'Main DB server'
//  }, {
//    name: 'ldap01',
//    status: 'success',
//    icon: 'key',
//    description: 'Authentication server'
//  }, {
//    name: 'mgmt01',
//    status: 'success',
//    icon: 'home',
//    description: 'Management server with all tools'
//  }, {
//    name: 'bkup01',
//    status: 'warning',
//    icon: 'backward',
//    description: 'Backup server'
//  }]

//  export const stats = [{
//    header: '8390',
//    text: 'Visitors'
//  }, {
//    header: '30%',
//    text: 'Referrals'
//  }, {
//    header: '70%',
//    text: 'Organic'
//  }]
