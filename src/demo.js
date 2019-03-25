import moment from 'moment'

export const servers = [{
  name: 'www01',
  status: 'success',
  icon: 'globe',
  description: 'Web server that runs our sites'
}, {
  name: 'sql01',
  status: 'danger',
  icon: 'database',
  description: 'mySQL server used for reporting'
}, {
  name: 'mongoDB01',
  status: 'info',
  icon: 'file-code-o',
  description: 'Main DB server'
}, {
  name: 'ldap01',
  status: 'success',
  icon: 'key',
  description: 'Authentication server'
}, {
  name: 'mgmt01',
  status: 'success',
  icon: 'home',
  description: 'Management server with all tools'
}, {
  name: 'bkup01',
  status: 'warning',
  icon: 'backward',
  description: 'Backup server'
}]

export const stats = [{
  header: '8390',
  text: 'Visitors'
}, {
  header: '30%',
  text: 'Referrals'
}, {
  header: '70%',
  text: 'Organic'
}]

export const timeline = [{
  icon: 'icofont-map-pins',
  color: 'blue',
  title: 'Inicio de la ruta',
  time: moment().endOf('day').fromNow(),
  body: 'El furgón F85 con dispositivo *device1* y producto *product1* inicia el recorrido desde el Local *nameStartLocal* hasta *nameEndLocal* con fecha de inicio *start_date* y fecha estimada de llegada *end_date*. La temperatura del producto empieza con 26ºC'
  //  buttons: [{
    //  type: 'primary',
    //  message: 'Read more',
    //  href: 'https://github.com/misterGF/CoPilot',
    //  target: '_blank'
  //  }]
},
{
  icon: 'icofont-industries-4',
  color: 'yellow',
  title: 'Llegó a la bodega N',
  time: moment().endOf('day').fromNow(),
  body: 'El furgón F259 ha llegado al local/bodega *name*. Producto *p* posee una temperatura de 26ºC.'
  //  buttons: [{
  //  type: 'primary',
  //  message: 'Read more',
  //  href: 'https://github.com/misterGF/CoPilot',
  //  target: '_blank'
  //  }]
},
{
  icon: 'fa fa-truck',
  color: 'green',
  title: 'En ruta',
  time: moment('20150620', 'MMM Do YY').fromNow()
},
{
  icon: 'icofont-eye-alt',
  color: 'red',
  title: 'ALERTA!!',
  time: moment('20130620', 'YYYYMMDD').fromNow(),
  body: 'Temperatura alta : 25ºC'
  //  body: '<div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="/routes" frameborder="0" allowfullscreen></iframe></div>'
}]
