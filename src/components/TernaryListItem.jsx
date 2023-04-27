export const SupakuotasArNe = ({ name, isPacked }) => {

    return (
        <li> 
            {isPacked ? name + '✔' : name + '❌'}
        </li>
    )
}

export const Svarbumas = ({ name, importance, isPacked }) => {
  // Variantas su if.. else
  // if (importance > 0) {
  //     if (isPacked) {
  //         return <li>{name} <b>Svarbumas: {importance}</b> ✔</li>
  //     } else {
  //         return <li>{name} <b>Svarbumas: {importance}</b> ❌</li>
  //     }
  // } else {
  //     if (isPacked) {
  //         return <li>{name} ✔</li>
  //     } else {
  //         return <li>{name} ❌</li>
  //     }
  // }

  return (
    <li>
      {name} {importance > 0 ? <b>Svarbumas: {importance}</b> : ""}
      {isPacked ? "✔" : "❌"}
    </li>
  );
};

