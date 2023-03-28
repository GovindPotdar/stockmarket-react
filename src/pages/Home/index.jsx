import React, { useEffect } from 'react'
import TopSearchBox from '../../hoc/TopSearchBox'
import useMarketStatus from './hooks/useMarketStatus'
import Loader from '../../components/Loader'
import { ColoredCard } from '../../components/Cards'

function Home() {

  const [marketStatusData, loading, fetchMarketStatusData] = useMarketStatus()

  useEffect(()=>{
    fetchMarketStatusData()
  },[])

  if (loading) {
    return <Loader className='mt-5 d-flex justify-content-center' height="100px" />
  }

  if (Object.keys(marketStatusData).length === 0) {
    return <h1 className='text-center mt-2'>Data not found.</h1>
  }

  return (
    <div className="container">
      <h1>{marketStatusData.endpoint}</h1>
      <hr/>
      <div className="row">
        {
          marketStatusData.markets.map((market, index)=>{
            return <div key={index} className="col-3">
              <ColoredCard
                header={`${market.region} - ${market.market_type}`}
                headerExtra={
                  <>
                    <span className='border rounded'>open : {market.local_open}</span>
                    &nbsp;
                    <span className='border rounded'>close : {market.local_close}</span>
                  </>
                }
                title={market.primary_exchanges}
                description={market.notes}
                bgColor={market.current_status === 'closed' ? 'danger' : 'success'}
              />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default TopSearchBox(Home)
