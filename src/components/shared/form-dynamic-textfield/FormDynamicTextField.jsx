import { Container, Grid, TextareaAutosize, Button } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import "./FormDynamicTextField.css";

const FormDynamicTextField = ({ name, setValue, control }) => {
  const [fields, setFields] = useState([""]);

  const addRow = () => () => {
    const newFieldsList = [...fields];
    newFieldsList.push("");
    setFields(newFieldsList);
  };

  const deleteRow = (index) => () => {
    const newFieldsList = [...fields];
    newFieldsList.splice(index, 1);
    setFields(newFieldsList);
  };

  const handleChange = (field, index) => () => {
    const newFieldsList = [...fields];
    newFieldsList[index] = field.target.value;
    setFields(newFieldsList);
    return newFieldsList;
  };

  useEffect(() => {
    setValue(name, fields);
  }, [fields]);

  return (
    <Controller
      render={({ field: { onChance, ...props } }) => (
        <Container>
          {fields.map((field, index) => {
            return (
              <Grid container spacing={2} className="text-field-grid">
                <Grid item xs={8}>
                  <TextareaAutosize
                    className="textarea"
                    key={name + index}
                    value={field}
                    minRows={3}
                    onChange={(e) => {
                      onChange(handleChange(e, index));
                    }}
                    placeholder={"Step " + (index + 1)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    key={name + index + "delete button"}
                    variant="Contained"
                    onClick={deleteRow(index)}
                    disabled={!(fields.length > 1)}
                  >
                    <Delete /> Delete Step
                  </Button>
                </Grid>
              </Grid>
            );
          })}
          <Button variant="contained" onClick={addRow()}>
            <Add /> Add Step
          </Button>
        </Container>
      )}
      name={name}
      control={control}
      onChange={([, data]) => data}
    />
  );
};

export default FormDynamicTextField;
