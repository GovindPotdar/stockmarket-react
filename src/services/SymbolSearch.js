

const setSuggestionsData = async (text, setData, setLoading)=>{
  // console.log(apiKey)
  let data = await fetch(`${process.env.REACT_APP_ALPHA_VANTAGE_ROOT_PATH}?function=SYMBOL_SEARCH&keywords=${text}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API}`)
  data = await data.json()
  setLoading(false)
  if(data.bestMatches){
    setData(data.bestMatches)
  }
}

export {
  setSuggestionsData
}