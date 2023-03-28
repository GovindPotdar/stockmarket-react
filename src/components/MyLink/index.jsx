import React from 'react'
import { useNavigate } from 'react-router-dom'

function MyLink(props) {

  const navigate = useNavigate();

  const navigateTo = ()=>{
    props.hide()
    navigate(props.to)
  }

  return (
    <>
      <button onClick={navigateTo} className={props.className}>{props.children}</button>
    </>
  )
}

export default MyLink
