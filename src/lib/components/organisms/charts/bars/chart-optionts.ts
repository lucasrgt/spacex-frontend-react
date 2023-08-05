import { ChartOptions } from 'chart.js/auto'

const fontOptions = {
  family: 'JetBrains Mono',
  size: 12
}

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      position: 'nearest'
    },
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      type: 'category',
      stacked: true,
      grid: {
        display: false
      },
      ticks: {
        color: '#99F3FF',
        padding: 8,
        font: fontOptions
      }
    },
    y: {
      type: 'linear',
      stacked: true,
      grid: {
        display: false
      },
      ticks: {
        color: '#99F3FF',
        padding: 8,
        font: fontOptions
      }
    }
  }
}
