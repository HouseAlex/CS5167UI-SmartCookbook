import { ExpandMoreRounded, Favorite } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import RecipeModal from "../recipe-modal/RecipeModal";

const RecipeGrid = ({ recipes }) => {
  return (
    <Container>
      <Grid container spacing={2}>
      {recipes.map((val, index) => {
          return (
            <Grid item xs={12}>
              <Accordion key={"accordion" + index}>
                <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                  <Typography>{val.name}</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>{val.description}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {val.tags.map((tag, tagIndex) => {
                        return (
                          <Chip label={tag} color="primary" key={tagIndex} />
                        );
                      })}
                    </Grid>
                    <Grid container item xs={3} spacing={2}>
                      <Grid item>
                        <Typography className="recipe-headers">
                          Servings:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{val.servings}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={3} spacing={2}>
                      <Grid item>
                        <Typography className="recipe-headers">
                          Prep Time:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{val.prepTime}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={3} spacing={2}>
                      <Grid item>
                        <Typography className="recipe-headers">
                          Cook Time:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{val.cookTime}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={3} spacing={2}>
                      <Grid item>
                        <Typography className="recipe-headers">
                          Calories per serving:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{val.calories}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <RecipeModal recipe={val} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default RecipeGrid;
