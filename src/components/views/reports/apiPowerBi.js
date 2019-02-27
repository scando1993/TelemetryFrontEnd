import * as pbi from 'powerbi-client'
export default {
  callPowerBi() {
    // Read embed application token from textbox
    // var txtAccessToken = $('#txtCreateAccessToken').val()

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
    var accessToken = 'H4sIAAAAAAAEACWWxQ70SBKE3-W_eiUzrTQHQ5uZ7ZuZ2W7DaN99WzP3rCxVVER--fcfK32GOS3-_PdP7eODMJzI29jWN5vPz2DzJK0GHAukouTZRkFMrXaltw9btmbXBQI-yIsLn0ceFUIwuWe61JJwBkOnSyPdVgeHoa6BMdK93wdE-IACenTnUsVXCx2gFNJYBbqccYHaVUeSEmf3ItxzVWNDptiL5q8IQkADnICzeqk0q68kLwmlUVCX2uz3XtVshRcmpHW3e7XzvZUejUObUyzshegIVn0GTghyfBi9L2J8sXWs7ld9GCuoaGFOh_3RMHxsjmIkZ8Zt4_XMJLTyufvdealKMm_BkznReTdn4unsmwoS2kaelUPB6E3SmQV1Zw-2oU4xyt25UKt64AgyJJoYeKWRLzNLwmxy7KKvkvXB3huXVni6Z-TONFjJa0naLPfMDYrWEx0EOQ9sj9ATSG2TTNRhHZ0TWKLyO7udFEoHi303UOQfA-DQFhGBzYmJxkZylhDsfKXVSAH2bb68-eEoF_iq7GPw-Fsg5Hfbeu9WIaRQiDtwgu4LPIAUbyyso9idt4BoG4B-hcxIb2FpB0LxLTmG6Ok5ygN9l0Zp2nlQX71PEyFgPq-iitI7pUhzI0AYfqVBwg5qR8iaR3xyT1ycFBf5tmghAzjAOSs_aDvACkt1dy_3YAw3Amkh0G5PaGVdGo5htjF7SVkGoRe6ovSSch5jS9g_4H5c2Vn2e0zVm2JsMWGx8N4e4YGQ_EEt391SGV1emBagIGTWTFANwVvk0kLpsaxtbYo65PWg4_Txk36suSzuKMBBorzVmBbWAmLcA8cx8N7QL7E_2hULrkXR6k_8OzjwrrLti3vyEfKuAzcX_GB9XD_2FiggFGUMcL-QFeUyqcZyhL3Qhm1URI6S0aYCFAcpoG7DxyNFdc4gKDoPRtxWUgG-Pm-TZpLCB7AwmACpIveKxtalPAJA8uSmodaM3EkhztV5NFeblwFxKg-gZqhlq_XGHwmj7en7cHaf3yMKaFM8UjecSdwkXOuQhWbT2ujzFI4lWTenZBuBc0rYt8Lkb9qO0A55QoyPLIWMZcRzVo2FfFZd8hIrNGWh2-4jNW0TF_1kFlvwhDWBdh6_wYRmZg2At5i8glbuFsx0YK258rcZfwy_TVyXJswFGvzyPPXqyzn2lRcc096zp5qUAgP1J1rZ3M8luvvMqloZYJ8waU6-27NTQku074AYpNCttIVSQYUir83EP3flmo9KinPWVNogjii_aRFKDgPFQEbZJ_yYzy7gUNFtJDOMJofmv0uADWRF3K0ZW8ojkIaqCI60gfMq6tey0BrSkodO7z6_rByToS9dik2Km6M97Kslac017rqQQ7PMHBooJFum2DUyiCJxmTat6-UE1dK-W6LqWOLLSViK__mQfgB3vbX93uSjxnNf2fpFam9HSm6Ek8y73gt1jXh5iFYiYORyQy_aQSnDPmv8hoUkXLNFxF-kz0GLcbom4ww7PnIi6uSOEJlACtimWa3QN-q3BCBQjROebWhxViP542uSM2qVPyReVH0-gJk8j_JKiP-AD6ykbmlLpeCQNXFUTc7jPvrLnFhSbT1sWhiA_jWxiRJr6NtmysIaR95ZZoVaSwGDN1G_nvzrFprIM8vd6qrDSVPDz33kUsRK8ZTCb7hrOKMSU5Aw9l2IlpLx0Oc53nYZX8xMoLXX-tmGSFNOPY6pNtMyeZ9yQR3mRy51a8C6e6-A_BQNiSaWsYHCIRib6mg7c13e0AA3nL29IfKSuEd-nlAwQ-9x-tTQj_XJg6IgyEokRONap9jMb3tOwDPvRtH2azcH5TvZU9-lD9Q4CtxJFFmxfuFWbG8RL95lY36hOIJBT0-b--3w51GENZ6sJ9n32swwa_tlbtKclTkv2K6inRu-C23LivN5qdS0cE6FCDZJ9AYvWZ00dLmmCk6kFrx2j3DsGV0jws5y5UbdqBwwDU0xlxnWjsS5o6zZj5l9HuoHi0iJLaSNVWv8omulRmcPGYL7dJqpg2Mojq8QxWwK3ZiEYLS-kpKdaUmHIUcobQJJ7VQVYHDrA6Pq9_Zff_35zx9ue5ZjVsvnh3nfuf1Qq8-SQ5ePHdjI9w7kp3h8_k3tqJ6N_bIo2WwPvI4Q-0fVa7bzo-e-LuBC0CFWMdwJOr7OmU8xXjRMHEU90FwAhrwBK1z5MFaMoumStH0S3NWASo11X3s2EgmSaWbJ-eWW9fq0xsfmOaK1g9PQMXiQoEBjV2A9k1rqP0E2_D47568n2Q-s8xwF4RWuUiCxdDWRJTxF7AeNJVGmP_zsXM2Cgw__gV53vAt9iQP7jcDadW-lMhtmnclHjmoBrIHqqJP3BTcQw5s86KZRnuTwXR5aAoeKWyx8V0glnyRJJ4FwBjWOmsNX9kb_la1Lhn9okU1tX94fM3ZlpsbUVt3AvP6V-VmacpODn8oYoRW3yy4sPEXNA1Tze5hy_U-V29ZTepxb-StzCALQLHn8zEmJCMJ0KpNSt4Dr1GNhH97yauOnt-7zUJzcRqa81OWH1-_5TU4wONB0pEKk8jI-vAy7BeaKhK5IA9o0XKREeoUB1JGnPw4B12tPR9zoY4M1if80fLF6Kx-n5Hbk0xvvJTyVR_De2RmJG_HCdzeESSN5FYhArjF7rdzgVGCYj-igyG9JqRoa3DmJsTZvrvbKegXTBMzFjv38t3x8TqNYQMMMTbz5rsnchj8LhUrZC-0VlOil5hS7qK5NP84XicIkIyU9xYggLGxWErffMP8AXsKx0uPP0K3defppEodTZWyNJc6I8xidTu2xz2lCN-WAIZ4pDXjBG3TMCYlnfjL_7__wUNBJ2goAAA=='
    // Read embed URL from Model
    var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f74713f1-47ba-40da-a863-effcede1fc82&groupId=cf09135e-3b8f-42fe-85b0-33839eebd351&autoAuth=true&ctid=b2cce9a6-443f-42c7-b085-d80d2fb83bf8'
    // Read report Id from Model
    var embedReportId = ' f74713f1-47ba-40da-a863-effcede1fc82'
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
    // reportContainer.name = 'Ya cambio'
    console.log('Ahora el contenedor------------')
    console.log(reportContainer)

    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory)
    // Embed the report and display it within the div container.
    var report = powerbi.embed(reportContainer, config_)
    console.log(report)
  }
}
