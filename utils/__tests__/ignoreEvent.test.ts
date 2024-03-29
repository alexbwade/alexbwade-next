import React from "react";
import ignoreEvent from "../ignoreEvent";

describe("ignoreEvent", () => {
  it("prevents default event behavior", () => {
    const mockEvent = { preventDefault: jest.fn() } as unknown as React.SyntheticEvent;

    ignoreEvent(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });
});
