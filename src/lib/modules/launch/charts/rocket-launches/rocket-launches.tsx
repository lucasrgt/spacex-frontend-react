import { useEffect, useState } from 'react'
import { ChartData } from '../../../../../domain/models'
import SectionContainer from '../../../../components/organisms/containers/section-container.tsx'
import Title from '../../../../components/atoms/title.tsx'
import Separator from '../../../../components/atoms/separator.tsx'
import PieChart from '../../../../components/organisms/charts/pie/pie-chart.tsx'
import { store } from '../../../../context/redux/store/store.ts'
import { fetchChartData } from '../../../../context/redux/slices/launch/chart-data-slice.ts'

const RocketLaunches = () => {
  const [chartLaunches, setChartLaunches] = useState<ChartData[]>([])
  const [chartData, setChartData] = useState<any>(null)

  const findData = async () => {
    const dispatch = store.dispatch
    await dispatch(fetchChartData())
    return store.getState().chartDataReducer.data!
  }
  const fetchLaunches = async () => {
    const data = await findData()
    if (typeof data === 'string' || data == null) {
      setChartLaunches([])
      return
    }
    setChartLaunches(data)

    const rocketCount: Record<string, number> = {}
    data.forEach((d: ChartData) => {
      const usedRocket = d.cores.some((core) => core.reused)
      const rocketType = `${usedRocket ? 'Used' : 'New'} ${d.rocket}`
      rocketCount[rocketType] = (rocketCount[rocketType] || 0) + 1
    })

    const rocketTypes = Object.keys(rocketCount)
    const backgroundColor = rocketTypes.map((_, i) => {
      const hue = (360 / rocketTypes.length) * i
      return `hsl(${hue}, 70%, 70%)`
    })

    setChartData({
      labels: rocketTypes,
      datasets: [
        {
          label: ' Vôos',
          data: Object.values(rocketCount),
          backgroundColor
        }
      ],
      type: 'pie'
    })
  }

  useEffect(() => {
    fetchLaunches().then()
  }, [])

  return (
    <SectionContainer className="md:border-r border-spaceblue-500">
      <Title text="LANÇAMENTOS DE FOGUETES" />
      <Separator />
      <div className="w-full h-full sm:w-1/2  p-4 flex justify-center">
        {chartData == null ? (
          <h1 className="text-spaceblue-500 text-center">
            Nenhum lançamento foi encontrado
          </h1>
        ) : (
          <PieChart className="h-full w-full" chartData={chartData} />
        )}
      </div>
    </SectionContainer>
  )
}

export default RocketLaunches
