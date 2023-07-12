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

    case "FILTER":{
      const selectDiets = action.payload.diets;
      const {whereFrom} = action.payload
      const recipesFiltered = state.recipes.filter((e) =>
        selectDiets.every((diet) => e.diets.includes(diet))
      );

      if (whereFrom == "all") {
        return { ...state, copyRecipes: recipesFiltered };
      } else if(whereFrom == "created"){
        const newRecipes = recipesFiltered.filter((e) => e.created == true);
        return { ...state, copyRecipes: newRecipes };
      } else {
        const newRecipes = recipesFiltered.filter((e) => e.created == false);
        return { ...state, copyRecipes: newRecipes };
      }

    }
    default:
      return { ...state };
  }
};

export default reducer;
