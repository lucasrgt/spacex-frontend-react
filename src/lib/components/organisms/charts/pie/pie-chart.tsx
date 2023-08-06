'use client'
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { options } from './chart-options.ts'

Chart.register(Legend, ArcElement, Tooltip)

const PieChart = ({ chartData }: any) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Pie options={options} data={chartData}></Pie>
}

export default PieChart
