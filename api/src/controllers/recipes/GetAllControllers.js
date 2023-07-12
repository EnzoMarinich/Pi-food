const {Axios, default: axios} = require("axios")
const {cleanerInfo} = require("../../utils/cleaner")
const {Recipe, Diet} = require("../../db")
const { Op } = require("sequelize")
const { cleanerBBDD } = require("../../utils/cleanerBBDD")
const { editDiets } = require("../../utils/editDiets")


const getRecipesControllers = async (name)=>{

        const infoApi = (await axios.get(`http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=97d40991f80048fa9ac7f8203b8f7b0e`)).data.results
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

//  https://api.spoonacular.com