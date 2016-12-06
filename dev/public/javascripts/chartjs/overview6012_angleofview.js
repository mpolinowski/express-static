var ctx = document.getElementById('angleofview6012');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-6012 HD', 'IN-6014 HD', 'IN-3011', 'IN-8015 HD', 'IN-5907 HD', 'IN-5905 HD'],
        datasets: [
            {
                type: 'bar',
                label: 'Diagonal Angle [°]',
                data: [44.1, 75.3, 45.9, 72.3, 44.1, 75.3],
                backgroundColor: '#373a3c',
              },
							{
                type: 'bar',
                label: 'Horizontal Angle [°]',
                data: [37.5, 64.0, 36.8, 61.4, 37.5, 64.0],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
            	{
                type: 'bar',
                label: 'Vertical Angle [°]',
                data: [23.3, 39.7, 28.4, 38.1, 23.3, 39.7],
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
              max: 100,
              beginAtZero: true,
            },
		      },],
		    },
		  },
  });
