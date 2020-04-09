const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"]
};

// Add an ingredient
const added = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"]
};

// Update an ingredient
const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map(ingredient =>
    ingredient === "egg" ? "egg white" : ingredient
  )
};

// Remove an ingredient
const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(ingredient => ingredient !== "egg")
};
