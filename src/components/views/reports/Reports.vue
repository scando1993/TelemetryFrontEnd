<template>
  <div>
    <h1 class='text-center'>Repos</h1>
    <h4 class='text-center'>Github Repos</h4> 
    <button @click="k">dame click </button>
    <div id='reportContainer'></div>
  </div>
</template>
<script>
import axios from 'axios'
// import * as powerbi from 'powerbi-client'
import api from './apiPowerBi.js'
export default {
  name: 'Repository',
  data () {
    return {
      githubUrl: 'https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars',
      response: null,
      error: null
    }
  },
  methods: {
    callGitHub () {
      axios.get(this.githubUrl)
        .then(response => {
          console.log('GitHub Response:', response)

          if (response.status !== 200) {
            this.error = response.statusText
            return
          }

          this.response = response.data.items
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          this.error = error.response.statusText
        })
    },
    k() {
      api.callPowerBi()
    }
  },
  mounted () {
    // this.callGitHub(),
    // this.callPowerBi()
    api.callPowerBi()
  }
}
</script>

<style>
</style>
