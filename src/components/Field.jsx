import React from "react";

export default function Field({ label, type, onChange, value, hint }) {
  return (
    <div className="Field">
      <div className="Field__Label">{label}</div>
      <input className="Field__Input" name={label} onChange={onChange} value={value} type={type} />
      {!!hint && (
        <div className="Field__HelperMessage">{hint}</div>
      )}
    </div>
  );
}
