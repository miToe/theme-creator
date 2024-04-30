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
  console.log(addColor);
  return (
    <>
      <h1>Theme Creator</h1>
      <Form onAddColor={addColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
