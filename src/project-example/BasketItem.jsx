export const BasketItem = ({ item }) => {
  return (
    <>
      <div>
        <img src={item.thumbnail} alt="something" />
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
    </>
  );
};
