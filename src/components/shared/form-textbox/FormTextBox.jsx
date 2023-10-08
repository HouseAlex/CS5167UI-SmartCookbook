import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";

const FormTextBox = ({ name, control, label }) => {
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <TextField
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

export default FormTextBox;