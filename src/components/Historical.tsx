import { useState } from "react";
import { RatesList } from "./RatesList";
import { SymbolsList } from "./SymbolsList";
import SymbolsInput from "./SymbolsInput";

const Historical = ({ symbols }: { symbols: SymbolsList }) => {
  const [selectedSymbols, setSelected] = useState<string[]>([]);
  const [historicalVal, setHistorical] = useState<RatesList>({});
  const [date, setDate] = useState<string>("");

  const cache: Cache = {};

  const addSymbol = (selected: string) => {
    !selectedSymbols.includes(selected) &&
      selected &&
      setSelected([...selectedSymbols, selected]);
  };

  const updateHistorical = async () => {
    //TODO: check for blank date or date out of range
    if (cache[date]) {
      setHistorical(cache[date]);
      return;
    }
    const apiResponse = await fetchRates();
    const ratesResponse = apiResponse.rates;
    setHistorical(ratesResponse);
    clearSelected();
  };

  const fetchRates = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const baseUrl =
      "http://api.exchangeratesapi.io/v1/" + date + "?access_key=" + API_KEY;
    let url = baseUrl;
    selectedSymbols.length > 0 &&
      (url = url.concat("&symbols=", selectedSymbols.join()));
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const clearSelected = () => {
    setSelected([]);
  };

  const selectDate = (date: string) => {
    setDate(date);
  };

  return (
    <div>
      <h2>Historical Rates</h2>
      <p>
        <label>Enter Date</label>
        <br></br>
        <input type="Date" onChange={(e) => selectDate(e.target.value)}></input>
      </p>
      <SymbolsInput
        symbols={symbols}
        selectedSymbols={selectedSymbols}
        addSymbol={addSymbol}
      />
      <br></br>
      <button onClick={() => updateHistorical()}>Get Rates</button>
      <ul>
        {Object.keys(historicalVal).map((symbol) => (
          <li key={symbol}>
            {" "}
            {symbol} : {historicalVal[symbol]}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historical;

interface Cache {
  [key: string]: RatesList;
}
