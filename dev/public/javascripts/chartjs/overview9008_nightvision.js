var ctx = document.getElementById('nightvision9008');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-9008 HD', 'IN-6014 HD', 'IN-3011', 'IN-5907 HD', 'IN-7011 HD', 'IN-5905 HD'],
        datasets: [
            {
                type: 'bar',
                label: 'Nightvision min. [m]',
                data: [18, 5, 8, 15, 8, 12],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
            {
                type: 'bar',
                label: 'Nightvision max. [m]',
                data: [25, 10, 12, 20, 12, 20],
                backgroundColor: 'rgba(240, 173, 78, 1)',
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
              max: 30,
              beginAtZero: true,
            },
		      },],
		    },
		  },
  });
