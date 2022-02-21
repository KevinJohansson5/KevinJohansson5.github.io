import HistoricalList from './HistoricalList'

const Historical = ({value} : {value:HistoricalList[]}) => {
  return (
    <div>
      <h2>Historical Rates</h2>
      <p>
        <label>Enter Date</label>
        <br></br>
        <input type="Date"></input>
      </p>
      <p>
        <label>(Optional) Enter List of Symbols</label>
        <br></br>
        <input></input>
      </p>
      <p>
        <button>Get Rates</button>
      </p>
      <ul>
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.rate} </li>
        ))}
      </ul>
    </div>
  )
}


export default Historical