import { createContext } from "react";
import { userStore } from "./user/UserStore";

export const stores = {
  user: userStore,
};

export const StoreContext = createContext({
  ...stores,
});

export const StoresProvider = StoreContext.Provider;
