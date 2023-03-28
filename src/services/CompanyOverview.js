
const setCompanyOverviewData = async (symbol, setOverview, setLoading)=>{
  let data = await fetch(`${process.env.REACT_APP_ALPHA_VANTAGE_ROOT_PATH}?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API}`)
  data = await data.json()
  if(data.Symbol) setOverview(data)
  setLoading(false)
}

export {
  setCompanyOverviewData
}
