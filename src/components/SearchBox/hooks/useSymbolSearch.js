import { useState } from 'react'
import { setSuggestionsData } from '../../../services/SymbolSearch'

function useSymbolSearch() {
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchSuggestions = async (text)=>{
    setSuggestions([])
    if(text.length !== 0){
      setLoading(true)
      setSuggestionsData(text, setSuggestions, setLoading)
    }
  }

  const clearSuggestions = (setInputText)=>{
    setInputText('')
    setLoading(false)
    setSuggestions([]) 
  }

  return [suggestions, loading, fetchSuggestions, clearSuggestions]
}

export default useSymbolSearch
