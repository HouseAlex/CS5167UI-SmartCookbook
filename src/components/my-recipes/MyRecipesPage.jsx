import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import RecipeGrid from "../shared/recipe-grid/RecipeGrid";
import { GetRecipes } from "../../data/SampleData";
import MyRecipeGrid from "../shared/my-recipe-grid/MyRecipeGrid";
import "./MyRecipesPage.css"

function MyRecipesPage() {
  const [recipes, setRecipes] = useState([]);

  const GetFilteredRecipes = () => () => {
    const allRecipes = GetRecipes()
    return allRecipes.filter(x => x.isSaved)
  }

  useEffect(() => {
    setRecipes(GetFilteredRecipes());
  }, [])

  return (
    <Container className="my-recipes-page-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MyRecipeGrid recipes={recipes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyRecipesPage;
