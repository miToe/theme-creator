import { useState } from "react";
import "./Color.css";
import Form from "../Form/Form";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import ContrastChecker from "../ContrastChecker/ContrastChecker";

export default function Color({ color, onDelete, onUpdateColor }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [editMode, setEditMode] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateColor = (updatedColor) => {
    onUpdateColor(color.id, updatedColor);
    setEditMode(false);
  };

  const handleConfirmationDelete = () => {
    onDelete(color.id);
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>{" "}
      <CopyToClipboard hex={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ContrastChecker hex={color.hex} contrastText={color.contrastText} />
      {showConfirmation ? (
        <div>
          <p className="color-card-headline">
            Are you sure you want to delete?
          </p>
          <button onClick={handleConfirmationDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      ) : (
        <>
          <button onClick={handleDeleteClick}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
      {editMode && (
        <>
          <Form
            onAddColor={handleUpdateColor}
            defaultName={color.role}
            defaultMainColor={color.hex}
            defaultContrastColor={color.contrastText}
            buttonText="Update Color"
          />

          {editMode && <button onClick={handleCancelEdit}>Cancel Edit</button>}
        </>
      )}
      <CopyToClipboard hex={color.hex} />
    </div>
  );
}
