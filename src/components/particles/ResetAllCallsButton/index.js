import React from "react";
import "./style.css";


const ResetAllCallsButton = ({ resetCalls }) => {
  const onClickHandler = () => {
    resetCalls();
  };

  return (
    <div
      className="bg-light align-self-center border text-center w-75 mt-3 p-3 reset-btn"
      onClick={() => onClickHandler()}
    >
      Reset All Calls
    </div>
  );
};

export default ResetAllCallsButton;
