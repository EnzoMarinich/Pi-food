import { useState } from "react";
import style from "./Paginado.module.css";

export const Paginado = ({ recipes, handlePag }) => {
  const [pag, setPag] = useState(1);

  let buttons = [];

  for (let i = 1; i < recipes.length / 9; i++) {
    buttons.push(i);
  }

  return (
    <div className={style.container}>
      {buttons.map((e) => {
        return (
          <button className={style.button} key={e} onClick={() => handlePag(e)}>
            {e}
          </button>
        );
      })}
    </div>
  );
};
