var ctx = document.getElementById('line_morecameras_ram');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['4 Kameras', '8 Kameras', '16 Kameras'],
        datasets: [
            {
                type: 'line',
                label: 'Arbeitsspeicher in Megabyte',
                data: [157, 250, 371],
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
              max: 500,
              beginAtZero: true,
            },
		      },],
		    },
        title: {
            display: true,
            text: 'Arbeitsspeicher in Megabyte'
        }
		  },
  });
