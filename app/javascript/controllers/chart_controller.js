import { Controller } from '@hotwired/stimulus'
import Highcharts from 'highcharts'

export default class extends Controller {
  static isMobile = document.ontouchstart !== undefined
  static targets = ['form', 'loading', 'chart']

  connect () {
    this.renderChart()
  }

  update (event) {
    event.preventDefault()
    this.renderChart()
  }

  toggleSpinner ({ show }) {
    const spinner = this.loadingTarget
    show
      ? spinner.classList.remove('hidden')
      : spinner.classList.add('hidden')
  }

  toggleChart ({ show }) {
    const chart = this.chartTarget
    show
      ? chart.classList.remove('hidden')
      : chart.classList.add('hidden')
  }

  async fetchData () {
    const form = this.formTarget
    const query =
      Array
        .from(form.querySelectorAll('input'))
        .map(i => `${i.name}=${i.value}`)
        .join('&')
    const resp = await fetch(`${form.action}?${query}`)
    const data = await resp.json()
    return data
  }

  async renderChart () {
    this.toggleSpinner({ show: true })
    this.toggleChart({ show: false })

    const data = await this.fetchData()

    this.toggleSpinner({ show: false })
    this.toggleChart({ show: true })

    Highcharts.chart('container', {
      chart: { zoomType: 'x' },
      title: { text: 'Patient heart rhythm over time', align: 'left' },
      subtitle: {
        text: this.isMobile
          ? 'Pinch the chart to zoom in'
          : 'Click and drag in the plot area to zoom in',
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
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get('rgba')
              ]
            ]
          },
          marker: { radius: 2 },
          lineWidth: 1,
          states: { hover: { lineWidth: 1 } },
          threshold: null
        }
      },
      series: [
        {
          type: 'line',
          name: 'millivolts',
          data: data
        }
      ]
    })
  }
}
