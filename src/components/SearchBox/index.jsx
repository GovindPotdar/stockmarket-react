import React, { useRef, useState } from 'react'
import css from './style.module.css'
import useSymbolSearch from './hooks/useSymbolSearch'
import Loader from '../Loader'
import MyLink from '../MyLink'
function SearchBox() {
  
  let debounce = useRef(null)

  const [inputText, setInputText] = useState('')
  const [suggestions, loading, fetchSuggestions, clearSuggestions] = useSymbolSearch()

  const inputHandler = (e)=>{
    let value = e.target.value
    setInputText(value)
    clearTimeout(debounce.current)
    debounce.current = setTimeout(() => {
      fetchSuggestions(value)
    }, 300);
  }

  return (
    <div className={`${css.dropdownContainer}`}>
      <div className={`${css.dropdown}`}>
        <div className='d-flex'>
          <input type="text" placeholder="Search For Company Overview..." className={css.myInput} value={inputText} onChange={inputHandler} />
          <button className={`btn btn-lg btn-dark`} onClick={()=>clearSuggestions(setInputText)} >X</button>
        </div>
        <div className={css.dropdownContent}>
          {
            suggestions.length === 0 && inputText.length !== 0 ?
            <button className='text-center'>{
              loading ? <Loader height='40px'/> : 'No results'
            }</button> :
            suggestions.map((suggestion, i)=>{
              return <MyLink hide={()=>clearSuggestions(setInputText)} to={`/company-overview/${suggestion['1. symbol']}`} key={i}>{suggestion['1. symbol']}</MyLink>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchBox
