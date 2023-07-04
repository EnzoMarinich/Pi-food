import axios from "axios";

export const getRecipes = ()=>{
    return async (dispatch)=>{
        try {
            const data = await axios("http://localhost:3001/recipes")
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
            const data = await axios(`http://localhost:3001/recipes?name=${name}`)
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
            const data = await axios(`http://localhost:3001/diets`)
            return dispatch({
                type: "GET_DIETS",
                payload : data.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const filterByDiets = (array)=>{
    return (dispatch)=>{
        return dispatch({
            type : "FILTER_BY_DIET",
            payload : array
        })
    }
}

export const filterByCreated = (obj)=>{
    return (dispatch)=>{
        return dispatch({
            type: "FILTER_BY_CREATED",
            payload : obj
        })
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