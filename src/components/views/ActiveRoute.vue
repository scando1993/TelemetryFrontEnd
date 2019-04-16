<template>
  <section class="content">
    <select v-model="rutas.selectedRuta" v-on:change="showAlerts"  class="FormatSelect">
      <option>Todas</option>
      <option v-for="(item, index) in rutas.dataGet" :key="index" v-on:click='isOpen = !isOpen'>Ruta{{item.id}}</option>
    </select>

    <div class="row center-block" v-show="isOpen && alertitas.length!=0"><br />
      <ul class="timeline" v-for="dato in alertitas">

        <!-- timeline time label -->
        <li class="time-label">
          <span class="bg-green">{{dato.dtm}}</span>
        </li>
        <!-- timeline item label-->
        <!--<li v-for="line in timeline">-->
        <li v-for="line in dato.timeline">
          <!-- timeline icon -->
          <i v-bind:class="'fa ' + line.icon + ' bg-' + line.color"></i>
          <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>&nbsp;{{line.time}}</span>
            <h3 class="timeline-header">{{line.title}}</h3>
            <div class="timeline-body" v-if="line.body" v-html="line.body">
            </div>
          </div>
        </li>
        <!-- END timeline item -->
      </ul>
    </div>
  </section>
</template>
<script>
  import moment from 'moment'
  import { printAlerts } from '../../demo'
  import api from '@/api/goApi.js'

  export default {
    name: 'Tasks',
    computed: {
      today () {
        return moment().format('MMM Do YY')
      }
      //  alertitas() {
      //  return alertitas
      //  }
    },
    data() {
      return {
        isOpen: false,
        endPointRutasNotEnd: '/getRutasNotEnd',
        endPointAlertasRuta: '/getAlertasRuta?rutaid=',
        apiBackAlerts: '/alertas',
        selectedAlert: '',
        alertitas: [],
        alerts: {
          dataGet: [],
          error: ''
        },
        rutas: {
          error: '',
          dataGet: [],
          selectedRuta: ''
        },
        alertas: {
          error: '',
          dataGet: [],
          selectedAlerta: ''
        }
      }
    },
    mounted() {
      this.getRutasNotEnd()
    },
    methods: {
      async showAlerts() {
        this.alertitas = []
        this.isOpen = false
        var n = this.rutas.selectedRuta
        printAlerts(n.slice(4), this.alertitas)
        this.isOpen = true
      },
      async getRutasNotEnd() {
        await api.getAll(this.endPointRutasNotEnd, this.rutas)
        //  await this.sleep()
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
