<template>
  <!-- Main content -->
  <section class="content">
    <!-- Info boxes -->
    <div class="row">      
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua"></span>
          <div class="info-box-content">
            <span class="info-box-text">Temperatura ideal</span>
            <span class="info-box-number">Mínima: -2<small>%</small></span>
            <span class="info-box-number">Máxima: 8<small>%</small></span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-red"></span>
          <div class="info-box-content">
            <span class="info-box-text">Temperatura aceptable</span>
            <span class="info-box-number">Mínima: 1<small>%</small></span>
            <span class="info-box-number">Máxima: 4<small>%</small></span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
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
              <p class="text-center">
                <strong>Web Traffic Overview</strong>
              </p>
              <div id="chartContainer" style="height: 370px; width: 100%;"></div>
              
            </div>
            <hr class="visible-xs-block">            
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
    <!-- Main row -->
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box bg-yellow">
          <span class="info-box-icon"><i class="ion ion-ios-pricetag-outline"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Inventory</span>
            <span class="info-box-number">5,200</span>
            <div class="progress">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
            <span class="progress-description">
              50% Increase
            </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      
    </div>
    <!-- /.row -->
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
