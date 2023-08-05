import SectionContainer from '../../../components/organisms/containers/section-container.tsx'
import Title from '../../../components/atoms/title.tsx'
import Separator from '../../../components/atoms/separator.tsx'
import React, { useEffect } from 'react'
import {
  useAppDispatch,
  useAppSelector
} from '../../../context/redux/hooks/redux-hooks.ts'
import { fetchPaginatedLaunches } from '../../../context/redux/slices/launch/paginated-launches-slice.ts'
import RegisterBox from './components/register-box.tsx'
import SearchForm from './components/search-form.tsx'
import SectionSeparator from '../../../components/atoms/section-separator.tsx'

const RegistersContainer = () => {
  const dispatch = useAppDispatch()

  const { data, isLoading, isError } = useAppSelector(
    (state) => state.paginatedLaunchesReducer
  )
  const loadPagination = async (page: number = 1) => {
    dispatch(fetchPaginatedLaunches({ page: page }))
  }

  useEffect(() => {
    dispatch(fetchPaginatedLaunches({ page: 1 }))
  }, [dispatch])

  return (
    <SectionContainer>
      <Title text="REGISTROS DE LANÇAMENTOS" />
      <Separator />
      <SearchForm />

      {isError ? (
        <Title text={'Não foi possível encontrar nenhum registro'} />
      ) : (
        <RegisterBox loadPage={loadPagination} />
      )}
      <SectionSeparator />
    </SectionContainer>
  )
}

export default RegistersContainer
