import * as powerbi from 'powerbi-client'
export default {
  callPowerBi() {
    // Read embed application token from Model
    var accessToken = 'H4sIAAAAAAAEACWWta7FCpZE_-WlHslMI3VgZmZnZjhmtlvz73PVnVe0aqv2-vc_dvYOc1b-87__-OCyGQbBrsidt6nctTIWmzbP-kN5BnRg80Vaj3auv9KXXZevI8wPAadz2MH5IYVDL8JICxB6mRc7A3p-6Z4ojV84sKpwifnw4e2kWc3-uAYPmau9gwGJFhcydvdoR0gKYlNUvZbCEZODCij51Llb9_XOKz8QL4_DWyJn7j3S5DT0VMpUNn8sAr0riUg-pn7BgPct6-B7Ld-qfsI1R0BYDdiLSIG93UF1NGc5L_T1YD4k1NLUtcDUSDjmcGHES3xmJHiQn9WtWtXv-n4O8QTvUEh4liu-2mcapZytmIthRWzI55c3RiuNT80nUyvCioLatIo8xj0znXEdk-eozMSl2dymX47fgb529EmGQWlcKCJoAF-uAi12PVPcJc_jPpuXNVWb6q_PZGhPmGnT--iztpZ6mQR6dxRF474zfpnoNPfWZXO7GWMOcTApsw-zXlmoSseZw2oLk-pNsJ2O0vFwwCcTOFMGan4ztV45l5e5C43L9EABU933N1AOgq24bMtmWToKbxm5duG8NJ2It3IRlTDQrXrMjEU8fYWNvoL0a-K5g5Qg0o20x0FNAWjFi7Xph4EkyDUhBCIJYT2Xorjp6_vNSDf5-dezbnFoZR-Z6pEJ_cQtEz5xcm5tYocrcISZaAaA8Q6prQIP2hz39HBHXT8mlTSYi4MaC-yky0JGRTYuDJnE4czJvtJRdR9IIdngZglGKSmgOhu_b83uYbzz25qGwiU3OY5paMN-n7hQpYQ0a-8hVFMsDC2c5nfWu4UPx47hefKhXQyTiWXCP9fr2XxKWthKjb7xdW-1ruJLt70z6GcXh2F4Uum1WjwMDR0oPC68C84yKjU3qd9rmkyk31M7G6YKLBoYUsXiv_uOcSjgyrJ8_f4Of-ZvYctnFm6kMpvVZ3PoG8GXA32G7_cNl6SnBpy7PupmV6c1fBgpop1yy2oEjF4k3tTGYYm0r-0qzxCJiQz86CrJSo-51250iq3w86y6H_5Y1nWJ2OBHjojlGfSZYHivA7-W5_FFpmLebQHNOG6YyCN832kFRlQYiIGo6_Gy2oyDI9Dfo6BrihBnYAtHm4TFI-_ct-2RoObWC6SOdbqBb_NDq4drEmPpnEDmCTV3IN6tsr7iURnPYjxcs7LWt213_cBmx7s72kWqDzf-Xb4zatA0dNseNxjKhVy27_q3gK0i7o_V7IW7G5PgAmhOc6CY2r7LV8EybCZUXXg-m-crJCRdzko382iMV6Cwuw-g1u8h2q3W5JE748iRPF1Fi0bwGG7YLLugJb5Dpm9mBHQ3aTDMZEQmFV6jwBmjHczVT3RkePXPkaWpHDAM4Za9oS5I7D10YTzmCsq7S-Gn5uEs4UmpHzt1tKjfb4gqC-f-dvx-g3TgiKYawqG58z18w2HeO5uhItIjfHemgydomtGqmA_W9_NHFL6UGOveW3v5WcfGAWplxi1JQ7mt1fA4JgF0fOCDChHfRrqdAzzwvenrNC6LnU7J2FCu62UREH6d6xkdwyvFY0Abd4N75NwEJXZUJdbApsyxeocPSO9JUguyPlBNhK-flUlxPkNGcwTujp3eS0EMjLS73GXMDxjtHEbA2UVE_0bDp_jCB358D94wA5dxhcH1egg7jnSkwkNxIJwTD5D0TUMMDm2CfbVmqqEMdhSA4NXldAuL2GLutmqK8BOZwgJra4jLRYC5n_Gk8-H2PCfTt9b3POviJQkCtCI7fwU6OcFXx8TXmN8e691hmx-2xQwAHKbkRpwa2mgC3iwDLr2EjWgJCI4NNGFyVdb-SkwC5bbi02ONkaQsGJXvrU-XSSpESUAQ4WzB3jyDeGLJFZm2R-KIEYyZr5q03IQtT3vlSl7PVxVjbazpgd_FkNg5wNlpUse1oWcKWCH20pycB1ukRjzhTNh1F82m6MN20OShuguBsI3wgby8-9mIv-x-oDxkRuQ5QyTMgs4l_yQmp5pxGI48UG2wmeK0VhH63nWgcavEfBZfJgxWDme0eoPKuXmwtfrXWhuh9VquXgRIXV6H0TCBiVPTO9nwk1evOy_N_PCjBV8AOAbx7_1VHLGbIdFBksdqRi8TfzgYUpOaRY8I2SuWhHMMqOH2f_3zP_9w27scs1a9f-rAYlBPugW12S8qnd0ztbw8tjsSgzL-4FXwC34olu0rZao_SV2DnvR9Xq3IvPqwqEjFZONu5s1F_k8p0hp6bbI_pFqZGms1XZGxk462dKKruugCmE22fCFtQULuqWSCNI8Hiahte_Q1jSJNKGHbkZJ3xtXCBsPHzEhWR8J-rT6ugTQwL-wDLMRW2R3U7ygYSmkqbUZn3KvZnZOwNQIol6R_fM-ta6LJelPrDzH6rTv061Fy9hWEuEDnsWYAL6yi4llNqWmq-lZGAmsottlLcgvV3OuSAQLpC-E68IMahbIHBtnWQALnvni0QRVBvxGwqycjM-6hEEaRSHtwwgTLd3XH-93_-g_md2mrTQn_KP-yeAlPnQ60fPErpCjOScf_m_K6ZsqOc6v-YplZvhlXRsL2tYHGmyLnghk3adVaBNBzBQzelo2QKUpGuwi6JAhk-uwfpan7mw6ilGge3BG_Q2e1lhf2K4D0J179ZW_ZOleVt5yAsxjyKksvP2kroRtunUbtctAqh2E5lAcZzytHGWcTJeWcx4hXYyC8zhF2RmQFb-x-8AXzD7mJVXfPxFxdUyRoptw7VVgqOCsaqBqHAI71boXqiefHzuFHjSlcHSXKASYXlVL2vpoeEwMtD_sQb-GY4-TZU6L2dwWAW84sIMmjhx09z8xtew1yk87i2kMNuMRE-WD_LHe64gaXzZjmBFX922U1mj8dSnLePgDzVelxHZdhPBMpdXCK-cP8f_8Pwf9mHy4LAAA='
    // Read embed URL from Model
    var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d'
    // Read report Id from Model
    var embedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204'
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
