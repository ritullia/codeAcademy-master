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
    updateTotalPriceAfter(updatedBasket);

    dispatch({
      type: "add",
      payload: updatedBasket,
    });
  };

  //remove product function

  const deleteProductFromBasket = (product) => {
    // console.log("cia ", product);
    const someProducts = state.products.filter(
      (currentProduct) => product.id !== currentProduct.id
    );

    dispatch({
      type: "deleteProduct",
      payload: someProducts,
    });
  };

  const updateTotalPrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += Number(product.price);
    });

    dispatch({
      type: "updatePrice",
      payload: total,
    });
  };
  const updateTotalPriceAfter = (products) => {
    let updateTotal = state.total;
    console.log(state.total);
    products.forEach((product) => {
      updateTotal -= Number(product.price);
    });

    dispatch({
      type: "updateNewPrice",
      payload: updateTotal,
    });
  };

  return (
    <StoreContext.Provider
      value={{
        total: state.total,
        products: state.products,
        addToBasket,
        deleteProductFromBasket,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreWrapper;
