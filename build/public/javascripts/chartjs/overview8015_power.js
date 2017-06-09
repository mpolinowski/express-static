var data = {
  // A labels array that can contain any sort of values
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [
      {meta: 'IN-8015HD: Booting (min) [W]', value: 2.04},
      {meta: 'IN-8015HD: Booting (max) [W]', value: 6.80},
      {meta: 'IN-8015HD: Booting (IR an) [W]', value: 7.30},
      {meta: 'IN-8015HD: Leerlauf [W]', value: 3.52},
      {meta: 'IN-8015HD: Leerlauf (IR an) [W]', value: 4.63},
      {meta: 'IN-8015HD: Leerlauf (WLAN + IR an) [W]', value: 5.32},
      {meta: 'IN-8015HD: Schwenken [W]', value: 4.32},
      {meta: 'IN-8015HD: Schwenken (IR an) [W]', value: 5.47},
      {meta: 'IN-8015HD: Videoaufnahme [W]', value: 3.65},
      {meta: 'IN-8015HD: Videoaufnahme (IR an) [W]', value: 4.70},
    ],
    [
      {meta: 'IN-6014HD: Booting (min) [W]', value: 1.94},
      {meta: 'IN-6014HD: Booting (max) [W]', value: 6.42},
      {meta: 'IN-6014HD: Booting (IR an) [W]', value: 7.49},
      {meta: 'IN-6014HD: Leerlauf [W]', value: 2.94},
      {meta: 'IN-6014HD: Leerlauf (IR an) [W]', value: 4.29},
      {meta: 'IN-6014HD: Leerlauf (WLAN + IR an) [W]', value: 5.09},
      {meta: 'IN-6014HD: Schwenken [W]', value: 4.74},
      {meta: 'IN-6014HD: Schwenken (IR an) [W]', value: 5.67},
      {meta: 'IN-6014HD: Videoaufnahme [W]', value: 2.97},
      {meta: 'IN-6014HD: Videoaufnahme (IR an) [W]', value: 4.54},
    ],
    [
      {meta: 'IN-3011: Booting (min) [W]', value: 2.20},
      {meta: 'IN-3011: Booting (max) [W]', value: 6.80},
      {meta: 'IN-3011: Booting (IR an) [W]', value: 7.20},
      {meta: 'IN-3011: Leerlauf [W]', value: 3.30},
      {meta: 'IN-3011: Leerlauf (IR an) [W]', value: 3.80},
      {meta: 'IN-3011: Leerlauf (WLAN + IR an) [W]', value: 4.50},
      {meta: 'IN-3011: Schwenken [W]', value: 5.10},
      {meta: 'IN-3011: Schwenken&Neigen (IR an) [W]', value: 7.6},
      {meta: 'IN-3011: Videoaufnahme [W]', value: 4.50},
      {meta: 'IN-3011: Videoaufnahme (IR an) [W]', value: 4.00},
    ],
  ],
};

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
var options = {
  width: 725,
  height: 432,
  showArea: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  // Remove this configuration to see that chart rendered with cardinal spline interpolation
  // Sometimes, on large jumps in data values, it's better to use simple smoothing.
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 2,
  }),
  chartPadding: {
    right: 20,
  },
  low: 0,
  plugins: [
    Chartist.plugins.tooltip(),
  ],
};

new Chartist.Line('#chart1', data, options);
