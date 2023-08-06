interface FailuresContainerProps {
  failures?: number
}

const FailureContainer = ({ failures }: FailuresContainerProps) => {
  return (
    <div className="flex flex-col items-center mb-4 bg-gradient-to-t from-red-400 p-4 rounded-xl border border-red-400 shadow-spacex shadow-red-800 blur-none ">
      <h1 className="text-white text-2xl font-bold">{failures}</h1>
      <h2 className="text-white">FALHA</h2>
    </div>
  )
}

export default FailureContainer
