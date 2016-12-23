var ctx = document.getElementById('line_onecamera_ram');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['VGA-Kamera', 'HD-Kamera', 'FullHD-Kamera'],
        datasets: [
            {
                type: 'line',
                label: 'Arbeitsspeicher in Megabyte',
                data: [56, 72, 150],
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
              max: 200,
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
