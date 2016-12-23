var ctx = document.getElementById('line_onecamera_cpu');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['VGA-Kamera', 'HD-Kamera', 'FullHD-Kamera'],
        datasets: [
            {
                type: 'line',
                label: 'CPU-Auslastung in %',
                data: [3, 8, 25],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
        ],
      },
		  options: {
      legend: {
        display: false,
      },
		    scales: {
		      yAxes: [{
		        ticks: {
              max: 60,
              beginAtZero: true,
            },
		      },],
		    },
        title: {
            display: true,
            text: 'CPU-Auslastung in Prozent'
        }
		  },
  });
