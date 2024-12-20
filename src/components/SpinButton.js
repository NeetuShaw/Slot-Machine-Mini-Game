import React from "react";
import "../styles/slotMachine.css";

const SpinButton = ({ onClick, isSpinning, balance }) => {
  return (
    <button
      className="spin-button"
      onClick={onClick}
      disabled={isSpinning || balance <= 0}
    >
      {isSpinning ? "Spinning..." : "Spin"}
    </button>
  );
};

export default SpinButton;
