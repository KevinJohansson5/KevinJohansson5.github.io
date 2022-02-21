import SymbolsList from './SymbolsList'

const Symbols = ({value, onUpdate} : {value:SymbolsList, onUpdate: (value:{}) => void}) => {

  return (
    <div>
      <h2>Symbols</h2>
      <button onClick={() => onUpdate(value)}>Get List of Symbols</button>
      <ul>
        {Object.keys(value).map((symbol) => (
          <li key={symbol}> {symbol} : {value[symbol]} </li>
        ))}
      </ul>
    </div>
  )
}

export default Symbols