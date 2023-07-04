const { Recipe, Diet } = require("../../db");

const postRecipeControllers = async (datos) => {
  const { name, image, sumary, healthScore, steps, diets } = datos

  const newRecipe = await Recipe.create({
    name,
    image,
    sumary,
    healthScore,
    steps,
  });

  for (const diet of diets) {
    const model = await Diet.findOne({ where: { name: diet } });
    await newRecipe.addDiet(model);
  }

  return newRecipe;
};

module.exports = { postRecipeControllers };
