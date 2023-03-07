import Highcharts from 'highcharts';

const url = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json'
const resp = await fetch(url);
const data = await resp.json();
const isMobile = document.ontouchstart !== undefined;

Highcharts.chart('container', {
  chart: {
    zoomType: 'x'
  },
  title: {
    text: 'Patient heart rhythm over time',
    align: 'left'
  },
  subtitle: {
    text: isMobile ? 'Pinch the chart to zoom in' : 'Click and drag in the plot area to zoom in',
    align: 'left'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Heart rate'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        ]
      },
      marker: {
        radius: 2
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },

  series: [{
    type: 'line',
    name: 'Heart rate',
    data: data
  }]
});
