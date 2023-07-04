import React from 'react'
import style from "./Card.module.css"
import { Link } from 'react-router-dom'

export const Card = ({recipe}) => {

  const {diets} = recipe
  // const newDiets = []
  // if(typeof diets[0] == 'object'){
  //   const newDiets = diets.map(diet=> diet.name)
  //   console.log(newDiets, "hola")
  // }

  return (
    <div key={recipe.id} className={style.card}>
      <div className={style.decoration}></div>
      <div className={style.img} style={{backgroundImage: `url(${recipe.image})`}}></div>
      <div className={style.detail}>
        <p className={style.detailName}>{recipe.name}</p>
        <div className={style.detailDiets}>
        <p>Diets:</p> 
        <strong>{diets}</strong>
        </div>
        
      </div>
      <Link to={`detail/${recipe.id}`}><button className={style.button}>more info</button></Link>
    </div>
  )
}
