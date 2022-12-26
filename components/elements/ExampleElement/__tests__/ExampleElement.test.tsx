import { render, screen } from "@testing-library/react";

import ExampleElement from "../ExampleElement";

describe("<Home />", () => {
  beforeEach(() => {
    render(<ExampleElement />);
  });

  it("renders heading", () => {
    expect(screen.getAllByRole("heading")[0]).toHaveTextContent("Hello world!");
  });
});
