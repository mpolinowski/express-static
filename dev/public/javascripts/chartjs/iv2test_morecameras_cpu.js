var ctx = document.getElementById('line_morecameras_cpu');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['4 Kameras', '8 Kameras', '16 Kameras'],
        datasets: [
            {
                type: 'line',
                label: 'CPU-Auslastung in %',
                data: [36, 60, 73],
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
              max: 100,
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
