import classNames from 'classnames'

interface SectionBoxProps {
  children: React.ReactNode
  className?: string
}

const SectionBox = ({ children, className }: SectionBoxProps) => {
  return (
    <div
      className={`${classNames(
        className
      )} w-full border-y border-spaceblue-500 py-4 flex flex-col items-center`}
    >
      {children}
    </div>
  )
}

export default SectionBox
