import React, { Suspense } from 'react'
import StockMarketRoutes from '../../routes/StockMarketRoutes'
import Loader from '../../components/Loader'

function Body() {
  return (
    <>
      <Suspense fallback={<Loader className='mt-5 d-flex justify-content-center' height="100px" />}>
        <StockMarketRoutes/>
      </Suspense>
    </>
  )
}

export default Body
