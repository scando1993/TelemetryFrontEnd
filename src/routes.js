import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'
// Import Views - Dash
//  import DashboardView from './components/views/Dashboard.vue'
import ActiveRouteView from './components/views/ActiveRoute.vue'
import BoxcarView from './components/views/boxcar/Boxcar.vue'
import CreateBoxcarView from './components/views/boxcar/Create.vue'
import ServerView from './components/views/Server.vue'
import StoreView from './components/views/store/Store.vue'
import CreateStoreView from './components/views/store/Create.vue'
import FormatView from './components/views/format/Format.vue'
import CreateFormatView from './components/views/format/Create.vue'
import ZoneView from './components/views/zone/Zone.vue'
import CreateZoneView from './components/views/zone/Create.vue'
import LocalsView from './components/views/locals/Locals.vue'
import CreateLocalView from './components/views/locals/Create.vue'
import ReportesView from './components/views/reports/Reports.vue'
import PathView from './components/views/path/Path.vue'
import CreatePathView from './components/views/path/Create.vue'
import RoutesView from './components/views/routes/Routes.vue'
import ProductsView from './components/views/product/Product.vue'
import CreateProductView from './components/views/product/Create.vue'
import DeviceView from './components/views/device/Device.vue'
import CreateDeviceView from './components/views/device/Create.vue'
import DeviceTelemtryView from './components/views/telemetry/DeviceTelemtry.vue'
import RoutesHistoryView from './components/views/routes/History.vue'
// Routes.
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'routes',
        alias: '',
        component: RoutesView,
        name: 'Rutas Activas'
      }, {
        path: 'store',
        component: StoreView,
        name: 'Bodega'
      }, {
        path: 'createStore',
        component: CreateStoreView,
        name: 'Crear Bodega'
      }, {
        path: 'locals',
        component: LocalsView,
        name: 'Locales'
      }, {
        path: 'createLocal',
        component: CreateLocalView,
        name: 'Crear Local'
      }, {
        path: 'format',
        component: FormatView,
        name: 'Formato'
      }, {
        path: 'createFormat',
        component: CreateFormatView,
        name: 'Crear Formato'
      }, {
        path: 'zone',
        component: ZoneView,
        name: 'Zonas'
      }, {
        path: 'createZone',
        component: CreateZoneView,
        name: 'Crear Zona'
      }, {
        path: 'boxcar',
        component: BoxcarView,
        name: 'furgón'
      }, {
        path: 'createBoxcar',
        component: CreateBoxcarView,
        name: 'Crear furgón'
      }, {
        path: 'path',
        component: PathView,
        name: 'Rutas'
      }, {
        path: 'createPath',
        component: CreatePathView,
        name: 'Crear ruta'
      }, {
        path: 'server',
        beforeEnter(to, from, next) {
          window.location = 'http://104.209.196.204:9090/view/dashboard/favorita'
        },
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: false}
      }, {
        path: 'reports',
        component: ReportesView,
        name: 'Reportes'
      }, {
        path: 'products',
        component: ProductsView,
        name: 'Productos'
      }, {
        path: 'createProduct',
        component: CreateProductView,
        name: 'Crear Productos'
      }, {
        path: 'activeRoutes',
        component: ActiveRouteView,
        name: 'Alertas de Rutas Activas'
      }, {
        path: 'devices',
        component: DeviceView,
        name: 'Dispositivos'
      }, {
        path: 'createDevice',
        component: CreateDeviceView,
        name: 'Crear Dispositivos'
      }, {
        path: 'telemetry',
        component: DeviceTelemtryView,
        name: 'Telemetrías'
      }, {
        path: 'routesHistory',
        component: RoutesHistoryView,
        name: 'Histórico de rutas'
      }
    ],
    meta: { requiresAuth: false }
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]
export default routes
