import classNames from 'classnames'

interface SpaceXTitleProps {
  text: string
  className?: string
}

const Title = ({ text, className }: SpaceXTitleProps) => {
  return (
    <h1 className={`${classNames(className)} text-spaceblue-500`}>{text}</h1>
  )
}

export default Title
