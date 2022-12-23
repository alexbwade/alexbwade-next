import { render, screen } from "@testing-library/react";

import Home from "../Home";

jest.mock("~widgets", () => ({
  Game: global.componentMock("ChessGame"),
}));

describe("<Home />", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Hi there, I'm Alex!");
  });
});
