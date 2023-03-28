import {useContext} from 'react'
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import useAuthentication from './hooks/useAuthentication';
import UserContext from '../../contexts/UserAuthenticationContext'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Authentication() {

  const {user, isUserLoggedIn, setUserdata} = useContext(UserContext)
  const navigate = useNavigate()
  const [successHandler, errorHandler] = useAuthentication()

  const login = useGoogleLogin({
    onSuccess: (tokenResponse)=>successHandler(tokenResponse, setUserdata),
    onError: errorHandler,
    useOneTap: true
  }); 

  const loginUser = ()=>{
    if(isUserLoggedIn) toast("You are already logged in")
    if(!isUserLoggedIn){
      login()
    }
  }

  const logoutuser = ()=>{
    if(isUserLoggedIn){
      googleLogout()
      setUserdata(null)
      navigate('/')
    }
  }

  return (
    <>
      {!isUserLoggedIn && <button className='btn btn-light btn-sm' onClick={loginUser}>Login With Google</button>}
      {isUserLoggedIn && <button className='btn btn-light btn-sm' onClick={logoutuser}>Logout {user.name}</button>}
    </>
  )
}

export default Authentication
