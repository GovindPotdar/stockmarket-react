import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader'
import FilterSelectTag from './FilterSelectTag';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function LineChart({labels, datasets, options, filter}) {

  const [startRange, setStartRange] = useState('')
  const [endRange, setEndRange] = useState('')
  const [chartLables, setChartLabels] = useState([])
  const [chartDatasets, setChartDatasets] = useState([])

  useEffect(()=>{
    if(labels.length !== 0 || datasets.length !== 0){
      setStartRange(labels[0])
      setEndRange(labels[labels.length-1])
      setChartLabels(labels)
      setChartDatasets(datasets)
    }
  },[labels, datasets])

  
  if(labels.length === 0 || datasets.length === 0){
    return <p>Data missing. Failed to load chart.</p>
  }

  const setChartDataAccordingToRange = (start, end)=>{
    if(start < end){
      let startIndex = labels.indexOf(start)
      let endIndex = labels.indexOf(end) + 1
      let labelList = labels.slice(startIndex, endIndex)
      let datasetsClone = JSON.parse(JSON.stringify(datasets)) // This is because the below code is changing the value of `datasets` which is a prop (the inner value of datasets)
      let dataSetList = datasetsClone.map((dataSet)=>{
        let dataList = dataSet.data.slice(startIndex, endIndex)
        dataSet.data = dataList
        return dataSet
      })
      setChartLabels(labelList)
      setChartDatasets(dataSetList)
    }
  }

  const setStartRangeValue = (e)=>{
    setStartRange(e.target.value)
    setChartDataAccordingToRange(e.target.value, endRange)
  }

  const setEndRangeValue = (e)=>{
    setEndRange(e.target.value)
    setChartDataAccordingToRange(startRange, e.target.value)
  }

  return (
    <>
      { filter && <div className='row d-flex justify-content-end'>
        <div className="col-xsm-6 col-sm-6 col-md-3 col-lg-2">
          {
            startRange.length !==0 && <FilterSelectTag labels={labels} setRangeValue={setStartRangeValue} defaultValue={startRange} isSkipOption={(label)=>endRange <= label} />
          }
        </div>
        <div className="col-xsm-6 col-sm-6 col-md-3 col-lg-2">
          {
            endRange.length !==0 && <FilterSelectTag labels={labels} setRangeValue={setEndRangeValue} defaultValue={endRange} isSkipOption={(label)=>startRange >= label}/>
          }
        </div>
      </div>}
      {
        (chartLables.length !==0 && chartDatasets.length !==0) ?
        <Line data={{
          labels: chartLables ,
          datasets: chartDatasets 
        }} 
        options={options}
        /> : <Loader className='mx-auto my-auto' height='300px'/>
      }
    </>
  )
}

export default LineChart
