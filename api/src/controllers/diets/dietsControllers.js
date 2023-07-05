const {Diet} = require("../../db")
const { default: axios} = require("axios")

const getDietsController = async ()=>{

    const infoApi = (await axios.get(`http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=97d40991f80048fa9ac7f8203b8f7b0e`)).data.results

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

module.exports = {getDietsController}


//  https://api.spoonacular.com