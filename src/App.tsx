import { useState } from 'react'
import Header from './components/Header'
import Symbols from './components/Symbols'
import Latest from './components/Latest'
import Historical from './components/Historical'
import SymbolsList from './components/SymbolsList'
import LatestList from './components/LatestList'
import HistoricalList from './components/HistoricalList'

function App() {
  const [symbolsValue, setSymbols] = useState<SymbolsList[]>([])
  const [latestValue, setLatest] = useState<LatestList[]>([])
  const [historicalValue, setHistorical] = useState<HistoricalList[]>([])

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

  const updateLatest = () => {
    setLatest([
      {
        symbol: "TMP", 
        rate: 0.5
      },
      {
        symbol: "TMP2", 
        rate: 1.1
      }])
  }  

  const updateHistorical = () => {
    setHistorical([
      {
        symbol: "TMP", 
        rate: 0.6
      },
      {
        symbol: "TMP2", 
        rate: 1.4
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
          <Latest value={latestValue} onUpdate={updateLatest}/>
        </div>
        <div style={ bodyStyle }>
          <Historical value={historicalValue} onUpdate={updateHistorical}/>
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
