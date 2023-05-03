export const initialState = {
  total: 0,
  products: [],
};

const updateTotalPrice = (products) => {
  let total = 0;
  products.forEach((product) => {
    total += Number(product.price);
  });
  return total;
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      const updatedProductsAfterAdd = [...state.products, action.payload];
      return {
        total: updateTotalPrice(updatedProductsAfterAdd),
        products: updatedProductsAfterAdd,
      };

    case "deleteProduct":
      const updatedProductsAfterDelete = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        total: updateTotalPrice(updatedProductsAfterDelete),
        products: updatedProductsAfterDelete,
      };

    default:
      throw Error("Cannot match case in storeReducer" + action.type);
  }
};

export default storeReducer;
