import axios from "axios";


export const createRecipe = async(data) => {
    try {
        const rsta = await axios.post("/recipes", data)
        console.log(rsta.data)
    } catch (error) {
        return alert(error)
    }
}
