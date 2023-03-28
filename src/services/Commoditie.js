const setCommoditieData = async (functionSymbol, interval, setData, setLoading, setError)=>{
  let data = await fetch(`${process.env.REACT_APP_ALPHA_VANTAGE_ROOT_PATH}?function=${functionSymbol}&interval=${interval}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API}`)
  data = await data.json()
  if(data['name']){
    let filteredData = data.data.filter((dt)=>{
      return dt.value !== '.'
    })
    data.data = filteredData.reverse()
    setData(data)
  }
  if(data['Error Message']) setError("Invalid API call")
  if(data['Note']) setError("Limit exceed !")
  setLoading(false)
}

export {
  setCommoditieData
}