export const Input = ({ onChange }) => {
  const greetings = "some text";
  return (
    <>
      <label htmlFor="input">Default label</label>
      <input id="input" onChange={onChange}>
        {greetings}
      </input>
    </>
  );
};
