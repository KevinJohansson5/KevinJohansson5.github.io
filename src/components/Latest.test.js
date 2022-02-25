import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Latest from "./Latest";

test('', async () => {

  render(<Latest symbols = {{TEST: "Test"}} />);
  // expect(screen.getByRole('listitem')).toHaveTextContent("TEST : Test")

  
  // userEvent.click(screen.getByRole('button'))
  // expect(screen.findByRole('listitem')).toHaveTextContent("TEST : Test")

});