import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Detail.module.css"


export const Detail = () => {

  const {id} = useParams()

  const [recipe, setRecipe] = useState({})

  const searchRecipe = async()=>{
    const rec = ( await axios(`http://localhost:3001/recipes/${id}`)).data
    setRecipe(rec)
  }
  

  useEffect(()=>{
    searchRecipe()
  },[])

  console.log(recipe)
  return (
    <div className={style.container}>
      <div className={style.img} style={{backgroundImage: `url(${recipe.image})`}}></div>
      <div>
        <h1>{recipe.name}</h1>
      </div>
    </div>
  )
}
