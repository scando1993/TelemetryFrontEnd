import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'
// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import BoxcarView from './components/views/boxcar/Boxcar.vue'
import CreateBoxcarView from './components/views/boxcar/Create.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import BodegaView from './components/views/bodega/Bodega.vue'
import CreateBodegaView from './components/views/bodega/Create.vue'
import FormatoView from './components/views/formato/Formato.vue'
import CreateFormatoView from './components/views/formato/Create.vue'
import UbicationBoxcarView from './components/views/ubicationBoxcar/UbicationBoxcar.vue'
import CreateUbicationBoxcarView from './components/views/ubicationBoxcar/Create.vue'
import UbicationView from './components/views/ubication/Ubication.vue'
import CreateUbicationView from './components/views/ubication/Create.vue'
import LocalsView from './components/views/locales/Locales.vue'
import CreateLocalView from './components/views/locales/Create.vue'
import DevicesView from './components/views/devices/Devices.vue'
import CreateDevicesView from './components/views/devices/Create.vue'
import TrackingView from './components/views/tracking/Tracking.vue'
import CreateTrackingView from './components/views/tracking/Create.vue'
import WifiScanView from './components/views/wifiScan/WifiScan.vue'
import CreateWifiScanView from './components/views/wifiScan/Create.vue'
import ReportesView from './components/views/reports/Reports.vue'
import PathView from './components/views/path/Path.vue'
import CreatePathView from './components/views/path/Create.vue'
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
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard'
      }, {
        path: 'store',
        component: BodegaView,
        name: 'Bodega'
      }, {
        path: 'createStore',
        component: CreateBodegaView,
        name: 'Bodega'
      }, {
        path: 'locales',
        component: LocalsView,
        name: 'Locales'
      }, {
        path: 'createloc',
        component: CreateLocalView,
        name: 'Crear Local'
      }, {
        path: 'format',
        component: FormatoView,
        name: 'Formato'
      }, {
        path: 'createFormat',
        component: CreateFormatoView,
        name: 'Creatar Formato'
      }, {
        path: 'ubicationBoxcar',
        component: UbicationBoxcarView,
        name: 'Ubicacion del Furgón'
      }, {
        path: 'createUbicationBoxcar',
        component: CreateUbicationBoxcarView,
        name: 'ubicación del Furgón'
      }, {
        path: 'ubication',
        component: UbicationView,
        name: 'Ubicación'
      }, {
        path: 'createUbication',
        component: CreateUbicationView,
        name: 'Crear Ubicación'
      }, {
        path: 'boxcar',
        component: BoxcarView,
        name: 'furgón'
      }, {
        path: 'createBoxcar',
        component: CreateBoxcarView,
        name: 'furgón'
      }, {
        path: 'devices',
        component: DevicesView,
        name: 'Dispositivos'
      }, {
        path: 'createDevice',
        component: CreateDevicesView,
        name: 'Crear Dispositivo'
      }, {
        path: 'path',
        component: PathView,
        name: 'Rutas'
      }, {
        path: 'createPath',
        component: CreatePathView,
        name: 'Crear ruta'
      }, {
        path: 'tracking',
        component: TrackingView,
        name: 'Tracking'
      }, {
        path: 'createTrack',
        component: CreateTrackingView,
        name: 'Create'
      }, {
        path: 'wifiScan',
        component: WifiScanView,
        name: 'Wifi Scan'
      }, {
        path: 'createWifiScan',
        component: CreateWifiScanView,
        name: 'Wifi Scan'
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks'
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings'
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access'
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository'
      }, {
        path: 'reports',
        component: ReportesView,
        name: 'Reportes'
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
