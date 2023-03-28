import React, { useContext, useEffect } from 'react'
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify'
import UserContext from '../../contexts/UserAuthenticationContext'

function ProtectedComponent(props) {

  const { isUserLoggedIn } = useContext(UserContext)

  if(!isUserLoggedIn){
    toast('Login to access this page')
    return <Navigate to="/" />
  }

  return props.children
}

export default ProtectedComponent
