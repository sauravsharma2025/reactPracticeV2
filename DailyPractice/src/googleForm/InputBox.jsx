const InputBoxOut = ({
  name,
  value,
  onChange,
  placeholder,
  type,
  onKeyDown,
}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
      type={type}
      onKeyDown={onKeyDown}
    />
  );
};

InputBoxOut.defaultProps = {
  type: "text",
  placeholder: "Enter text here!",
};

export default InputBoxOut;
