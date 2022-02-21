import { useState } from 'react'
import SymbolsInput from './SymbolsInput'
import SymbolsList from './SymbolsList'
import RatesList from './RatesList'

const Historical = ({symbols} : {symbols:SymbolsList}) => {

  const [selectedSymbols, setSelected] = useState<string[]>([])
  const [value, setHistorical] = useState<RatesList>({})

  const addSymbol = (selected: string) => {
    !selectedSymbols.includes(selected) && selected && setSelected([...selectedSymbols, selected])
  } 

  const updateHistorical = () => {
    setHistorical(
      {
        TMP: 2.5, 
        TMP2: 4.4
      })
  }

  return (
    <div>
      <h2>Historical Rates</h2>
      <p>
        <label>Enter Date</label>
        <br></br>
        <input type="Date"></input>
      </p>
      <SymbolsInput symbols={symbols} selectedSymbols={selectedSymbols} addSymbol={addSymbol} />
      <br></br>
      <button onClick={() => updateHistorical()}>Get Rates</button>
      <ul>
        {Object.keys(value).map((symbol) => (
          <li key={symbol}> {symbol} : {value[symbol]} </li>
        ))}
      </ul>
    </div>
  )
}


export default Historical