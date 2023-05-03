import { useContext, useMemo } from "react";
import { StoreContext } from "./reducerForBasket/StoreContext";
import { BasketItem } from "./BasketItem";

export const Basket = () => {
  const { total, products } = useContext(StoreContext);

  const mappedProducts = useMemo(() => {
    return products.map((product) => (
      <BasketItem key={product.id} item={product} />
    ));
  }, [products]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        <h3>Your basket:</h3>
        <p>Total: &euro; {total}</p>
      </div>
      <div>{mappedProducts}</div>
    </>
  );
};
