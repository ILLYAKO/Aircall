import React from 'react'
import "./style.css";

const CallProperty = ({keyTag, valueTag}) => {
    return (
      <div className="row">
        <div className="col-4 text-start">{keyTag}:</div>
        <div className="col-8 text-start">{valueTag}</div>
      </div>
    );
}

export default CallProperty
