import SymbolsList from './SymbolsList'

const Symbols = ({value, onUpdate} : {value:SymbolsList[], onUpdate: (value:SymbolsList[]) => void}) => {

  return (
    <div>
      <h2>Symbols</h2>
      <button onClick={() => onUpdate(value)}>Get List of Symbols</button>
      <ul>
        {value.map((i) => (
          <li key={i.symbol}> {i.symbol} : {i.title} </li>
        ))}
      </ul>
    </div>
  )
}

export default Symbols