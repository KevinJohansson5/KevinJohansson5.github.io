import Header from './components/Header'
import Symbols from './components/Symbols'
import Latest from './components/Latest'
import Historical from './components/Historical'

function App() {


  return (

    <div className="App">
      <Header />
      <div style={ container }>
        <div style={ bodyStyle }>
          <Symbols />
        </div>
        <div style={ bodyStyle }>
          <Latest />
        </div>
        <div style={ bodyStyle }>
          <Historical />
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
