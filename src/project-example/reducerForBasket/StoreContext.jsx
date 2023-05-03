import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";

export const StoreContext = createContext();

const StoreWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // funkcija kuri prideda produkta i krepseli
  const addToBasket = (product) => {
    // state.products = []
    dispatch({
      type: "add",
      payload: product,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "deleteProduct",
      payload: id,
    });
  };

  return (
    <StoreContext.Provider
      value={{
        total: state.total,
        products: state.products,
        addToBasket,
        removeItem,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreWrapper;
