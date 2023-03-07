import { Controller } from "@hotwired/stimulus"
import Highcharts from 'highcharts';

export default class extends Controller {
  static isMobile = document.ontouchstart !== undefined;

  connect() {
    // TODO: Display loading indicator
    this.renderChart();
  }

  update(event) {
    // TODO: Display loading indicator
    event.preventDefault();
    this.renderChart();
  }

  async fetchData() {
    const form = this.element;
    const query = Array.from(form.querySelectorAll('input')).map(i => `${i.name}=${i.value}`).join('&');

    const resp = await fetch(`${form.action}?${query}`);
    const data = await resp.json();
    return data;
  }

  async renderChart() {
    const data = await this.fetchData();

    Highcharts.chart('container', {
      chart: { zoomType: 'x' },
      title: { text: 'Patient heart rhythm over time', align: 'left' },
      subtitle: {
        text: this.isMobile ? 'Pinch the chart to zoom in' : 'Click and drag in the plot area to zoom in',
        align: 'left'
      },
      xAxis: { type: 'datetime' },
      yAxis: { title: { text: 'millivolts (mV)' } },
      legend: { enabled: false },
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
          marker: { radius: 2 },
          lineWidth: 1,
          states: { hover: { lineWidth: 1 } },
          threshold: null
        }
      },
      series: [{
        type: 'line',
        name: 'millivolts',
        data: data
      }]
    });
  }
}
