import { ExpandMoreRounded, Favorite } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import RecipeModal from "../recipe-modal/RecipeModal";

const RecipeGrid = ({ recipes }) => {
  return (
    <div>
      {recipes.map((val, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreRounded />}>
              <Typography>{val.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Container>
                {val.tags.map((tag, tagIndex) => {
                  return <Chip label={tag} color="primary" key={tagIndex} />;
                })}
              </Container>
              <Container>
                <Typography>Servings: {val.servings}</Typography>
                <Typography>Prep Time: {val.prepTime}</Typography>
                <Typography>Cook Time: {val.cookTime}</Typography>
                <Typography>Calories per serving: {val.calories}</Typography>
              </Container>
              <RecipeModal recipe={val} />

              <Button variant="contained">
                <Favorite /> Save
              </Button>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default RecipeGrid;
