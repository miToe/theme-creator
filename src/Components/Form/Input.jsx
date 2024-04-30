function Input({ label, color, setColor, labelColor }) {
  return (
    <>
      <label htmlFor={label} style={{ color: labelColor }}>
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </>
  );
}

export default Input;
