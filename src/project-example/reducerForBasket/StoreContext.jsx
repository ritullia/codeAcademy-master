import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";

export const StoreContext = createContext();

const StoreWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // funkcija kuri prideda produkta i krepseli

  const addToBasket = (product) => {
    // state.products = []

    const updatedBasket = state.products; // array i kuri pridedam
    updatedBasket.push(product);
    //updatetBasket = [{product}]

    updateTotalPrice(updatedBasket);

    dispatch({
      type: "add",
      payload: updatedBasket,
    });
  };

  const updateTotalPrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: "updatePrice",
      payload: total,
    });
  };

  return (
    <StoreContext.Provider
      value={{ total: state.total, products: state.products, addToBasket }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreWrapper;
