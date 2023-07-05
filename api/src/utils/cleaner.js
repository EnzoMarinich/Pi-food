const cleanerInfo = (arr)=>{
    return clean = arr.map(el=>{
        return {
            name : el.title,
            id: el.id,
            image : el.image,
            summary : el.summary ,
            healthScore: el.healthScore,
            steps : el.analyzedInstructions,
            diets : el.diets,
            created : false
        }
    })
}

module.exports = {cleanerInfo}