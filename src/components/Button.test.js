import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test('Button component calls the function passed to it', () => {
  
  let i = 0
  const func = () => {
    i = 1
  };

  render(<Button text = {"Test"} func = {func}/>);

  userEvent.click(screen.getByRole('button'))
  expect(i==1)
});