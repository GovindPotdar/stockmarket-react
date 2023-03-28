import { useEffect, useState } from 'react'
import { LineChart } from '../../components/Charts'
import Loader from '../../components/Loader'
import TimlyButtonGroup from '../../components/TimlyButtonGroup'
import useExchangeRateChart from './hooks/useExchangeRateChart'

function ExchangeRateChart({fromCurrency, toCurrency, unitPrice}) {

  const [labels, datasets, chartLoading, chartError, fetchForexPrices] = useExchangeRateChart()
  const [timlyBtnValue, setTimlyBtnValue] = useState('FX_DAILY')

  useEffect(()=>{
    if(fromCurrency.length !== 0 && toCurrency.length !== 0 && unitPrice !== 0){
      fetchForexPrices(timlyBtnValue, fromCurrency, toCurrency)
    }
  },[fromCurrency, toCurrency])

  const fetchForexPricesTimly = (fxTimly)=>{
    setTimlyBtnValue(fxTimly)
    fetchForexPrices(fxTimly, fromCurrency, toCurrency)
  }

  if(chartLoading){
    return <Loader className='mx-auto my-auto' height='300px'/>
  }

  if(fromCurrency.length !== 0 && toCurrency.length !== 0 && unitPrice !== 0){
    return(<>
      <TimlyButtonGroup disableTimlyBtn={timlyBtnValue} fetchDataTimly={fetchForexPricesTimly} timly={['FX_DAILY', 'FX_WEEKLY', 'FX_MONTHLY']}/>
      { chartError.length === 0 ? <LineChart 
        labels={labels}
        datasets={datasets}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              font: { weight: 'bold' },
              text: `${fromCurrency}(1) High Low in respect to ${toCurrency}(${unitPrice})`,
              padding: {
                top: 10,
                bottom: 10
              }
            }
          },
        }}
        filter={true}
        /> : <h1 className='my-auto mx-auto'>{chartError}</h1>}
    </>)
  }
  return (
    <h1 className='my-auto mx-auto'>Select From Currency and To Currency to see chart.</h1>
  )
}

export default ExchangeRateChart
