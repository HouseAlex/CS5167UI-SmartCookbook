import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Typography,
} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";

const FormTags = ({name, setValue, control, tags }) => {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    return newChecked;
  };

  useEffect(() => {
    setValue(name, checked);
  }, [checked]);

  return (
    <Controller
      render={({ field: { onChange, ...props } }) => (
        <Accordion defaultExpanded={true} >
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <Typography>Tags</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {tags.map((value, index) => {
              return (
                <Chip
                  className="tag"
                  name="tagList"
                  variant={checked.includes(value) ? "filled" : "outlined"}
                  label={value}
                  key={index}
                  color={checked.includes(value) ? "primary" : "default"}
                  onClick={(e) => {
                    onChange(handleToggle(value));
                  }}
                />
              );
            })}
          </AccordionDetails>
        </Accordion>
      )}
      name={name}
      control={control}
      defaultValue={[]}
      onChange={([, data]) => data}
    />
  );
};

export default FormTags;
