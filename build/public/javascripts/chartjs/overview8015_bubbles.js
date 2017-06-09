var ctx = document.getElementById('power');
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: [
      {
          label: 'IN-8015 HD',
          data: [
              {
                  x: 20,
                  y: 30,
                  r: 15,
                },
            {
                x: 40,
                y: 10,
                r: 10,
              },
        ],
          backgroundColor: '#FF6384',
          hoverBackgroundColor: '#FF6384',
        },],
    },
		  options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              max: 35,
              beginAtZero: true,
            },
          },],
        },
      },
  });
