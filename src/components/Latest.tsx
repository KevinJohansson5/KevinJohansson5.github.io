import { useState } from 'react'
import LatestList from './LatestList'
import SymbolsList from './SymbolsList'
import SymbolsInput from './SymbolsInput'

const Latest = ({value, symbols, onUpdate} : {value:LatestList[], symbols:SymbolsList[], onUpdate: (value:LatestList[]) => void}) => {

  const [selectedSymbols, setSelected] = useState<string[]>([])

  const addSymbol = (value: string) => {
    !selectedSymbols.includes(value) && value && setSelected([...selectedSymbols, value])
  } 

  return (
    <div>
      <h2>Latest Rates</h2>
      <SymbolsInput symbols={symbols} selectedSymbols={selectedSymbols} addSymbol={addSymbol} />
      <br></br>
      <button onClick={() => onUpdate(value)}>Get Latest Rates</button>
      <ul>
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.rate} </li>
        ))}
      </ul>
    </div>
  )
}

export default Latest