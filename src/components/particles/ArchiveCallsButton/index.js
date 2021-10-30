import React from "react";
import "./style.css"


const ArchiveCallsButton = ({ archiveCalls }) => {
  const onClickHandler = () => {
    archiveCalls()
  };

  return (
    <div
      className="bg-light align-self-center border border-1 border-top-0 border-light rounded-bottom text-center w-75 p-3 archive-btn"
     
      onClick={() => onClickHandler()}
    >
      Archive All Calls
    </div>
  );
};

export default ArchiveCallsButton;
