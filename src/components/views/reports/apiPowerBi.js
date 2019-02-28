import * as pbi from 'powerbi-client'
export default {
  callPowerBi() {
    // Read embed application token from Model
    var accessToken = 'H4sIAAAAAAAEAB2Wxw60CA6E3-W_MhI5jTQHoMk5NnAj55xZ7btvz959sD-7qvyfP1by9FOS__n7z91HmDj59s2cSIeo3uTuOXLoMblu8hyCzkaIc3o4qnSQDkfdDI4S43U-q2_Nxm5-QtgNtnnGxXydlQSKizoHZmiJWhch0HmyIoiNz7mtROcJ6WOKSdyTw2gBKy8WNE4Q75unzym8hh4MOq6XbSmVQbEV09HonhDLLhLIzBvMF_dwBFS0E2S3xj5CWvsMrM7sewYuvP2qka_ZQHWB2yDPJrV-Bqsy5abZASuyuLSML48E0YOLyO-dRGlSBRUf22e1MU1HYf7Ta4ldsdGdY3x_C-oTDCjw9p1pzcIKFbWE8wzyAiDZd--5F3e1Mn3wcRrvWzOcsT3Vh-4jbwuwHUBjB4fDo2bc2EKtLqtybwRr5J0lnB2Am9LyVzMUKNAi8GotDfae7rnEzynPsFBmgkER_qEZ28palzeDIOCutYQG1woSpLBbKkmMwAMheCYaSwdXHcGTrxa-xbJMPCYNrUwBiMmPjVuFTupIXGj2Fe5mmoDDL-msql7y3vJsfGvbmTrbIG4JnTQrT26oyuC-MxvaxtWZ02PNDKLrpcVF9gr051t1X7aaYsByImT6SqjVDhMC-SQoThMXpLtLlDvu1dlvU5zqf-Zu6SMXpUjyO4KYt7LHt2nmdhkH3IC_qfGER-LHOUavHyWzIrkIxafhoYMQgfQpElQu8CF-5Gs7FVnEAKabFlt9jZChiFT0Dllfv3Pb8swdzTyVNAgd1_J5Ix9w9dvTBJ6x-npHSOuyjGOfg5r8ePLmsj8kubV9Od0k9J7EqbJjrX5j3BvhfEtKl8fOhpWYhAn7Ve1do9c8Ea5MUbJFmuIv1QTZiQWoRBCkFm7ErRdy46gkHaZ5Zp6faL9WfBP0vdnt5YsGVadVZriDmlFUZ2brZlQ8MttNLSNyDoL0lgXwrbUkdLlGQZeDoy95JVZcYeKNVZ2KC4V0-R0EyhWEef5RL4DXbBu7MM1xKSanuaudFl1FR2JPfbxQyHQBugrl6RYHk7RAP7ybEWBE4uVYP5ZIdir-08QYrOaurNxsW8jkUTazILh-HrqJR5ozXKHg4-CokXKg4MJ-TSZZCMWaG4_X2946hXUGcDSwWI1aVhic5VA_TP2q547jQza867-JKk9-gCiUSwWmS_Vge1YhrtpaC1WGRKpKbn388QoRQX-UyrI5oqAj2GWK3cxF0Moz5yv2WdmByPBQOC9kshKjHrxKoyCBw4IIzzIxjiQIWOECOndz64eXcxDRjonVaEky-Te4Y4mnn02zyW1X-0g1RwjqW6nYquHTswxu1D9UAznwNRhW33uau6PI0NDWhKqoMUhtLODCJymI_736SjH9BhkfRVZR5sQrhY7W-lLMhgN-N8TtjbIFmh0oCMEv5oJS5gifXZhyTmF2ivyKQyQibG4yNJydzJ7jL3KxJD4aFGCt3XttCmPzgwzNbhMd1pYpBV0-x5bxTY-Pm_M4yVJZnRXeuDjxOFDSR9tBFrr7wGxaQ1BaK5FrcFGnD95NQagRuxSeVZ3DtUms3soXtYunPIIClJYA-Q5zeJjkz8jnztDQzxqoGzwFq-BX5quMlvLxfcJVsOWcjoLKdJB1e95x1CUWBAVYiXW7xjO8yoQtvA_80TKrQ_eVVbEuDUE3JSv1RKMjODkg4yCdyr4lHj9P9eZmjUxNHsddASeOYcMjt3y-OVb6t0PZ46eiW5V7BlweWRZAZnD45j5P9tkRr_P2zJQ6Mk21rTdclaxYCrkCKye_HgHb1EYhxKAMlPGYhNlPMYg7H4QFgjPsHV0jpiGTH_1RE0ivuckKNtZ7z6Ayj6XyJQBOjOmldc9oBbYIKaQx6wtTIbPhyZAnGEftxmFJvJEC_mqJ25wCBACYNesglNDwOfKG7TgL4cq91VeKpVOWo5dHivWIg7hpt1PRwBq1k6LKxARRP1lbqCReTRO-EnlQHm8TQSUJ2u9ASzxD_PanwU60ojWCcesT2-dGPhSfQZNV5Og07TwhYQDBWMGYAOs5g5vG1ar5TnLvDHnLu0sS5KpDmAhTmG_yZ_-l8eRBC4jVZFB8fXZn2f1AGxN8rkTmlGAVy-SpQlJYpBf2yvE0s9bEV1CTX06x2TAe7OTTbGIm3BNLVrU1lI5vkaj7GWtBA9A_f_3h1mfeJ7V4fu-EuHVBIZ5o59pnntK0Y6ja6GkLgrWNSB723Nw9OTFieIC-NcgJYSbY9y3sFdPnYVHWwKGwPrh-6gXfve7MMohqmZs7qrzNGbc3pwWg4bxl5IVHNx1kpNrNgFNdw-5jjP91ZcburB719-dFHmvhVumCxCyF7bTNYUlFfiu6Zml3RrilykkxHVhZ4tQJZys0GKOrrb913y7H2geitQ7LvaOSC-xllcNKsq3GtHbtcastK3LCQ2VAuQqP592NGfcOTY0QOzYpPmIds1SJtlZxPXfBsZje7opLAXQeJYU4P36PhSIkbaL90qNIz0nQW_49sPsnfY7U1gCTyAYfhr_fghBrLa3--edfzM9cF6sc_ChLrcIt2xsU4VpJwgF1ofxL_P9XuU01JvuxFr-ymA31QtskZNmWJ2XAzCcWxXrE4unLuPF5g9eKEezNHfgEsqiI433tHeAjzpN2PILY_tWFuSbS2mgtj26ru9Aydzm8xElOXzkKU_pHWMLKA1buMpO_qQN3E__NU2nU7xZxAaCnHxsgjQToFAC5B52ZM1IQikDVnvuQukFduATS_RkpICC2fzbNkfzP-z_r3b1CoDlTR4HL9ECGCSj60uFTBhDK1KZU5y2K8fsWIYqT2dqQFAGRS9L50BZGfvd-cjePBtqxp_l1jHVzrSHTUCfHySZVVzXJp0CGfPjfztggyj8f_hii2-XMBImMHEkMeKd-3hS3l_dtIPO2t1ynCfX-tsDH_mH-7_8AFL7IfkILAAA='
    // Read embed URL from Model
    var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=3d31d97b-45a0-4c27-95f8-3a9f246e0fa4&groupId=b02a42cf-1cab-4a4a-8f10-7611ca2f1a76&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d'
    // Read report Id from Model
    var embedReportId = '3d31d97b-45a0-4c27-95f8-3a9f246e0fa4'
    $.get('http://104.209.223.100/powerbi/report/Home/embedreport', function (data, status) {
      console.log(status)
      console.log(data)
      if (status === 'success') {
        console.log(data)
        accessToken = data.EmbedToken.Token
        embedUrl = data.EmbedUrl
        embedReportId = data.Id
        // Get models. models contains enums that can be used.
        // var models = window['powerbi-client'].models
        var models = pbi.models
        console.log(models)
        // Embed configuration used to describe what and how to embed.
        // This object is used when calling powerbi.embed.
        // This also includes settings and options such as filters.
        // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
        var config_ = {
          type: 'report',
          tokenType: 1,
          accessToken: accessToken,
          embedUrl: embedUrl,
          id: embedReportId,
          permissions: 7 /* gives maximum permissions */,
          viewMode: 1,
          settings: {
            filterPaneEnabled: true,
            navContentPaneEnabled: true
          }
        }
        console.log(config_)
        // Get a reference to the embedded report HTML element
        // document.getElementById('reportContainer').id = 'LOL'
        var reportContainer = document.getElementById('reportContainer')
        // Instanciate the service
        let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory)
        // Embed the report and display it within the div container.
        var report = powerbi.embed(reportContainer, config_)
        console.log(report)
      }
    })
    // Get models. models contains enums that can be used.
    // var models = window['powerbi-client'].models
    // var models = pbi.models
    // console.log(models)
    // // Embed configuration used to describe what and how to embed.
    // // This object is used when calling powerbi.embed.
    // // This also includes settings and options such as filters.
    // // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
    // var config_ = {
    //   type: 'report',
    //   tokenType: 1,
    //   accessToken: accessToken,
    //   embedUrl: embedUrl,
    //   id: embedReportId,
    //   permissions: 7 /* gives maximum permissions */,
    //   viewMode: 1,
    //   settings: {
    //     filterPaneEnabled: true,
    //     navContentPaneEnabled: true
    //   }
    // }
    // console.log(config_)
    // // Get a reference to the embedded report HTML element
    // // document.getElementById('reportContainer').id = 'LOL'
    // var reportContainer = document.getElementById('reportContainer')
    // // Instanciate the service
    // let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory)
    // // Embed the report and display it within the div container.
    // var report = powerbi.embed(reportContainer, config_)
    // console.log(report)
  }
}
