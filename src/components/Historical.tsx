import { useState } from 'react'
import HistoricalList from './HistoricalList'
import SymbolsList from './SymbolsList'
import SymbolsInput from './SymbolsInput'

const Historical = ({symbols} : {symbols:SymbolsList[]}) => {

  const [selectedSymbols, setSelected] = useState<string[]>([])
  const [value, setHistorical] = useState<HistoricalList[]>([])

  const addSymbol = (selected: string) => {
    !selectedSymbols.includes(selected) && selected && setSelected([...selectedSymbols, selected])
  } 

  const updateHistorical = () => {
    setHistorical([
      {
        symbol: "TMP", 
        rate: 0.6
      },
      {
        symbol: "TMP2", 
        rate: 1.4
      }])
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
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.rate} </li>
        ))}
      </ul>
    </div>
  )
}


export default Historical