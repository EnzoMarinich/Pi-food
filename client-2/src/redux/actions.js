import axios from "axios";
import { UseSelector, useSelector } from "react-redux";

const recipes = useSelector(state=> state.recipes)

export const getRecipes = ()=>{
    return async (dispatch)=>{
        try {
            if(!recipes.length){
                const data = await axios("/recipes")
                recipes = data.data
            }
            return dispatch({
                type: "GET_RECIPE",
                payload : recipes
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