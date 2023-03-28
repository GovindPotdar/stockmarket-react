
function useCommoditieChart() {
  
  const getLabels = (commoditieData)=>{
    return commoditieData.data.map((dt)=>{
      return dt.date
    })
  }

  const getDataSets = (commoditieData)=>{
    return [{
      label: `Value (${commoditieData.interval})`,
      fill: true,
      data: commoditieData.data.map((dt)=>{
        return dt.value
      }),
      borderColor: 'green'
    }]
  }
  return [getLabels, getDataSets]
}

export default useCommoditieChart
