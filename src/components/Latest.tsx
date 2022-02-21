import { useState } from 'react'
import LatestList from './LatestList'
import SymbolsList from './SymbolsList'
import SymbolsInput from './SymbolsInput'

const Latest = ({ symbols} : {symbols:SymbolsList[]}) => {

  const [selectedSymbols, setSelected] = useState<string[]>([])
  const [value, setLatest] = useState<LatestList[]>([])

  const addSymbol = (selected: string) => {
    !selectedSymbols.includes(selected) && selected && setSelected([...selectedSymbols, selected])
  } 

  const updateLatest = () => {
    setLatest([
      {
        symbol: "TMP", 
        rate: 0.5
      },
      {
        symbol: "TMP2", 
        rate: 1.1
      }])
  }  

  return (
    <div>
      <h2>Latest Rates</h2>
      <SymbolsInput symbols={symbols} selectedSymbols={selectedSymbols} addSymbol={addSymbol} />
      <br></br>
      <button onClick={() => updateLatest()}>Get Latest Rates</button>
      <ul>
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.rate} </li>
        ))}
      </ul>
    </div>
  )
}

export default Latest