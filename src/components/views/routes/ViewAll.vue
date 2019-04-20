<template>
  <section class='content'>
    <div class='span12' >
      <div v-if="showing" >
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
        listRegionToChart: [],
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
      //  for (var i = 0, n = this.timeL.length; i < n; i++) {
      //  this.maximum.push(this.max)
      //  this.minimum.push(this.min)
      //  this.maximumIdeal.push(this.maxIdeal)
      //  this.minimumIdeal.push(this.minIdeal)
      //  }
      //  this.generateClassCss('.c3-region.regionX', 'fill: ' + this.get_random_color() + ';')
      const options = {
        data: {
          x: 'date',
          xFormat: '%Y-%m-%dT%H:%M:%S',
          columns: [this.timeL, this.temperatures], // , this.maximum, this.minimum, this.maximumIdeal, this.minimumIdeal],
          axes: {
            Temperatura: 'y2'
          }
        },
        grid: {
          y: {
            lines: [
              { value: this.max, text: 'Máxima: ' + this.max, position: 'start', class: 'grid80' },
              { value: this.min, text: 'Minima: ' + this.min, position: 'start', class: 'grid81' },
              { value: this.maxIdeal, text: 'Máxima Ideal: ' + this.maxIdeal, position: 'start', class: 'grid82' },
              { value: this.minIdeal, text: 'Minima Ideal: ' + this.minIdeal, position: 'start', class: 'grid83' }
            ]
          }
        },
        zoom: {
          enabled: true,
          rescale: true,
          onzoom: function (domain) {
            console.log('zoom', domain)
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
  }
  .d3-region-label{
    text-anchor: middle;
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
  .c3-chart {
    fill: green;
  }
  .c3-region.regionX2 {
    fill: green;
  }
</style>
