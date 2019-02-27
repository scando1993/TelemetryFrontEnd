<template>
  <div>
    <h1 class='text-center'>Reportes</h1>
    <!--<iframe width='1400' height='600' src='https://app.powerbi.com/view?r=eyJrIjoiOTZmZjFlOWYtMGM1MS00ZDY5LWJmOTctNDkxYWZiNGE0ZDZlIiwidCI6ImIyY2NlOWE2LTQ0M2YtNDJjNy1iMDg1LWQ4MGQyZmI4M2JmOCIsImMiOjR9' frameborder='0' allowFullScreen='true'></iframe>-->
    <div>
      <!-- Embed Report-->
      <button @click="dameclick">Dame click</button>
      <div>
        <asp:Panel ID='PanelEmbed' runat='server' Visible='true'>
          <div>
            <div><b class='step'>Step 3</b>: Embed a report</div>

            <div>Enter an embed url for a report from Step 2 (starts with https://):</div>
            <input type='text' id='tb_EmbedURL' style='width: 1024px;' />
            <br />
            <input type='button' id='bEmbedReportAction' value='Embed Report' />
          </div>
          <div id='reportContainer'></div>
          
        </asp:Panel>
      </div>
    </div>
  </div>

</template>

<style>
</style>

<script>
import api from './apiPowerBi.js'
export default{
  data: () => ({
    // Read embed application token from Model
    accessToken: 'H4sIAAAAAAAEAB2WxQ7shhJE_-VuHclMkbIwjpnGvDMzs6P372-UXveiVaquOv_-sZKnn5L8z99_UI-ULukW6_zzUMEC0MBnZeNDqrBhMJNShPn8o3cQVLWRKN2O8bAMJ9XFZBvTy7-7mrMDm9R1m82QVBKjb1cOGK8UYa-GQG-TobsMVeV9-VUgQ3eS5MKp4_Qa1xbA69D9UdN5a0BYsGsv5GFwgjWYEzq0YN9G1NyKa1eunhySXntRlRIXPEezE8esaxnZ1wfZeLz6Bs6p8tjhOdSkdB7srbINvpTyVMTzBJYRoFVowefhY4rlY7VBd-7WSHf6lEP7JjUNPRupecq72lALxdeXY4Sajxi_Gh7BSDCCPTAczFJkKtGw5aWn-pnDwNFSgekiWWUXGiTohXId1NtRtzFsE5BDNOR9dssVWzlPBe27utrK7U3rayZgmqQDfuDvnZFnzXv9YjxtZvL-MfrM_H4WzjvDjmr1cwyzTgrdcwI746W2aeA3XQ4999ZCiVgLB0ZyyVpiowX5k7pq-fWCpTPqPdUw1C0QoFSpftO75oC7EhaQctvbg7_QaiXoPPEaXa_fEcaYnN5HHVVeWZHP33RA9yjTIFd6crAO1lKZRtllEGxQkUMJ-BXWMEz1NnPK6FUxpO52twZSWUKEPvaN6FaM2mxJ07sk6AoF1PwQ0livbC083RE_ixGo5PwOvqtlcibZ94JRFtLgDwrgx_bs3qqf5VkVUcKFwfzc4GG5Qomp1oCm6EtcS3fH0c0ChI1uKjDXKeSeqyeVZPjxC_NzkmhHiiENBcp1IR88W-c8z-C5_E6F9TEuS6OZpJ37RUVTCgO1p18NSeQ63axtUMZOmzrXTjiTazDC99SFJBbiqYPy441EMwFqiTMk967H-hExsO_D6CNwwVBZ03dYSTqyai0uz1bMvdFgGqRLLOusHr_YrH1iuXuhrUVGYUMM2Ijvl7IHA-9NYTPnyqwLK8qqvx7-5k98NrLOxSOfX_dRQvVgZn0JyWft9KK3fstpcdjGOkVoZfShrqej3VrNfBukIEj3-Ijny8Y4J3iCO_Rgs0wR4jizqWdbGNvbKtYOZI77fgdMGEHg9ZIIizoflfFF75FaSdRDzxDsZtF-t8NNqH3naSacEF5BpnaPMTndctQVK0A0sFM1mirEW6gWosRTFhFYZudwMCc6vfzYxyI9gExHSBbC2AIs5RMseEuPxHr_HPc8sopID8REHOVehSSMLBORuOn32hlbbpvCgdNFMvOB5_myiatSMmK-18IyzTKNstD8HKrCwxKluQ8SbIE0zdWVY2pZBS6rP1IwqGauho5sfPj9S103t7Ndk6v3O75roDaHOXoIWbXYDT7cRLR30gVXCPO74C3fyDeEvAct_eQN7ko4enwkSTmVK_GhVYvdK8boPSAmTzgAcWDyXJEkiBo-6MobIctrFcHv9eSfdW33A95Ld1-a_NztQzUuq1nGvTwxNg1AVhLnAgDlIKRQUqS6itFn_MJGY0m6ZlX7zKtOF33pcDBtUmWbdv1Nt6vdgVIvvzeNEjyaqp8jeKap_FjuU97dw8NRpBmW0ppyU2gcGaNNl264sM3ZseF1YwP3Hi6W9InO3K9n001Y4eqT6c5EyiqzxycV6xDbWp-mLVuDEH8bi5pxgYbyOI-D2OC1rN2zzUOpOCPp90yQITgx_IbVDAiRhlveJ5V3piPiFyxyzkvHV69Y9q0s0fxZS1jeS9Z6lRh0RH-mX6qv-c28I6ISPYWAJVJDyViTYYNbKzYOZ7dleVq4eQl_xk6cnEWBbX6q3z5pmD3a_K-XzVO678cJMnpXTq2yMw0qB2ci2erXFzKi8PZx5PjLlTeYig8jIvOUxh5awfQVN6YdZ6vljWG6ohk7AxwSvx4Bbt-L0_iGn81VyMyI6-q4eB-AYr0y09ZhgsqhG9JkHenGQNldInx1CW3AhsNWCwD2MRKuEhD0m4JWUGqMDSxoA5n9MILqA3Th6F54vWIHIFRXskMaTw6N1TaBaMeRlbXQ8bPSEBCNXEb72m1Y3I8TIGY8Z90DcBmOJpTNXfGa92aIpMjJe0TDy5tKomtHRVAcHy9DOH8nUJMTZ7LMui2fX08rLtJK7jMVcDttnQoYs3PYJYednFVLfbGZyqItb6WVy8V4MVUkfPFUq23J8j9__vrDrc-8T2rx_NChM1jkAPRRdvJtH472hdQDGZFiqiw-zTbn-xG-HbdLcDG5N0WL5H3Pw3aYnXJC9s0osPOlXjllVcIqWSNZf3Gwnjer23iQ2xwlt54lx94l4rUnMWYaEKU4WM7RXu6REF26_N5qrfC5KsIEzZwzIAven3ln5VZQwwaDBg7BXxN9w9XZ_lWaCK-swjXWm8ybUAbpLQ6LYtd4HbQxWkIbEh2GIGZPGHItB07FHpJAKBBbEWWyqX95-cYBauyAH7jQv9y7qIiSKAsyhTqheJX9BotEnLNvhzWBl8sTujFh5oHyXscKnD9Bj8Zy6yoRa-GTeFC7eBGijNr3YtvTAxNbqBsyb5Prn_9kfua6WGX_pzJ7k9RGaEuQKRqaSGfpIlRZ_bf1baox2Y-1-K1tbSPH8DsY2C5KsKGrM5mJ8UFZmLP4B51ZeTzsUNE4a6fJCLsvi2Rv2UgU1MMWmwRTBcmkMkpIA2viIplLoqkKRBdX12rOwnuAIQV0DoaN9lI6yjKKl3JfDe4jFu6xJYX82MuTRg7Z7FG2AcCLLTR5lS0Dm_ZHImEiLmfefS-5zp2FRfHPiq8j9L3fK-0eW8LqnHsqq-kfloph-EHgHgeeMY3LW3CuGmRn1fEtQ5-onQE5rQmqg73jlfYkXzvFpJfMQSMvDKPT5iXb7QtmgahprF5W0XQW-_4hJQhU5pcScHSlP5qL8ZFj3JrDzz9OU_Xbl0AQ2_Y7z16bVAbO7D8-gTE_mf_3f86wC_EuCwAA',
    // Read embed URL from Model
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f74713f1-47ba-40da-a863-effcede1fc82&groupId=cf09135e-3b8f-42fe-85b0-33839eebd351&autoAuth=true&ctid=b2cce9a6-443f-42c7-b085-d80d2fb83bf8',
    // Read report Id from Model
    embedReportId: 'f6bfd646-b718-44dc-a378-b73e6b528204'
  }),
  mounted() {
    let powerbiScript = document.createElement('script')
    powerbiScript.setAttribute('src', './dist/powerbi.js')
    powerbiScript.async = true
    document.head.appendChild(powerbiScript)
    // Get models. models contains enums that can be used.
    let models = window['powerbi-client'].models

    // Read embed application token from Model
    var accessToken = 'H4sIAAAAAAAEACWWt6rGCoKD3-W2XnBOC1M45_Q7u3POOXvYd9_DTCvU6EMI_fsfO32HOS3--d9_ACsoJRkSzOFigw9bJtzb_QDpimv2_dSDvtSe29CWLDbLsEs5f3gzUw7eMj4xkhkStGm1zPjGfCxkSRawFfgAMR0svQcnxH5ZAdlXJghTxhb3UA-g1UV1JSesp9hyWnU6rZul030PggblGGt6-T8y6ZFikGk8knxltpSc9rJJy3YeE5Tj2en4g0iOYF5NulJvvYWL8OrK8A-nE2B7ckyKmyfmkwuC97GuibWK1BJcqh9CIbflSXqbEiL8VCgPUPDh63LWP4zK0agVCDEMKeJuL5BRbmhwJqqRa_WFJ-mrdKVBrOZ3uMYRf-MOk9T51MDhsCne1U0V0oB6s5A62iT0Zs9O5x_v01mZw9Gohd9GC0jDovtF6-nYIyEYRnkx3gp-skYsg708X36nEz4049E-ta-X6H3PQ1CDkXkzCvNcv_D4enPXALdaFzpgieH6dQwc4I_EDfSg_5d9C7RHFw0MFUK1FJ0VLmOfvSFIFCF8VNxCPgeEkLMWZQ4dc0vdSIC-bMGicWimxfFMm3X4Olq3w0bl1ccnnmotojDXBdW2YciDIfjps4iKlaK8XUuu4ukSc6-PIGgAzhfEagjopmqQOLaf0wVTWCmrchRqtAF76hOOfXWkY8Gxtf_cpfaHbII5fgTFEUlH80vRFUaaRaWyO5DJgZ8cdm9WLhjdscLZtouzQMPJqpkrDbvW5hgE_ejBVtZ0SWOSK1J3-qUAeDgkL5OoUrjOy-5UxS9PD96ReVKTKkKKmjw9dWOHnHWY4ydH07ADjVLaLRlOtlb3q6X7gPCWAwbLUn98s9E9AighnO-U5nzw2LwFYm5-1CComxcvzZuy-k4cLEYf2-3o00Go-KRpECJS0NbecgQuHFF5SF2PrLyZ_uBt-jRQT0MEAaX_EKz73bC6CVYx1r_qCRZeAgGCWU5H7d3ISEoBao4tuFGY7bVnmFvs4zseFm3uI28AECs5RSUXhr1j0aUHXCGvL6--5zTIR8h1fnStt43tCnl_CiJNWd5qLJAqUetwRxMR76bDblI5K2Yh3F0NeF5QAOzlUfxmFA-8q8fBmfV4dkSCD4uxYy8HWgz-7V--rLs-BWU1B27m4acc39MK56wnsz6u3bzf7oCYyTE3gSZKJSYA7JWb2xnE9zso7dVhZ3JVW-x5i4l0G-Gt8-AGzAQPVATci3Ti-mHhALMD4us3_TRKiBe2gEEYrySns4BueMmqWeT_ZKRUKYbTa6trhy2_L6kjXQOznD8ybJS0UA7exf7UdPpSVtpiDMqGG-n4tTNgjXiYud_rGlBR2nkgokq3S5TdP_tWdLk7ci1SuBQC0FdT44ERIQB58v0LLAQDWzWZdI_EkJAIzE_fXUtvl9goUjtIntvnfR44DW1sHTsgj74X4BGh4OnYr4bTxL8NSskYgY8So7q7Sxw6zZpZbmBnLFaU-tQqTrtEMTN3ssRpID8XF2JTARSwkRisaTQEcGklsS_hqfcM71es4iYYe82edwWvs41ER6X5UAuSWJDD2J1rU6ZdmthGDzHuuXNAJmCz1aoUaN8rXIo4moVXIicMZjmJKO5W6CJ2ltJ1WkQNYZwhYfbQYpPOMO-xUOHGiAF6mLfocBCiq1IhWmX7e3m049Ya31sTRH6fAzpjvc8i3e0qwxzpvCmmSEjZB69MBYqnGeOmHF2KyS65v1-Lc0ZVJ7p05pLtG-ODf3syLzr0pE00N6tTgSgGn5YX-DPqYHunNn_No-FObS0_vR20nLYXUpSxOKtxJTY3GdLiwscamdthaqkq9DGzzIN6wQdn0Qwp5xg8f334ENUSKDmd9QBV3yN6ZHEU5ho3VFhN_BRWILBDR7InMDQUTy45gqMjr0dEVoInqh6q3HWv1gZ7W9HMIfHtZ1vIIMtV5Gaa9Yj0DvnruABmRDWFB41bxFbGhmf1cz7Qp8_gWfJDg9BCy8B7y6dgDsICdHUoWjZu76JUilDE3293hhA4NxkcNGKXzh0HbfBrXEQPutSHJdCzSxjQn0AZ3YNWKSFx9_iMXhjfwRLYVuZOg4riIn0RzpxScqDnAdsfFLV4oPmJN2aYqmkiF42CZKyy9a4BJvNC0nMaoJ9D3__653_-4bZ3OWatfP-uw3KfvjnP3TcR43ILQkEbkDmP77iCn6gqDqHTzo_Cfv3Uujc57-0xVTwLQhFi2Wf9wW9yeJWZUIaZbquUHRudzxb_-3HLt0dTSELW8ingJCzgEe2IxhabkT084e6BayG_dMVSWHVC_NHh4yMhYUFUTiJfehpec4AM_QDmosAfK3C54K1se2IlES-5mS30oyRRV0tvkxuJgq_aHxpWcs_2GFoExFo_TRJlXJagdLFzYnioOG-Zy2fKFoxbIB-g6lhWLMLnykcqyv240QKV4N2jAmFFzbPsXCy9-x3qXFBGG3lSnoXWP9XIifJBwEIODupTdnYI7frzPZ5H-aG4hVo2TNl3_vUfzO_SlJsS_FHuzNi2Xpw1JcmkfzcjWb1O_NfltvWUHudW_tnMx31boUdxwL_maR8sC2X8FI_3o9Eg6eOXaLWCwP_t-RIL6KAUc69M0FbOM-3nReIino6s0_QjkTdfa1L_taSwfbSNpF5z__Tu9RI6-bIq6HQoEDibeAm28Qw1ablAUd1OG52uABTOIkid-vtwmSxH2aSgeEWDqfDr0xdJXaiYY2y43hphOGd30uhxM6JUgTNFkXhpdZWNsr5vFOaECqjG_ypdo-LIXYZQmSaWg9wDV2X-6Y_tU1OrF0u2YFxlhlC-dQGePUVmgIIRdjHb0t8dTCDU1u2PxBlnb6rIxvHEyFZPPVZABVaUVVp97vFQ-36ge9XPnO57F6dp3ccP2yjqizB_mP_v_wEwYqWyLgsAAA=='
    // Read embed URL from Model
    var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d'
    // Read report Id from Model
    var embedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204'
    var config = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      permissions: models.Permissions.All /* gives maximum permissions */,
      viewMode: models.ViewMode.Edit,
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true
      }
    }
    powerbiScript.onload = () => {
      var reportContainer = document.getElementById('reportContainer')
      // Embed the report and display it within the div container.
      var report = self.embed(reportContainer, config)
      console.log(report)
    }
    // Get a reference to the embedded report HTML element
  },
  methods: {
    dameclick() {
      api.callPowerBi()
    }
  }
}
</script>
            // // Read embed application token from Model
            // var accessToken = 'H4sIAAAAAAAEAB2WxQ7shhJE_-VuHclMkbIwjpnGvDMzs6P372-UXveiVaquOv_-sZKnn5L8z99_UI-ULukW6_zzUMEC0MBnZeNDqrBhMJNShPn8o3cQVLWRKN2O8bAMJ9XFZBvTy7-7mrMDm9R1m82QVBKjb1cOGK8UYa-GQG-TobsMVeV9-VUgQ3eS5MKp4_Qa1xbA69D9UdN5a0BYsGsv5GFwgjWYEzq0YN9G1NyKa1eunhySXntRlRIXPEezE8esaxnZ1wfZeLz6Bs6p8tjhOdSkdB7srbINvpTyVMTzBJYRoFVowefhY4rlY7VBd-7WSHf6lEP7JjUNPRupecq72lALxdeXY4Sajxi_Gh7BSDCCPTAczFJkKtGw5aWn-pnDwNFSgekiWWUXGiTohXId1NtRtzFsE5BDNOR9dssVWzlPBe27utrK7U3rayZgmqQDfuDvnZFnzXv9YjxtZvL-MfrM_H4WzjvDjmr1cwyzTgrdcwI746W2aeA3XQ4999ZCiVgLB0ZyyVpiowX5k7pq-fWCpTPqPdUw1C0QoFSpftO75oC7EhaQctvbg7_QaiXoPPEaXa_fEcaYnN5HHVVeWZHP33RA9yjTIFd6crAO1lKZRtllEGxQkUMJ-BXWMEz1NnPK6FUxpO52twZSWUKEPvaN6FaM2mxJ07sk6AoF1PwQ0livbC083RE_ixGo5PwOvqtlcibZ94JRFtLgDwrgx_bs3qqf5VkVUcKFwfzc4GG5Qomp1oCm6EtcS3fH0c0ChI1uKjDXKeSeqyeVZPjxC_NzkmhHiiENBcp1IR88W-c8z-C5_E6F9TEuS6OZpJ37RUVTCgO1p18NSeQ63axtUMZOmzrXTjiTazDC99SFJBbiqYPy441EMwFqiTMk967H-hExsO_D6CNwwVBZ03dYSTqyai0uz1bMvdFgGqRLLOusHr_YrH1iuXuhrUVGYUMM2Ijvl7IHA-9NYTPnyqwLK8qqvx7-5k98NrLOxSOfX_dRQvVgZn0JyWft9KK3fstpcdjGOkVoZfShrqej3VrNfBukIEj3-Ijny8Y4J3iCO_Rgs0wR4jizqWdbGNvbKtYOZI77fgdMGEHg9ZIIizoflfFF75FaSdRDzxDsZtF-t8NNqH3naSacEF5BpnaPMTndctQVK0A0sFM1mirEW6gWosRTFhFYZudwMCc6vfzYxyI9gExHSBbC2AIs5RMseEuPxHr_HPc8sopID8REHOVehSSMLBORuOn32hlbbpvCgdNFMvOB5_myiatSMmK-18IyzTKNstD8HKrCwxKluQ8SbIE0zdWVY2pZBS6rP1IwqGauho5sfPj9S103t7Ndk6v3O75roDaHOXoIWbXYDT7cRLR30gVXCPO74C3fyDeEvAct_eQN7ko4enwkSTmVK_GhVYvdK8boPSAmTzgAcWDyXJEkiBo-6MobIctrFcHv9eSfdW33A95Ld1-a_NztQzUuq1nGvTwxNg1AVhLnAgDlIKRQUqS6itFn_MJGY0m6ZlX7zKtOF33pcDBtUmWbdv1Nt6vdgVIvvzeNEjyaqp8jeKap_FjuU97dw8NRpBmW0ppyU2gcGaNNl264sM3ZseF1YwP3Hi6W9InO3K9n001Y4eqT6c5EyiqzxycV6xDbWp-mLVuDEH8bi5pxgYbyOI-D2OC1rN2zzUOpOCPp90yQITgx_IbVDAiRhlveJ5V3piPiFyxyzkvHV69Y9q0s0fxZS1jeS9Z6lRh0RH-mX6qv-c28I6ISPYWAJVJDyViTYYNbKzYOZ7dleVq4eQl_xk6cnEWBbX6q3z5pmD3a_K-XzVO678cJMnpXTq2yMw0qB2ci2erXFzKi8PZx5PjLlTeYig8jIvOUxh5awfQVN6YdZ6vljWG6ohk7AxwSvx4Bbt-L0_iGn81VyMyI6-q4eB-AYr0y09ZhgsqhG9JkHenGQNldInx1CW3AhsNWCwD2MRKuEhD0m4JWUGqMDSxoA5n9MILqA3Th6F54vWIHIFRXskMaTw6N1TaBaMeRlbXQ8bPSEBCNXEb72m1Y3I8TIGY8Z90DcBmOJpTNXfGa92aIpMjJe0TDy5tKomtHRVAcHy9DOH8nUJMTZ7LMui2fX08rLtJK7jMVcDttnQoYs3PYJYednFVLfbGZyqItb6WVy8V4MVUkfPFUq23J8j9__vrDrc-8T2rx_NChM1jkAPRRdvJtH472hdQDGZFiqiw-zTbn-xG-HbdLcDG5N0WL5H3Pw3aYnXJC9s0osPOlXjllVcIqWSNZf3Gwnjer23iQ2xwlt54lx94l4rUnMWYaEKU4WM7RXu6REF26_N5qrfC5KsIEzZwzIAven3ln5VZQwwaDBg7BXxN9w9XZ_lWaCK-swjXWm8ybUAbpLQ6LYtd4HbQxWkIbEh2GIGZPGHItB07FHpJAKBBbEWWyqX95-cYBauyAH7jQv9y7qIiSKAsyhTqheJX9BotEnLNvhzWBl8sTujFh5oHyXscKnD9Bj8Zy6yoRa-GTeFC7eBGijNr3YtvTAxNbqBsyb5Prn_9kfua6WGX_pzJ7k9RGaEuQKRqaSGfpIlRZ_bf1baox2Y-1-K1tbSPH8DsY2C5KsKGrM5mJ8UFZmLP4B51ZeTzsUNE4a6fJCLsvi2Rv2UgU1MMWmwRTBcmkMkpIA2viIplLoqkKRBdX12rOwnuAIQV0DoaN9lI6yjKKl3JfDe4jFu6xJYX82MuTRg7Z7FG2AcCLLTR5lS0Dm_ZHImEiLmfefS-5zp2FRfHPiq8j9L3fK-0eW8LqnHsqq-kfloph-EHgHgeeMY3LW3CuGmRn1fEtQ5-onQE5rQmqg73jlfYkXzvFpJfMQSMvDKPT5iXb7QtmgahprF5W0XQW-_4hJQhU5pcScHSlP5qL8ZFj3JrDzz9OU_Xbl0AQ2_Y7z16bVAbO7D8-gTE_mf_3f86wC_EuCwAA'
            // // Read embed URL from Model
            // var embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f74713f1-47ba-40da-a863-effcede1fc82&groupId=cf09135e-3b8f-42fe-85b0-33839eebd351&autoAuth=true&ctid=b2cce9a6-443f-42c7-b085-d80d2fb83bf8'
            // // Read report Id from Model
            // var embedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204'
            // // Get models. models contains enums that can be used.
            // var models = window['powerbi-client'].models
            // // Embed configuration used to describe what and how to embed.
            // // This object is used when calling powerbi.embed.
            // // This also includes settings and options such as filters.
            // // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
            // var config = {
            //   type: 'report',
            //   tokenType: models.TokenType.Embed,
            //   accessToken: accessToken,
            //   embedUrl: embedUrl,
            //   id: embedReportId,
            //   permissions: models.Permissions.All /* gives maximum permissions */,
            //   viewMode: models.ViewMode.Edit,
            //   settings: {
            //     filterPaneEnabled: true,
            //     navContentPaneEnabled: true
            //   }
            // }
            // // Get a reference to the embedded report HTML element
            // var reportContainer = document.getElementById('reportContainer')
            // // Embed the report and display it within the div container.
            // var report = powerbi.embed(reportContainer, config)
            // console.log(report)
