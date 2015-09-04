var client = new Keen({
  projectId: window.keenProjectId,
  readKey: window.keenReadKey
});

var endOfToday = moment().endOf('day').toISOString();

Keen.ready(function(){

  // ----------------------------------------
  // Assets In Columns Chart
  // ----------------------------------------

  var assets_in_timeline = new Keen.Query("count", {
    eventCollection: window.keenCollectionsPrefix+"swap",
    interval: "weekly",
    groupBy: "receipt.assetIn",
    timeframe: {
      start: "2015-06-01T00:00:00.000Z",
      end: endOfToday
    }
  });
  client.draw(assets_in_timeline, document.getElementById("chart-weekly-assets-in-column"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });

  // ----------------------------------------
  // Assets In Pie Chart
  // ----------------------------------------
  var assets_in_static = new Keen.Query("count", {
    eventCollection: window.keenCollectionsPrefix+"swap",
    groupBy: "receipt.assetIn",
    timeframe: {
      start: "2015-06-01T00:00:00.000Z",
      end: endOfToday
    }
  });
  client.draw(assets_in_static, document.getElementById("chart-weekly-assets-in-pie"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      },
      pieHole: .4
    }
  });


  // ----------------------------------------
  // Assets Out Columns Chart
  // ----------------------------------------

  var assets_out_timeline = new Keen.Query("count", {
    eventCollection: window.keenCollectionsPrefix+"swap",
    interval: "weekly",
    groupBy: "receipt.assetOut",
    timeframe: {
      start: "2015-06-01T00:00:00.000Z",
      end: endOfToday
    }
  });
  client.draw(assets_out_timeline, document.getElementById("chart-weekly-assets-out-column"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });

  // ----------------------------------------
  // Assets Out Pie Chart
  // ----------------------------------------
  var assets_out_static = new Keen.Query("count", {
    eventCollection: window.keenCollectionsPrefix+"swap",
    groupBy: "receipt.assetOut",
    timeframe: {
      start: "2015-06-01T00:00:00.000Z",
      end: endOfToday
    }
  });
  client.draw(assets_out_static, document.getElementById("chart-weekly-assets-out-pie"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      },
      pieHole: .4
    }
  });






  // ----------------------------------------
  // Assets Out Columns Chart
  // ----------------------------------------

  var swaps_timeline = new Keen.Query("count", {
    eventCollection: window.keenCollectionsPrefix+"swap",
    interval: "daily",
    timeframe: {
      start: "2015-06-01T00:00:00.000Z",
      end: endOfToday
    }
  });
  client.draw(swaps_timeline, document.getElementById("chart-daily-swaps-column"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });



  // ----------------------------------------
  // Total Swaps
  // ----------------------------------------

  var swaps_total = new Keen.Query("count", {
    eventCollection: window.keenCollectionsPrefix+"swap",
    timeframe: {
      start: "2015-06-01T00:00:00.000Z",
      end: endOfToday
    }
  });
  client.draw(swaps_total, document.getElementById("chart-total-swaps"), {
    chartType: "metric",
    title: "Total Swaps",
    colors: ["#49c5b1"]
  });


  // ----------------------------------------
  // BTC In
  // ----------------------------------------

  var btc_in_total = new Keen.Query("sum", {
    eventCollection: window.keenCollectionsPrefix+"swap",
    targetProperty: "inBTCValue",
    timeframe: {
      start: "2015-06-01T00:00:00.000Z",
      end: endOfToday
    }
  });
  client.draw(btc_in_total, document.getElementById("chart-total-btc-in"), {
    chartType: "metric",
    title: "BTC In",
    colors: ["#02c3e2"]
  });



  // ----------------------------------------
  // BTC Out
  // ----------------------------------------

  var btc_out_total = new Keen.Query("sum", {
    eventCollection: window.keenCollectionsPrefix+"swap",
    targetProperty: "outBTCValue",
    timeframe: {
      start: "2015-06-01T00:00:00.000Z",
      end: endOfToday
    }
  });
  client.draw(btc_out_total, document.getElementById("chart-total-btc-out"), {
    chartType: "metric",
    title: "BTC Out",
    colors: ["#f0b963"]
  });



});
