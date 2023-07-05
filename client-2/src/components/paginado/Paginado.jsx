import { useState } from "react";
import style from "./Paginado.module.css";

export const Paginado = ({ recipes, handlePag }) => {

  const [currentPag, setCurrentPag] = useState(0)

  let buttons = [];

  for (let i = 0; i < recipes.length / 9; i++) {
    buttons.push(i);
  }

  const handleCick = (page)=>{
    let newPage = page
    if (page == "back"){
      newPage = currentPag - 1
      setCurrentPag(newPage)
    } else if (page == "next"){
      newPage = currentPag + 1
      setCurrentPag(newPage)
    } else {
      setCurrentPag(page)
    }
    handlePag(newPage)
  }



  return (
    <div className={style.container}>
      <button className={style.mov} onClick={() => handleCick("back")}>BACK</button>
      {buttons.map((e) => {
        return (
          <button className={`${style.button} ${currentPag == e? `${style.isActive}` : ""}`} key={e} onClick={() => handleCick(e) }>
            {e}
          </button>
        );
      })}
      <button className={style.mov} onClick={() => handleCick("next")}>NEXT</button>
    </div>
  );
};
