<template>
  <div>
    <h1 class='text-center'>Reportes</h1>
    <!--<iframe width='1400' height='600' src='https://app.powerbi.com/view?r=eyJrIjoiOTZmZjFlOWYtMGM1MS00ZDY5LWJmOTctNDkxYWZiNGE0ZDZlIiwidCI6ImIyY2NlOWE2LTQ0M2YtNDJjNy1iMDg1LWQ4MGQyZmI4M2JmOCIsImMiOjR9' frameborder='0' allowFullScreen='true'></iframe>-->
    <div>
      <!-- Embed Report-->
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
    var accessToken = 'H4sIAAAAAAAEACWWxwrsWBJE_-VtNSDvBnoh773XTqZU8t438-9TdG8vCTc4kZGZf_-xs6efsvLPf_9sfDH5uyloGEQ_OWw1keQoZky77POm8klDh1XcCmo2b1BP6tLX2FRzV683RHIsJ4HVi7UbnXRhDbg2NMjtczYUJu3GrabNAmjQjfN96anPXyERcDM94jA1lWI4nnN6j1dJJbA3UlGKYoVr63bsg57BtXGVApQx84iuWn79gL6mKi4KF5mFWkSUdnybGwJIcDMMB8wYM_SinGXQFSrbtBjlcJrRxwxSdW4pPF9tlyq-xmaALuHzLF-yiQPlFvts0R20T1omgjYyFWaCRGS9BkDcukn5EzPPzQ1r7XAtYxbKRaz6UKmZSh-4hRxeZQQwKFSpAH--7sPjWsCJq1GblrT4DSi2QV194q8sFY06cJofq28la3gcWYfKhBUFHwlqF-zKE1OgUT4L69aHbL3ONDlhY-b6pELFzl0WwhyGDcOJ20AQ5ObJLdATjWMlYAMMnTL9S4I_H4I-CsGrPKhYSY8gTbKND2RpoS0bAvyv38pKEwiDfpAqbXdXv31rg-m271O_CAlP4OTjhQJuoxgTC2ye22fZm-ESp7N1EdXq8CC1MWqMLXCDh0-Hn4RxPdKzTETl2zZrEp4vt0gbwfujWnTlAJXZRMvXQ3SiXvkXJKpOi5rFY_2BnjKhDhONJUDOK5k5jrJHmEDEHPI5jjtBjz3Bz7hJZ5kEH6RSkrkLU9Gs7l6B4wq1Fx06IXgxNYWman4M6N0WyjHR04U-M-X3ytO-53r2TjeBh7ZMjiN2aCVo5aCC8kRZEuP1qW_xy1PNPS2k3ulZPvOoqCfm2KpYDSovfknSaF4XV9wrRp5YOIh-ZBiB8t00y7FgdhMg-WHJveIyc-MtMpOVIl5LzMuN69Q2-HVtIXTtcDN_UVnS2i7eTfMrFP9ZLkNuaObaoo8OWaeUsT1Sri4n6V0awx_bN9iXj710AiHeKEttnPDTFqPl45qxYq_leTWLSmGz_902Fr8Pjpl0e3ckDEcsLdDTlzDU9VZDemxYjES9MRnqQ8w-fAxQQ1CTvQ0Z_mP7R2iDUemkP7PpBKIG-TwC5WXj-0Sde7WjYBcAZIajkrNONHHBFRCpgho7rf91HIsMaTvxb52Yk-U5GmaGuGnt4FilsV07ENuMGz9Bx9dzCENGBdI2AU2_LPmefYPKfsmpIl4TA47g495ZBfOsOyUgx4FExWeblWJhYgdfbP_JDUMOc7emiDi0PgXI8Fc3YenaFnXJLIngwb5WWtdluIF4v9SQuVcw2elZo9Jv3rDp64FOKQvIFcgEHqbbs7W7EAHFTwwWV6CBctuvSa91boGVX5cox6uwGyS8e7vC6NAtWz5jWMB-xI6Rig21DS5Jm_mfFFLfEl-QfsFLKW3qtNPCAyZ2lLMikQ6ASkxRooXobWLhLnl2KtgyBROWsXalCX23jCGKb25U53BzNrAgqRq1KB69t-vlZBEO6yBnoAM_qOdCXWVSoIi7KmOoJzsA8Kb17sJkFZRYOsqAwJHoIXW4GUX10O3W4bUGQ4kwtCUQ00ZV3GojTnG3qZOKZQPGC-focwmx2rPiyvEi3dG4HoelJZc1XK8Dd1jg5LNB0byx0HfXWzSGN6cmSQ7sJMBRGv6lHrZ4IEolMX6o5G9yjqh0Zrvi3zLqSiz_FTRCMmkblgHTon8BTws_itrnOIqvfcOcBmIJcXQIjOC2OvMU7dOMAlrJz-q1j8olo9xpX3cMm4ScKnHD_4ZOvhxKYy-c8My7XRgfgOwB9-PKDRyDr_jRpE-0nPgGKD7pA0dgJ_NeXa8KK4RVh9xOVHE294LXqlewAnBW7QUvTcl4F0zHJt8NKXWcwBfFAtVE81CO7C2ra_RyTe4lcZ-2Z0b7c4WxD-23pF8cr5XunpkdTXTXemZVyNyhEoRumcxOJCa_5aRMc26WUKi3x0myJxeSX4dcqJfXsOBUbvcLlD6LENv6qQ-gfkygru6x4l-d6_OvKl2bxMCdlke8UsVhnDVR9e3HxUkc3R0cxjEgHgjF7tTE0XaS_b2il5Pi39TxABhJq4Zngq_2jHCJDbAbpU_iC2S_Vb5bq3e_d-dOMIZR772_rejGfH0OvbjlJuDPTpmZIOxW-qK1hR30ZsC8XnLd9tef__zh1h_-Sfs8v9NhTLBMpjEbi_MeSUKWhP33rQguHsqd4BotARCyhiDzFWiZqem4xh90jB1vRPbxPNJMagQ2VZfOYz21Wb8f6EYMEc1Bqii9h9eUBtlOjN9KNphXzRj345lznzJTnG0Mb5EhKZArrV7XBxnNivXfQRCQOhO_ANb2PQRUFo4os4TXK_OpUGO3qHXZO3vvA4yRzXAYaB0quJ61Gmpi30ft-YPE50aROQjSOtrlhsQ3w-_lPGN6CzkqMdLR1FKSQftPDJYvgpomv_2oo06EN1MicRcbtS_Xcim1zs-SkWuFDlkpYxmXrmwil-tQm3t8f_fi99GR63DPP2rSHHqpNPenr2MdCZ2__sH8zPVnVcIf5ePz-oCHhS5mrRvqccoV6vm_VV7zHbP9WD-_MpfPc9RcoFkPvCsvfRpysyyRrhhirgpyRvSXPqLzF1sxGHFt-jTMK9NBWtNKtp8VspACVnxEgD5l3ieO7JRFpkZo5N1jN2XXbzSW-g0rbf4DzLVWHXGaKu71zONAO0ZCbS4Qc7eg2lcF-MIBixxLu-XpAEwprmCOZECJ8VBxZ3BWmJQFMu_R3rwMu0Bku6Xj4VQvVygJWEfsrJ95pY_zFOC5SMmH7NtrVNA3XjNxT615N2bOp7_7sQPLNTS8Kl-tQeeTcSFDFXCPjEWbfz2VigiPcBwRekbi0SaJWBrJSXyxIZoMkag9gCGDj0NoEXHyrU7QFsDDnRpU-qZ6lsTakxhfP8z_-z9454iyLgsAAA=='
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
  methods: {}
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
