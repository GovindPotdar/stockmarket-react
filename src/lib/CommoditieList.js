const CommoditieList = [
  { title: 'Crude Oil Prices: West Texas Intermediate (WTI)',
    function: 'WTI',
    interval: ['daily', 'weekly', 'monthly']
  },
  {
    title: 'Crude Oil Prices (Brent)',
    function: 'BRENT',
    interval: ['daily', 'weekly', 'monthly']
  },
  {
    title: 'Natural Gas',
    function: 'NATURAL_GAS',
    interval: ['daily', 'weekly', 'monthly']
  },
  {
    title: 'Global Price of Copper',
    function: 'COPPER',
    interval: ['monthly', 'quarterly', 'annual']
  },
  {
    title: 'Global Price of Aluminum',
    function: 'ALUMINUM',
    interval: ['monthly', 'quarterly', 'annual']
  },
  {
    title: 'Global Price of Wheat',
    function: 'WHEAT',
    interval: ['monthly', 'quarterly', 'annual']
  },
  {
    title: 'Global Price of Corn',
    function: 'CORN',
    interval: ['monthly', 'quarterly', 'annual']
  },
  {
    title: 'Global Price of Cotton',
    function: 'COTTON',
    interval: ['monthly', 'quarterly', 'annual']
  },
  {
    title: 'Global Price of Sugar',
    function: 'SUGAR',
    interval: ['monthly', 'quarterly', 'annual']
  },
  {
    title: 'Global Price of Coffee',
    function: 'COFFEE',
    interval: ['monthly', 'quarterly', 'annual']
  },
  {
    title: 'Global Price Index of All Commodities',
    function: 'ALL_COMMODITIES',
    interval: ['monthly', 'quarterly', 'annual']
  }
]

export const getInterval = (func)=>{
  let intervalObj = CommoditieList.find((commoditie)=>{
    return commoditie.function === func
  })
  return intervalObj ? intervalObj.interval : []
}


export default CommoditieList