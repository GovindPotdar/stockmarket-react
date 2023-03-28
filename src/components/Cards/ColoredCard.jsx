import React from 'react'

function ColoredCard({header, headerExtra, title, description, bgColor}) {
  return (
    <div className={`card text-bg-${bgColor} mb-3`} style={{"maxWidth" : "18rem"}}>
      <div className="card-header bg-dark pb-0">
        {header.length !== 0 ? header : 'No data'}
        { headerExtra && <><br/>{headerExtra}</>}
        </div>
      <div className="card-body">
        <h5 className="card-title">{title.length !== 0 ? title : 'No data'}</h5>
        <p className="card-text">{description.length !== 0 ? description : 'No data'}</p>
      </div>
    </div>
  )
}

export default ColoredCard
