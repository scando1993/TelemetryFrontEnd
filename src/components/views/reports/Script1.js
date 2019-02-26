// JavaScript source code
// ---- Embed Code ----------------------------------------------------
import * as powerbi from 'powerbi-client'
export default {  
  function embed_BasicEmbed() {
  // Read embed application token from textbox
  var txtAccessToken = $('#txtAccessToken').val();

  // Read embed URL from textbox
  var txtEmbedUrl = $('#txtReportEmbed').val();

  // Read report Id from textbox
  var txtEmbedReportId = $('#txtEmbedReportId').val();

  // Get models. models contains enums that can be used.
  var models = window['powerbi-client'].models;

  // We give All permissions to demonstrate switching between View and Edit mode and saving report.
  var permissions = models.Permissions.All;

  // Embed configuration used to describe the what and how to embed.
  // This object is used when calling powerbi.embed.
  // This also includes settings and options such as filters.
  // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
  var config = {
    type: 'report',
    accessToken: txtAccessToken,
    embedUrl: txtEmbedUrl,
    id: txtEmbedReportId,
    permissions: permissions,
    settings: {
      filterPaneEnabled: true,
      navContentPaneEnabled: true
    }
  };

  // Get a reference to the embedded report HTML element
  var reportContainer = $('#reportContainer')[0];

  // Embed the report and display it within the div container.
  var report = powerbi.embed(reportContainer, config);

  // Report.off removes a given event handler if it exists.
  report.off("loaded");

  // Report.on will add an event handler which prints to Log window.
  report.on("loaded", function () {
    Log.logText("Loaded");
  });

  report.on("error", function (event) {
    Log.log(event.detail);

    report.off("error");
  });

  report.off("saved");
  report.on("saved", function (event) {
    Log.log(event.detail);
    if (event.detail.saveAs) {
      Log.logText('In order to interact with the new report, create a new token and load the new report');
    }
  });
}

function _Mock_Embed_BasicEmbed(isEdit) {
  // Read embed application token from textbox
  var txtAccessToken = $('#txtAccessToken').val();

  // Read embed URL from textbox
  var txtEmbedUrl = $('#txtReportEmbed').val();

  // Read report Id from textbox
  var txtEmbedReportId = $('#txtEmbedReportId').val();

  // Get models. models contains enums that can be used.
  var models = window['powerbi-client'].models;
  var permissions = models.Permissions.Copy | models.Permissions.Read;
  var viewMode = isEdit ? models.ViewMode.Edit : models.ViewMode.View;

  // Embed configuration used to describe the what and how to embed.
  // This object is used when calling powerbi.embed.
  // This also includes settings and options such as filters.
  // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
  var config = {
    type: 'report',
    accessToken: txtAccessToken,
    embedUrl: txtEmbedUrl,
    id: txtEmbedReportId,
    permissions: permissions,
    viewMode: viewMode,
    settings: {
      filterPaneEnabled: true,
      navContentPaneEnabled: true,
      useCustomSaveAsDialog: true
    }
  };

  // Get a reference to the embedded report HTML element
  var reportContainer = $('#reportContainer')[0];

  // Embed the report and display it within the div container.
  var report = powerbi.embed(reportContainer, config);

  // Report.off removes a given event handler if it exists.
  report.off("loaded");

  // Report.on will add an event handler which prints to Log window.
  report.on("loaded", function () {
    Log.logText("Loaded");
  });

  report.on("saveAsTriggered", function () {
    Log.logText("Cannot save sample report");
  });

  report.off("error");
  report.on("error", function (event) {
    Log.log(event.detail);
  });

  report.off("saved");
  report.on("saved", function (event) {
    Log.log(event.detail);
    if (event.detail.saveAs) {
      Log.logText('In order to interact with the new report, create a new token and load the new report');
    }
  });
}

function _Mock_Embed_BasicEmbed_EditMode() {
  _Mock_Embed_BasicEmbed(true);
}

function _Mock_Embed_BasicEmbed_ViewMode() {
  _Mock_Embed_BasicEmbed(false);
}

function _Embed_BasicEmbed_EditMode() {
  // Read embed application token from textbox
  var txtAccessToken = $('#txtAccessToken').val();

  // Read embed URL from textbox
  var txtEmbedUrl = $('#txtReportEmbed').val();

  // Read report Id from textbox
  var txtEmbedReportId = $('#txtEmbedReportId').val();

  // Get models. models contains enums that can be used.
  var models = window['powerbi-client'].models;

  // Embed configuration used to describe the what and how to embed.
  // This object is used when calling powerbi.embed.
  // This also includes settings and options such as filters.
  // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
  var config = {
    type: 'report',
    accessToken: txtAccessToken,
    embedUrl: txtEmbedUrl,
    id: txtEmbedReportId,
    permissions: models.Permissions.All /*gives maximum permissions*/,
    viewMode: models.ViewMode.Edit,
    settings: {
      filterPaneEnabled: true,
      navContentPaneEnabled: true
    }
  };

  // Get a reference to the embedded report HTML element
  var reportContainer = $('#reportContainer')[0];

  // Embed the report and display it within the div container.
  var report = powerbi.embed(reportContainer, config);

  // Report.off removes a given event handler if it exists.
  report.off("loaded");

  // Report.on will add an event handler which prints to Log window.
  report.on("loaded", function () {
    Log.logText("Loaded");
  });

  report.off("error");
  report.on("error", function (event) {
    Log.log(event.detail);
  });

  report.off("saved");
  report.on("saved", function (event) {
    Log.log(event.detail);
    if (event.detail.saveAs) {
      Log.logText('In order to interact with the new report, create a new token and load the new report');
    }
  });
}

function _Embed_EmbedWithDefaultFilter() {
  var txtAccessToken = $('#txtAccessToken').val();
  var txtEmbedUrl = $('#txtReportEmbed').val();
  var txtEmbedReportId = $('#txtEmbedReportId').val();

  const filter = {
    $schema: "http://powerbi.com/product/schema#basic",
    target: {
      table: "Store",
      column: "Chain"
    },
    operator: "In",
    values: ["Lindseys"]
  };

  var embedConfiguration = {
    type: 'report',
    accessToken: txtAccessToken,
    embedUrl: txtEmbedUrl,
    id: txtEmbedReportId,
    settings: {
      filterPaneEnabled: false,
      navContentPaneEnabled: false
    },
    filters: [filter]
  };

  var reportContainer = document.getElementById('reportContainer');
  powerbi.embed(reportContainer, embedConfiguration);
}

function _Embed_Create() {
  // Read embed application token from textbox
  var txtAccessToken = $('#txtCreateAccessToken').val();

  // Read embed URL from textbox
  var txtEmbedUrl = $('#txtCreateReportEmbed').val();

  // Read dataset Id from textbox
  var txtEmbedDatasetId = $('#txtEmbedDatasetId').val();

  // Embed create configuration used to describe the what and how to create report.
  // This object is used when calling powerbi.createReport.
  var embedCreateConfiguration = {
    accessToken: txtAccessToken,
    embedUrl: txtEmbedUrl,
    datasetId: txtEmbedDatasetId,
  };

  // Grab the reference to the div HTML element that will host the report
  var reportContainer = $('#reportContainer')[0];

  // Create report
  var report = powerbi.createReport(reportContainer, embedCreateConfiguration);

  // Report.off removes a given event handler if it exists.
  report.off("loaded");

  // Report.on will add an event handler which prints to Log window.
  report.on("loaded", function () {
    Log.logText("Loaded");
  });

  report.off("error");
  report.on("error", function (event) {
    Log.log(event.detail);
  });

  // report.off removes a given event handler if it exists.
  report.off("saved");
  report.on("saved", function (event) {
    Log.log(event.detail);
    Log.logText('In order to interact with the new report, create a new token and load the new report');
  });
}

function _Mock_Embed_Create() {
  // Read embed application token from textbox
  var txtAccessToken = $('#txtCreateAccessToken').val();

  // Read embed URL from textbox
  var txtEmbedUrl = $('#txtCreateReportEmbed').val();

  // Read dataset Id from textbox
  var txtEmbedDatasetId = $('#txtEmbedDatasetId').val();

  // Embed create configuration used to describe the what and how to create report.
  // This object is used when calling powerbi.createReport.
  var embedCreateConfiguration = {
    accessToken: txtAccessToken,
    embedUrl: txtEmbedUrl,
    datasetId: txtEmbedDatasetId,
    settings: {
      useCustomSaveAsDialog: true
    }
  };

  // Grab the reference to the div HTML element that will host the report
  var reportContainer = $('#reportContainer')[0];

  // Create report
  var report = powerbi.createReport(reportContainer, embedCreateConfiguration);

  // Report.off removes a given event handler if it exists.
  report.off("loaded");

  // Report.on will add an event handler which prints to Log window.
  report.on("loaded", function () {
    Log.logText("Loaded");
  });
  report.on("saveAsTriggered", function () {
    Log.logText("Cannot save sample report");
  });

  report.off("error");
  report.on("error", function (event) {
    Log.log(event.detail);
  });
}
}
