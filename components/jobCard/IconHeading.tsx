import React from 'react'

const IconHeading = ({
  children,
  icon,
  heading,
  style = {},
}: {
  children: React.ReactNode
  icon: React.ReactNode
  heading: string
  style?: object
}) => {
  return (
    <div className="px-5">
      <div
        style={style}
        className="flex flex-row border-b border-solid border-gray-200 py-5"
      >
        <div className="flex w-1/6 items-center">
          <div className="h-8 w-8">{icon}</div>
        </div>
        <div className="w-5/6">
          <div className="text-sm font-extrabold">{heading}</div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default IconHeading
