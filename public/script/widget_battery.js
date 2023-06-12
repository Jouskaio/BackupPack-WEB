$(document).ready(function() {
  // Configure Data
  const widgetBattery_value = 23;
  const widgetBattery_data = {
    datasets: [
      {
        data: [widgetBattery_value, 100 - widgetBattery_value],
        backgroundColor: ["rgba(227, 227, 227, 0.3)", "#DAD497"],
      }
    ]
  };

  // Configure chart.JS graph
  Chart.defaults.font.size = 30;
  new Chart($("#widget_battery"), {
    type: 'doughnut',
    data: widgetBattery_data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Battery',
          position: 'bottom',
          color: "#FFFFFF",
        }
      }
    },
  });
});
