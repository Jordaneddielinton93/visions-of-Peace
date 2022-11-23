import { createContext, useReducer } from "react";
import basketReducer, { initialState } from "../reducers/basketReducer";

export interface IBasketWrapperProps {
  children: React.ReactNode;
}

export let BasketContextWrapper = createContext<any>([]);

export default function BasketWrapper({ children }: IBasketWrapperProps) {
  let [basket, setBasket] = useReducer<any>(basketReducer, initialState);

  return (
    <BasketContextWrapper.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContextWrapper.Provider>
  );
}
