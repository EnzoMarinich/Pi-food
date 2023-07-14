import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export const Detail = () => {
  const { id } = useParams();
  const imgDefault =  "https://img.freepik.com/vector-gratis/coleccion-platos-comida-dibujados-mano_23-2148062105.jpg?w=740&t=st=1688498596~exp=1688499196~hmac=47f15d7a99dedbc278ca624c168a3ca966332249771636c991ac5f6fa1456f2a"

  const [recipe, setRecipe] = useState({});

  const searchRecipe = async () => {
    const rec = (await axios(`/recipes/${id}`)).data;
    setRecipe(rec);
  };

  useEffect(() => {
    searchRecipe();
  }, []);


  return (
    <div className={style.container}>
      <div className={style.containerOne}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${recipe.image? recipe.image : imgDefault})` }}
        ></div>
        <div className={style.description}>
          <h1>{recipe.name}</h1>
          <h3>{recipe.summary}</h3>
          <div>
            <span>Diets: </span>
            <strong>{recipe.diets} </strong><span className={style.healthScore}>{recipe.healthScore}</span><span className={style.healthScoreText}>healthScore</span>
          </div>
        </div>
      </div>
      <div className={style.steps}>
        <h1>how to do it?</h1>
        <p>{recipe.steps}</p>
      </div>
    </div>
  );
};
