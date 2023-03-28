import React from 'react'
import CurrencyList from '../../lib/CurrencyList'

function InputField(props) {

  const setValue = (e)=>{
    let val = e.target.value
    props.setValue(val)
    props.calculateCurrency(val)
  }

  const setCurrency = (e)=>{
    let val = e.target.value
    props.setCurrency(val)
  }

  return (
    <div className="d-flex border border-2 border-dark rounded-3 mt-3">
      <input type="number" step="any" min='0' className="border border-0 border-end form-control" value={props.value}  onChange={setValue} disabled={props.loading}/>
      <select defaultValue={props.currency} className="border border-0 form-select" aria-label="Default select example" onChange={setCurrency} disabled={props.loading} >
        <option value=''>{props.dropdownText}</option>        
        {
          CurrencyList.map((obj)=>{
            return <option value={obj.code} key={obj.code}>{obj.code} - {obj.name}</option>
          })
        }
      </select>
    </div>
  )
}

export default InputField
