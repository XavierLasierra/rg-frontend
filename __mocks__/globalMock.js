jest.mock("global", () => ({
  ...global,
  WebSocket: () => undefined,
}));
