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
    props: ['titleGraph', 'listRegions', 'listDTMs', 'listTemp', 'showing', 'Max', 'Min', 'MaxIdeal', 'MinIdeal', 'n'],
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
    methods: {
      generateClassCss(name, rules) {
        var style = document.createElement('style')
        style.type = 'text/css'
        document.getElementsByTagName('head')[0].appendChild(style)
        if (!(style.sheet || {}).insertRule) {
          (style.styleSheet || style.sheet).addRule(name, rules)
        } else {
          style.sheet.insertRule(name + '{' + rules + '}', 0)
        }
      },
      get_random_color() {
        // generate hex color
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
        return randomColor
      },
      get_random_colorRGB() {
        //  generate rgb color
        var r = function () { return Math.floor(Math.random() * 256) }
        console.log('rgb(' + r() + ',' + r() + ',' + r() + ')')
        return 'rgb(' + r() + ',' + r() + ',' + r() + ')'
      },
      getPeriodRegions(lista) {
        //  class:( i & 1 ) ? "gameOdd match"+(i+1)*1 : "gameEven match-region match"+(i+1)*1
        var regions = []
        for (var i = 0; i < lista.length; i++) {
          var regionColor = 'regionX' + i
          var regionClass = '.c3-region.' + regionColor
          this.generateClassCss(regionClass, 'fill: ' + this.get_random_color() + ';')
          var region = { start: new Date(lista[i].start_date), end: new Date(lista[i].end_date), label: lista[i].lugar, class: regionColor }
          console.log(region)
          regions.push(region)
        }
        return regions
      }
    },
    mounted() {
      // to init the graph call:
      var n = this.listTemp.length
      console.log(n)
      for (var i = 0; i < n; i++) {
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
        title: {
          text: this.titleGraph
        },
        regions: this.getPeriodRegions(this.listRegions),
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
<style>
  .c3-region.regionX {
    fill: red;
  }

  .c3-region.regionX2 {
    fill: green;
  }
</style>

