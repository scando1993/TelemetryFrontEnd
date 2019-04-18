<template>
  <section>
    <div v-if="showing">
      <vue-c3 :handler="handler"></vue-c3>
    </div><br />
</section>
</template>

<style src="./../../../../node_modules/c3/c3.css"></style>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  //  import d3 from 'd3'
  export default {
    name: 'componentAll',
    props: ['pickedAll', 'showing', 'listRegions', 'temperatures', 'timeL', 'max', 'min', 'maxIdeal', 'minIdeal', 'showing', 'titleGraph'],
    components: {
      VueC3
    },
    data() {
      return {
        apiBack: '/getDataTrack?rutaid=',
        handler: new Vue(),
        maximum: ['Max'],
        minimum: ['Min'],
        datesRanges: ['Interval'],
        maximumIdeal: ['MaxIdeal'],
        minimumIdeal: ['MinIdeal']
      }
    },
    beforeMount() {
      console.log(this.listRegions)
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
          var region = { start: new Date(lista[i].start_date), end: new Date(lista[i].end_date), title: lista[i].lugar, class: regionColor }
          console.log(region)
          regions.push(region)
        }
        return regions
      }
    },
    mounted() {
      // to init the graph call:
      for (var i = 0, n = this.timeL.length; i < n; i++) {
        this.maximum.push(this.max)
        this.minimum.push(this.min)
        this.maximumIdeal.push(this.maxIdeal)
        this.minimumIdeal.push(this.minIdeal)
      }
      //  this.generateClassCss('.c3-region.regionX', 'fill: ' + this.get_random_color() + ';')
      const options = {
        data: {
          x: 'date',
          xFormat: '%Y-%m-%dT%H:%M:%S',
          columns: [this.timeL, this.temperatures, this.maximum, this.minimum, this.maximumIdeal, this.minimumIdeal],
          axes: {
            Temperatura: 'y2'
          }
        },
        //  regions: [
        //  {
        //    start: new Date('2019-02-28T12:21:41'), end: new Date('2019-03-05T12:21:41'), text: 'hi', class: 'regionX'
        //  },
        //  {
        //    start: new Date('2019-03-06T12:21:41'), end: new Date('2019-06-30T12:21:41'), class: 'regionX2'
        //  }
        //  ],
        regions: this.getPeriodRegions(this.listRegions),
        title: {
          text: this.titleGraph
        },
        axis: {
          y2: { show: true },
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
  }
  .d3-region-label{
    text-anchor: middle;
  }
  .c3-chart {
    fill: green;
  }
  .c3-region.regionX2 {
    fill: green;
  }
</style>
