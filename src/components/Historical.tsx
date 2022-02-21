import { useState } from 'react'
import HistoricalList from './HistoricalList'
import SymbolsList from './SymbolsList'
import SymbolsInput from './SymbolsInput'

const Historical = ({value, symbols, onUpdate} : {value:HistoricalList[], symbols:SymbolsList[], onUpdate: (value:HistoricalList[]) => void}) => {

  const [selectedSymbols, setSelected] = useState<string[]>([])

  const addSymbol = (value: string) => {
    !selectedSymbols.includes(value) && value && setSelected([...selectedSymbols, value])
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
      <button onClick={() => onUpdate(value)}>Get Rates</button>
      <ul>
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.rate} </li>
        ))}
      </ul>
    </div>
  )
}


export default Historical