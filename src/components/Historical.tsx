import { useState } from "react";
import { RatesList } from "./RatesList";
import { SymbolsList } from "./SymbolsList";
import SymbolsInput from "./SymbolsInput";

const cache: Cache = {};

const Historical = ({ symbols }: { symbols: SymbolsList }) => {
  const [selectedSymbols, setSelected] = useState<string[]>([]);
  const [historicalVal, setHistorical] = useState<RatesList>({});
  const [date, setDate] = useState<string>("");

  const minDate = new Date("1999-01-01");
  const today = new Date();

  const addSymbol = (selected: string) => {
    !selectedSymbols.includes(selected) &&
      selected &&
      setSelected([...selectedSymbols, selected]);
  };

  const updateHistorical = async () => {
    if (dateValid()) {
      const rates: RatesList = await getHistorical();
      if (selectedSymbols.length > 0) {
        const output: RatesList = {};
        selectedSymbols.map((symbol) => (output[symbol] = rates[symbol]));
        setHistorical(output);
      } else {
        setHistorical(rates);
      }
      clearSelected();
    }
  };

  const getHistorical = async () => {
    if (cache[date]) {
      return cache[date];
    }
    const apiResponse = await fetchRates();
    const ratesResponse = apiResponse.rates;
    cache[date] = ratesResponse;
    return ratesResponse;
  };

  const fetchRates = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url =
      "http://api.exchangeratesapi.io/v1/" + date + "?access_key=" + API_KEY;
    const response = await fetch(url);
    const rates = await response.json();
    return rates;
  };

  const dateValid = () => {
    if (date === "") return false;
    const selectedDate = new Date(date);
    if (selectedDate < minDate || selectedDate > today) return false;
    return true;
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
        <input
          type="Date"
          min={minDate.toISOString().slice(0, 10)}
          max={today.toISOString().slice(0, 10)}
          onChange={(e) => selectDate(e.target.value)}
        ></input>
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
