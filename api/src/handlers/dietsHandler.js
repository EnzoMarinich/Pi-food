const { getDietsController } = require("../controllers/diets/dietsControllers")


const getDiets = async (req, res) => {
  try {
    const diets = await getDietsController();
    res.status(200).json(diets);
  } catch (error) {
    res.status(405).json(error.message);
  }
};

module.exports = { getDiets };
