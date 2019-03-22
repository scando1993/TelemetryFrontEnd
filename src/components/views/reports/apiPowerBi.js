import * as pbi from 'powerbi-client'
export default {
  callPowerBi() {
    // Read embed application token from Model
    //  var accessToken = 'H4sIAAAAAAAEAB2Wxw60CA6E3-W_MhI5jTQHoMk5NnAj55xZ7btvz959sD-7qvyfP1by9FOS__n7z91HmDj59s2cSIeo3uTuOXLoMblu8hyCzkaIc3o4qnSQDkfdDI4S43U-q2_Nxm5-QtgNtnnGxXydlQSKizoHZmiJWhch0HmyIoiNz7mtROcJ6WOKSdyTw2gBKy8WNE4Q75unzym8hh4MOq6XbSmVQbEV09HonhDLLhLIzBvMF_dwBFS0E2S3xj5CWvsMrM7sewYuvP2qka_ZQHWB2yDPJrV-Bqsy5abZASuyuLSML48E0YOLyO-dRGlSBRUf22e1MU1HYf7Ta4ldsdGdY3x_C-oTDCjw9p1pzcIKFbWE8wzyAiDZd--5F3e1Mn3wcRrvWzOcsT3Vh-4jbwuwHUBjB4fDo2bc2EKtLqtybwRr5J0lnB2Am9LyVzMUKNAi8GotDfae7rnEzynPsFBmgkER_qEZ28palzeDIOCutYQG1woSpLBbKkmMwAMheCYaSwdXHcGTrxa-xbJMPCYNrUwBiMmPjVuFTupIXGj2Fe5mmoDDL-msql7y3vJsfGvbmTrbIG4JnTQrT26oyuC-MxvaxtWZ02PNDKLrpcVF9gr051t1X7aaYsByImT6SqjVDhMC-SQoThMXpLtLlDvu1dlvU5zqf-Zu6SMXpUjyO4KYt7LHt2nmdhkH3IC_qfGER-LHOUavHyWzIrkIxafhoYMQgfQpElQu8CF-5Gs7FVnEAKabFlt9jZChiFT0Dllfv3Pb8swdzTyVNAgd1_J5Ix9w9dvTBJ6x-npHSOuyjGOfg5r8ePLmsj8kubV9Od0k9J7EqbJjrX5j3BvhfEtKl8fOhpWYhAn7Ve1do9c8Ea5MUbJFmuIv1QTZiQWoRBCkFm7ErRdy46gkHaZ5Zp6faL9WfBP0vdnt5YsGVadVZriDmlFUZ2brZlQ8MttNLSNyDoL0lgXwrbUkdLlGQZeDoy95JVZcYeKNVZ2KC4V0-R0EyhWEef5RL4DXbBu7MM1xKSanuaudFl1FR2JPfbxQyHQBugrl6RYHk7RAP7ybEWBE4uVYP5ZIdir-08QYrOaurNxsW8jkUTazILh-HrqJR5ozXKHg4-CokXKg4MJ-TSZZCMWaG4_X2946hXUGcDSwWI1aVhic5VA_TP2q547jQza867-JKk9-gCiUSwWmS_Vge1YhrtpaC1WGRKpKbn388QoRQX-UyrI5oqAj2GWK3cxF0Moz5yv2WdmByPBQOC9kshKjHrxKoyCBw4IIzzIxjiQIWOECOndz64eXcxDRjonVaEky-Te4Y4mnn02zyW1X-0g1RwjqW6nYquHTswxu1D9UAznwNRhW33uau6PI0NDWhKqoMUhtLODCJymI_736SjH9BhkfRVZR5sQrhY7W-lLMhgN-N8TtjbIFmh0oCMEv5oJS5gifXZhyTmF2ivyKQyQibG4yNJydzJ7jL3KxJD4aFGCt3XttCmPzgwzNbhMd1pYpBV0-x5bxTY-Pm_M4yVJZnRXeuDjxOFDSR9tBFrr7wGxaQ1BaK5FrcFGnD95NQagRuxSeVZ3DtUms3soXtYunPIIClJYA-Q5zeJjkz8jnztDQzxqoGzwFq-BX5quMlvLxfcJVsOWcjoLKdJB1e95x1CUWBAVYiXW7xjO8yoQtvA_80TKrQ_eVVbEuDUE3JSv1RKMjODkg4yCdyr4lHj9P9eZmjUxNHsddASeOYcMjt3y-OVb6t0PZ46eiW5V7BlweWRZAZnD45j5P9tkRr_P2zJQ6Mk21rTdclaxYCrkCKye_HgHb1EYhxKAMlPGYhNlPMYg7H4QFgjPsHV0jpiGTH_1RE0ivuckKNtZ7z6Ayj6XyJQBOjOmldc9oBbYIKaQx6wtTIbPhyZAnGEftxmFJvJEC_mqJ25wCBACYNesglNDwOfKG7TgL4cq91VeKpVOWo5dHivWIg7hpt1PRwBq1k6LKxARRP1lbqCReTRO-EnlQHm8TQSUJ2u9ASzxD_PanwU60ojWCcesT2-dGPhSfQZNV5Og07TwhYQDBWMGYAOs5g5vG1ar5TnLvDHnLu0sS5KpDmAhTmG_yZ_-l8eRBC4jVZFB8fXZn2f1AGxN8rkTmlGAVy-SpQlJYpBf2yvE0s9bEV1CTX06x2TAe7OTTbGIm3BNLVrU1lI5vkaj7GWtBA9A_f_3h1mfeJ7V4fu-EuHVBIZ5o59pnntK0Y6ja6GkLgrWNSB723Nw9OTFieIC-NcgJYSbY9y3sFdPnYVHWwKGwPrh-6gXfve7MMohqmZs7qrzNGbc3pwWg4bxl5IVHNx1kpNrNgFNdw-5jjP91ZcburB719-dFHmvhVumCxCyF7bTNYUlFfiu6Zml3RrilykkxHVhZ4tQJZys0GKOrrb913y7H2geitQ7LvaOSC-xllcNKsq3GtHbtcastK3LCQ2VAuQqP592NGfcOTY0QOzYpPmIds1SJtlZxPXfBsZje7opLAXQeJYU4P36PhSIkbaL90qNIz0nQW_49sPsnfY7U1gCTyAYfhr_fghBrLa3--edfzM9cF6sc_ChLrcIt2xsU4VpJwgF1ofxL_P9XuU01JvuxFr-ymA31QtskZNmWJ2XAzCcWxXrE4unLuPF5g9eKEezNHfgEsqiI433tHeAjzpN2PILY_tWFuSbS2mgtj26ru9Aydzm8xElOXzkKU_pHWMLKA1buMpO_qQN3E__NU2nU7xZxAaCnHxsgjQToFAC5B52ZM1IQikDVnvuQukFduATS_RkpICC2fzbNkfzP-z_r3b1CoDlTR4HL9ECGCSj60uFTBhDK1KZU5y2K8fsWIYqT2dqQFAGRS9L50BZGfvd-cjePBtqxp_l1jHVzrSHTUCfHySZVVzXJp0CGfPjfztggyj8f_hii2-XMBImMHEkMeKd-3hS3l_dtIPO2t1ynCfX-tsDH_mH-7_8AFL7IfkILAAA='
    //  var accessToken2 = 'H4sIAAAAAAAEACWWtc7GDHaE7-VvHclMkbYwM7M7M9uvGaLce77s9lMczRw9M__zj52945KV__z3P9FS-cl-Bzrjq0r2mlkqkwDORROLw3VA89Cv2KTOhCUUfWpSCAKc8fNzjridl8cYFSFliXbxLY2LnQ6ukSxBEpHewSnc-nxpTq6S2mgMs3YOvaCgzLkf5ONlLxRys6u98nJw4da1Sf0UmwteeNBrm14__FsL96m7wUBZQYxzesxq79lnh5Fqxn_xacB81INJiPmcEljoinjuAkMrlJY7oLtU6yRr0g2wukD03GyorRsf2J4qZpI2RQGW-6y4SNN8hv9wg_GBZwBFjGGhlQeY0MIHwrkEPuJ3zjp6wqEq7QUnh0rV0vlsuidz_XLyfXC77opqVx-nk04vWwk7OuCaCTgwD68NQk4kRZsmkO6Q4ye4faCzISYK6xdCGdTy-MBHRaedCfTBSDRbc0ecBFWRWQPqK86oh6kVPusHOr4CUmlwqomLpHCEV6bWPIU7pkRjxUCA6sZ3kdIOJTlOPowFj3A8Liqp31cWESXQe2j_LMJYFyoWQPf4wjYV9rbPMOa6bMSh65iADD_C4DX37jXp1nck5eGHkhO8KOXBulnhHhx3jvMKvkmsskgpt7bXsiTlRAXXuOFd3KzfBwzg-mg_C631Rv6B7nrs47KTn8oX-N07DWLcvRVdA4Dqd13q53Dgr4QQtsGFi2vSlMoFzlGndymznuq7KkY3vZd9EVlH9Kl8A-aQHFLuI6OZlIqtcmoztz2A3gWh7kvDNL3VAX1CzO5zzxCwplP4RI6EL6VcwG3MKcbKccnNRi4ePINgUBJ9H_0dhCeUWe1pwImuX3Ombg0Y6_lGe1xGeVZoQNxc5_xTOY4ArwoZqmPkkPYId5UCzw5xTmf08l2Bs6qMr0wKG8chx_kLBsxjm5QKjOXoJHI8r1WqkYMsqopMjZWB0Awo04Q3zu0BapE-9bmqvDbUcosDYk_M9Rz7TS2sXE_hgWwJcD9lHK9tOw2Pd-wBAMMxkRf-6RanoB_2YiyXtpzoRDY5QStcahozFDG5RG0c1iZrZRP1BrhAK0_ctbOmuX6uX6_wwQHC44jLU7QGdeG6d2-QDQsWpYzTYZ5e2bC6_WMnErJGJur10PH2s6P35fTdm-E65xNKTE6lF4f0uIaor0YPvbjCbtO13D15pxWtvZTWclQFvx74pL_bRrHvJbHZXq5CaylTnEdmX8oYuogkOYdeO-30S2wD2LI0yNp826qpjvVixnjmofHcDMSLx_2lz1RcyjCPHwk3uI3FAL6VgBthilIT8u7gvdcTUzEdyRFfHvo0ab2zv4ZPWedBTM7QFiVfouqLz4hZHsXOQ_Orkl6iX6Utd_lixrIqfqn2agTHv5A3BRltPKZUSV7UMfEGCPHx7WkQrW8gcyu4PkyAi55JXODBAITmbVi7x7YUFLi_VMofGcijFkvcCs6pnLghUD4IvJoIL7lw0TjhvnEZZsxfS2f1A8ZX2gNyK9tspQmtyCtMkJm4-amZ3oFz0iG0UecMJG0M2nq6ROqLCzKXpF1g2uyky655ZhODhYYTyejojAQJJBdPDHZIUbQelNvq35eKy8bxrK_7Ittaa-wQzgNO8BczUad8Uz6gQzGWuQNEwrvcyfnrPjgfBjhHTM11SDE8qAkjoKoItqhA2BWUyCU6lxOCALvm9dQwTuoXiqB53PXQLmNy81Hr2bPlcdamIvFYLk2nU7lrH7dxvLm4wETrTjYyIz5ZaC6X-hZmX9zqZOclwO3MrnO4vcCxrasK59TqnSJ_SHFdowkzudUP-z6YE8xNCeTl2KyJSSDBJAcQ0x_PsVtM5yvCtpvHoNYz1to_KklMvM6dz5URKKjGKB27jUC1g0YUctFvBoIWgX_YWs1yskcKnV2iplo8eA2O7vzSg3z6J4FTJJAA9x1hiSiXhRtqRnQdUQf3Wi6pdnUa0o84GNYNS9ZkL9-QRy2Jr3IKgDujDMBIkM2_YlFaoPsLtvfFAuhUrCvK2GJ1aP2x4nt82Y2osK9ON3pXFchJR6_peCRl18n628rNTg4XY1h3-uj861___Nc_3Pb-jkWr3r-ax-1WXS9dxR1bCKXXV4cNVaREuA94ZDNKC7BWupxfKQpHSyB8NJzO5_HZZiB6dD6HIllANqlfbhzpJ7F311rx-GCj1XH6LNJMDRCRxnjxnKjuBmZoT0v8i2r66lS_2BWGtMI2TURHrUFCPTzKojVPXbpLWBdFP3FbRzspftivHsf_qpS_gVq2D6BHW0GpaFx1dCMxgmGOXedH4Sefi38rJMBI-8Z7jCwy_503PudaIIivca9w35gXgCX5UlSApAAColB2rQhly7G_-2dZkuXO_arRL7S8LhZdlNPsegm_nlr0gK79QNyB1BjBwR0Z7GHnkIX3et2IXsDHJzxZ4ptQ_-ZI8x-b319bbUr457I4_sTOap_-012WE1sC-uLn_rfK65o5O86t-pNt0KCk4WkkJfdx_R8G8q43XDCVNrnI0Z_FpEmGl4Jq4Tz7HbwmBIVz_6HOyhXaxsczKmFbxsgE11-7tIAiuhj66nC8AWLq1nAgnskOSy5SSAH6e9FknTfx725xbKZRNIWBfINz7Ad897i_lfWqVFGZgI7MSUwrdaw3JkG0vNL8MDReCosbIYFI1s92u8qCJ6zOKQbanx7hXsId7D289j4YzSVhIICRxb7nit9rDPlVo-zCiLohHCmPMZOxblgxWa_KzDYJMJC7IoqDmJ3MxbSYcT3yV5lGufgDIo7zZZ6QHmEWgqA1U44X_2E-dI2nDvGzYYbMkiFwY9U80cKvqwmUTf6_zf_7f81OCn_aCgAA'
    var accessToken = 'H4sIAAAAAAAEACWWRa7FCpJE9_KnLslMJdXAzMyemZnp2q3ee79WLSBToZOKjPiff-zsHZes_Off_2xOpKYN5li-ZvRmVmSOuRjxVUxrH6I9zMJqaFtKO9dtGjiStRYjRc2fEDyPvmdq2deZnodDKgUp8Cos5IHpEs9Z_PI2wL8cPSRPB7uNRIl8HfHWhOdWQrXvD5MoLNTNZAruVKJJCCNHe_GySfcoQvWTQSXUncnx-wBf-JCV8W0i1VFnbR0g3434ukF3fiKW_gUYTZH1meoJ21uhisNeV5DfxRPfgyzHCcY8SbGgxPOOuiDR8lNCfzFghvGWyybHixphOsnehVjI0LnsVwAe2ChMPILbttSuVg8b9Li6qj-Jk9LR-m_UTgwwAyAAwr7oEVBTyK5zGO-DO8xoGqi6D4_MTQJ4b64OptDKjJF2hCPhR9mG-BgPlOqy8-maqWpzVTd9RADXfVuPOAFomz3lzsy4btFPFcu3nEMsspsaTDnuTMtH2Iepi0wMsBRbdmW-4IWPx_rOnCkl1V6jEfDV3b7RQRg9BorgUzJPU3KL8IILcnMnzjE1w7inCD0mUYZDYARKfRZrFgiNsAPwck0wfx_pHNyXrtDFVG89sRaPNOjMXnBUdK2uyJZMISTrpYeY5TROw9GVtsORv8xegjQCNFVIDfKD8eN6IhzV58sPhq0e5HrteTdCmJsmQrLNTbIe_-tYoCRNz9z5Yp0kfg1LW2s1kZKX4FFAo8HTGMrL4qe-VoJubmAQSIuIbLYia0R1VIuMG4mreHumk7k6hEDg0EhrAeub13CPKnRv6Qb5kk4Q4Gtc34QBrE4HIwfdlTVEuQp3OhbST9AjPE6mXaKvvUb0HCxo7E4iOFPIhdE7WQdStTTYDL8Kl-w1yMLcK1sFkVeMaCIKm42i-iz_fuP6ggJKFI3XOmJMlbUj2sprapbOuu-oAxAcKsJqU3bnWWkcQqrIeNpxWwPhbbfbZ5mE8FFDN_Y9YHss6YyWgj3RdR0D_inpn9ZJuxPtNAEZPjfllcxpxhxNpdbP8m7k7XyKZz_mJLJqQszPwRMim5LdNX2mqwWEiF1rTLt69F8ywV-YAXZcPKmCpob5xKZ_bvAcB9Sxcdm9SvCFJGWQJlSVZTecgERicsn45G8KrKP9p5ceZXEnY_XcCggMzlY_QuSp87cb2xpggbk5FinUOhH8Cs5p4-7E1LRcdJlvZJrH0vRRtMOWtbedy45f8EvHjIfGW8J4xS2xLF-WV4mFIKbOoxrT9RloIZIpxR7nkvMnEJFtbwS45jbLFz17-wU89md26uiNAQ_mTo_zQmD1Azgkl8Ni53j-5qN6u5nSa6UveAfmaScAvLdiZaCAJeejnL8p1bNnlw5Vg41GLiQICEo0RrAY0F8YMR0btUoeIE846VDqFl5lO6DALNVf6eWj_six_FMIDpHnHDtgA2_g-8bml9wMBeiGC_b9E8wFpw0T9tScirqVbU9SxjE_I53dpZfom52saSCaVHrtMn686GIVn3U3bQoSLk8idVMOmQzDeWw2CHfxvGaN57QFBRd1wkkxCy3t9uXmlLNRFpERJ3fdcgsn_sV4c-BprnhywdXUxw-6uRbFTyKVjuaB1yxOUxDKh3eM2MaII3rvI_uwkVYaDM_XCcIZOF7W1Qgk3ioUiW5gTuirAYaMkOkWIL7v6syy2Op3ADNK7MaMsBfFDWN6svkC7C6KX4BAv3pIegQfy-NjopSIVXQzcgiL79hVEUdQ6QykpPAmQKgcAz6PowuQIjHb8CXARsQdImynsSVr_PprB1MnZ4lHQgZCR3vCSsQ9eBS2f2954FFQQz4PfhflHreL-jlCZyfzZAgb8XruiqapsY3bacjjuMEYn9k84qtq-gQkIRoYRoN1M8ChWqdrmKwGMMluUal8xznLwbXqJVS_n0LnNV7K5BHxE9osVuZFKyYLQ0pwZH6fdfEOiCKav1fhp6CbKinAhHyqxh-PU-Fceyoqk-JCdUqf7kJ5WC-AIVda9t1cojQj3prqkrjZuMIxlsJy1Bq7rk8UW6gNAib-rcxAo20hBzzMTxz1DCV52LM4o_nPf_751z_c_q7nolXvX8zLGgkPf_vsn2QajHD2FtE7NAPShhzvnuO_hUGRkuOSwkiQiheTQss6ZinXs0GQpg87n8LHAf-D0fj80lEgj22vzg-RRMUi2QQu6JOf3dHTkL9ft2CAgbC-HV0KeM5twD3oZS98QQ1zgs7VX5iATka7oTC1FAFKi5mJCMBrshzmPe8CFJRn3mjYNDJFFA5laYN7woaI_cu6FId3ZfC7sn5n8K5JM6Z2Mov0qI_KaAfKNnAbeUV6L9JBg0VSE39VNqOT8zqfPcDjVEIrFxUkKwT-c1mb594bCV5G_PlKYAYiQG0zOxbW8xtWlS4dfAgh0TSoqOxLx4uXqjEUklwK5kVtaZz_Yn7XttqV8I-yamOrglpzVCfmXCPJj0fO4b_H8Lpmzs5rr_6_c4k7fwdrZbXe_oXxsgPc1vugTc3BxQXyY82dGVWTlmFY4cH5WMtdo_NGq2Q5_60Kr9NATG0fGrlWegxOQ-P7rq41oVtF3c7KhZ034IGjHVHW0kjqEzj2hIrjgTo3WFQuHZTqPYkUvjYfAjLXMgVNMoYXfGn3DZaFupoMFg4Uw6bn79VIigMA1XG2im49lN7SHmmSZoG9WKyTtT9pZTYxMEAleH5RtVHivBcUb-81WqWpCRf0TTR-VjJnzS8X9iJ092KEdA9DV0V8-QvIheH-DbN4Chj_fNPXbFPS2XW1g96qOH5K5kK3s6HJHuikNnTYmSu9ZqYRj3PJThV8-B4tXPTzh_l__w_T7rVp2goAAA=='
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
          permissions: models.Permissions.All, //  permissions: 7 /* gives maximum permissions */,
          viewMode: models.ViewMode.Edit, //  viewMode: 1,
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
        //  report.off('saved')
        //  report.on('saved', function (event) { console.log(event.detail)
        //  if (event.detail.saveAs) {  console.log('In order to interact with the new report, create a new token and load the new report') }
        //  })
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
