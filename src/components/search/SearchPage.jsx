import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./SearchPage.css";
import FormTags from "../shared/form-tags/FormTags";
import FormTextBox from "../shared/form-textbox/FormTextBox";
import { GetRecipes, GetTags } from "../../data/SampleData";
import RecipeGrid from "../shared/recipe-grid/RecipeGrid";
import { Favorite } from "@mui/icons-material";
import { Container, Button } from "@mui/material";

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
    console.log(data);
  };

  return (
    <Container>
      <Container>
        <FormTextBox name="searchValue" control={control} label="Search" />
        <FormTags
          name="tagValues"
          setValue={setValue}
          control={control}
          tags={tags}
        />
        <Button onClick={handleSubmit(onSubmit)} variant="Contained">
          Search
        </Button>
      </Container>
      <Container>
        <RecipeGrid recipes={recipes} />
      </Container>
    </Container>
  );
}

export default SearchPage;
