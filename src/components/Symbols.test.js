import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Symbols from "./Symbols";

test('Symbols form shows list of symbols and the button calls the given function', () => {
  
  let i = 0
  const func = () => {
    i = 1
  };

  render(<Symbols value = {{TEST: "Test", TEST2: "Test2"}} onUpdate = {func}/>);
  expect(screen.getByRole('list')).toHaveTextContent("TEST : Test")
  expect(screen.getByRole('list')).toHaveTextContent("TEST2 : Test2")

  userEvent.click(screen.getByRole('button'))
  expect(i==1)
});