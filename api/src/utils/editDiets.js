const editDiets = (arr) => {
  return Promise.all(
    arr.map((recipe) => {
      const newDiets = recipe.diets.map((diet) => diet.name);
      return {
        ...recipe.toJSON(),
        diets: newDiets,
      };
    })
  );
};

module.exports = {editDiets}