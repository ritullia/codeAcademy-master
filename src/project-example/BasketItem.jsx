import { useCallback, useContext } from "react";
import { StoreContext } from "./reducerForBasket/StoreContext";
import {
  CartContainer,
  CartImage,
  CartImageContainer,
} from "./styles/StyledCart";

export const BasketItem = ({ item }) => {
  const { removeItem } = useContext(StoreContext);

  const handleRemoveItem = useCallback(() => {
    removeItem(item.id);
  }, [removeItem, item.id]);

  return (
    <CartContainer>
      <CartImageContainer>
        <CartImage
          src={item.thumbnail}
          alt="something"
          style={{ width: "300px" }}
        />
      </CartImageContainer>
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
      <div>
        <button onClick={handleRemoveItem}>Remove item</button>
      </div>
    </CartContainer>
  );
};
