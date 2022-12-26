import { render, screen } from "@testing-library/react";

import ExampleModule from "../ExampleModule";

describe("<Home />", () => {
  beforeEach(() => {
    render(<ExampleModule />);
  });

  it("renders heading", () => {
    expect(screen.getAllByRole("heading")[0]).toHaveTextContent("Hello world!");
  });
});
