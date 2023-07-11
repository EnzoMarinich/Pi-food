import React from 'react'
import style from "./Card.module.css"
import { Link } from 'react-router-dom'
import {FiChevronsUp} from "react-icons/fi"

export const Card = ({recipe}) => {

  let {diets, image} = recipe

  const img = image? image : "https://img.freepik.com/vector-gratis/coleccion-platos-comida-dibujados-mano_23-2148062105.jpg?w=740&t=st=1688498596~exp=1688499196~hmac=47f15d7a99dedbc278ca624c168a3ca966332249771636c991ac5f6fa1456f2a"

  return (
    <div key={recipe.id} className={style.card}>
      <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
      <div className={style.detail}>
        <p className={style.detailName}>{recipe.name}</p>
      <div className={style.decoration}>
        <FiChevronsUp className={style.icon}/>
        <div className={style.detailDiets}>
        <p>Diets:</p> 
        <strong>{diets}</strong>
        </div>
      <Link to={`detail/${recipe.id}`}><button className={style.button}>more info</button></Link>
      </div>
      </div>
    </div>
  )
}
