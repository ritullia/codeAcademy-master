export const Receptas = ({ receptas }) => {
  const { name, ingredients } = receptas;

  return (
    <div>
      <h2>{name}</h2>
      <ul>{ingredients.map(ingredient => <li>{ingredient}</li>)}</ul>
    </div>
  );
};
