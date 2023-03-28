import React from 'react'
import SearchBox from '../../components/SearchBox'

function TopSearchBox(Component) {
  return (props)=>{
    return(
      <>
        <div className='container mt-2'>
          <SearchBox/>
        </div>
        <Component {...props} />
      </>
    )
  }
}

export default TopSearchBox
