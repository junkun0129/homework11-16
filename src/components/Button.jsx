import React from "react";

export default function Button(props) {
  return (
    <button className="Button" disabled={props.isDisabled} onClick={() => props.onClick(props.label)}>
      <div className="Button__Label">{props.label}</div>
    </button>
  );
}
