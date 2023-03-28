import { useState } from "react"
import marketStatusJson from '../../../assets/jsons/MarketStatus.json'

function useMarketStatus() {

  const [marketStatusData, setMarketStatusData] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchMarketStatusData = ()=>{
    // Assume we are fetching data from api
    setLoading(true)
    setMarketStatusData(marketStatusJson)
    setLoading(false)
  }

  return [marketStatusData, loading, fetchMarketStatusData]
}

export default useMarketStatus
