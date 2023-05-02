import { useContext } from "react";
import { StoreContext } from "./reducerForBasket/StoreContext";

export const BasketItem = ({ item }) => {
  const { deleteProductFromBasket } = useContext(StoreContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "30px",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        <img src={item.thumbnail} alt="something" style={{ width: "300px" }} />
        <div>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      </div>
      <div>
        <button onClick={() => deleteProductFromBasket(item)}>
          Delete product
        </button>
      </div>
    </>
  );
};
