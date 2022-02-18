import { createContext } from "react";
import { IUserStore, userStore } from "./user/UserStore";

export interface Stores {
  user: IUserStore;
}

export const stores: Stores = {
  user: userStore,
};

export const StoreContext = createContext({
  ...stores,
});

export const StoresProvider = StoreContext.Provider;
