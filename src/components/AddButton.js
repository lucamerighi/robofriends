import React from "react";

const AddButton = ({ callback }) => {
  return (
    <a
      className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue"
      href="#0"
      onClick={callback}
    >
      Add Robot
    </a>
  );
};

export default AddButton;
