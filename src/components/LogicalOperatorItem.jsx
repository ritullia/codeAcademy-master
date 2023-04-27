export const LogicalOperatorItem = ({ productName, isBought }) => {
  
    return (
        <li>
            {productName} {isBought && "+"}
        </li>
    )
}

export const LogicalOrOperatorItem = ({ productName }) => {
  return (
    <li>
      {productName === "Kiausiniai" || productName === "Pienas"
        ? "Pieno produktai"
        : "Kiti produktai"}
    </li>
  );
};