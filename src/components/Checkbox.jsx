import React from "react";

const Checkbox = ({ name, value, title }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="form-checkbox text-black"
        name="exame-sangue"
        value={value}
      />
      <span>{title}</span>
    </div>
  );
};

export default Checkbox;
