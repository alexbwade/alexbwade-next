import { render, screen } from "@testing-library/react";

import ExamplePartial from "../ExamplePartial";

describe("<Home />", () => {
  beforeEach(() => {
    render(<ExamplePartial />);
  });

  it("renders heading", () => {
    expect(screen.getAllByRole("heading")[0]).toHaveTextContent("Hello world!");
  });
});
