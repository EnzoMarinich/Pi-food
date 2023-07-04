const initialState = {
  recipes: [],
  copyRecipes: [],
  diets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPE":
      return { ...state, recipes: action.payload, copyRecipes: action.payload };

    case "GET_DIETS":
      return { ...state, diets: action.payload };

    case "FILTER_NAME":
      return { ...state, copyRecipes: action.payload };

    case "FILTER_BY_DIET": {
      const selectDiets = action.payload;
      const recipesFiltered = state.recipes.filter((e) =>
        selectDiets.every((diet) => e.diets.includes(diet))
      );
      return { ...state, copyRecipes: recipesFiltered };
    }

    case "FILTER_BY_CREATED": {
      const { all, created } = action.payload;
      if (all) {
        return { ...state, copyRecipes: state.recipes };
      } else {
        const newRecipes = state.recipes.filter((e) => e.created == created);
        return { ...state, copyRecipes: newRecipes };
      }
    }

    case "FILTER_ BY_ALFABETO": {
        const {payload} = action

      if (payload == "alfabetoAsc") {
        const sortedRecipes = [...state.copyRecipes].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return { ...state, copyRecipes: sortedRecipes };
      } else if (payload == "alfabetoDes") {
        const sortedRecipes = [...state.copyRecipes].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return { ...state, copyRecipes: sortedRecipes };
      } else if (payload == "healtScoreAsc") {
        const sortedRecipes = [...state.copyRecipes].sort(
          (a, b) => b.healthScore - a.healthScore
        );
        return { ...state, copyRecipes: sortedRecipes };
      } else {
        const sortedRecipes = [...state.copyRecipes].sort(
          (a, b) => a.healthScore - b.healthScore
        );
        return { ...state, copyRecipes: sortedRecipes };
      }
    }
    default:
      return { ...state };
  }
};

export default reducer;
