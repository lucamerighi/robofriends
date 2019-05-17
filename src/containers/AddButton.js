import React from "react";

const AddButton = ({ handleClick }) => {
  return (
    <button
      className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dark-blue"
      onClick={handleClick}
    >
      Add Robot
    </button>
  );
};

export default AddButton;
