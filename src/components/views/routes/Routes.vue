<template>
  <!-- Main content -->
  <section class="content ">
    <!-- Info boxes -->
    <div class="row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-green fa fa-laptop">Verduras</span>
          <div class="info-box-content">
            <span class="info-box-number"><br/><br />Temperatura ideal: ( 1ºC a 4ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -2ºC a 8ºC )</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua fa fa-laptop">Embutidos</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( 2ºC a 3ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -1ºC a 4ºC )</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-yellow fa fa-laptop">Pollos</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( 1ºC a 3ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -2ºC a 5ºC )</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-blue fa fa-laptop">Helado</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( -2ºC a 0ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -4ºC a 2ºC )</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-orange fa fa-laptop">Mariscos</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( -3ºC a 2ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -5ºC a 4ºC )</span>
          </div>
        </div>
      </div>
      <!-- /.col -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-red fa fa-laptop">Carnes</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( -2ºC a 1ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -3ºC a 2ºC )</span>
          </div>
        </div>
      </div>
      <!-- /.col -->
      <!-- fix for small devices only -->
      <div class="clearfix visible-sm-block"></div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm-6 col-xs-12">
              
              
            </div>
            <hr class="visible-xs-block">            
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
    <!-- Main row -->
    
  </section>
  <!-- /.content -->
</template>
<script type="text/javascript">
  import Chart from 'chart.js'
  window.onload = function () {
    var aceptableMinima = -5
    var aceptableMaxima = 10
    var idealMinima = 0
    var idealMaxima = 5
    var data = [[2002, 4], [2003, 3], [2004, 8], [2005, 11], [2006, 4], [2007, 2], [2008, -1], [2009, -2], [2010, -8], [2011, 4], [2012, 6], [2013, 9]]
    var values = []
    for (let i = 0; i < data.length; i++) {
      if (data[i][1] <= aceptableMinima) {
        values.push({ x: new Date(data[i][0], 0), y: data[i][1], indexLabel: 'alerta', markerColor: 'red', markerType: 'cross' })
      } else if (data[i][1] <= idealMinima) {
        values.push({ x: new Date(data[i][0], 0), y: data[i][1], indexLabel: 'alerta', markerColor: 'yellow', markerType: 'triangle' })
      } else if (data[i][1] >= aceptableMaxima) {
        values.push({ x: new Date(data[i][0], 0), y: data[i][1], indexLabel: 'alerta', markerColor: 'red', markerType: 'cross' })
      } else if (data[i][1] >= idealMaxima) {
        values.push({ x: new Date(data[i][0], 0), y: data[i][1], indexLabel: 'alerta', markerColor: 'yellow', markerType: 'triangle' })
      } else {
        values.push({ x: new Date(data[i][0], 0), y: data[i][1] })
      }
    }
    var chart = new Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Music Album Sales by Year'
      },
      axisY: {
        title: 'Units Sold',
        valueFormatString: '##,#',
        suffix: ' ℃',
        stripLines: [

          {

            value: idealMinima,
            label: 'Ideal minima',
            color: 'black',
            thickness: 2,
            labelPlacement: 'inside',
            labelFontColor: 'black',
            lineDashType: 'longDashDot'
          },
          {
            value: idealMaxima,
            label: 'Ideal maxima',
            labelAlign: 'near',
            color: 'black',
            labelFontColor: 'black',
            labelPlacement: 'inside',
            lineDashType: 'longDash',
            thickness: 2
          },
          {
            value: aceptableMinima,
            label: 'Aceptable minima',
            color: 'red',
            labelPlacement: 'inside',
            labelFontColor: 'green',
            lineDashType: 'longDashDot',
            thickness: 2
          },
          {
            value: aceptableMaxima,
            label: 'Aceptable maxima',
            color: 'red',
            labelFontColor: 'green',
            lineDashType: 'longDash',
            labelPlacement: 'inside',
            labelAlign: 'near',
            thickness: 2
          }
        ]
      },
      data: [{
        showInLegend: true,
        legendText: 'Valores',
        yValueFormatString: '##,# ',
        xValueFormatString: 'YYYY',
        type: 'spline',
        dataPoints: values
      }]
    })
    chart.render()
  }
  export default {
    data() {
      return {
        generateRandomNumbers: function (numbers, max, min) {
          var a = []
          for (var i = 0; i < numbers; i++) {
            a.push(Math.floor(Math.random() * (max - min + 1)) + max)
          }
          return a
        }
      }
    },
    computed: {
      coPilotNumbers () {
        return this.generateRandomNumbers(12, 1000000, 10000)
      },
      personalNumbers () {
        return this.generateRandomNumbers(12, 1000000, 10000)
      },
      isMobile () {
        return (window.innerWidth <= 800 && window.innerHeight <= 600)
      }
    },
    mounted () {
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
}</script>
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
