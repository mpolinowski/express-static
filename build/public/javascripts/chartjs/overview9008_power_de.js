var data = {
  // A labels array that can contain any sort of values
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [
      {meta: 'IN-9008HD: Booting (min) [W]', value: 2.15},
      {meta: 'IN-9008HD: Booting (max) [W]', value: 7.15},
      {meta: 'IN-9008HD: Booting (IR an) [W]', value: 8.71},
      {meta: 'IN-9008HD: Leerlauf [W]', value: 3.34},
      {meta: 'IN-9008HD: Leerlauf (IR an) [W]', value: 8.65},
      {meta: 'IN-9008HD: Leerlauf (WLAN + IR an) [W]', value: 8.93},
      {meta: 'IN-9008HD: Videoaufnahme [W]', value: 3.41},
      {meta: 'IN-9008HD: Videoaufnahme (IR an) [W]', value: 8.69},
    ],
    [
      {meta: 'IN-5905HD: Booting (min) [W]', value: 2.60},
      {meta: 'IN-5905HD: Booting (max) [W]', value: 3.85},
      {meta: 'IN-5905HD: Booting (IR an) [W]', value: 7.80},
      {meta: 'IN-5905HD: Leerlauf [W]', value: 3.78},
      {meta: 'IN-5905HD: Leerlauf (IR an) [W]', value: 8.84},
      {meta: 'IN-5905HD: Leerlauf (WLAN + IR an) [W]', value: 9.10},
      {meta: 'IN-5905HD: Videoaufnahme [W]', value: 3.85},
      {meta: 'IN-5905HD: Videoaufnahme (IR an) [W]', value: 8.98},
    ],
    [
      {meta: 'IN-2905 V2: Booting (min) [W]', value: 2.20},
      {meta: 'IN-2905 V2: Booting (max) [W]', value: 4.10},
      {meta: 'IN-2905 V2: Booting (IR an) [W]', value: 6.15},
      {meta: 'IN-2905 V2: Idle [W]', value: 3.20},
      {meta: 'IN-2905 V2: Leerlauf (IR an) [W]', value: 5.20},
      {meta: 'IN-2905 V2: Leerlauf (WLAN + IR an) [W]', value: 5.80},
      {meta: 'IN-2905 V2: Videoaufnahme [W]', value: 3.25},
      {meta: 'IN-2905 V2: Videoaufnahme (IR an) [W]', value: 5.850},
    ],
    [
      {meta: 'IN-5907HD: Booting (min) [W]', value: 2.79},
      {meta: 'IN-5907HD: Booting (max) [W]', value: 4.20},
      {meta: 'IN-5907HD: Booting (IR an) [W]', value: 12.28},
      {meta: 'IN-5907HD: Leerlauf [W]', value: 4.11},
      {meta: 'IN-5907HD: Leerlauf (IR an) [W]', value: 11.93},
      {meta: 'IN-5907HD: Leerlauf (WLAN + IR an) [W]', value: 12.15},
      {meta: 'IN-5907HD: Videoaufnahme [W]', value: 4.12},
      {meta: 'IN-5907HD: Videoaufnahme (IR an) [W]', value: 12.02},
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
