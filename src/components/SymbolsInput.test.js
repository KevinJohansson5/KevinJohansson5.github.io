import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SymbolsInput from "./SymbolsInput";

test('Combobox contains options corresponding to the given list and selecting an option triggers the given function', () => {

  let i = 0
  const func = () => {
    i = 1
  };

  render(<SymbolsInput symbols = {{TEST: 'Test'}} selectedSymbols = {[]}
  addSymbol={func}/>);
  expect(screen.getByRole('combobox')).toHaveTextContent('TEST')

  userEvent.click(screen.getByText("TEST"))
  expect(i==1)

});