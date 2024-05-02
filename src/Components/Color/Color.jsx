import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationDelete = () => {
    onDelete(color.id);
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {showConfirmation ? (
        <div>
          <p className="color-card-headline">
            Are you sure you want to delete?
          </p>
          <button onClick={handleConfirmationDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      ) : (
        <button onClick={handleDeleteClick}>Delete</button>
      )}
    </div>
  );
}
