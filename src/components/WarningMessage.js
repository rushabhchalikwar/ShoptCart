import React from "react";

const WarningMessage = (props) => {
  return (
    <div className="ui warning message">
      <i className="close icon"></i>
      <div className="header">{props.header}</div>
      {props.description}
    </div>
  );
};

export default WarningMessage;
