var ctx = document.getElementById('line_onecamera_network');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['VGA-Kamera', 'HD-Kamera', 'FullHD-Kamera'],
        datasets: [
            {
                type: 'bar',
                label: 'Netzwerkauslastung in Kilobit pro Sekunde',
                data: [114, 51, 570],
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
              max: 800,
              fixedStepSize: 50,
              beginAtZero: true,
            },
		      },],
		    },
        title: {
            display: true,
            text: 'Netzwerkauslastung in Kilobit pro Sekunde'
        }
		  },
  });
