import axios from "axios";


export const createRecipe = async(data) => {
    if(!data.image){
        data.image = "https://media.istockphoto.com/id/696864806/es/foto/bistec-a-la-plancha-con-verduras-a-la-parrilla-cerveza-y-vino-en-una-mesa-de-madera-oscura.jpg?s=612x612&w=0&k=20&c=UyeqcoHn8kBX9fYGOSBRbJFSnGsV8kNEVFOSuZ1yYdU="
    }
    try {
        const rsta = await axios.post("/recipes", data)
        console.log(rsta)
    } catch (error) {
        return alert(error)
    }
}
