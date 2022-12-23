/* eslint-disable */

declare module globalThis {
  var componentMock: (mockName: string) => (props?: any) => JSX.Element;
}
