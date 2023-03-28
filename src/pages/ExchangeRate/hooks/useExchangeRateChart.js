import { useEffect, useState } from "react"
import { setForexPricesData } from '../../../services/ForexPrices'

function useExchangeRateChart() {
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [forexPrices, setForexPrices] = useState(null)
  const [labels, setLabels] = useState([])
  const [datasets, setDatasets] = useState([])

  useEffect(()=>{
    if(forexPrices){
      let keys = Object.keys(forexPrices)
      let labelList = Object.keys(forexPrices[keys[1]]).reverse()
      let datasetList = [{
        label: 'High',
        fill: true,
        data: labelList.map((label)=>{
          return forexPrices[keys[1]][label]['2. high']
        }),
        borderColor: 'green'
      },
      {
        label: 'Low',
        data: labelList.map((label)=>{
          return forexPrices[keys[1]][label]['3. low']
        }),
        // fill: '-1',
        // backgroundColor: '#00000',
        borderColor: 'red'
      }]
      setLabels(labelList)
      setDatasets(datasetList)
    }
  },[forexPrices])

  const fetchForexPrices = (type, fromCurrency, toCurrency)=>{
    setLoading(true)
    setForexPrices(null)
    setError('')
    setForexPricesData(type, fromCurrency, toCurrency, setForexPrices, setLoading, setError)
  }

  return [labels, datasets, loading, error, fetchForexPrices]
}

export default useExchangeRateChart
