<template>
  <section>
    <label>Look:{{checkedProducts}}</label>
    <br />
    <div v-if="show">
      <vue-c3 :handler="handler"></vue-c3>
    </div><br /><br /><br />
    <hr class="visible-xs-block">
  </section>
</template>

<style src="./../../../../node_modules/c3/c3.css"></style>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  import api from '@/api/goApi.js'
  export default {
    name: 'componentProducts',
    props: ['checkedProducts'],
    components: {
      VueC3
    },
    beforeMount() {
      api.getAll(this.apiBackProduct, this.products)
    },
    data() {
      return {
        handler: new Vue(),
        apiBack: '/rutas',
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
      const options = {
        data: {
          columns: [
            this.listTemperature
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
</script>
