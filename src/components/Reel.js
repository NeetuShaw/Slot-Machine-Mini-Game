import React from "react";

const Reel = ({ value, isSpinning }) => {
  return (
    <div className={`reel ${isSpinning ? "spinning" : ""}`}>
      {value}
    </div>
  );
};

export default Reel;
