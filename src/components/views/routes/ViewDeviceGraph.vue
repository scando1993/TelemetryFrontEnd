<template>
  <section>
    <br />
    <div v-if="showing">
      <vue-c3 :handler="handler"></vue-c3>
    </div>
    <hr class="visible-xs-block">
  </section>
</template>
<style src="./../../../../node_modules/c3/c3.css"></style>
<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  //  import api from '@/api/goApi.js'
  export default {
    name: 'componentDevice',
    props: ['listDTMs', 'listTemp', 'showing', 'Max', 'Min', 'MaxIdeal', 'MinIdeal'],
    components: {
      VueC3
    },
    beforeMount() {
    },
    data() {
      return {
        handler: new Vue(),
        maximum: ['Max'],
        minimum: ['Min'],
        maximumIdeal: ['MaxIdeal'],
        minimumIdeal: ['MinIdeal']
      }
    },
    mounted() {
      // to init the graph call:
      for (var i = 0, n = this.listTemp.length; i < n; i++) {
        this.maximum.push(this.Max)
        this.minimum.push(this.Min)
        this.maximumIdeal.push(this.MaxIdeal)
        this.minimumIdeal.push(this.MinIdeal)
      }
      const options = {
        data: {
          x: 'date',
          xFormat: '%Y-%m-%dT%H:%M:%S',
          columns: [this.listDTMs, this.listTemp, this.maximum, this.minimum, this.maximumIdeal, this.minimumIdeal],
          axes: {
            Temperatura: 'y2'
          }
        },
        regions: [
          {
            start: new Date('2019-03-30T12:21:41'), end: new Date('2019-09-30T12:21:41'), class: 'regionX'
          }
        ],
        axis: {
          y2: {
            show: true
          },
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%dT%H:%M:%S'
            },
            //  categories: this.timeL,
            show: false
          }
        }
      }
      this.handler.$emit('init', options)
    }
  }
</script>

