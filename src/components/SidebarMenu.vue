<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/store">
      <a>
        <i class="fa fa-laptop"></i>
        <span class="page">Bodega</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/locales">
      <a>
        <i class="fa fa-building"></i>
        <span class="page">Locales</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/format">
      <a>
        <i class="fa fa-puzzle-piece"></i>
        <span class="page">Formato</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/ubication">
      <a>
        <i class="fa fa-map-marker"></i>
        <span class="page">Ubicaciones</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/ubicationBoxcar">
      <a>
        <i class="fa fa-map"></i>
        <span class="page">Ubicación Furgón</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/boxcar">
      <a>
        <i class="fa fa-truck"></i>
        <span class="page">Furgón</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/devices">
      <a>
        <i class="fa fa-tablet"></i>
        <span class="page">Dispositivos</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/tracking">
      <a>
        <i class="fa fa-search"></i>
        <span class="page">Tracking</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/wifiScan">
      <a>
        <i class="fa fa-wifi"></i>
        <span class="page">Wifi Scan</span>
      </a>
    </router-link>
    <li class="header">MANAGEMENT</li>
    <router-link tag="li" class="pageLink" to="/tasks">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Tasks</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </a>
    </router-link>
    <li class="header">LOGS</li>
    <router-link tag="li" class="pageLink" to="/access">
      <a>
        <i class="fa fa-book"></i>
        <span class="page">Access</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/server">
      <a>
        <i class="fa fa-hdd-o"></i>
        <span class="page">Server</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/repos">
      <a>
        <i class="fa fa-heart"></i>
        <span class="page">Repos</span>
        <small class="label pull-right bg-green">AJAX</small>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
