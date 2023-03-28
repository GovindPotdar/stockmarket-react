import { useState } from "react"
import { setCompanyOverviewData } from "../../../services/CompanyOverview"


function useCompanyOverview() {
  const [overview, setOverview] = useState({})
  const [loading, setLoading] = useState(false)


  const fetchCompanyOverview = (symbol)=>{
    setOverview([])
    setLoading(true)
    setCompanyOverviewData(symbol, setOverview, setLoading)
  }

  return [overview, loading, fetchCompanyOverview]
}

export default useCompanyOverview
