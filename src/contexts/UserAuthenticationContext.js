import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Context = createContext()

export const UserAuthenticationProvider = (props)=>{

  const [user, setUser] = useState(null)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(()=>{
    let userInfoJson = sessionStorage.getItem('userInfo')
    if(userInfoJson){
      let userInfo = JSON.parse(userInfoJson)
      setUser(userInfo)
      setIsUserLoggedIn(true)
    }
  },[])

  const setUserdata = (userInfo)=>{
    if(userInfo){
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
      toast("Logged In succussfully")
      toast(`Hello ${userInfo.name}`)
      setUser(userInfo)
      setIsUserLoggedIn(true)
    }else{
      sessionStorage.removeItem('userInfo')
      toast("Logged Out succussfully")
      setUser(userInfo)
      setIsUserLoggedIn(false)
    }
  }

  return(
    <Context.Provider value={{user, isUserLoggedIn, setUserdata}}>
      {props.children}
    </Context.Provider>
  )
}

export default Context