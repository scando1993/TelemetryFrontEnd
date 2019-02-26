<template>
  <!-- Main content -->
  <section class="content">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm-12 col-xs-12">
              <iframe name="hiddenFrame" class="hide"></iframe>
              <form v-on:submit='save' method="POST" target="hiddenFrame" class="form-horizontal" id="profile-form">
                <div class="form-group">
                  <label class="col-sm-4 control-label">No.Loc</label>
                  <div class="col-sm-9 controls">
                    <input type="number" class="form-control" v-bind:placeholder="dato.numLoc" v-model="dataPostDel.numLoc" name="name" id="noLoc" maxlength="50" value="">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-4 control-label">Nombre</label>
                  <div class="col-sm-9 controls">
                    <input type="text" class="form-control" v-bind:placeholder="dato.name" v-model="dataPostDel.name" name="name" id="name" maxlength="50" value="">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-4 control-label">Lugar</label>
                  <div class="col-sm-9 controls">
                    <input type="text" class="form-control" v-bind:placeholder="dato.place" v-model="dataPostDel.place" name="name" id="place" maxlength="50" value="">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-4 control-label">Longitud</label>
                  <div class="col-sm-9 controls">
                    <input type="number" class="form-control" v-bind:placeholder="dato.length" v-model="dataPostDel.length" name="name" id="noLoc" maxlength="50" value="">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-4 control-label">Latitud</label>
                  <div class="col-sm-9 controls">
                    <input type="number" class="form-control" v-bind:placeholder="dato.latitude" v-model="dataPostDel.latitude" name="name" id="noLoc" maxlength="50" value="">
                  </div>
                </div>
                
              </form>
            </div>
            <hr class="visible-xs-block">
            <div class="col-sm-12 col-xs-12">
              <p class="text-center">
                <strong>Seleccione la ubicación en el mapa: </strong>
                <div class="text-center">
                  <label>
                    <gmap-autocomplete
                      @place_changed="setPlace">
                    </gmap-autocomplete>
                    <button @click="addMarker">Añadir marcador</button>
                  </label>
                  <br/>
                </div>
                <br/>
              </p>
              <!--<canvas id="languagePie"></canvas>-->
              <google-map /><br />
            </div>            
              <div class="col-sm-6 col-xs-15">
                <!-- Submit and cancel -->
                <div class="form-group">
                  <div class="text-center">
                  <div class="col-sm-12 col-sm-offset-4 col-lg-12 col-lg-offset-6">
                    <router-link class="pageLink" to="/locales">
                      <button type="submit" class="btn btn-primary" v-on:submit='save'><i class="fa fa-ok"></i> Guardar </button>
                      <a href="/locales" type="button" class="btn">Cancelar</a>
                    </router-link>
                  </div>
                </div>
                </div>
                <!--End Submit and cancel-->
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  <!-- /.content -->
</template>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script>
  import Chart from 'chart.js'
  import GoogleMap from './../../Geocalization/GoogleMap.vue'

  export default {
    components: {
      GoogleMap
    },
    data() {
      return {
        generateRandomNumbers(numbers, max, min) {
          var a = []
          for (var i = 0; i < numbers; i++) {
            a.push(Math.floor(Math.random() * (max - min + 1)) + max)
          }
          return a
        }
      }
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
    mounted() {
      this.$nextTick(() => {
        var ctx = document.getElementById('trafficBar').getContext('2d')
        var config = {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: 'CoPilot',
              fill: false,
              borderColor: '#284184',
              pointBackgroundColor: '#284184',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: this.coPilotNumbers
            }, {
              label: 'Personal Site',
              borderColor: '#4BC0C0',
              pointBackgroundColor: '#4BC0C0',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: this.personalNumbers
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'bottom',
              display: true
            },
            tooltips: {
              mode: 'label',
              xPadding: 10,
              yPadding: 10,
              bodySpacing: 10
            }
          }
        }

        new Chart(ctx, config) // eslint-disable-line no-new

        /* var pieChartCanvas = document.getElementById('languagePie').getContext('2d')
        var pieConfig = {
          type: 'pie',
          data: {
            labels: ['HTML', 'JavaScript', 'CSS'],
            datasets: [{
              data: [56.6, 37.7, 4.1],
              backgroundColor: ['#00a65a', '#f39c12', '#00c0ef'],
              hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'bottom',
              display: true
            }
          }
        }

        new Chart(pieChartCanvas, pieConfig) // eslint-disable-line no-new */
      })
    }
  }
</script>
<style>

  .info-box {
    cursor: pointer;
  }

  .info-box-content {
    text-align: center;
    vertical-align: middle;
    display: inherit;
  }

  .fullCanvas {
    width: 100%;
  }
</style>
