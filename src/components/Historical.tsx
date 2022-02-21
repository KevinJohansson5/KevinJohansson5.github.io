import HistoricalList from './HistoricalList'
import SymbolsInput from './SymbolsInput'
import { useState } from 'react'

const Historical = ({value} : {value:HistoricalList[]}) => {
  return (
    <div>
      <h2>Historical Rates</h2>
      <p>
        <label>Enter Date</label>
        <br></br>
        <input type="Date"></input>
      </p>
      <SymbolsInput />
      <br></br>
      <button>Get Rates</button>
      <ul>
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.rate} </li>
        ))}
      </ul>
    </div>
  )
}


export default Historical