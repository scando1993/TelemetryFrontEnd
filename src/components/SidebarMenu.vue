<template>
  <ul class="sidebar-menu">
    <li class="header">DASHBOARD</li>
    <router-link tag="li" class="pageLink" to="/routes">
      <a>
        <i class="fa fa-road"></i>
        <span class="page">Rutas Activas</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/activeRoutes">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Actividad Rutas</span>
      </a>
    </router-link>
    <li class="header">ADQUISICIÓN DE DATOS</li>
    <router-link tag="li" class="pageLink" to="/zone">
      <a>
        <i class="fa fa-building"></i>
        <span class="page">Zonas</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/store">
      <a>
        <i class="formatIcon icofont-industries-4"></i>
        <span class="page">Bodegas</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/locals">
      <a>
        <i class="formatIcon icofont-food-cart"></i>
        <span class="page">Locales</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/format">
      <a>
        <i class="fa fa-puzzle-piece"></i>
        <span class="page">Formatos</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/products">
      <a>
        <i class="formatIcon icofont-chicken-fry"></i>
        <span class="page">Productos</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/boxcar">
      <a>
        <i class="fa fa-truck"></i>
        <span class="page">Furgón</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/path">
      <a>
        <i class="fa fa-road"></i>
        <span class="page">Rutas</span>
      </a>
    </router-link>
    <li class="header">REPORTES</li>
    <router-link tag="li" class="pageLink" to="/reports">
      <a>
        <i class="fa fa-book"></i>
        <span class="page">Reportes</span>
      </a>
    </router-link>
    <li class="header">ADMINISTRACIÓN</li>
    <router-link tag="li" class="pageLink" to="/server">
      <a>
        <i class="fa fa-hdd-o"></i>
        <span class="page">Administrador</span>
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
