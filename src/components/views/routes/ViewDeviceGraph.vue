<template>
  <section class='content'>
    <div class='span12'>
      <div v-if="showing">
        <div class="col-sm-11">
          <vue-c3 :handler="handler"></vue-c3><br />
        </div>
        <table class="info-box-color col-sm-1" style="width:2%;">
          <tr class=" controlsRegion" v-for="dato in listRegionToChart">
            <td id="circle" style="width:20px;height:20px;cursor:pointer;" v-bind:title="dato.text" v-bind:style="{background:dato.color}"></td>
          </tr>
        </table>
        <br /><br />
      </div>
    </div>
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
        listRegionToChart: [],
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
        var regions = []
        for (var i = 0; i < lista.length; i++) {
          var regi = {
            color: '',
            text: ''
          }
          var flagR = false
          var regionColor = 'regionX' + i
          var regionClass = '.c3-region.' + regionColor
          var colorReg = this.get_random_color()
          for (var a = 0; a < this.listRegionToChart.length; a++) {
            if (this.listRegionToChart[a].text === lista[i].lugar) {
              colorReg = this.listRegionToChart[a].color
              flagR = true
              break
            }
          }
          if (!flagR) {
            regi.color = colorReg
            regi.text = lista[i].lugar
            this.listRegionToChart.push(regi)
          }

          this.generateClassCss(regionClass, 'fill: ' + colorReg + ';')
          var region = { start: new Date(lista[i].start_date), end: new Date(lista[i].end_date), class: regionColor }
          console.log(this.listRegionToChart)
          regions.push(region)
        }
        return regions
      }
    },
    mounted() {
      // to init the graph call:
      var n = this.listTemp.length
      console.log(n)
      //  for (var i = 0; i < n; i++) {
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
  #circle {
    width: 10px;
    height: 10px;
    background: red;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
  }

  .col-sm-11 {
    width: 95.666667%;
  }

  .content {
    min-height: 353px;
  }
  .c3-region.regionX {
    fill: red;
  }
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
  .c3-region.regionX2 {
    fill: green;
  }
</style>

