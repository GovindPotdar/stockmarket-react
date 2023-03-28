import Button from './Button'

function TimlyButtonGroup({fetchDataTimly, timly, disableTimlyBtn}) {

  return (
    <div className='d-flex justify-content-start'>
      {
        timly.map((ly)=>{
          return <Button title={ly} key={ly} disabled={ly === disableTimlyBtn} onClickHandler={()=>fetchDataTimly(ly)}/>
        })
      }
    </div>
  )
}

export default TimlyButtonGroup
