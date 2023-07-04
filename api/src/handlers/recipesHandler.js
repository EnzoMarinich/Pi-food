const { getRecipeByIdController } = require("../controllers/recipes/getByIdControllers");
const { getRecipesControllers } = require("../controllers/recipes/GetAllControllers");
const { postRecipeControllers } = require("../controllers/recipes/postController");


const getRecipeHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const recipes = await getRecipesControllers(name);
    console.log(recipes)
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getRecipeByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await getRecipeByIdController(id)
    console.log(recipe)
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const postRecipeHandler = async (req, res) => {
  const datos = ({ name, image, sumary, healthScore, steps, diets } = req.body)
  try {
    const newRecipe = await postRecipeControllers(datos)
    res.status(202).json(newRecipe);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = { getRecipeByIdHandler, getRecipeHandler, postRecipeHandler };
