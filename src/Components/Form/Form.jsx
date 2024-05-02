import { useState } from "react";
import { uid } from "uid";
import Input from "./Input";
import "./Form.css";
function Form({
  onAddColor,
  defaultName,
  defaultMainColor,
  defaultContrastColor,
  buttonText,
}) {
  const startMainColor = "#075a07";
  const startContrastColor = "#ffffff";
  const exampleText = "Funky Rainbow Fiesta";
  // const [name, setName] = useState(exampleText);
  // const [mainColor, setMainColor] = useState(startMainColor);
  // const [contrastColor, setContrastColor] = useState(startContrastColor);

  const [name, setName] = useState(defaultName || exampleText);
  const [mainColor, setMainColor] = useState(
    defaultMainColor || startMainColor
  );
  const [contrastColor, setContrastColor] = useState(
    defaultContrastColor || startContrastColor
  );

  const handleMainColorChange = (color) => {
    setMainColor(color);
  };

  const handleContrastColorChange = (color) => {
    setContrastColor(color);
  };

  const handleFocus = (setState, initialValue) => {
    setState(initialValue);
  };

  const addColor = (event) => {
    event.preventDefault();
    const newColor = {
      id: uid(),
      role: name,
      hex: mainColor,
      contrastText: contrastColor,
    };
    onAddColor(newColor);
    setName(exampleText);
    setMainColor(startMainColor);
    setContrastColor(startContrastColor);
  };

  return (
    <div
      className="colorForm"
      style={{
        background: mainColor,
      }}
    >
      <form onSubmit={addColor}>
        <label
          htmlFor="name"
          style={{
            color: contrastColor,
          }}
        >
          Role:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => handleFocus(setName, "")}
        />
        <Input
          label="Main Color (Hex)"
          color={mainColor}
          setColor={handleMainColorChange}
          labelColor={contrastColor}
          onFocus={() => handleFocus(startMainColor, "")}
        />
        <Input
          label="Contrast Color (Hex)"
          color={contrastColor}
          labelColor={contrastColor}
          setColor={handleContrastColorChange}
          onFocus={() => handleFocus(startContrastColor, "")}
        />
        <button type="submit">{buttonText || "Add Color"}</button>
      </form>
      <div
        style={{
          color: contrastColor,
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default Form;
