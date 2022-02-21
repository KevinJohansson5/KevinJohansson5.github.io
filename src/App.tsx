import Header from './components/Header'
import Symbols from './components/Symbols'
import Latest from './components/Latest'
import Historical from './components/Historical'
import SymbolsList from './components/SymbolsList'
import LatestList from './components/LatestList'
import HistoricalList from './components/HistoricalList'

function App() {
  let symbolsValue: SymbolsList[] =[
    {
      symbol: "TMP", 
      title: "temp"
    },
    {
      symbol: "TMP2", 
      title: "temp2"
    }
  ]

  let latestValue: LatestList[] =[
    {
      symbol: "TMP", 
      rate: 0.5
    },
    {
      symbol: "TMP2", 
      rate: 1.1
    }
  ]  

  let historicalValue: HistoricalList[] =[
    {
      symbol: "TMP", 
      rate: 0.6
    },
    {
      symbol: "TMP2", 
      rate: 1.4
    }
  ]

  return (

    <div className="App">
      <Header />
      <div style={ container }>
        <div style={ bodyStyle }>
          <Symbols value={symbolsValue}/>
        </div>
        <div style={ bodyStyle }>
          <Latest value={latestValue}/>
        </div>
        <div style={ bodyStyle }>
          <Historical value={historicalValue}/>
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
