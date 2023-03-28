import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { setCommoditieData } from '../../../services/Commoditie'

function useCommoditie() {
  
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(()=>{
    if(error.length !== 0){
      toast(error)
    }
  },[error])

  const fetchCommoditieData = (functionSymbol, interval)=>{
    setLoading(true)
    setData(null)
    setError('')
    setCommoditieData(functionSymbol, interval, setData, setLoading, setError)
  }

  return [data, loading, fetchCommoditieData]
}

export default useCommoditie
