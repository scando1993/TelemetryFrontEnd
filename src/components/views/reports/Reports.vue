<template>
  <div>
    <h1 class='text-center'>Reportes</h1>
    <iframe width="1400" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiOTZmZjFlOWYtMGM1MS00ZDY5LWJmOTctNDkxYWZiNGE0ZDZlIiwidCI6ImIyY2NlOWE2LTQ0M2YtNDJjNy1iMDg1LWQ4MGQyZmI4M2JmOCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
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
