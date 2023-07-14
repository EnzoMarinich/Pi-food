import axios from "axios";

const recipes = useSelector(state=> state.recipes)

export const getRecipes = ()=>{
    return async (dispatch)=>{
        try {
                const data = await axios("/recipes")
            return dispatch({
                type: "GET_RECIPE",
                payload : data.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const filterNameRecipe = (name)=>{
    return async (dispatch)=>{
        try {
            const data = await axios(`/recipes?name=${name}`)
            return dispatch({
                type: "FILTER_NAME",
                payload : data.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getDiets = ()=>{
    return async (dispatch)=>{
        try {
            const data = await axios(`/diets`)
            return dispatch({
                type: "GET_DIETS",
                payload : data.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const filterByAlfabeto = (str)=>{
    return (dispatch)=>{
        return dispatch({
            type: "FILTER_ BY_ALFABETO",
            payload: str
        })
    }
}

export const filter = (obj)=>{
    return (dispatch)=>{
        return dispatch({
            type : "FILTER",
            payload : obj
        })
    }
}