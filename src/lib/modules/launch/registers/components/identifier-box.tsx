import classNames from 'classnames'

interface IdentifierBoxProps {
  isSuccess: boolean
  logoUrl: string
  flightNumber: number
  className?: string
}

const IdentifierBox = ({
  isSuccess,
  logoUrl,
  flightNumber,
  className
}: IdentifierBoxProps) => {
  return (
    <div
      className={`${classNames(
        className
      )} flex-grow flex h-full flex-col items-center text-center border-b border-spaceblue-500`}
    >
      <div className="flex-grow w-full">
        {isSuccess ? (
          <div className="bg-gradient-to-b from-green-400 w-full px-4 py-2 flex justify-center items-center border-y border-spaceblue-500 text-white">
            SUCESSO
          </div>
        ) : (
          <div className="flex-grow bg-gradient-to-b from-red-400 w-full px-4 py-2 !m-0 flex justify-center items-center border-y border-spaceblue-500 text-white">
            FALHA
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center !self-center items-center flex-grow p-4">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={'Logo'}
            height={32}
            width={32}
            className="mb-4"
          />
        ) : null}
        <h1 className="text-spaceblue-500 text-2xl">{flightNumber}</h1>
      </div>
    </div>
  )
}

export default IdentifierBox
