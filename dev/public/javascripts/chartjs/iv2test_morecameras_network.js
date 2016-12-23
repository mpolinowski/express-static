var ctx = document.getElementById('line_morecameras_network');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['4 Kameras', '8 Kameras', '16 Kameras'],
        datasets: [
            {
                type: 'bar',
                label: 'Netzwerkauslastung in Kilobit pro Sekunde',
                data: [447, 760, 1060],
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
              max: 1300,
              fixedStepSize: 100,
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
