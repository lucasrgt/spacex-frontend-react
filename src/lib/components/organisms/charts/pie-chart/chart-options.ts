import { ChartOptions } from 'chart.js/auto'

const fontOptions = {
  family: 'JetBrains Mono',
  size: 12,
  color: '#ffffff'
}

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      position: 'nearest'
    },
    legend: {
      labels: {
        font: fontOptions,
        color: fontOptions.color,
        padding: 32
      },
      position: 'bottom'
    }
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
}
