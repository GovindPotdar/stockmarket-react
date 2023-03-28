import { useEffect, useState } from "react"
import { setExchangeRateUnitPrice } from '../../../services/ExchangeRate'
import { toast } from 'react-toastify';

function useExchangeRate(fromCurrencyValue, setToCurrencyValue) {
  
  const [unitPrice, setUnitPrice] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(()=>{
    if(error.length !== 0){
      toast(error)
    }
  },[error])

  useEffect(()=>{
    if(unitPrice !== 0){
      let toCurrencyValue = fromCurrencyValue * unitPrice 
      setToCurrencyValue(toCurrencyValue)
    }
  },[unitPrice])

  const fetchExchangeRate = (fromCurrency, toCurrency)=>{
    setError('')
    setLoading(true)
    setExchangeRateUnitPrice(fromCurrency, toCurrency, setUnitPrice, setLoading, setError)
  }

  return [unitPrice, loading, error, fetchExchangeRate]
}

export default useExchangeRate
