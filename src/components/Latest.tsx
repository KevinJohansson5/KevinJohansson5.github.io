import { useState } from "react";
import { RatesList } from "./RatesList";
import { SymbolsList } from "./SymbolsList";
import SymbolsInput from "./SymbolsInput";
import RatesOutput from "./RatesOutput";
import Button from "./Button";

const Latest = ({ symbols }: { symbols: SymbolsList }) => {
  const [selectedSymbols, setSelected] = useState<string[]>([]);
  const [latestVal, setLatest] = useState<RatesList>({});
  const [cache, setCache] = useState<RatesList>({});

  const addSymbol = (selected: string) => {
    !selectedSymbols.includes(selected) &&
      selected &&
      setSelected([...selectedSymbols, selected]);
  };

  const updateLatest = async () => {
    const rates: RatesList = await getLatest();
    if (selectedSymbols.length > 0) {
      const output: RatesList = {};
      selectedSymbols.map((symbol) => (output[symbol] = rates[symbol]));
      setLatest(output);
    } else {
      setLatest(rates);
    }
    clearSelected();
  };

  const getLatest = async () => {
    if (Object.keys(cache).length !== 0) {
      return cache;
    }
    const apiResponse = await fetchRates();
    const ratesResponse = apiResponse.rates;
    setCache(ratesResponse);
    return ratesResponse;
  };

  const fetchRates = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url =
      "http://api.exchangeratesapi.io/v1/latest?access_key=" + API_KEY;
    const response = await fetch(url);
    return response.json();
  };

  const clearSelected = () => {
    setSelected([]);
  };

  return (
    <div>
      <h2>Latest Rates</h2>
      <SymbolsInput
        symbols={symbols}
        selectedSymbols={selectedSymbols}
        addSymbol={addSymbol}
      />
      <br></br>
      <Button text="Get Rates" func={updateLatest}></Button>
      <RatesOutput list={latestVal}></RatesOutput>
    </div>
  );
};

export default Latest;
