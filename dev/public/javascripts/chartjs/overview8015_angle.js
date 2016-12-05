var data = {
  // A labels array that can contain any sort of values
  labels: ['1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '11.0', '12.0', '13.0', '14.0', '15.0', '16.0', '17.0', '18.0', '19.0'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [
      {meta: 'Image width in [m]', value: 1.14},
      {meta: 'Image width in [m]', value: 2.28},
      {meta: 'Image width in [m]', value: 3.42},
      {meta: 'Image width in [m]', value: 4.56},
      {meta: 'Image width in [m]', value: 5.70},
      {meta: 'Image width in [m]', value: 6.84},
      {meta: 'Image width in [m]', value: 7.99},
      {meta: 'Image width in [m]', value: 9.13},
      {meta: 'Image width in [m]', value: 10.27},
      {meta: 'Image width in [m]', value: 11.41},
      {meta: 'Image width in [m]', value: 12.55},
      {meta: 'Image width in [m]', value: 13.69},
      {meta: 'Image width in [m]', value: 14.83},
      {meta: 'Image width in [m]', value: 15.97},
      {meta: 'Image width in [m]', value: 17.11},
      {meta: 'Image width in [m]', value: 18.25},
      {meta: 'Image width in [m]', value: 19.39},
      {meta: 'Image width in [m]', value: 20.53},
      {meta: 'Image width in [m]', value: 21.67},
    ],
    [
      {meta: 'Image height in [m]', value: 0.86},
      {meta: 'Image height in [m]', value: 1.71},
      {meta: 'Image height in [m]', value: 2.57},
      {meta: 'Image height in [m]', value: 3.42},
      {meta: 'Image height in [m]', value: 4.28},
      {meta: 'Image height in [m]', value: 5.13},
      {meta: 'Image height in [m]', value: 5.99},
      {meta: 'Image height in [m]', value: 6.84},
      {meta: 'Image height in [m]', value: 7.70},
      {meta: 'Image height in [m]', value: 8.56},
      {meta: 'Image height in [m]', value: 9.41},
      {meta: 'Image height in [m]', value: 10.27},
      {meta: 'Image height in [m]', value: 11.12},
      {meta: 'Image height in [m]', value: 11.98},
      {meta: 'Image height in [m]', value: 12.83},
      {meta: 'Image height in [m]', value: 13.69},
      {meta: 'Image height in [m]', value: 14.54},
      {meta: 'Image height in [m]', value: 15.40},
      {meta: 'Image height in [m]', value: 16.26},
    ],
  ],
};

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
var options = {
  width: 900,
  height: 500,
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

var responsiveOptions = [
  ['screen and (min-width: 975px) and (max-width: 1050px)', {
    width: 775,
    height: 430,
  },],
  ['screen and (min-width: 746px) and (max-width: 974px)', {
    width: 568,
    height: 315,
  },],
  ['screen and (max-width: 745px)', {
    width: 510,
    height: 283,
  },],
];

new Chartist.Line('#chart2', data, options, responsiveOptions);
