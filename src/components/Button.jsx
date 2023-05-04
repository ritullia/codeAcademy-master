import { useState } from "react";

export const Button = ({ onClick, text }) => {
  const [click, setClick] = useState(false);

  const handleOnClick = () => {
    setClick(text);
  };

  return (
    <>
      <button
        style={{
          backgroundColor: "pink",
          borderRadius: "10px",
          width: "180px",
          border: "1px solid ",
        }}
        onClick={handleOnClick}
      >
        {text}
        {click}
      </button>
    </>
  );
};
