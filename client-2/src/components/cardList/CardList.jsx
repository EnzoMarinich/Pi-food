import  { useEffect, useState } from "react";
import { Card } from "../card/Card";
import style from "./CardList.module.css";
import { filterNameRecipe } from "../../redux/actions"
import { Paginado } from "../Paginado/Paginado";
import { useDispatch } from "react-redux";


export const CardList = ({recipes}) => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [name, setName] = useState("")


  const HandlePag=(pag)=>{
    setPage(pag)
  }
  

  const handleChange = (e)=>{
    setName(e.target.value)
    dispatch(filterNameRecipe(e.target.value))
  }


  return (
    <div className={style.container}>
      <h1>CARD LIST</h1>
      <input className={style.search} type="search" placeholder="Search by name"  onChange={handleChange} value={name}></input>
      <div className={style.containerCard}>
        {!recipes.length ? (
          <h2>loading...</h2>
        ) : (
          recipes.slice((page - 1) * 9, page * 9).map((rec) => {
            return <Card key={rec.id} recipe={rec} />;
          })
        )}
      </div>
      <Paginado  handlePag={HandlePag} recipes={recipes}/>
    </div>
  );
};
