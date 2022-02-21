import SymbolsList from './SymbolsList'

const SymbolsInput = ({symbols, selectedSymbols, addSymbol} : {symbols:SymbolsList[], selectedSymbols:string[], addSymbol: (value:string) => void}) => {



  return (
  <div>
    <label>(Optional) Enter List of Symbols</label>
    <br></br>
    <select onChange={(e) => addSymbol(e.target.value)}>
      <option> </option>
      {symbols.map((i) => (
        <option key={i.symbol} value={i.symbol}> {i.symbol} </option>
      ))}
    </select>
    {selectedSymbols.length > 0 ? 
      <ul> 
        {selectedSymbols.map((i) => (
          <li key={i}> {i} </li>
        ))} 
      </ul> : ""}
  </div>
  )
}

export default SymbolsInput