import { useContext } from "react";
import { StoreContext } from "../stores";

export const useStores = () => useContext(StoreContext);
