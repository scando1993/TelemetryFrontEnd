import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'
// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import BoxcarView from './components/views/boxcar/Boxcar.vue'
import CreateBoxcarView from './components/views/boxcar/Create.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import BodegaView from './components/views/bodega/Bodega.vue'
import CreateBodegaView from './components/views/bodega/Create.vue'
import FormatoView from './components/views/formato/Formato.vue'
import CreateFormatoView from './components/views/formato/Create.vue'
import UbicationView from './components/views/ubication/Ubication.vue'
import CreateUbicationView from './components/views/ubication/Create.vue'
import LocalsView from './components/views/locales/Locales.vue'
import CreateLocalView from './components/views/locales/Create.vue'
import ReportesView from './components/views/reports/Reports.vue'
import PathView from './components/views/path/Path.vue'
import CreatePathView from './components/views/path/Create.vue'
import RoutesView from './components/views/routes/Routes.vue'
import LocalStatView from './components/views/localStat/Local.vue'
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
        path: 'routes',
        alias: '',
        component: RoutesView,
        name: 'Tablero Rutas'
      }, {
        path: 'store',
        component: BodegaView,
        name: 'Bodega'
      }, {
        path: 'createStore',
        component: CreateBodegaView,
        name: 'Crear Bodega'
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
        name: 'Crear Formato'
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
        path: 'path',
        component: PathView,
        name: 'Rutas'
      }, {
        path: 'createPath',
        component: CreatePathView,
        name: 'Crear ruta'
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks'
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings'
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
      }, {
        path: 'localStat',
        component: LocalStatView,
        name: 'Tablero Locales'
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
