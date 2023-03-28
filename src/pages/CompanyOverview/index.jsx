import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import useCompanyOverview from './hooks/useCompanyOverview'
import OverviewTable from './OverviewTable'
import TopSearchBox from '../../hoc/TopSearchBox'
import Modal from '../../components/Modal'

function CompanyOverview() {

  const { symbol } = useParams()
  const [showModal, setShowModal] = useState(false)
      
  const [overview, loading, fetchCompanyOverview] = useCompanyOverview()

  useEffect(() => {
    fetchCompanyOverview(symbol)
  }, [symbol])

  if (loading) {
    return <Loader className='mt-5 d-flex justify-content-center' height="100px" />
  }

  if (Object.keys(overview).length === 0) {
    return <h1 className='text-center'>Data not found for {symbol}.</h1>
  }

  return (
    <>
      <div className='container-fluid'>
        <h1>{overview.Symbol} : {overview.Name}</h1>
        <hr />
        <p>{overview.Description} <span className='text-danger' onClick={()=>setShowModal(true)}>more details</span></p>
        {showModal && <Modal
          body={<OverviewTable overview={overview} />}
          title={overview.Name}
          closeHandler={()=>setShowModal(false)}
        />}
      </div>
    </>
  )
}

export default TopSearchBox(CompanyOverview)
