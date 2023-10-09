import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./SearchPage.css";
import FormTags from "../shared/form-tags/FormTags";
import FormTextBox from "../shared/form-textbox/FormTextBox";
import { GetRecipes, GetTags } from "../../data/SampleData";
import RecipeGrid from "../shared/recipe-grid/RecipeGrid";
import { Favorite, Search } from "@mui/icons-material";
import { Container, Button, Grid } from "@mui/material";

const defaultValues = {
  searchValue: "",
  tagValues: [],
};

function SearchPage() {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
  });
  const [tags, setTags] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setTags(GetTags());
    setRecipes(GetRecipes());
  }, []);

  const onSubmit = (data) => {
    var unfilteredRecipes = GetRecipes();
    if ((data.searchValue === null || data.searchValue === "") && data.tagValues.length == 0) {
      setRecipes(unfilteredRecipes);
    }
    else {
      var search = data.searchValue.toLowerCase();
      if (search === "") {
        search = null;
      }

      var filtered = unfilteredRecipes.filter(x => {
        return (
          x.name.toLowerCase().includes(search) 
          || x.description.toLowerCase().includes(search) 
          || (data.tagValues.length > 0 && data.tagValues.every(y => x.tags.includes(y)))
      )})
      setRecipes(filtered);
    }
  };

  return (
    <Container className="search-page-container">
      <Grid container spacing={2}>
        <Grid item xs>
          <FormTextBox name="searchValue" control={control} label="Search" />
        </Grid>
        <Grid item xs={1.5}>
          <Button
            className="search-button"
            onClick={handleSubmit(onSubmit)}
            variant="contained"
          >
            <Search /> Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <FormTags
            name="tagValues"
            setValue={setValue}
            control={control}
            tags={tags}
          />
        </Grid>
        <Grid item xs={12}>
          <RecipeGrid recipes={recipes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchPage;
