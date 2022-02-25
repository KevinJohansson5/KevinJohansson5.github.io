import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SymbolsInput from "./SymbolsInput";

test('', () => {

  const update = () => { };

  render(<SymbolsInput symbols = {{TEST: "Test"}} selectedSymbols = {[]}
  addSymbol={update}/>);
  // expect(screen.getByRole('listitem')).toHaveTextContent("TEST : Test")

  
  // userEvent.click(screen.getByRole('button'))
  // expect(screen.getByRole('listitem')).toHaveTextContent("TEST : Test")

});