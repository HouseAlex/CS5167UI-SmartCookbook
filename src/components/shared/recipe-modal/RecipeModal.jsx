import { CloseRounded, ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  heigh: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const RecipeModal = (recipe) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = recipe.recipe;

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        See Recipe
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }}>{data.name}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseRounded />
        </IconButton>
        <DialogContent dividers>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Accordion defaultExpanded={true}>
                  <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                    <Typography>Ingredients</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense={true}>
                      {data.ingredients.map((ingredient, ingredientIndex) => {
                        return (
                          <ListItem key={ingredientIndex}>
                            <ListItemText
                              primary={ingredient.name}
                              secondary={ingredient.amount}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Directions</Typography>
              </Grid>
              <Grid item xs={12}>
                <List dense={true} sx={{ listStyle: "decimal" }}>
                  {data.directions.map((direction, directionIndex) => {
                    return (
                      <ListItem
                        key={directionIndex}
                        sx={{ display: "list-item" }}
                      >
                        <ListItemText primary={direction} />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RecipeModal;
