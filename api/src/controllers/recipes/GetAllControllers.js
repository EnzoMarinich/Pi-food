const {Axios, default: axios} = require("axios")
const {cleanerInfo} = require("../../utils/cleaner")
const {Recipe, Diet} = require("../../db")
const { Op } = require("sequelize")
const { editDiets } = require("../../utils/editDiets")
require("dotenv").config()
const {DB_APIKEY} = process.env


const getRecipesControllers = async (name)=>{

        const infoApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${DB_APIKEY}`)).data.results
        if(name !== undefined){
                const infoApiFiltered = infoApi.filter(recipe=> recipe.title.toLowerCase().includes(name.toLowerCase()))
                const infoApiClean = cleanerInfo(infoApiFiltered)
                const infoBBDD = await Recipe.findAll({
                        where:{name:{[Op.iLike]:`%${name}%`}},
                        include:{ 
                                model : Diet,
                                attributes: ["name"],
                                through: {attributes: [] }
                        }
                })
                const infoBBDDcleaner = await editDiets(infoBBDD)
 
                return [...infoApiClean, ...infoBBDDcleaner]
        } else {
                const infoApiClean = cleanerInfo(infoApi)
                const infoBBDD = await Recipe.findAll({
                        include:{ 
                                model : Diet,
                                attributes: ["name"],
                                through: {attributes: [] }
                        }
                })
                const infoBBDDcleaner = await editDiets(infoBBDD)
  
                return [...infoApiClean, ...infoBBDDcleaner] 
        }
}

module.exports = {getRecipesControllers}

//   http://localhost:8080