import * as powerbi from 'powerbi-client'
export default {
  callPowerBi() {
    // Read embed application token from textbox
    //  var txtAccessToken = $('#txtCreateAccessToken').val()

    // Read embed URL from textbox
    //  var txtEmbedUrl = $('#txtCreateReportEmbed').val()

    // Read dataset Id from textbox
    //  var txtEmbedDatasetId = $('#txtEmbedDatasetId').val()

    // Read embed type from radio
    //  var tokenType = $('input:radio[name=tokenType]:checked').val()

    // Get models. models contains enums that can be used.
    //  var models = window['powerbi-client'].models

    // Embed create configuration used to describe the what and how to create report.
    // This object is used when calling powerbi.createReport.
    //  var embedCreateConfiguration = {
      //  tokenType: tokenType = '0' ? models.TokenType.Aad : models.TokenType.Embed,
      //  accessToken: txtAccessToken,
      //  embedUrl: txtEmbedUrl,
      //  datasetId: txtEmbedDatasetId
    //  }

    // Grab the reference to the div HTML element that will host the report
    //  var embedContainer = $('#embedContainer')[0]

    // Create report
    //  var report = powerbi.createReport(embedContainer, embedCreateConfiguration)

    // Report.off removes a given event handler if it exists.
    //  report.off('loaded')

    // Report.on will add an event handler which prints to Log window.
    //  report.on('loaded', function () {
      //  Log.logText('Loaded')
    //  })

    //  report.off('error')
    //  report.on('error', function (event) {
      //  Log.log(event.detail)
    //  })

    // report.off removes a given event handler if it exists.
   // report.off('saved')
    //  report.on('saved', function (event) {
      //  Log.log(event.detail)
      //  Log.logText('In order to interact with the new report, create a new token and load the new report')
    //  })
    // Read embed application token from Model
    var accessToken = '6e8ae41f-c84d-46a5-811d-1993e09d5d80'
    // Read embed URL from Model
    var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d'
    // Read report Id from Model
    var embedReportId = 'f74713f1-47ba-40da-a863-effcede1fc82'
    // Get models. models contains enums that can be used.
    var models = window['powerbi-client'].models
    // Embed configuration used to describe what and how to embed.
    // This object is used when calling powerbi.embed.
    // This also includes settings and options such as filters.
    // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
    var config = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      permissions: models.Permissions.All,
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true
      }
    }
    // Get a reference to the embedded report HTML element
    var reportContainer = document.getElementById('reportContainer')
    // Embed the report and display it within the div container.
    var report = powerbi.embed(reportContainer, config)
    console.log(report)
  }
}
