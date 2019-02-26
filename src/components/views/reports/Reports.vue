<template>
  <div>
    <h1 class='text-center'>Reportes</h1>
    <!--<iframe width="1400" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiOTZmZjFlOWYtMGM1MS00ZDY5LWJmOTctNDkxYWZiNGE0ZDZlIiwidCI6ImIyY2NlOWE2LTQ0M2YtNDJjNy1iMDg1LWQ4MGQyZmI4M2JmOCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>-->
    <div>
      <!-- Embed Report-->
      <div>
        <asp:Panel ID="PanelEmbed" runat="server" Visible="true">
          <div>
            <div><b class="step">Step 3</b>: Embed a report</div>

            <div>Enter an embed url for a report from Step 2 (starts with https://):</div>
            <input type="text" id="tb_EmbedURL" style="width: 1024px;" />
            <br />
            <input type="button" id="bEmbedReportAction" value="Embed Report" />
          </div>

          <div id="reportContainer"></div>
        </asp:Panel>
      </div>
    </div>
  </div>

</template>


<style>
</style>
