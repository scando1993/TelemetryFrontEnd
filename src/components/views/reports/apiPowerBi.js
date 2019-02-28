import * as pbi from 'powerbi-client'
export default {
  callPowerBi() {
    // Read embed application token from Model

    var accessToken = 'H4sIAAAAAAAEACWWtc7GDHaE7-VvHclMkbYwM77mzszMjnLv-bLbHk31aGbO_M8_dvoOc1r889__nCiuG9xgLwxrUY9KA2_A6EyKjvgJ56pm9iHTeCwUZkcIOWmV84fqDx3gjbtGmTewI2MLH_rVuVqJFMQL9bD2tqBxujBg91jgZDXPssWij9krKh6uDmFoyvlJQaSySuYl297fKTVajIvrx0YUCHZWK9ogOeef0P2Z-JNICMisyNrAGKCwEhbOahNu7mlFjI02ggfGx0FuN5fJVtSjxCT2sUpF4ZT81PLj7WmQEORCZhw4Bij7XIVdKUFDKy-C0SQ3vnCBZ3oQNQksiNzDIe-mT7HZInvTixPRZOVe78IFGEaIGIuwkE6Y7cknQKQAMNEc2CEsLYT8lKFmgfVgp2UtAdt27Gkzii4c3AkvIH3nDAapvjn1R21SRmn6mF8MVmin64vWjgJG9_3QRhVy8zBY87lQIdtU8TbEFAsRYlktO1RjPoewCu6mk2JeluTxOrVdR3lNcYjD8yoH3xcvBVfg-6CRZBii_mDNjXSuc7ppKRr2doVsal7aE-c-AOehIxjGCKyZkFOvq604V2ICT4il_GzY2RpzCr845OaLF61e5lPRfRDPH5nLP9FM6RtawqbOWFSMjooFmty1NvdGvBaLNNGV7PZWfelvyFXmOxVRZCZbhVZFW_mOyzzvU80V9SiSUv32Z_lUUFlAOGKAHuViRoaskw_U5Loj0zJZCwk2TEKuZ9jnnRYcxc-2WcY-OzWkl647M8LlPjO1McRlVkNU73K-9GB3s9M8_qNmBYDSMddpiklnbrncIWSVOhYsAl_1pkPNX72WYdkbka0NEUWJJw3rQ92SmmndXoTjC3hJpvh8Ln3R-fFIcIUXvyxG_hzdHdd6wH86PsI4sclmOeMhxRH8F0Sqk4GgPlK9ELYKZ_A9gDOw7o2E6NoLz0FkzGfmRI3voFpqucq2gJq4wrtHhj7CMX2qSQB0eMDzAHWygid4KDYPLrRaelYSZk9tsRClPGJq_PDj6u15kQtFGQlZO-fXewrcswHynTkXRcdRrLbkJAAmqFPubFf499HA4Nc5NJ4rV0M6SuedUeOrR7QgWlBuNmGBp1MGUy-dQcQohJ6Km2jyBBVoUQYLOKxf4bBKa6yyzQK8BK3u3EPazkInvduPXucHfTo3ClDocDWLKwYUzHxURFh2IRaLZ-_9_owD3jG5qWf31wGY9N2MLWAWmMyLmM9xIes-rCMEPTWiiZuRNlavvDHDMtwGSn_sbntWAbW-NxRj55kpfTP128mKC0ymclg05B4Oj4a_AWHWyLDLhd6A9Rw6pGdeWf19YMh86OQIzpYU8vbOGnIYLkWO21mb1wKVWC26sCOYZ8QwR9AUnAd_HYCqxxoTRk10dQDNfFxqdverMXWiDeMvOu7mfKUGKFrRdmOY1IxDHGxBvaDFNYuvX7RLXSBpQaUzNA1KOnZ95USv6ZCbYzGz5ofrOofqdD1PfLTUDd56xMPxlG4L2M8JlTgp28apB7W1uO9vHj3v4e5XiLStqQUCVhrs1q_id3o43aV4aJgiyrUQ_pFNzT-nD8jBAQyzIH1mQbK8izSeF7P5bm09aaMPdo1WDhSex1QJtb75arQBMAdVB9EySY0fQWBr3XWSqRXC-yPyA5HzjqgnvaChkkYiY6nKKhXi7MjvuPSENRa_VTvdlETPsVjDTbOggNOXcS79Ia-kUdwXbM9AcQ6xhyEl3bpkjdtolhUMaTk4APgWjWxfpeLletEZtc3JNiPFEaMJBDEzytqfod7hQa_YEHaYCFnM9CMKzmAjgFi3UfzkqLLSsWYlKH7JCfIWOUgzfEP5eAQ-Nr8RVOGuL_hMMVLpIjlwfKN5U1ZqoT9Xy4xTVXuSfUj-nhqzeWS8HXPKmLChxMcupmKT5uYFzsbJYJyA5ym4hR9BIinRvzqRI19kmpc5j3hkJmpKTyfqJutMw2VRzizilSAJQ1gAuvM9K7S9X7hdrIMsDG8_aC3ENMWCoXEftblI-Y9_tR3Q2Il9J0Zp2wwc-VV77zI_J3z-QyyjglxDVBidcI4Wpbpaj5URJNRo-IaKHsIu4TiXvpu3cutsB7yajZ72jR4noM8S73VJwRpFlefe31vPcRxoKG1vj62QJFVe8sC0KakCIhlPz0Rgdx7Ze7zwz9dxrYLoSECMQgEj-tfdPvOvf_3zX_9w27scs1a-fzNj-5DLS-53WyLtBUn2EMooK00qh9TQ74MAtchbB3snSoAj3IElTojywwzt0cME6IkIIGkxzVeUlpoucDrHP03a2RUHbt0dn7RmxhD8wRv8t9vU8H6_wSRRiRTM9EmqIzPJ_ZAXMmtG-hKH_qrKt7RBoYpMKK8zyYrXJXtYfy8koP19dBXjf9Wnz1Gia5nRPvljJxMm_DpP0G_Xl5D-EpHJrz4BBmQIhY-kQMdVu9kLxeVwuaHNCC1B05TJW8NCEk7U_r2eym4KqRLW00fYFwoBger1lIjw1BQlkcP9Bm4BQKatrvcRlBc_mczR3cl6XZ8HDa9EqlNWZg12tUsPt6mpcKj_g_ldmnJTgj_Kko65EePX2JJ8IzZ6vv98jfNv1a-tp_Q4t_JPps8wlu_CtigfweQAvrvCI8m-oRMclZzcW48-W7uato9f-WPrqzYoBAWd3MyOasewaEW8J6xe0RQP_CzlWaoZeYgMEcApq_3LjNz663lvlAY8Vg_ou3iLTYHV-Yov8KpSEriQoADnOggX9Y_V-EBFqJ_gULja1a2DXkz2mEQa4hGUWr_3h536dSIKbkrZe-Q50v9IXWZ45GHEaPw8In1Aa0NqqDaUT-RSoeeS5A3ePOE9nNgzWdtyp2Nn8De1hqFa_m9KhaqMxww921GhMr9n-5sEKZvhitNvx_vG-syKwsbfSg28HalXSjvdPqI91VmDvItYnUPxIE4JWvVvwdTd47Dx_2P-3_8DbcPnWVoLAAA='
    // Read embed URL from Model
    var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d'
    // Read report Id from Model
    var embedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204'
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
}
