var ctx = document.getElementById('radar6014_8015');
var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Nachtsicht [m]', 'Megapixel', 'Leistungsaufnahme [W]', 'IR LEDs', 'Brennweite [mm]'],
        datasets: [{
          label: 'IN-6014 HD',
          backgroundColor: 'rgba(2, 117, 216, 0.5)',
          borderColor: 'rgba(2, 117, 216, 1)',
          data: [10, 1, 8, 12, 4.2],
        }, {
          label: 'IN-8015 HD',
          backgroundColor: 'rgba(240, 173, 78, 0.5)',
          borderColor: 'rgba(240, 173, 78, 1)',
          data: [10, 2, 10, 12, 4.2],
        },],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          },],
        },
      },
    });
