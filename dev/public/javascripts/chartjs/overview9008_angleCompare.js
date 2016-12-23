var data = {
  // A labels array that can contain any sort of values
  labels: ['1.0', '3.0', '5.0', '7.0', '9.0', '11.0', '13.0', '15.0', '17.0', '19.0'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [
      {meta: 'IN-9008HD: Image width in [m]', value: 1.17},
      {meta: 'IN-9008HD: Image width in [m]', value: 3.50},
      {meta: 'IN-9008HD: Image width in [m]', value: 5.84},
      {meta: 'IN-9008HD: Image width in [m]', value: 8.18},
      {meta: 'IN-9008HD: Image width in [m]', value: 10.51},
      {meta: 'IN-9008HD: Image width in [m]', value: 12.85},
      {meta: 'IN-9008HD: Image width in [m]', value: 15.18},
      {meta: 'IN-9008HD: Image width in [m]', value: 17.52},
      {meta: 'IN-9008HD: Image width in [m]', value: 19.86},
      {meta: 'IN-9008HD: Image width in [m]', value: 22.19},
    ],
    [
      {meta: 'IN-5905HD: Image width in [m]', value: 1.30},
      {meta: 'IN-5905HD: Image width in [m]', value: 3.89},
      {meta: 'IN-5905HD: Image width in [m]', value: 6.48},
      {meta: 'IN-5905HD: Image width in [m]', value: 9.08},
      {meta: 'IN-5905HD: Image width in [m]', value: 11.67},
      {meta: 'IN-5905HD: Image width in [m]', value: 14.27},
      {meta: 'IN-5905HD: Image width in [m]', value: 16.86},
      {meta: 'IN-5905HD: Image width in [m]', value: 19.45},
      {meta: 'IN-5905HD: Image width in [m]', value: 22.05},
      {meta: 'IN-5905HD: Image width in [m]', value: 24.64},
    ],
    [
      {meta: 'IN-5907HD: Image width in [m]', value: 0.65},
      {meta: 'IN-5907HD: Image width in [m]', value: 1.95},
      {meta: 'IN-5907HD: Image width in [m]', value: 3.24},
      {meta: 'IN-5907HD: Image width in [m]', value: 4.54},
      {meta: 'IN-5907HD: Image width in [m]', value: 5.84},
      {meta: 'IN-5907HD: Image width in [m]', value: 7.13},
      {meta: 'IN-5907HD: Image width in [m]', value: 8.43},
      {meta: 'IN-5907HD: Image width in [m]', value: 9.73},
      {meta: 'IN-5907HD: Image width in [m]', value: 11.02},
      {meta: 'IN-5907HD: Image width in [m]', value: 12.32},
    ],
  ],
};

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
var options = {
  width: 400,
  height: 220,
  showArea: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  // Remove this configuration to see that chart rendered with cardinal spline interpolation
  // Sometimes, on large jumps in data values, it's better to use simple smoothing.
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 2,
  }),
  fullWidth: true,
  chartPadding: {
    right: 20,
  },
  low: 0,
  plugins: [
    Chartist.plugins.tooltip(),
  ],
};

new Chartist.Line('#chart3', data, options);
