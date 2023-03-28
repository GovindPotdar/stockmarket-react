

const setExchangeRateUnitPrice = async (fromCurrency, toCurrency, setUnitPrice, setLoading, setError)=>{
  let data = await fetch(`${process.env.REACT_APP_ALPHA_VANTAGE_ROOT_PATH}?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API}`)
  data = await data.json()
  if(data['Realtime Currency Exchange Rate']) setUnitPrice(data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
  if(data['Error Message']) setError("Invalid API call")
  if(data['Note']) setError("Limit exceed !")
  setLoading(false)
}

export {
  setExchangeRateUnitPrice
}