import { format, parseISO } from 'date-fns'
import SectionContainer from '../../../../components/organisms/containers/section-container.tsx'
import classNames from 'classnames'
import SectionSeparator from '../../../../components/atoms/section-separator.tsx'
import Separator from '../../../../components/atoms/separator.tsx'
import Paginator from './paginator.tsx'
import IdentifierBox from './identifier-box.tsx'
import { VscTriangleRight } from 'react-icons/vsc'
import { useAppSelector } from '../../../../context/redux/hooks/redux-hooks.ts'
import React from 'react'
import Title from '../../../../components/atoms/title.tsx'
import { store } from '../../../../context/redux/store/store.ts'
import { fetchPaginatedLaunches } from '../../../../context/redux/slices/launch/paginated-launches-slice.ts'

interface RegisterBoxProps {
  className?: string
  loadPage: (page: number) => void
}

const RegisterBox = ({ className, loadPage }: RegisterBoxProps) => {
  const data = useAppSelector((state) => state.paginatedLaunchesReducer.data)

  const handlePageChange = (newPage: number) => {
    if (data && newPage >= 1 && newPage <= data.totalPages) {
      const url = new URL(window.location.href)
      url.searchParams.set('page', newPage.toString())
      window.history.pushState({}, '', url.toString())

      const search = url.searchParams.get('search') || ''
      store.dispatch(fetchPaginatedLaunches({ search: search, page: newPage }))
    }
  }

  if (!data || data.totalPages === 0) {
    return <Title text={'Não foi possível encontrar nenhum registro'} />
  }

  return (
    <>
      <Paginator
        page={data.page}
        totalPages={data.totalPages}
        hasNext={data.hasNext}
        hasPrev={data.hasPrev}
        onPageChange={handlePageChange}
      />
      <div className="h-full flex flex-col w-full items-center ">
        {data?.results.map((launch, index) => {
          const usedRocket = launch.cores.some((core) => core.reused)
          return (
            <React.Fragment key={index}>
              <SectionContainer
                className={`${classNames(
                  className
                )} !p-0 !m-0 h-full w-full flex flex-col justify-center !items-center`}
              >
                {
                  <IdentifierBox
                    className="!h-full !p-0 w-full"
                    isSuccess={launch.success!}
                    logoUrl={launch.links?.patch?.large || ''}
                    flightNumber={launch.flight_number}
                  />
                }
                <div className="p-4 !h-full w-full flex flex-col items-center text-center border-spaceblue-500">
                  <DataPiece title={'MISSÃO'} data={launch.name} />
                  <DataPiece
                    title={'FOGUETE'}
                    data={
                      launch.rocket
                        ? `${usedRocket ? 'Used' : 'New'} ${launch.rocket}`
                        : 'Nenhum foguete encontrado'
                    }
                  />
                  <DataPiece
                    title={'DATA'}
                    data={format(parseISO(launch.date_local), 'dd/MM/yyyy')}
                  />
                  {launch.links?.youtube_id ? (
                    <YoutubeButton videoId={launch.links.youtube_id} />
                  ) : null}
                </div>
              </SectionContainer>
              <SectionSeparator />
            </React.Fragment>
          )
        })}

        <Separator />
      </div>
      <Paginator
        page={data.page}
        totalPages={data.totalPages}
        hasNext={data.hasNext}
        hasPrev={data.hasPrev}
        onPageChange={handlePageChange}
      />
    </>
  )
}

interface DataPieceProps {
  title: string
  data: string
}

const DataPiece = ({ title, data }: DataPieceProps) => {
  return (
    <div className="mb-4 flex flex-col flex-wrap break-all">
      <h1 className="text-spaceblue-500">{title}</h1>
      <h1 className="text-white">{data}</h1>
    </div>
  )
}

interface YoutubeButtonProps {
  videoId: string
}

const YoutubeButton = ({ videoId }: YoutubeButtonProps) => {
  return (
    <div className="mb-4 flex flex-col items-center">
      <h1 className="text-spaceblue-500 mb-1">ASSISTIR NO YOUTUBE</h1>

      <a
        href={`https://youtube.com/watch?v=${videoId}`}
        className="flex justify-center items-center w-8 h-8 bg-red-500 rounded-lg"
      >
        <VscTriangleRight color={'white'} />
      </a>
    </div>
  )
}

export default RegisterBox
