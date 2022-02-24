import MockAdapter from "axios-mock-adapter";
import { create } from "../../services/Api";
import { userStore as store } from "./UserStore";

jest.mock("aws-amplify");

const api = create();

describe("UserStore", () => {
  let apiMock: MockAdapter;
  beforeEach(() => {
    apiMock = new MockAdapter(api);
  });

  afterEach(() => {
    apiMock.restore();
    jest.restoreAllMocks();
  });

  it("creates store", () => {
    expect(store.hydrated).toBeDefined();
    expect(store.loading).toBeDefined();
    expect(store.email).toBe(null);
    expect(store.cognitoUser).toBe(null);
    expect(store.userDetails).toBe(null);
  });

  it("return false on isLoggedIn when there is no session active", () => {
    expect(store.isLoggedIn).toBe(false);
  });
});
