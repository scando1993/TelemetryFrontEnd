<template>
  <section class="content">
    <select v-model="routes.selectedRuta" v-on:change="showAlerts" class="FormatSelect">
      <option v-for="(item, index) in routes.dataGet" :key="index" v-on:click='isOpen = !isOpen'>Ruta{{item.id}}</option>
    </select>
    <label>{{routes.selectedRuta}} - {{isOpen}}- {{alertitas.length}}</label>

    <div class="row center-block" v-show="isOpen && alertitas.length!=0">
      <br />
      <label>{{isOpen}}</label>
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
  import { printAlerts } from './past'
  import api from '@/api/goApi.js'

  export default {
    name: 'Tasks',
    computed: {
      today() {
        return moment().format('MMM Do YY')
      }
      //  alertitas() {
      //  return alertitas
      //  }
    },
    data() {
      return {
        isOpen: false,
        endPointAlertasRuta: '/getAlertasRuta?rutaid=-1',
        selectedAlert: '',
        alertitas: [],
        routes: {
          error: '',
          dataGet: [],
          selectedRuta: ''
        }
      }
    },
    mounted() {
      this.getRoutesEnd()
    },
    methods: {
      async showAlerts() {
        this.alertitas = []
        this.isOpen = false
        var n = this.routes.selectedRuta
        printAlerts(n.slice(4), this.alertitas)
        this.isOpen = true
      },
      async getRoutesEnd() {
        await api.getAll(this.endPointAlertasRuta, this.routes)
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
