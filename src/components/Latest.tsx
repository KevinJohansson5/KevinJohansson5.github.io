import LatestList from './LatestList'


const Latest = ({value} : {value:LatestList[]}) => {

  return (
    <div>
      <h2>Latest Rates</h2>
      <p>
        <label>(Optional) Enter List of Symbols</label>
        <br></br>
        <input></input>
      </p>
      <button>Get Latest Rates</button>
      <ul>
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.rate} </li>
        ))}
      </ul>
    </div>
  )
}

export default Latest