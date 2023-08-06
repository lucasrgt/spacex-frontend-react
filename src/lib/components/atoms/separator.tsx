import classNames from 'classnames'

interface SeparatorProps {
  className?: string
}

const Separator = ({ className }: SeparatorProps) => {
  return (
    <div
      className={`${classNames(
        className
      )} h-[1px] w-16 my-4 mb-6 bg-spaceblue-500`}
    ></div>
  )
}

export default Separator
