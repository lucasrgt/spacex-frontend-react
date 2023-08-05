import React, { useEffect } from 'react'
import Title from '../../../components/atoms/title.tsx'
import Separator from '../../../components/atoms/separator.tsx'
import SuccessContainer from './components/success-container.tsx'
import FailureContainer from './components/failure-container.tsx'
import SectionContainer from '../../../components/organisms/containers/section-container.tsx'
import {
  useAppDispatch,
  useAppSelector
} from '../../../context/redux/hooks/redux-hooks.ts'
import { fetchResults } from '../../../context/redux/slices/launch/results-slice.ts'
import Loading from '../../../components/atoms/loading.tsx'

const ResultsContainer = () => {
  const dispatch = useAppDispatch()
  const results = useAppSelector((state) => state.resultsReducer.data)
  const isLoading = useAppSelector((state) => state.resultsReducer.isLoading)

  console.log(results)

  useEffect(() => {
    dispatch(fetchResults())
  }, [dispatch])

  return (
    <SectionContainer>
      <Title text="RESULTADO DE LANÇAMENTO" />
      <Separator />
      <div className="grid grid-cols-2 gap-4 ">
        {isLoading ? (
          <Loading />
        ) : (
          <SuccessContainer
            successes={results?.success ? results.success : 0}
          />
        )}

        {isLoading ? (
          <Loading />
        ) : (
          <FailureContainer failures={results?.failure ? results.failure : 0} />
        )}
      </div>
    </SectionContainer>
  )
}

export default ResultsContainer
