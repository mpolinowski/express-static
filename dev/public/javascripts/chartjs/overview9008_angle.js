var data = {
  // A labels array that can contain any sort of values
  labels: ['1.0', '3.0', '5.0', '7.0', '9.0', '11.0', '13.0', '15.0', '17.0', '19.0'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [
      {meta: 'Image width in [m]', value: 1.17},
      {meta: 'Image width in [m]', value: 3.50},
      {meta: 'Image width in [m]', value: 5.84},
      {meta: 'Image width in [m]', value: 8.18},
      {meta: 'Image width in [m]', value: 10.51},
      {meta: 'Image width in [m]', value: 12.85},
      {meta: 'Image width in [m]', value: 15.18},
      {meta: 'Image width in [m]', value: 17.52},
      {meta: 'Image width in [m]', value: 19.86},
      {meta: 'Image width in [m]', value: 22.19},
    ],
    [
      {meta: 'Image height in [m]', value: 0.88},
      {meta: 'Image height in [m]', value: 2.63},
      {meta: 'Image height in [m]', value: 4.38},
      {meta: 'Image height in [m]', value: 6.13},
      {meta: 'Image height in [m]', value: 7.88},
      {meta: 'Image height in [m]', value: 9.64},
      {meta: 'Image height in [m]', value: 11.39},
      {meta: 'Image height in [m]', value: 13.14},
      {meta: 'Image height in [m]', value: 14.89},
      {meta: 'Image height in [m]', value: 16.64},
    ],
  ],
};

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
var options = {
  width: 360,
  height: 200,
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

new Chartist.Line('#chart2', data, options);
