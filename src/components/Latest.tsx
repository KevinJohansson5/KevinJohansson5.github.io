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

  const updateLatest = () => {
    setLatest(
      {
        TMP: 0.5, 
        TMP2: 1.4
      })
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