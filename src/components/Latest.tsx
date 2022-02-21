import { useState } from 'react'
import SymbolsInput from './SymbolsInput'
import SymbolsList from './SymbolsList'
import RatesList from './RatesList'

const Latest = ({ symbols } : {symbols:SymbolsList}) => {

  const [selectedSymbols, setSelected] = useState<string[]>([])
  const [value, setLatest] = useState<RatesList>({})

  const addSymbol = (selected: string) => {
    !selectedSymbols.includes(selected) && selected && setSelected([...selectedSymbols, selected])
  } 

  const updateLatest = async () => {
    const apiResponse = await fetchRates()
    const ratesResponse = apiResponse.rates
    setLatest(ratesResponse)
    clearSelected()
  }  

  const fetchRates = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY 
    const baseUrl = "http://api.exchangeratesapi.io/v1/latest?access_key="+API_KEY
    let url = baseUrl
    selectedSymbols.length > 0 && (url = url.concat("&symbols=", selectedSymbols.join()))
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const clearSelected = () => {
    setSelected([])
  }

  return (
    <div>
      <h2>Latest Rates</h2>
      <SymbolsInput symbols={symbols} selectedSymbols={selectedSymbols} addSymbol={addSymbol} />
      <br></br>
      <button onClick={() => updateLatest()}>Get Latest Rates</button>
      <ul>
        {Object.keys(value).map((symbol) => (
          <li key={symbol}> {symbol} : {value[symbol]} </li>
        ))}
      </ul>
    </div>
  )
}

export default Latest