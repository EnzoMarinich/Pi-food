const {Diet} = require("../../db")
const { default: axios} = require("axios")
require("dotenv").config()
const {DB_APIKEY} = process.env

const getDietsController = async ()=>{
    
    const diets = await Diet.findAll()

    if(!diets.length){

    const infoApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${DB_APIKEY}`)).data.results

    let Arraydiets = ["vegetarian"]
    
        Diet.create({name: "vegetarian"})
        infoApi.forEach(e => {
            e.diets.forEach(diet=>{
                if(!Arraydiets.includes(diet)) {
                    Arraydiets.push(diet)
                    Diet.create({name: diet})
                }
            }) 
        });

        return Arraydiets

    } 

    return diets.map(diet => diet.name)
    
}

module.exports = {getDietsController}


//     http://localhost:8080