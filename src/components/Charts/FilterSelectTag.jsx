import React from 'react'

function FilterSelectTag({labels, setRangeValue, defaultValue, isSkipOption}) {
  return (
    <select onChange={setRangeValue} defaultValue={defaultValue} className="form-select" aria-label="Default select example">
      {
        labels.map((label)=>{
          if(isSkipOption(label)) return
          return <option value={label} key={label}>{label}</option>
        })
      }
    </select>
  )
}

export default FilterSelectTag
