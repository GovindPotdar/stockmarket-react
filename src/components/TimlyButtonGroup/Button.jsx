import React from 'react'

function Button({title, onClickHandler, disabled}) {
  return (
    <button className='btn btn-sm btn-primary ms-2' disabled={disabled} onClick={onClickHandler}>{title}</button>
  )
}

export default Button
