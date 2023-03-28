import React, {lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedComponent from '../components/ProtectedComponent'
const Home = lazy(()=> import('../pages/Home'))
const CompanyOverview = lazy(()=> import('../pages/CompanyOverview'))
const ExchangeRate = lazy(()=> import('../pages/ExchangeRate'))
const Commoditie = lazy(()=> import('../pages/Commoditie'))

// import Home from '../pages/Home'
// import CompanyOverview from '../pages/CompanyOverview'
// import ExchangeRate from '../pages/ExchangeRate'
// import Commoditie from '../pages/Commoditie'
function StockMarketRoutes() {
  return (
    <>
    <Routes>
      <Route
        index
        element={<Home/>}
        exect
      />
        <Route
          path='/company-overview/:symbol'
          element={<ProtectedComponent><CompanyOverview/></ProtectedComponent>}
          exect
        />
        <Route
          path='/exchange-rate'
          element={<ProtectedComponent><ExchangeRate/></ProtectedComponent>}
          exect
        />
        <Route
          path='/commoditie/:functionSymbol'
          element={<ProtectedComponent><Commoditie/></ProtectedComponent>}
          exect
        />
    </Routes>
    </>
  )
}

export default StockMarketRoutes
