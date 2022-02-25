import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Historical from "./Historical";

test('', () => {
  

  render(<Historical symbols = {{TEST: 1.1, TEST2: 'Test2'}}/>);

  // expect(screen.getByRole('listitem')).toHaveTextContent("TEST : Test")

});