<template>
  <!-- Main content -->
  <section class="content ">
    <!-- Info boxes -->
    <div class="row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-green icofont-broccoli">Verduras</span>
          <div class="info-box-content">
            <span class="info-box-number"><br/><br />Temperatura ideal: ( 1ºC a 4ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -2ºC a 8ºC )</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua icofont-sausage">Embutidos</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( 2ºC a 3ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -1ºC a 4ºC )</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-yellow icofont-chicken">Pollos</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( 1ºC a 3ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -2ºC a 5ºC )</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-blue icofont-ice-cream-alt">Helado</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( -2ºC a 0ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -4ºC a 2ºC )</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-orange icofont-shrimp">Mariscos</span>
          <div class="info-box-content">
            <span class="info-box-number"><br /><br />Temperatura ideal: ( -3ºC a 2ºC )</span>
            <span class="info-box-number">Temperatura aceptable: ( -5ºC a 4ºC )</span>
          </div>
        </div>
      </div>
      <!-- /.col -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-red icofont-cow">Carnes</span>
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

    <!--<section class="content-header">-->
      <!--<div id='reportContainer' style="height: 800px"></div>-->
    <!--</section>-->

    <!--&lt;!&ndash; /.row &ndash;&gt;-->
    <div class="col-xs-12">
      <div class="box">
        <!--<div class="box-header with-border">-->
          <!--<div class="box-body">-->
            <!--<div class="col-sm-6 col-xs-12">-->
              <div id="reportContainer" style="height: 600px; width: 100%;"></div>
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
    <!-- /.row -->
    <!-- Main row -->
    
  </section>
  <!-- /.content -->
</template>
<script type="text/javascript">
  import api from './apiPowerBi.js'
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
      api.callPowerBi()
      this.$nextTick(() => {
        // var ctx = document.getElementById('trafficBar').getContext('2d')
        // var config = {
        //   type: 'line',
        //   data: {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        //     datasets: [{
        //       label: 'CoPilot',
        //       fill: false,
        //       borderColor: '#284184',
        //       pointBackgroundColor: '#284184',
        //       backgroundColor: 'rgba(0, 0, 0, 0)',
        //       data: this.coPilotNumbers
        //     }, {
        //       label: 'Personal Site',
        //       borderColor: '#4BC0C0',
        //       pointBackgroundColor: '#4BC0C0',
        //       backgroundColor: 'rgba(0, 0, 0, 0)',
        //       data: this.personalNumbers
        //     }]
        //   },
        //   options: {
        //     responsive: true,
        //     maintainAspectRatio: !this.isMobile,
        //     legend: {
        //       position: 'bottom',
        //       display: true
        //     },
        //     tooltips: {
        //       mode: 'label',
        //       xPadding: 10,
        //       yPadding: 10,
        //       bodySpacing: 10
        //     }
        //   }
        // }
        //
        // new Chart(ctx, config) // eslint-disable-line no-new
      })
    }
}</script>
<style>

  .info-box {
    cursor: pointer;
  }

  .info-box-content {
    text-align: left;
    vertical-align: middle;
    display: inherit;
  }

  .fullCanvas {
    width: 100%;
  }
</style>
