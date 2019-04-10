<template>
  <section>
    <div>
      <label>Aqui va la grafica</label>
      <button v-if="selectedAll !== ''">Hi</button>
      <button>Otro</button>
    </div>
    <!--<div class="col-sm-6 col-xs-12 info-box form-horizontal">
      <h1>Look:{{selectedAll}} - {{listTemperature}}</h1>
      <div >
        <vue-c3 :handler="handler"></vue-c3>
      </div>
      
    </div>
    <hr class="visible-xs-block">-->

  </section>
</template>
<!--<style src="./../../../../node_modules/c3/c3.css"></style>-->
<!--<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  import api from '@/api/goApi.js'
  export default {
    name: 'componentAll',
    props: ['selectedAll', 'listTemperature', 'listDTM'],
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
        },
        aceptableMinima: -5,
        aceptableMaxima: 10,
        idealMinima: 3,
        idealMaxima: 4
      }
    },
    mounted() {
      // to init the graph call:
      const options = {
        data: {
          columns: [
            this.listTemperature
            //  ['data2', 7, 2, 4, 6, 10, 1]
          ]
        },
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
</script>-->
