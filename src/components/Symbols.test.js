import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Symbols from "./Symbols";

test('Symbols form shows list of symbols', () => {
  
  const update = () => { };

  render(<Symbols value = {{TEST: "Test", TEST2: "Test2"}} onUpdate = {update}/>);
  expect(screen.getByRole('list')).toHaveTextContent("TEST : Test")
  expect(screen.getByRole('list')).toHaveTextContent("TEST2 : Test2")

  // userEvent.click(screen.getByRole('button'))
  // expect(screen.getByRole('listitem')).toHaveTextContent("TEST : Test")

});