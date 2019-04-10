<template>
  <section>
    <!--<div>
      <label>Aqui va la grafica</label>
      <button v-if="selectedAll !== ''">Hi</button>
      <button>Otro</button>
    </div>-->
    <div class="col-sm-6 col-xs-12 info-box form-horizontal">
      <!--<h1>Look:{{selectedAll}} - {{listTemperature}}</h1>-->
      <div >
        <vue-c3 :handler="handler"></vue-c3>
      </div>
      
    </div>
    <hr class="visible-xs-block">

  </section>
</template>
<style src="./../../../../node_modules/c3/c3.css"></style>
<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  import api from '@/api/goApi.js'
  export default {
    name: 'componentAll',
    props: ['selectedAll', 'listTemperature', 'listDTM', 'highLine', 'lowLine', 'middleHigh', 'middleLow'],
    components: {
      VueC3
    },
    beforeMount() {
      api.getAll(this.apiBack, this.paths)
      //  setTimeout(e => {
      //  this.loadData()
      //  }, 200)
    },
    data() {
      return {
        handler: new Vue(),
        apiBack: '/rutas',
        apiBackDevice: '/devices',
        apiBackProduct: '/productoes',
        products: {
          dataGet: [
            {
              productoes: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        devices: {
          dataGet: [
            {
              devices: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        paths: {
          dataGet: [
            {
              rutas: [{
                start_date: '',
                end_date: ''
              }]
            }],
          error: ''
        }
      }
    },
    mounted() {
      // to init the graph call:
      var max = ['max']
      var min = ['min']
      var maxIdeal = ['maxIdeal']
      var minIdeal = ['minIdeal']
      for (var i = 0, n = this.listDTM.length; i < n; i++) {
        max.push(this.highLine)
        min.push(this.lowLine)
        maxIdeal.push(this.middleHigh)
        minIdeal.push(this.middleLow)
      }
      const options = {
        data: {
          columns: [
            this.listTemperature, max, min, maxIdeal, minIdeal
            //  ['data2', 7, 2, 4, 6, 10, 1]
          ]
        },
        //  grid: {
        //  y: {
        //    lines: [{ value: 2 }]
        //  }
        //  },
        axis: {
          x: {
            type: 'categorized',
            categories: this.listDTM
          }
        }
      }
      this.handler.$emit('init', options)
    }
  }
</script>
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
  import c3 from 'c3'
  import { debounce, cloneDeep, defaultsDeep } from 'lodash'
  export default {
    name: 'c3-chart',
    props: {
      config: {
        type: Object,
        default: () => ({})
      },
      data: {
        type: Object,
        default: () => ({})
      },
      type: {
        type: String,
        default: 'bar'
      }
    },
    watch: {
      data: {
        handler: 'reload',
        deep: true
      },
      type: 'transform'
    },
    methods: {
      getArgs() {
        const data = this.getData()
        const config = this.getConfig()
        return defaultsDeep({ data }, config)
      },
      getData() {
        const { type } = this
        const data = cloneDeep(this.data)
        return defaultsDeep({ type }, data)
      },
      getConfig() {
        const config = cloneDeep(this.config)
        const color = {
          pattern: ['#0a4f8a', '#0a88c2', '#75bcdd', '#E0E1E2', '#21BA45', '#DB2828', '#31CCEC', '#F2C037']
        }
        const axis = {
          x: {
            type: 'category',
            padding: {
              left: 0,
              right: 0
            },
            tick: {
              multiline: true
            }
          }
        }
        return defaultsDeep({ axis, color }, config)
      },
      update: debounce(function update() {
        const data = this.getData()
        this.$chart.load(data)
        this.$emit('update', data)
      }, 500),
      transform: debounce(function transform(...args) {
        this.$chart.transform(...args)
      }, 100),
      reload: debounce(function reload() {
        this.$emit('reloading')
        this.$chart.unload()
        this.$nextTick(() => {
          this.update()
        })
      }, 700)
    },
    mounted() {
      const args = this.getArgs()
      this.$chart = c3.generate({
        bindto: this.$refs.root,
        ...args
      })
      this.$emit('init', args)
    },
    beforeDestroy() {
      this.$chart = this.$chart.destroy()
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
  //  import Chart from 'chart.js'
  import c3 from 'c3'
  import api from '@/api/goApi.js'

  export default {
    name: 'componentAll',
    props: ['selectedAll', 'listTemperature', 'listDTM'],
    data() {
      return {
        apiBack: '/rutas',
        apiBackDevice: '/devices',
        apiBackProduct: '/productoes',
        products: {
          dataGet: [
            {
              productoes: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        devices: {
          dataGet: [
            {
              devices: [{
                id: '',
                name: ''
              }]
            }],
          error: ''
        },
        paths: {
          dataGet: [
            {
              rutas: [{
                start_date: '',
                end_date: ''
              }]
            }],
          error: ''
        },
        aceptableMinima: -5,
        aceptableMaxima: 10,
        idealMinima: 3,
        idealMaxima: 4
      }
    },
    methods: {
    },
    computed: {
      coPilotNumbers() {
        return this.generateRandomNumbers(12, 1000000, 10000)
      },
      personalNumbers() {
        return this.generateRandomNumbers(12, 1000000, 10000)
      },
      isMobile() {
        return (window.innerWidth <= 800 && window.innerHeight <= 600)
      }
    },
    beforeMount() {
      api.getAll(this.apiBack, this.paths)
      //  setTimeout(e => {
      //  this.loadData()
      //  }, 200)
    },
    mounted() {
      this.$nextTick(() => {
        var chart = c3.generate({
          size: {
            height: 240,
            width: 480
          },
          data: {
            columns: [
              ['sample', 30, 200, 100, 400, 150, 250]
            ]
          }
        })
        console.log(chart)
      })
    }
  }
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
