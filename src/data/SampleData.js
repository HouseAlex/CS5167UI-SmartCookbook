export const GetMinutes = () => {
  return ["0","5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
};

export const GetHours = () => {
  return ["0", "1", "2", "3", "4", "5", "6", "7", "8+"];
};

export const GetTags = () => {
  return [
    "Difficulty: Easy",
    "Difficulty: Medium",
    "Difficulty: Hard",
    "Time: Quick",
    "Time: Long",
    "Chicken",
    "Fish",
    "Beef",
    "Pork",
    "Vegetarian",
    "American",
    "Chinese",
    "Italian",
    "Mediterranean",
    "Mexican",
    "Soup",
    "Protein",
    "Low-carb",
    "Indian",
    "Korean",
    "Fast Food",
  ];
};

export const GetRecipes = () => {
  return [
    {
      name: "Coconut Curry Soup",
      img: "",
      description:
        "Coconut Curry Soup with Chicken, Chickpeas and Hearty Greens.",
      servings: "5",
      prepTime: "10 min",
      cookTime: "35 min",
      calories: "300",
      tags: ["Difficulty: Easy", "Chicken"],
      isSaved: true,
      ingredients: [
        {
          amount: "1 tablespoon",
          name: "Extra-virgin olive oil",
        },
        {
          amount: "1",
          name: "Medium yellow onion, diced",
        },
        {
          amount: "1",
          name: "Large red bell pepper, diced",
        },
        {
          amount: "4",
          name: "Garlic cloves, minced",
        },
        {
          amount: "1 tablespoon",
          name: "Red curry paste",
        },
        {
          amount: "1 (14.5 ounce) can",
          name: "Diced tomatoes",
        },
        {
          amount: "4 cups",
          name: "Chicken stock",
        },
        {
          amount: "1 (14 ounce) can",
          name: "Chickpeas, drained and rinsed",
        },
        {
          amount: "2 (14 ounce) cans",
          name: "Coconut milk, shaken",
        },
        {
          amount: "2 teaspoons",
          name: "Fish sauce",
        },
        {
          amount: "2.5 teaspoons",
          name: "Sea salt",
        },
        {
          amount: "1.5 pounds",
          name: "Chicken breasts, cubed",
        },
        {
          amount: "2 cups",
          name: "Kale",
        },
        {
          amount: "2 tablespoons",
          name: "Lime juice",
        },
      ],
      directions: [
        "Heat the olive oil in a large pot over medium heat. Once the oil is glistening, add the onion and peppers and cook, stirring occasionally until softened, about 5 minutes.",
        "Stir in garlic and cook until fragrant, 1 more minute. Stir in the curry paste until softened and combined with the vegetables.",
        "Stir in the tomatoes, chicken stock, chickpeas, coconut milk, fish sauce and salt. Increase the heat to high and bring to a boil.",
        "Turn the heat to low and simmer until the flavors begin to come together, about 15 minutes.",
        "Add the chicken and simmer until tender and cooked through, about 15 minutes.",
        "Stir in the kale and cook until wilted, about 3 minutes. Stir in the lime juice, add additional salt to taste.",
        "Sprinkled with fresh cilantro with a scoop of rice if desired.",
      ],
    },
    {
      name: "Tortellini Soup",
      img: "",
      description: "Tortellini Soup with Italian Sausage and Kale",
      servings: "4",
      prepTime: "5 min",
      cookTime: "30 min",
      calories: "368",
      tags: ["Difficulty: Medium", "Pork", "Italian"],
      isSaved: true,
      ingredients: [
        {
          amount: "1 pound",
          name: "Mild italian sausage, ground",
        },
        {
          amount: "1",
          name: "Medium yellow onion, minced",
        },
        {
          amount: "6",
          name: "Garlic cloves, minced",
        },
        {
          amount: "1 (14.5 ounce) can",
          name: "Crushed tomatoes",
        },
        {
          amount: "1 quart",
          name: "Chicken stock",
        },
        {
          amount: "2 tablespoons",
          name: "Tomato paste",
        },
        {
          amount: "1 teaspoon",
          name: "Sea salt",
        },
        {
          amount: "1 bunch",
          name: "curly kale, stemmed and roughly torn",
        },
        {
          amount: "10 ounces",
          name: "Fresh tortellini",
        },
        {
          amount: "1 cup",
          name: "Heavy cream",
        },
      ],
      directions: [
        "Heat a large pot over medium-high heat. Add the sausage, onions, and garlic and cook, breaking up the meat with a wooden spoon, until it is browned and the onion is translucent, about 5 minutes. Drain off any excessive fat.",
        "Whisk in the chicken stock, crushed tomatoes, and tomato paste until fully incorporated.",
        "Bring to a boil and add the salt, then reduce the heat to a simmer and cook until slightly reduced, about 15 minutes.",
        "Stir in the kale, tortellini, and cream. Cook until the kale is wilted and the pasta is tender, 3-5 minutes.",
        "Ladle the soup into bowls. Sprinkle with Parmesan and red pepper flakes, if desired, before serving.",
      ],
    },
    {
      name: "Sausage, Kale and Potato Skillet Dinner",
      img: "",
      description: "A little meaty, some dark leafy greens, and some starchy goodness. An easy one-pan sausage, kale and potato skillet that pleases everyone, from cook to clean-up crew.",
      servings: "6",
      prepTime: "10 min",
      cookTime: "40 min",
      calories: "212",
      tags: ["Difficulty: Easy", "Time: Quick", "Pork"],
      isSaved: false,
      ingredients: [
        {
          amount: "3 tbsp",
          name: "Extra-virgin olive oil",
        },
        {
          amount: "24 oz",
          name: "Red potatoes, cut in half",
        },
        {
          amount: "2 tsp",
          name: "Dried thyme",
        },
        {
          amount: "6",
          name: "Fully cooked chicken sausage links",
        },
        {
          amount: "1",
          name: "Small onion, thinly sliced",
        },
        {
          amount: "1 tbsp",
          name: "Garlic, minced",
        },
        {
          amount: "1 bunch",
          name: "Curly kale, spines removed and roughly chopped",
        }
      ],
      directions: [
        "Heat 2 tablespoons olive oil in a large 15-inch skillet over medium-high heat . Add potatoes (cut side down) and cook without stirring until they begin to turn golden brown.",
        "Stir and continue cooking until all sides are crispy, about 5-7 minutes. Depending on the size of your pan, you may have to do this in a few batches. Season potatoes with salt, pepper and thyme.",
        "Add another tablespoon of olive oil and the chicken sausage to the potatoes. Cook until all sides of the sausage are crispy, about 4-5 minutes.",
        "Once crispy, add onions and cook until just tender, stirring often, about 5 minutes.",
        "Reduce heat to medium and add the garlic, stirring until fragrant, about one minute. Add the kale. Stir often and cooking until the kale is wilted, about 3 minutes.",
        "Squeeze a lemon over the top of the dish and serve."
      ],
    },
  ];
};
