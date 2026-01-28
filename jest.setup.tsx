import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";

global.componentMock = (mockName: string) => {
  return (props: any = {}) => <div data-testid={mockName}>{props.children}</div>;
};

// Fail on prop type errors
const originalConsoleError = global.console.error;

beforeEach(() => {
  global.console.error = (...args) => {
    const propTypeFailures = /\sprop\s/g.test(args.join(" "));

    if (propTypeFailures) {
      throw new Error(`Failed prop type: ${args[2]}`);
    }

    originalConsoleError(...args);
  };
});

afterEach(() => {
  global.console.error = originalConsoleError;
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line
    return <img {...props} />;
  },
}));
