function InputRadio({ name, value, classN }) {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      className={`input-radio ${classN}`}
    />
  );
}
export default InputRadio;
