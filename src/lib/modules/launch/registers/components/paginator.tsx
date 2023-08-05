interface PaginatorProps {
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
  onPageChange: (newPage: number) => void
}

const Paginator = ({
  page,
  totalPages,
  hasNext,
  hasPrev,
  onPageChange
}: PaginatorProps) => {
  return (
    <div className="flex justify-center items-center w-full my-8">
      <PaginatorButton
        text={'<'}
        onClick={() => onPageChange(page - 1)}
        disabled={!hasPrev}
      />
      <h1 className="text-white text-2xl lg:text-3xl">
        {page}/{totalPages}
      </h1>
      <PaginatorButton
        text={'>'}
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
      />
    </div>
  )
}

interface PaginatorButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

const PaginatorButton = ({ text, onClick, disabled }: PaginatorButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex justify-center items-center p-4 py-2 mx-4 rounded-md bg-gradient-to-t border border-spaceblue-500 from-spaceblue-500 shadow-spacex-sm shadow-spacegray-500 text-white font-extrabold"
    >
      {text}
    </button>
  )
}

export default Paginator
