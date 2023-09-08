import React from 'react'
import {useNavigate} from "react-router-dom"
import style from "./Landing.module.css"

export const Landing = () => {

  const navigate = useNavigate()


  const handleClick = ()=>{
    navigate("/home")
  } 


  // https://img.freepik.com/fotos-premium/concepto-cocinar-verduras-frescas-mano-chef-profesional-cocina_192985-3567.jpg?size=626&ext=jpg&ga=GA1.2.984179786.1688393417&semt=sph
  const img = "  https://img.freepik.com/fotos-premium/chef-cocinando-verduras-sarten-verduras-voladoras-esparcidas-movimiento-congelado-nube-aire-negro_114941-4271.jpg?w=900"
  return (
    <div className={style.fondo}>
      <div className={style.container}>
        <img className={style.img} src={img} alt="" />
        <span className={style.thebest}>The best</span>
        <span className={style.recipes}>recipes</span>
        <span className={style.leave}>LEAVE</span>
        <span className={style.us}>us YOURS!</span>
      </div>
        <button className={style.home} onClick={handleClick}>Come on!</button>
    </div>
  )
}
