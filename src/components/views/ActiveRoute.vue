<template>
  <section class="content">
    <!--<select v-model="selectedAlert" v-on:change="">
      <option>Todas</option>
      <option v-for="(item, index) in alerts.dataGet[0].alertas" :key="index">{{item.type_alert}}</option>
    </select>-->
    <div class="row center-block">
      <!--<h1 class="text-center">Tasks</h1>-->
      <ul class="timeline">
        <!-- timeline time label -->
        <li class="time-label">
          <span class="bg-green">{{today}}</span>
        </li>
        <!-- timeline item -->
        <li v-for="line in timeline">
          <!-- timeline icon -->
          <i v-bind:class="'fa ' + line.icon + ' bg-' + line.color"></i>
          <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>&nbsp;{{line.time}}</span>
            <h3 class="timeline-header">{{line.title}}</h3>
            <div class="timeline-body" v-if="line.body" v-html="line.body">
            </div>
            <!--<div class="timeline-footer" v-if="line.buttons">
            <a v-for="btn in line.buttons" v-bind:class="'btn btn-' + btn.type + ' btn-xs'" v-bind:href="btn.href" v-bind:target="btn.target">{{btn.message}}</a>
          </div>-->
          </div>
        </li>
        <!-- END timeline item -->
      </ul>
    </div>
  </section>
</template>
<script>
  import moment from 'moment'
  import { timeline } from '../../demo'
  import api from '@/api/goApi.js'

  //  export const timeline = []

  export default {
    name: 'Tasks',
    computed: {
      today () {
        return moment().format('MMM Do YY')
      },
      timeline () {
        return timeline
      }
    },
    mounted() {
      api.getAll(this.apiBackAlerts, this.alerts)
    },
    methods: {
      presentaralertas(id) {
        //  demo.printAlertas(id)
      }
    },
    //  console.log('heyyyy demo')
    //  setTimeout(e => {
    //    //  alerts.dataGet[0].alertas.forEach(function (k, index) {
    //    for (var i = 0; i < this.alerts.dataGet[0].alertas.length; i++) {
    //      console.log(this.alerts.dataGet[0].alertas[i]._links.device.href)
    //      var timeli = {
    //        icon: 'icofont-map-pins',
    //        color: 'blue',
    //        title: this.alerts.dataGet[0].alertas[i].type_alert,
    //        time: moment('20150620', 'MMM Do YY').fromNow(),
    //        body: this.alerts.dataGet[0].alertas[i].mensaje
    //      }
    //      timeline.push(timeli)
    //    }
    //  }, 100)
    //  },
    data() {
      return {
        apiBackAlerts: '/alertas',
        selectedAlert: '',
        alerts: {
          dataGet: [
            {
              alertas: [{
                id: 0,
                type_alert: '',
                mensaje: '',
                _links: {
                  device: { href: '' }
                }
              }]
            }],
          error: ''
        }
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
