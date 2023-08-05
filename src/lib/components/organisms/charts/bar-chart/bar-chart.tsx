import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { options } from './chart-options'

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip)

const BarChart = ({ chartData }: any) => {
  return <Bar options={options} data={chartData} />
}

export default BarChart
