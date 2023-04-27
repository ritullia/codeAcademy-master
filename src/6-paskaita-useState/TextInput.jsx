import { useState } from "react";

export const TextInput = () => {
        // "Asta raso kazka"
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ margin: "50px" }}>
      <input value={text} onChange={handleChange} />
      <p>As parasiau: {text}</p>
      <button onClick={() => setText("")}>Reset</button>
    </div>
  );
};
