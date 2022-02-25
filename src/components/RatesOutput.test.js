import { render, screen } from "@testing-library/react";
import RatesOutput from "./RatesOutput";

test('List shows given rates in (symbol) : (rate) format', () => {

  render(<RatesOutput list = {{TEST: 1.5, TEST2: 0.3}}/>);
  expect(screen.getByRole('list')).toHaveTextContent("TEST : 1.5")
  expect(screen.getByRole('list')).toHaveTextContent("TEST2 : 0.3")

});