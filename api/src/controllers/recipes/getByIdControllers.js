const { default: axios } = require("axios")
const {Recipe, Diet} = require("../../db")
const isValidUUID = require("../../utils/validUUID")
const { editDiets } = require("../../utils/editDiets")



const getRecipeByIdController = async (id)=>{

    if(isValidUUID(id)){
        const result = await Recipe.findOne({
            where:{id:id},
            include:{ 
                model : Diet,
                attributes: ["name"],
                through: {attributes: [] }
        }})




        const resp = await editDiets([result])
        return resp[0]

    }else{
        const rsta = (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=97d40991f80048fa9ac7f8203b8f7b0e`)).data
        return {
            name : rsta.title,
            id: rsta.id,
            image : rsta.image,
            summary : rsta.summary.replace(/<\/?[^>]+(>|$)/g, ""),
            healthScore: rsta.healthScore,
            steps : rsta.instructions.replace(/<\/?[^>]+(>|$)/g, ""),
            diets: rsta.diets,
            created : false
        }
    }
    
}

module.exports = {getRecipeByIdController}

//   http://localhost:8080
