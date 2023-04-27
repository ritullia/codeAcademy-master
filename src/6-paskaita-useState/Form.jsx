import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const onAdd = () => {
    setAge(age + 1);
  }

  const onSubstract = () => {
    setAge(age - 1);
  }

  const onReset = () => {
    setName("");
    setAge(0);
  }

  return (
    <div style={{ margin: "50px" }}>
      <input value={name} onChange={handleChange} />
      <div>
        <button onClick={onAdd} >Padidinti amziu</button>
        <button onClick={onSubstract}>Pamazinti amziu</button>
      </div>
      <p>
        Labas, {name}. Tau yra {age}
      </p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
