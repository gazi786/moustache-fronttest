import React from "react";

import { Radio } from "@mui/material";
import "./CustomRadioButton.css";

const CustomRadioButton = ({ value, label, selectedValue, onChange }) => {
  return (
    <label className="custom-radio">
      <Radio
        value={value}
        checked={selectedValue === value}
        onChange={onChange}
        className="custom-radio-input"
      />
      <span className="custom-radio-label">{label}</span>
    </label>
  );
};

export default CustomRadioButton;
