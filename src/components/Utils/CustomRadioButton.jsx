import React from "react";

import { Radio } from "@mui/material";
import "./CustomRadioButton.css";

const CustomRadioButton = ({ value, label, selectedValue, onChange }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <label className="custom-radio">
      <span className="custom-radio-label"> {label}</span>
      <Radio
        value={value}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        className="custom-radio-input"
      />
      <span className="checkmark" />
    </label>
  );
};

export default CustomRadioButton;
