import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import "./FormNumberTextBox.css";

const FormNumberTextBox = ({ name, control, label }) => {
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <TextField
          type="number"
          value={value}
          onChange={onChange}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};

export default FormNumberTextBox;
