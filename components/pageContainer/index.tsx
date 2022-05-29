import React, { ReactChild } from 'react'

const PageContainer = ({
  children,
  className = '',
}: {
  children: ReactChild
  className: String
}) => {
  return <div className={`px-14 py-16 ${className}`}>{children}</div>
}

export default PageContainer
