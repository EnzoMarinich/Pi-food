const { default: axios } = require("axios")
const {Recipe, Diet} = require("../../db")
const isValidUUID = require("../../utils/validUUID")



const getRecipeByIdController = async (id)=>{

    if(isValidUUID(id)){
        const result = await Recipe.findOne({
            where:{id:id},
            include:{ 
                model : Diet,
                attributes: ["name"],
                through: {attributes: [] }
        }})

        return result

    }else{
        const rsta = (await axios.get(`http://localhost:8080/recipes/${id}/information?apiKey=97d40991f80048fa9ac7f8203b8f7b0e`)).data
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

//  https://api.spoonacular.com
