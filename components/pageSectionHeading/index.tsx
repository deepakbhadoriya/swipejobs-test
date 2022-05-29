import React from 'react'

const PageSectionHeading = ({
  heading = 'Page Section heading',
}: {
  heading: string
}) => (
  <div className="border-b border-gray-200">
    <h3 className="text-3xl font-medium leading-6 text-gray-700">{heading}</h3>
  </div>
)

export default PageSectionHeading
