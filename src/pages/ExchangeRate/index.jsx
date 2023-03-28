import React, { useEffect, useState } from 'react'
import InputField from './InputField'
import useExchangeRate from './hooks/useExchangeRate'
import Loader from '../../components/Loader'
import useCalculateCurrency from './hooks/useCalculateCurrency'
import ExchangeRateChart from './ExchangeRateChart'

function ExchangeRate() {

  const [fromCurrency, setFromCurrency] = useState('INR')
  const [toCurrency, setToCurrency] = useState('')
  const [fromCurrencyValue, setFromCurrencyValue] = useState(1)
  const [toCurrencyValue, setToCurrencyValue] = useState('')

  const [unitPrice, loading, error, fetchExchangeRate] = useExchangeRate(fromCurrencyValue, setToCurrencyValue)

  const [calculateExchangeRateOfToCurrency, calculateExchangeRateOfFromCurrency] = useCalculateCurrency()

  const isAllValuePresent = ()=>{
    return (fromCurrency.length !== 0 && toCurrency.length !== 0 && Number(fromCurrencyValue) >= 0 && Number(toCurrencyValue) >= 0 && unitPrice !== 0)
  }

  const isAllValuePresentForNewRequest = ()=>{
    return (fromCurrency.length !== 0 && toCurrency.length !== 0 && Number(fromCurrencyValue) > 0)
  }

  useEffect(()=>{
    if(isAllValuePresentForNewRequest()){
      setToCurrencyValue('')
      fetchExchangeRate(fromCurrency, toCurrency)
    }
  },[fromCurrency, toCurrency])

  const calculateToCurrency = (fromCurrencyVal)=>{
    if(isAllValuePresent()){
      calculateExchangeRateOfToCurrency(unitPrice, fromCurrencyVal, setToCurrencyValue)
    }
  }

  const calculateFromCurrency = (toCurrencyVal)=>{
    if(isAllValuePresent()){
      calculateExchangeRateOfFromCurrency(unitPrice, toCurrencyVal, setFromCurrencyValue)
    }
  }

  return (
    <div className='container'>
      <div className='d-flex'>
      <h1>Currency Exchange Rate</h1>  
      { loading && <Loader className='my-auto ms-2' height='35px' /> }
      </div>
      <hr/>
      <InputField dropdownText='From Currency' currency={fromCurrency} value={fromCurrencyValue} setValue={setFromCurrencyValue} setCurrency={setFromCurrency} calculateCurrency={calculateToCurrency} loading={loading}/>
      <InputField dropdownText='To Currency' currency={toCurrency} value={toCurrencyValue} setValue={setToCurrencyValue} setCurrency={setToCurrency} calculateCurrency={calculateFromCurrency} loading={loading}/>
      <hr/>
      <div className='shadow-lg rounded mt-3 mb-5 p-3 border border-1 w-100 d-flex flex-column' style={{height: '105vh'}}>
        { (!loading && error.length === 0) ?
          <ExchangeRateChart
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            unitPrice={unitPrice}
          /> : <h1 className='mx-auto my-auto'>{error}</h1>
        }
      </div>
    </div>
  )
}

export default ExchangeRate
