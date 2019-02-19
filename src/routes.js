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
import LocalesView from './components/views/locales/Locales.vue'
import CreateLocalView from './components/views/locales/Create.vue'
import DevicesView from './components/views/devices/Devices.vue'
import CreateDevicesView from './components/views/devices/Create.vue'
import TrackingView from './components/views/tracking/Tracking.vue'
import CreateTrackingView from './components/views/tracking/Create.vue'
import WifiScanView from './components/views/wifiScan/WifiScan.vue'
import CreateWifiScanView from './components/views/wifiScan/Create.vue'
import DeleteView from './components/views/options/delete.vue'
import EditMultipleView from './components/views/options/edit-multiple.vue'
import ExportExcelView from './components/views/options/exportExcel.vue'
import ExportPDFView from './components/views/options/exportPDF.vue'
// Routes
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
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'store',
        component: BodegaView,
        name: 'Store'
      }, {
        path: 'createStore',
        component: CreateBodegaView,
        name: 'Create',
        meta: { description: 'Overview of environment' }
      }, {
        path: 'locales',
        component: LocalesView,
        name: 'Locales',
        meta: { description: 'Locales for the Telemetry Platform' }
      }, {
        path: 'createloc',
        component: CreateLocalView,
        name: 'CreateLocal',
        meta: { description: 'Overview of environment' }
      }, {
        path: 'format',
        component: FormatoView,
        name: 'Format',
        meta: { description: 'Format for the Telemetry Platform' }
      }, {
        path: 'createFormat',
        component: CreateFormatoView,
        name: 'Create Format',
        meta: { description: 'Formato for the Telemetry Platform' }
      }, {
        path: 'ubicationBoxcar',
        component: UbicationBoxcarView,
        name: 'Ubication Boxcar',
        meta: { description: 'Ubication of Boxcars' }
      }, {
        path: 'createUbicationBoxcar',
        component: CreateUbicationBoxcarView,
        name: 'Create Ubication Boxcar'
      }, {
        path: 'ubication',
        component: UbicationView,
        name: 'Ubication',
        meta: { description: 'Ubications' }
      }, {
        path: 'createUbication',
        component: CreateUbicationView,
        name: 'Create Ubication',
        meta: { description: 'Ubications' }
      }, {
        path: 'boxcar',
        component: BoxcarView,
        name: 'Boxcar'
      }, {
        path: 'createBoxcar',
        component: CreateBoxcarView,
        name: 'Create Boxcar'
      }, {
        path: 'devices',
        component: DevicesView,
        name: 'Devices',
        meta: { description: 'Devices for the Telemetry Platform' }
      }, {
        path: 'createDevice',
        component: CreateDevicesView,
        name: 'Create Device',
        meta: { description: 'Overview of environment' }
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
        name: 'Create Wifi Scan'
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'delete',
        component: DeleteView,
        name: 'Delete',
        meta: { description: 'Delete' }
      }, {
        path: 'edit-multiple',
        component: EditMultipleView,
        name: 'Edit-multiple',
        meta: { description: 'Edit-multiple' }
      }, {
        path: 'exportExcel',
        component: ExportExcelView,
        name: 'ExportExcel',
        meta: { description: 'Export Excel' }
      }, {
        path: 'exportPDF',
        component: ExportPDFView,
        name: 'ExportPDF',
        meta: { description: 'Export PDF' }
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
