import SymbolsList from './SymbolsList'

const Symbols = ({value} : {value:SymbolsList[]}) => {

  return (
    <div>
      <h2>Symbols</h2>
      <button>Get List of Symbols</button>
      <ul>
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.title} </li>
        ))}
      </ul>
    </div>
  )
}

export default Symbols