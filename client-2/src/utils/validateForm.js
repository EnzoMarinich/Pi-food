

export  const validateForm = (formData, recipes)=>{

    const errors = {}

    if(formData.name == "" )errors.name = "name is required"
    if(recipes.some((recipe) => recipe.name == formData.name)) errors.name = "name already exists"
    if(formData.summary == "")errors.summary = "summary is required"
    if(formData.healthScore == "") errors.healthScore = "healthScore is required"
    if(formData.diets.length == 0) errors.diets = "min. one diet is required"
    if(formData.steps == "") errors.steps = "steps is required"

    return errors
}

