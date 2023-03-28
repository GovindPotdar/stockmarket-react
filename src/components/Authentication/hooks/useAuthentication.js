import { toast } from "react-toastify"

function useAuthentication() {
  
  const successHandler = async (tokenResponse, setUserdata)=>{
    try {
      let userPromise = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`,{headers: {Authorization: `Bearer ${tokenResponse.access_token}`}})
      let userInfo = await userPromise.json()
      setUserdata(userInfo)
    } catch (error) {
      errorHandler()
    }
  }

  const errorHandler = ()=>{
    toast("Error while logging.")
    toast("Please try again.")
  }

  return [successHandler, errorHandler]
}

export default useAuthentication
