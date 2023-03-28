

const setForexPricesData = async (type, fromCurrency, toCurrency, setForexPrices, setLoading, setError)=>{
  let data = await fetch(`${process.env.REACT_APP_ALPHA_VANTAGE_ROOT_PATH}?function=${type}&from_symbol=${fromCurrency}&to_symbol=${toCurrency}&outputsize=full&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API}`)
  data = await data.json()
  if(data['Meta Data']) setForexPrices(data)
  if(data['Error Message']) setError("Invalid API call")
  if(data['Note']) setError("Limit exceed !")
  setLoading(false)
}

export {
  setForexPricesData
}