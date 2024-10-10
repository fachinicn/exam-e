import React from "react";

const Checkbox = ({ value, title }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="form-checkbox text-black"
        value={value}
      />
      <span>{title}</span>
    </div>
  );
};

export default Checkbox;
