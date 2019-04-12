<template>
  <section>
    <label>Look:{{pickedAll}} - {{timeL}}-{{max}}</label>
      <div v-if="showing">
        <vue-c3 :handler="handler"></vue-c3>
      </div><br />
      <hr class="visible-xs-block">
</section>
</template>

<style src="./../../../../node_modules/c3/c3.css"></style>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  //  import api from '@/api/goApi.js'
  export default {
    name: 'componentAll',
    props: ['pickedAll', 'temperatures', 'timeL', 'max', 'min', 'maxIdeal', 'minIdeal', 'showing'],
    components: {
      VueC3
    },
    beforeMount() {
      //  api.getAll(this.apiBack, this.paths)
    },
    data() {
      return {
        handler: new Vue(),
        maximum: ['Max'],
        minimum: ['Min'],
        datesRanges: ['Interval'],
        maximumIdeal: ['MaxIdeal'],
        minimumIdeal: ['MinIdeal']
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
      const options = {
        data: {
          x: 'date',
          xFormat: '%Y-%m-%dT%H:%M:%S',
          columns: [
            this.timeL, this.temperatures, this.maximum, this.minimum, this.maximumIdeal, this.minimumIdeal
          ],
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
<style>
  .c3-region.regionX {
    fill: red;
  }

  .c3-region.regionX2 {
    fill: green;
  }
</style>
<!--<script>
  import c3 from 'c3'
  export default {
    mounted: function () {
      //  el: '#app'
      c3.generate({
        bindto: '#puppa',
        data: {
          type: 'area',
          x: 'x',
          xFormat: '%H:%M',
          columns: [
            ['x', '12:38', '12:38', '12:38', '12:38', '12:39', '12:39', '12:39', '12:39', '12:40', '12:40', '12:40', '12:41', '12:41', '12:41', '12:41', '12:42', '12:42', '12:42', '12:42', '12:43', '12:43', '12:43', '12:43', '12:44', '12:44'],
            ['write', 14709198848, 14709313536, 14709522432, 14709633024, 14710034432, 14710157312, 14710341632, 14710583296, 14710788096, 14710931456, 14711058432, 14711291904, 14711508992, 14711668736, 14711771136, 14712008704, 14712107008, 14712381440, 14712586240, 14712795136, 14712963072, 14713077760, 14713331712, 14713565184, 14713729024],
            ['read', 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080, 3778094080]
          ]
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: function (x) {
                if (x.getDate() === 1) {
                  return x.toLocaleDateString()
                }
              }
            }
          }
        }
      })
    }
  }
</script>-->
<!--<script>
  import c3 from 'vue-c3'
  import Chart from 'chart.js'
  var chart = c3.generate({
    bindto: '#chartjs-' + i,
    size: { height: 300 },
    data: {
      xs: data['chartjs-' + i]['xs'],
      xFormat: '%Y-%m-%dT%H:%M:%S',
      json: data['chartjs-' + i]['data']
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          rotate: 90,
          format: '%Y-%m-%dT%H:%M:%S',
          multiline: false
        }
      }
    }
  })
  console.log(chart)
</script>-->
<!--<script>
  export default {
    name: 'componentAll'
    var chart = c3.generate({
            bindto: '#chartjs-' + i,
            size: {
                height: 300
            },
            data: {
                xs: data["chartjs-" + i]["xs"],
                xFormat: '%Y-%m-%dT%H:%M:%S',
                json: data["chartjs-" + i]["data"]
            },
        //  grid: {
        //  y: {
        //    lines: [{ value: 2 }]
        //  }
        //  }
        //  types: {
        //  Interval: 'bar'
        //  },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        rotate: 90,
                        format: '%Y-%m-%dT%H:%M:%S',
                        multiline: false
                    },
                }
            }
        });
  }
</script>-->
