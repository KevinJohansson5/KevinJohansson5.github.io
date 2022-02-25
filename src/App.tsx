import { useState } from "react";
import { SymbolsList } from "./components/SymbolsList";
import Header from "./components/Header";
import Symbols from "./components/Symbols";
import Latest from "./components/Latest";
import Historical from "./components/Historical";

function App() {
  const [symbolsValue, setSymbols] = useState<SymbolsList>({});

  const getSymbols = async () => {
    const apiResponse = await fetchSymbols();
    const symbolResponse = apiResponse.symbols;
    setSymbols(symbolResponse);
  };

  const fetchSymbols = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url =
      "https://cors-anywhere.herokuapp.com/http://api.exchangeratesapi.io/v1/symbols?access_key=" +
      API_KEY;
    const response = await fetch(url);
    return response.json();
  };

  return (
    <div className="App">
      <Header />
      <div style={container}>
        <div style={bodyStyle}>
          <Symbols value={symbolsValue} onUpdate={getSymbols} />
        </div>
        <div style={bodyStyle}>
          <Latest symbols={symbolsValue} />
        </div>
        <div style={bodyStyle}>
          <Historical symbols={symbolsValue} />
        </div>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
};

const bodyStyle = {
  width: "33%",
};

export default App;
