import { MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import "./FormDropDown.css"

const FormDropDown = ({ name, control, options }) => {
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <Select className="dropdown" onChange={onChange} value={value}>
          {options.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      )}
      name={name}
      control={control}
    />
  );
};

export default FormDropDown;
