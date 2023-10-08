import { Add, Delete } from "@mui/icons-material";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import "./RecipeIngredientList.css"

const RecipeIngredientList = ({ name, setValue, control }) => {
  const [ingredients, setIngredients] = useState([
    {
      amount: "",
      name: "",
    },
  ]);

  const addRow = () => () => {
    const newIngredientList = [...ingredients];
    newIngredientList.push({ amount: "", name: "" });
    setIngredients(newIngredientList);
  };

  const deleteRow = (index) => () => {
    const newIngredientList = [...ingredients];
    newIngredientList.splice(index, 1);
    setIngredients(newIngredientList);
  };

  const handleAmount = (amount, index) => () => {
    const newIngredientList = [...ingredients];
    newIngredientList[index].amount = amount.target.value;
    setIngredients(newIngredientList);
    return newIngredientList;
  };

  const handleIngredient = (ingredient, index) => () => {
    const newIngredientList = [...ingredients];
    newIngredientList[index].name = ingredient.target.value;
    setIngredients(newIngredientList);
    return newIngredientList;
  };
  
  useEffect(() => {
    setValue(name, ingredients);
  }, [ingredients])

  return (
    <Controller
      render={({ field: { onChange, ...props } }) => (
        <Container>
          {ingredients.map((ingredient, index) => {
            return (
              <Grid container spacing={2} className="ingredient-grid">
                <Grid item xs={4}>
                  <TextField
                    label="Amount"
                    value={ingredient.amount}
                    key={"Amount" + ingredient.name + index}
                    fullWidth
                    variant="outlined"
                    onChange={(e) => {
                      onChange(handleAmount(e, index));
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Ingredient"
                    value={ingredient.name}
                    key={"Name" + ingredient.name + index}
                    fullWidth
                    variant="outlined"
                    onChange={(e) => {
                      onChange(handleIngredient(e, index));
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    key={index + "delete button"}
                    variant="Contained"
                    onClick={deleteRow(index)}
                    disabled={!(ingredients.length > 1)}
                  >
                    <Delete /> Delete Ingredient
                  </Button>
                </Grid>
              </Grid>
            );
          })}
          <Button variant="contained" onClick={addRow()}>
            <Add /> Add Ingredient
          </Button>
        </Container>
      )}
      name={name}
      control={control}
      onChange={([, data]) => data}
    />
  );
};

export default RecipeIngredientList;
