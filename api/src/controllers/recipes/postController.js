const { Recipe, Diet } = require("../../db");
const { uploadImage } = require("../cloudinary");

const postRecipeControllers = async (datos) => {
  const { name, summary, healthScore, steps, diets } = datos.formData
  const image = datos.image

  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
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
