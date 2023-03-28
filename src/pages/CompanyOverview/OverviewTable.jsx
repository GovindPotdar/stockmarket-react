import React from 'react'
import OverviewTableRow from './OverviewTableRow'

function OverviewTable(props) {
  const { overview } = props
  const keys = Object.keys(overview)

  return (
    <div className="container mt-4 border-start border-end border-top" >
      <table className="table">
        <tbody>
          {
            keys.map((key)=>{
              if(key === 'Description') return null
              return <OverviewTableRow value={overview[key]} keyValue={key} key={key}/>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default OverviewTable
