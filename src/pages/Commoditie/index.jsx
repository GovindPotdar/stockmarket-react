import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import useCommoditie from './hooks/useCommoditie'
import useCommoditieChart from './hooks/useCommoditieChart'
import {LineChart} from '../../components/Charts'
import { getInterval } from '../../lib/CommoditieList'
import TimlyButtonGroup from '../../components/TimlyButtonGroup'

function Commoditie() {

  const { functionSymbol } = useParams()
  const [timlyBtnValue, setTimlyBtnValue] = useState('')
  
  const [commoditieData, loading, fetchCommoditieData] = useCommoditie()
  const [getLabels, getDataSets] = useCommoditieChart()

  useEffect(()=>{
    if(!functionSymbol) return
    let interval = getInterval(functionSymbol)[0]
    if(!interval) return 
    setTimlyBtnValue(interval)
    fetchCommoditieData(functionSymbol, interval)
  },[functionSymbol])

  const fetchData = (interval)=>{
    setTimlyBtnValue(interval)
    fetchCommoditieData(functionSymbol, interval)
  }

  return ( 
    <div className='container'>
      { loading && <Loader className='mt-5 d-flex justify-content-center' height='200px' />}
      { !loading && !commoditieData && <h1 className='mt-5 d-flex justify-content-center'>Data not found.</h1>}
      { !loading && commoditieData && <div>
          <h1 className='mt-2'>{commoditieData.name}</h1>
          <hr/>
          {timlyBtnValue.length !== 0 && <TimlyButtonGroup
            fetchDataTimly={fetchData}
            timly={getInterval(functionSymbol)}
            disableTimlyBtn={timlyBtnValue}
          />}
          <LineChart 
            labels={getLabels(commoditieData)}
            datasets={getDataSets(commoditieData)}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  font: { weight: 'bold' },
                  text: commoditieData.unit,
                  padding: {
                    top: 10,
                    bottom: 10
                  }
                }
              },
            }}
            filter={true}
            />
        </div>
      }
    </div>
  )
}

export default Commoditie
