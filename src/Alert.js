import React from "react";

const Alert = ({ message, onClose }) => {
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={onClose}>OK</button>
    </div>
  );
};

export default Alert;
