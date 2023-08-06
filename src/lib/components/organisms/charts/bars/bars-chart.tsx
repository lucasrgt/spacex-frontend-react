import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { options } from './chart-optionts.ts'

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip)

const BarChart = ({ chartData }: any) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Bar options={options} data={chartData}></Bar>
}

export default BarChart
