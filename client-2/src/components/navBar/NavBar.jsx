import React from 'react'
import style  from "./NavBar.module.css"
import {NavLink} from "react-router-dom"
 
export const NavBar = () => {
  return (
    <div className={style.nav}>
        <NavLink to={"/home"}><button className={style.navButton}>Home</button></NavLink>
        <NavLink to={"/create"}><button className={style.navButton}>Create</button></NavLink>
    </div>
  )
}
