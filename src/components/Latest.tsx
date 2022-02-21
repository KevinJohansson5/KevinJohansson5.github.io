import LatestList from './LatestList'
import SymbolsInput from './SymbolsInput'

const Latest = ({value} : {value:LatestList[]}) => {

  return (
    <div>
      <h2>Latest Rates</h2>
      <SymbolsInput />
      <br></br>
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