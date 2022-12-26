import { render, screen } from "@testing-library/react";

import ExampleWidget from "../ExampleWidget";

describe("<Home />", () => {
  beforeEach(() => {
    render(<ExampleWidget />);
  });

  it("renders heading", () => {
    expect(screen.getAllByRole("heading")[0]).toHaveTextContent("Hello world!");
  });
});
