var ctx = document.getElementById('radar9008_2905');
var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Nachtsicht [m]', 'Megapixel', 'Leistungsaufnahme [W]', 'IR LEDs', 'Brennweite [mm]'],
        datasets: [{
          label: 'IN-9008 HD',
          backgroundColor: 'rgba(2, 117, 216, 0.5)',
          borderColor: 'rgba(2, 117, 216, 1)',
          data: [20, 2, 9, 5, 4.2],
        }, {
          label: 'IN-2905',
          backgroundColor: 'rgba(240, 173, 78, 0.5)',
          borderColor: 'rgba(240, 173, 78, 1)',
          data: [15, 0.3, 6, 24, 6],
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
