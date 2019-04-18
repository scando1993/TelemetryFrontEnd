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
    props: ['listDTMs', 'listRegions', 'listTemp', 'showing', 'Max', 'Min', 'MaxIdeal', 'MinIdeal', 'titleGraph'],
    components: {
      VueC3
    },
    beforeMount() {
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
          var region = { start: new Date(lista[i].start_date), end: new Date(lista[i].end_date), class: regionColor }
          console.log(region)
          regions.push(region)
        }
        return regions
      }
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
      //  for (var i = 0, n = this.listTemp.length; i < n; i++) {
      //  this.maximum.push(this.Max)
      //  this.minimum.push(this.Min)
      //  this.maximumIdeal.push(this.MaxIdeal)
      //  this.minimumIdeal.push(this.MinIdeal)
      //  }
      const options = {
        data: {
          x: 'date',
          xFormat: '%Y-%m-%dT%H:%M:%S',
          columns: [this.listDTMs, this.listTemp], // this.maximum, this.minimum, this.maximumIdeal, this.minimumIdeal],
          axes: {
            Temperatura: 'y2'
          }
        },
        zoom: {
          enabled: true,
          rescale: true,
          onzoom: function (domain) {
            console.log('zoom', domain)
          }
        },
        grid: {
          y: {
            lines: [
              { value: this.Max, text: 'Máxima: ' + this.Max, position: 'start', class: 'grid80' },
              { value: this.Min, text: 'Minima: ' + this.Min, position: 'start', class: 'grid81' },
              { value: this.MaxIdeal, text: 'Máxima Ideal: ' + this.MaxIdeal, position: 'start', class: 'grid82' },
              { value: this.MinIdeal, text: 'Minima Ideal: ' + this.MinIdeal, position: 'start', class: 'grid83' }
            ]
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
              format: '%Y-%m-%dT%H:%M:%S',
              rotate: 50
            },
            //  categories: this.timeL,
            show: true
          }
        }
      }
      this.handler.$emit('init', options)
    }
  }
</script>
<style>
  .c3-ygrid-line.grid80 line {
    stroke: coral;
  }

  .c3-ygrid-line.grid80 text {
    fill: coral;
  }

  .c3-ygrid-line.grid81 line {
    stroke: greenyellow;
  }

  .c3-ygrid-line.grid81 text {
    fill: greenyellow;
  }

  .c3-ygrid-line.grid82 line {
    stroke: violet;
  }

  .c3-ygrid-line.grid82 text {
    fill: violet;
  }

  .c3-ygrid-line.grid83 line {
    stroke: darkviolet;
  }

  .c3-ygrid-line.grid83 text {
    fill: darkviolet;
  }
</style>
