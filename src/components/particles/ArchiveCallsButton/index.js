import React from "react";
import "./style.css";

const ArchiveCallsButton = ({ archiveCalls }) => {
  const onClickHandler = () => {
    archiveCalls();
  };

  return (
    <div
      className="bg-light align-self-center border text-center w-75 mt-3 p-3 archive-btn"
      onClick={() => onClickHandler()}
    >
      Archive All Calls
    </div>
  );
};

export default ArchiveCallsButton;
