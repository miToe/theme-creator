import { useState } from "react";
import { uid } from "uid";
import Input from "./Input";
function Form({ onAddColor }) {
  const [name, setName] = useState("e.g. Funky Rainbow Fiesta");
  const [mainColor, setMainColor] = useState("#075a07");
  const [contrastColor, setContrastColor] = useState("#ffffff");

  const handleMainColorChange = (color) => {
    setMainColor(color);
  };

  const handleContrastColorChange = (color) => {
    setContrastColor(color);
  };

  const addColor = (event) => {
    event.preventDefault();
    const newColor = {
      id: uid(), // Generiere eine eindeutige ID
      role: name,
      hex: mainColor,
      contrastText: contrastColor,
    };
    onAddColor(newColor);
    setName("");
    setMainColor("");
    setContrastColor("");
  };

  return (
    <div>
      <form onSubmit={addColor}>
        <label htmlFor="name">Role:</label>
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        {/* <input
          type="text"
          id="mainColor"
          value={mainColor}
          onChange={(e) => setMainColor(e.target.value)}
        />
        <input
          type="color"
          value={mainColor}
          onChange={(e) => setMainColor(e.target.value)}
        /> */}
        <Input
          label="Main Color (Hex)"
          color={mainColor}
          setColor={handleMainColorChange}
        />
        <br />
        <Input
          label="Contrast Color (Hex)"
          color={contrastColor}
          setColor={handleContrastColorChange}
        />
        {/* <br />
        <br /> */}

        {/* <label htmlFor="contrastColor">Contrast Color (Hex):</label>
        <br />
        <input
          type="text"
          id="contrastColor"
          value={contrastColor}
          onChange={(e) => setContrastColor(e.target.value)}
        />
        <input
          type="color"
          value={contrastColor}
          onChange={(e) => setContrastColor(e.target.value)}
        />
        <br />
        <br /> */}

        <button type="submit">Farbe hinzufügen</button>
      </form>
    </div>
  );
}

export default Form;
