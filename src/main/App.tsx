import { fetchChartData } from '../lib/context/redux/slices/launch/chart-data-slice.ts'
import { useEffect } from 'react'
import {
  useAppDispatch,
  useAppSelector
} from '../lib/context/redux/hooks/redux-hooks.ts'
import { fetchResults } from '../lib/context/redux/slices/launch/results-slice.ts'

function App() {
  const dispatch = useAppDispatch()
  const results = useAppSelector((state) => state.resultsReducer.data)

  console.log(results)

  useEffect(() => {
    dispatch(fetchResults())
  }, [dispatch])

  return (
    <>
      <main className="bg-gradient-to-tl text-white from-spacegray-500 to-spacegray-600 min-h-screen h-full tracking-widest">
        {results ? <div>{results.success}</div> : <div>Loading...</div>}
        {results ? <div>{results.failure}</div> : <div>Loading...</div>}
      </main>
    </>
  )
}

export default App
