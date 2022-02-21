import HistoricalList from './HistoricalList'
import SymbolsInput from './SymbolsInput'

const Historical = ({value, onUpdate} : {value:HistoricalList[], onUpdate: (value:HistoricalList[]) => void}) => {
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