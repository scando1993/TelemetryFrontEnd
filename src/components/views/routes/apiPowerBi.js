import * as pbi from 'powerbi-client'
export default {
  callPowerBi() {
    // Read embed application token from Model
    var accessToken = 'H4sIAAAAAAAEAB2Wta7FCpJF_-WlbslMLXVgZmZnZjhmtkfz73N78h2tqtq1_ucfO3uHOSv_-fc_ANS57oy8rnBwmnOVcsBF97CwALutMxpu2RsjM8CEWhC9sGxWPYUoiAG6JHaPIIp7MhayypOuSnQ_hBNVwiTibWy9TFhORaDCNle6jcwLZ5XHRELRNq-r21wh0PpMXTt-gXL5fUuae-C2oi5wF7iKGM0nDNZhgoIWsRe63jiLfgRxt7rZKuJ5MQzx0T5fwAqSyRESQsNoCTh1gC0dUdplYAmU-VhhPFjjrv-F29HgFYH1KtbixqCnJjQNe3GRbDkjfgF87g6akRpIpipw0Twkr19fnY0GXiJploA6fMGXODUXWZYkVmBJr5W5ObsLjLg4jqI0EIFirpjgZJW7UI0nYOfE2IsIN3AEU2fUvIxxEtZjiCQDsEC8SM6bVB5hQkCPFPMe2yahjTDajNUW6rrrT1E_PY1k4SNrV7Tj-Sql8aphb_hUd66NJzxYACJC-TwnoGPBr5XXaXM_wFFbxKOAjeZK0PcOz0M0CsHcRPlodcCQnI_2sHV5QatExNYT7h1EMJ9g2Km5bOX6BVUffoHsPOfIyPych6hkCtUU4_I7-sf31EL1l0E2GZJo9kVUoJDwoeK5IuuGNb0UANu-4grB8U2SMQaABjQvl5wvyrQe7_h4G8fdknuXURvk6FnAhzSymCRVO9t17fMLdY9vR6uvcBmZVCt-cgySoLl2ZTYRbQxL1_YrW9GZKUI9b6QJ3-9O9iHSmUuaOtEMrGVUpfIzyzmEd479usfc35kgIYc5vZ0sBnE6BgBpRMDLkHwhN6O3q77Z_KpwPewWLpTBgi8KCjQFpqvUgwFEoczvcrN0vkxv2Vw2WTIYht6fASV9QqayEdTAvRc8NAdOMeYY3Rou-NCL4GmRMJ6wZUEDhUu6um_Ye-H3AHBsixFZ4DDWUMj0isphTK3ktrVbcYXgbfwLk1C-jGWlyVaSxFGHc_fLrMayU2SVstRKJLNo2NP2k2h_nYYUXGUgpnfYR-Vr-FsHH-Nj2FudhR8BX6Axud3DR28-YE9-O-5Y8S4iMClzzJu1X8D4pJViskrjySj4o8O7A2GYmm2_HHGzZ0tZongDgtqPAgOaSvESlAYsLgdb5DWrI0jCwjOJS_699mbHaVH9cCXJAh4B4qw_Waqptmbl9GI9s5m3rZiDsIBxxygx1yV5wU8W8dx8-DFkKheNAoVhzCOzzg256dRFp4fl8F-qzgzBLYv2ruwNIrbOrG593RZCvqld3KivpEFHnfVO4xdUFogyFI3Jlht3tiCDmMB3DTrOAgUsb9Lr65dkoY9KpbXQCc7yTqDTmKsGt5MCDhGgVQL33liACSo7X56G3LzYisldC_gYR0q2sPzywcbHXz0KD3Dir_wbai7X608PEDyS0kAz0SEH17JdYQuHW5JCgPqDvpFlu4NVxIQHivBoQ9Dr8Lb4O9etyzY8WU1dpsWuhFmIFmg0AxHi4C0B8RDsvx8rqDBY7opyN7-bcpQV352-QODqk-8bdPCTzcgc_0sz3dgY5FAlG7_C_aJDyqoKmHkwI0k6K27OEP8O5Ir1IlB0Y9x6EfW2UlOU-rS22HmPgTKP0vtN7y96LJs2oFONj53YcYoxstq2ogxe1rhWrc89FJ7AwFopY356CJahHXzM2heX6n5jlkxthm3OrjPzfyhwkVyFZTdF3gShpjKZPrakRUDIkD96blFJtEy7vxFuEIhWzA41gjNBOuHeunr6Le5s3V2NHZIR2nxMBCL5hejLSCN_W50PuxKPWDo07kxt-BCLOP-QmdwZoE5oMuRi3wrRSR63iZwJHlfvenq2howUPtFJXZUEk7ODDN5f-t7xfVxqkascO5JW1sC83ijo-JFxQcrrDC179-XigXqob5lkIDDYSKyoVw2mQ2DS7z4fTWxuXewpdVJvJnVHyDspffDlVRiINwXOHFPJ46P4_UGE-n7ydpStcb-YBLKr9tuaAG9XtFdfkbFI4WaEeIcIE3nyVhokqVfZjdcTNfC2sUBlQynrNFhkCVMpOmoBWdtizcNegy4shikhrYvdHMGKeOkhUeAqVlfkDwZWFFxlPxRGaEIDVwl-IJFkOpyaAKxtFz--nXq5zH81LdV742ZWyxLpyLYaNkDBS7AO3dsfhjewf_zr3-47V2OWaveP50IZoaNhdHpHhvP7m3dgaU0I4ngKTxadoHOtxtaZ0P8AYxTtgddcGzQYcBDeq3f1oChrNoY7QcE2lTnBvcQWCp9fEOhCpnFFaEL6brcm43mSFb5hobTXgSqgtABY2EikJrNRb2ZGa5BXW953EFWXSOgliRhOT3NA5L7pTjyV1VoQIvncvivJaPVMmOTscNFvDHtKPyc2Qu98-Dnvrq8baGMjC88KEltIjtBfWsHnEAby3Atl_ryv7cZShn90zLGUpoKn0-aFz76i4_PFNaKHcv5s1bbPPzyr1yLWPQ26fZFB7bU2S6iow9jmrLyX6RNDGaOFdfYy2Cci8s9jiWtZsEHMMv85zxfwubbUp4R_l0FbCcVe-NC2Hmh86RP4I8f7_lNc1U3acW_UXq0J-RwUdhgEw9uHTIrmPAYe7LfLzpqJKhCB1daJ7D9NaU6BvJ4MgcOlbJDp2XeCfRAxycYWhBHlUKrBtc0M8HZyH73Kkxfcl_2xyunbfz7TPx76Zs65dQU8Cv_eQ3oH3r1w608K3RlluDPDuUF0aiq2jKaA7zHW0jCbDJ6-oOsW_u7WubT7TzupYFF7xPE8dfQG2nIe5Z3b-YysWs03-a_hqTkasgIURCJjiJ8DbLTyGXFI3wpe6jr4syMnErUBNhD3bRLmhff2p4NBFp8ivdMfviqpMxCNb3elZaJKQhTnl5PaC6D61NEbo951_DfcXrHpvi4IElxkh7Y0Sn1NBNGo_2L-3_8DeWdOvkILAAA='
    // // Read embed URL from Model
    var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=3d31d97b-45a0-4c27-95f8-3a9f246e0fa4&groupId=b02a42cf-1cab-4a4a-8f10-7611ca2f1a76&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d'
    // // Read report Id from Model
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
    // var accessToken = 'H4sIAAAAAAAEAB2Wta7FCpJF_-WlbslMLXVgZmZnZjhmtkfz73N78h2tqtq1_ucfO3uHOSv_-fc_ANS57oy8rnBwmnOVcsBF97CwALutMxpu2RsjM8CEWhC9sGxWPYUoiAG6JHaPIIp7MhayypOuSnQ_hBNVwiTibWy9TFhORaDCNle6jcwLZ5XHRELRNq-r21wh0PpMXTt-gXL5fUuae-C2oi5wF7iKGM0nDNZhgoIWsRe63jiLfgRxt7rZKuJ5MQzx0T5fwAqSyRESQsNoCTh1gC0dUdplYAmU-VhhPFjjrv-F29HgFYH1KtbixqCnJjQNe3GRbDkjfgF87g6akRpIpipw0Twkr19fnY0GXiJploA6fMGXODUXWZYkVmBJr5W5ObsLjLg4jqI0EIFirpjgZJW7UI0nYOfE2IsIN3AEU2fUvIxxEtZjiCQDsEC8SM6bVB5hQkCPFPMe2yahjTDajNUW6rrrT1E_PY1k4SNrV7Tj-Sql8aphb_hUd66NJzxYACJC-TwnoGPBr5XXaXM_wFFbxKOAjeZK0PcOz0M0CsHcRPlodcCQnI_2sHV5QatExNYT7h1EMJ9g2Km5bOX6BVUffoHsPOfIyPych6hkCtUU4_I7-sf31EL1l0E2GZJo9kVUoJDwoeK5IuuGNb0UANu-4grB8U2SMQaABjQvl5wvyrQe7_h4G8fdknuXURvk6FnAhzSymCRVO9t17fMLdY9vR6uvcBmZVCt-cgySoLl2ZTYRbQxL1_YrW9GZKUI9b6QJ3-9O9iHSmUuaOtEMrGVUpfIzyzmEd479usfc35kgIYc5vZ0sBnE6BgBpRMDLkHwhN6O3q77Z_KpwPewWLpTBgi8KCjQFpqvUgwFEoczvcrN0vkxv2Vw2WTIYht6fASV9QqayEdTAvRc8NAdOMeYY3Rou-NCL4GmRMJ6wZUEDhUu6um_Ye-H3AHBsixFZ4DDWUMj0isphTK3ktrVbcYXgbfwLk1C-jGWlyVaSxFGHc_fLrMayU2SVstRKJLNo2NP2k2h_nYYUXGUgpnfYR-Vr-FsHH-Nj2FudhR8BX6Axud3DR28-YE9-O-5Y8S4iMClzzJu1X8D4pJViskrjySj4o8O7A2GYmm2_HHGzZ0tZongDgtqPAgOaSvESlAYsLgdb5DWrI0jCwjOJS_699mbHaVH9cCXJAh4B4qw_Waqptmbl9GI9s5m3rZiDsIBxxygx1yV5wU8W8dx8-DFkKheNAoVhzCOzzg256dRFp4fl8F-qzgzBLYv2ruwNIrbOrG593RZCvqld3KivpEFHnfVO4xdUFogyFI3Jlht3tiCDmMB3DTrOAgUsb9Lr65dkoY9KpbXQCc7yTqDTmKsGt5MCDhGgVQL33liACSo7X56G3LzYisldC_gYR0q2sPzywcbHXz0KD3Dir_wbai7X608PEDyS0kAz0SEH17JdYQuHW5JCgPqDvpFlu4NVxIQHivBoQ9Dr8Lb4O9etyzY8WU1dpsWuhFmIFmg0AxHi4C0B8RDsvx8rqDBY7opyN7-bcpQV352-QODqk-8bdPCTzcgc_0sz3dgY5FAlG7_C_aJDyqoKmHkwI0k6K27OEP8O5Ir1IlB0Y9x6EfW2UlOU-rS22HmPgTKP0vtN7y96LJs2oFONj53YcYoxstq2ogxe1rhWrc89FJ7AwFopY356CJahHXzM2heX6n5jlkxthm3OrjPzfyhwkVyFZTdF3gShpjKZPrakRUDIkD96blFJtEy7vxFuEIhWzA41gjNBOuHeunr6Le5s3V2NHZIR2nxMBCL5hejLSCN_W50PuxKPWDo07kxt-BCLOP-QmdwZoE5oMuRi3wrRSR63iZwJHlfvenq2howUPtFJXZUEk7ODDN5f-t7xfVxqkascO5JW1sC83ijo-JFxQcrrDC179-XigXqob5lkIDDYSKyoVw2mQ2DS7z4fTWxuXewpdVJvJnVHyDspffDlVRiINwXOHFPJ46P4_UGE-n7ydpStcb-YBLKr9tuaAG9XtFdfkbFI4WaEeIcIE3nyVhokqVfZjdcTNfC2sUBlQynrNFhkCVMpOmoBWdtizcNegy4shikhrYvdHMGKeOkhUeAqVlfkDwZWFFxlPxRGaEIDVwl-IJFkOpyaAKxtFz--nXq5zH81LdV742ZWyxLpyLYaNkDBS7AO3dsfhjewf_zr3-47V2OWaveP50IZoaNhdHpHhvP7m3dgaU0I4ngKTxadoHOtxtaZ0P8AYxTtgddcGzQYcBDeq3f1oChrNoY7QcE2lTnBvcQWCp9fEOhCpnFFaEL6brcm43mSFb5hobTXgSqgtABY2EikJrNRb2ZGa5BXW953EFWXSOgliRhOT3NA5L7pTjyV1VoQIvncvivJaPVMmOTscNFvDHtKPyc2Qu98-Dnvrq8baGMjC88KEltIjtBfWsHnEAby3Atl_ryv7cZShn90zLGUpoKn0-aFz76i4_PFNaKHcv5s1bbPPzyr1yLWPQ26fZFB7bU2S6iow9jmrLyX6RNDGaOFdfYy2Cci8s9jiWtZsEHMMv85zxfwubbUp4R_l0FbCcVe-NC2Hmh86RP4I8f7_lNc1U3acW_UXq0J-RwUdhgEw9uHTIrmPAYe7LfLzpqJKhCB1daJ7D9NaU6BvJ4MgcOlbJDp2XeCfRAxycYWhBHlUKrBtc0M8HZyH73Kkxfcl_2xyunbfz7TPx76Zs65dQU8Cv_eQ3oH3r1w608K3RlluDPDuUF0aiq2jKaA7zHW0jCbDJ6-oOsW_u7WubT7TzupYFF7xPE8dfQG2nIe5Z3b-YysWs03-a_hqTkasgIURCJjiJ8DbLTyGXFI3wpe6jr4syMnErUBNhD3bRLmhff2p4NBFp8ivdMfviqpMxCNb3elZaJKQhTnl5PaC6D61NEbo951_DfcXrHpvi4IElxkh7Y0Sn1NBNGo_2L-3_8DeWdOvkILAAA='
    // // Read embed URL from Model
    // var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=3d31d97b-45a0-4c27-95f8-3a9f246e0fa4&groupId=b02a42cf-1cab-4a4a-8f10-7611ca2f1a76&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d'
    // // Read report Id from Model
    // var embedReportId = '3d31d97b-45a0-4c27-95f8-3a9f246e0fa4'
    // // Get models. models contains enums that can be used.
    // // var models = window['powerbi-client'].models
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
