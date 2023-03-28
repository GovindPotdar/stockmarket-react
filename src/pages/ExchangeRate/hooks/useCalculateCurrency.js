
function useCalculateCurrency() {
  
  const calculateExchangeRateOfToCurrency = (unitPrice, fromCurrencyValue, setToCurrencyValue)=>{
    let toCurrencyvalue = (unitPrice*fromCurrencyValue)/1
    setToCurrencyValue(toCurrencyvalue)
  }

  const calculateExchangeRateOfFromCurrency = (unitPrice, toCurrencyValue, setFromCurrencyValue)=>{
    let fromCurrencyvalue = (1/unitPrice)*toCurrencyValue
    setFromCurrencyValue(fromCurrencyvalue)
  }

  return [calculateExchangeRateOfToCurrency, calculateExchangeRateOfFromCurrency]
}

export default useCalculateCurrency
