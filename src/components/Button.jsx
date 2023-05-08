import { useState } from "react";

export const Button = ({ onClick, children }) => {
  // const [click, setClick] = useState(false);

  return (
    <>
      <button
        style={{
          backgroundColor: "pink",
          borderRadius: "10px",
          width: "180px",
          border: "1px solid ",
          height: "40px",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
