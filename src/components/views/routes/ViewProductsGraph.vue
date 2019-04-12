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
    name: 'componentProducts',
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
          columns: [this.listTemp, this.maximum, this.minimum, this.maximumIdeal, this.minimumIdeal]
        },
        regions: [
          { start: 2, end: 50 }
        ],
        axis: {
          y2: {
            show: true
          },
          x: {
            type: 'categorized',
            tick: {
              format: '%Y-%m-%dT%H:%M:%S.%LZ'
            },
            categories: this.listDTMs,
            show: false
          }
        }
      }
      this.handler.$emit('init', options)
    }
  }
</script>
