import { ChartData } from '../../../../../domain/models'
import { useEffect, useState } from 'react'
import { getRocketColors } from '../helpers/get-rocket-colors.ts'
import SectionBox from '../../../../components/organisms/containers/section-container.tsx'
import Title from '../../../../components/atoms/title.tsx'
import Separator from '../../../../components/atoms/separator.tsx'
import BarChart from '../../../../components/organisms/charts/bars/bars-chart.tsx'
import { store } from '../../../../context/redux/store/store.ts'
import { fetchChartData } from '../../../../context/redux/slices/launch/chart-data-slice.ts'

const YearLaunchesContainer = () => {
  const [chartData, setChartData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  const findData = async () => {
    const dispatch = store.dispatch
    await dispatch(fetchChartData())
    return store.getState().chartDataReducer.data!
  }
  const fetchLaunchChartData = async () => {
    setIsLoading(true)

    const data = await findData()

    if (data == null) {
      setChartData([])
      return
    }

    if (data && typeof data !== 'string') {
      const years: Record<string, Record<string, number>> = {}

      const rocketTypes: string[] = []
      data.forEach((d: ChartData) => {
        let rocketType = d.rocket

        if (d.cores.some((core) => core.reused)) {
          rocketType = 'Used ' + rocketType
        } else {
          rocketType = 'New ' + rocketType
        }

        if (!rocketTypes.includes(rocketType)) {
          rocketTypes.push(rocketType)
        }

        const date = new Date(d.date_utc)
        const year = date.getUTCFullYear().toString()

        years[year] = years[year] || {}
        years[year][rocketType] = (years[year][rocketType] || 0) + 1
      })

      const backgroundColors = getRocketColors(rocketTypes)

      const labels = Object.keys(years).sort() || ''

      const datasets = rocketTypes.map((rocket, i) => {
        return {
          label: rocket || '',
          data: labels.map((year) => years[year][rocket] || 0) || '',
          backgroundColor: backgroundColors[i]
        }
      })

      setChartData({
        labels,
        datasets,
        type: 'bar'
      })
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchLaunchChartData().then()
  }, [])

  return (
    <SectionBox className="w-full">
      <Title text="LANÇAMENTOS POR ANO" />
      <Separator />
      <div className="w-full h-full  p-4 flex justify-center items-center">
        {isLoading ? (
          <div className="loading text-spaceblue-500 text-center">
            Nenhum lançamento foi encontrado
          </div>
        ) : (
          <BarChart className="h-full w-full" chartData={chartData} />
        )}
      </div>
    </SectionBox>
  )
}

export default YearLaunchesContainer
