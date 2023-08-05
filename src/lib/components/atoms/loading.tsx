import { RevolvingDot } from 'react-loader-spinner'

const Loading = () => {
  return (
    <RevolvingDot
      height="250"
      width="250"
      color="#99F3FF"
      secondaryColor="#99F3FF"
      radius={12}
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}

export default Loading
