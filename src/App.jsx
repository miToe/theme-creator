import Form from "./Components/Form/Form";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const handleUpdateColor = (colorId, updatedColor) => {
    setColors(
      colors.map((color) => (color.id === colorId ? updatedColor : color))
    );
  };

  const handleDeleteColor = (colorId) => {
    const updateColors = colors.filter((color) => color.id !== colorId);
    setColors(updateColors);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <Form onAddColor={addColor} />

      {colors.length === 0 ? (
        <p>No colors... start by adding one!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onUpdateColor={handleUpdateColor}
          />
        ))
      )}
    </>
  );
}

export default App;
