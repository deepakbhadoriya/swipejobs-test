import React, { MouseEventHandler } from 'react'
import { ButtonType } from '../../types'

const Button = ({
  type,
  onClick = () => {},
  title = '',
}: {
  type: keyof typeof ButtonType
  onClick?: MouseEventHandler
  title: string
}) => {
  const buttonClass = {
    SOLID: ' bg-black py-4 text-white',
    OUTLINE: ' border border-solid border-black bg-white py-4 text-black',
  }

  return (
    <button
      onClick={onClick}
      style={{ width: '48%' }}
      className={`w-2/5 rounded-md text-lg duration-200 ease-in hover:shadow-xl ${buttonClass[type]}`}
    >
      {title}
    </button>
  )
}

export default Button
