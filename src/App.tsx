import { useState } from 'react'
import Header from './components/Header'
import Symbols from './components/Symbols'
import Latest from './components/Latest'
import Historical from './components/Historical'
import SymbolsList from './components/SymbolsList'

function App() {
  const [symbolsValue, setSymbols] = useState<SymbolsList[]>([])

  const updateSymbols = () => {
    setSymbols([
    {
      symbol: "TST", 
      title: "test1"
    }, 
    {
      symbol: "TST2", 
      title: "test2"
    }])
  }


  return (

    <div className="App">
      <Header />
      <div style={ container }>
        <div style={ bodyStyle }>
          <Symbols value={symbolsValue} onUpdate={updateSymbols}/>
        </div>
        <div style={ bodyStyle }>
          <Latest symbols={symbolsValue}/>
        </div>
        <div style={ bodyStyle }>
          <Historical  symbols={symbolsValue}/>
        </div>
      </div>
    </div>
  );
}



const container = {
  display: "flex"
}

const bodyStyle = {
  width: "33%",
}


export default App;
