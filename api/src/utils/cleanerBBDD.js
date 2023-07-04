const cleanerBBDD = (arr)=>{
    const dietsFiltered = arr.map(recipe=> {
        const newDiets = recipe.diets.map(e=> e.name)
        return {...recipe, diets: newDiets}
    })
    return dietsFiltered
}

module.exports = {cleanerBBDD}