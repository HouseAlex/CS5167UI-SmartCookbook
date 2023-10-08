import { Container, Grid, Typography, Button } from "@mui/material";
import FormTextBox from "../shared/form-textbox/FormTextBox";
import { GetHours, GetMinutes, GetTags } from "../../data/SampleData";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import FormDropDown from "../shared/form-dropdown/FormDropDown";
import "./NewRecipePage.css";
import FormNumberTextBox from "../shared/form-number-textbox/FormNumberTextBox";
import RecipeIngredientList from "../shared/recipe-ingredient-list/RecipeIngredientList";
import FormDynamicTextField from "../shared/form-dynamic-textfield/FormDynamicTextField";
import FormTags from "../shared/form-tags/FormTags";

const defaultValues = {
  caloriesValue: "",
  cookTimeHourValue: "",
  cookTimeMinuteValue: "",
  directionValues: "",
  prepTimeHourValue: "",
  prepTimeMinuteValue: "",
  recipeNameValue: "",
  servingsValues: "",
  tagValues: [],
  ingredientsValues: [],
};

function NewRecipePage() {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
  });
  const [tags, setTags] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [hours, setHours] = useState([]);

  useEffect(() => {
    setTags(GetTags());
    setMinutes(GetMinutes());
    setHours(GetHours());
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="new-recipe-page-contained">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextBox
            name="recipeNameValue"
            control={control}
            label="Recipe Name"
          />
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <Grid item xs={12}>
            <Typography className="grid-header">Cook Time:</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormDropDown
              name="cookTimeHourValue"
              control={control}
              options={hours}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography className="time-header"> Hours</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormDropDown
              name="cookTimeMinuteValue"
              control={control}
              options={minutes}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography className="time-header"> Minutes</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <Grid item xs={12}>
            <Typography className="grid-header">Prep Time:</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormDropDown
              name="prepTimeHourValue"
              control={control}
              options={hours}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography className="time-header"> Hours</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormDropDown
              name="prepTimeMinuteValue"
              control={control}
              options={minutes}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography className="time-header"> Minutes</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <FormNumberTextBox
            name="servingsValue"
            control={control}
            label="Servings"
          />
        </Grid>
        <Grid item xs={6}>
          <FormNumberTextBox
            name="caloriesValue"
            control={control}
            label="Calories (per serving)"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Ingredients</Typography>
        </Grid>
        <Grid item xs={12}>
          <RecipeIngredientList
            name="ingredientsValues"
            setValue={setValue}
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Directions</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormDynamicTextField
            name="directionValues"
            setValue={setValue}
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTags
            name="tagValues"
            setValue={setValue}
            control={control}
            tags={tags}/>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            Create
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewRecipePage;
