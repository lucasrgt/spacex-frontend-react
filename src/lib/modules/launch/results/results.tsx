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

  const { data, isLoading, isError } = useAppSelector(
    (state) => state.resultsReducer
  )

  useEffect(() => {
    dispatch(fetchResults())
  }, [dispatch])

  return (
    <SectionContainer>
      <Title text="RESULTADO DE LANÇAMENTO" />
      <Separator />
      {isError ? (
        <Title text={'Nenhum lançamento encontrado.'} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 gap-4 ">
          <SuccessContainer successes={data?.success || 0} />
          <FailureContainer failures={data?.failure || 0} />
        </div>
      )}
    </SectionContainer>
  )
}
export default ResultsContainer
