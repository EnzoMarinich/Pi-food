import React, { useEffect, useState } from "react";
import { CardList } from "../../components/cardList/CardList";
import { useDispatch, useSelector } from "react-redux";
import {
  filter,
  filterByAlfabeto,
  getDiets,
  getRecipes,
} from "../../redux/actions";
import style from "./Home.module.css";

export const Home = () => {
  const recipes = useSelector((state) => state.copyRecipes);
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  const [filterAsc, setFilterAsc] = useState("");
  const [filters, setFilters] = useState({
    diets: [],
    whereFrom: "",
  });

  const handleByDiets = (e) => {

    dispatch(filter({
      ...filters,
      diets: [...filters.diets, e.target.value],
    }))

    setFilters({
        ...filters,
        diets: [...filters.diets, e.target.value],
      });
  };

  const handleByCreate = (e) => {
    const { value } = e.target;
    dispatch(filter({ ...filters, whereFrom: value }));

    setFilters({ ...filters, whereFrom: value });
  };

  const handleClose = (diet) => {
    const newDiets = filters.diets.filter((e) => e != diet);
    setFilters({
      ...filters,
      diets: newDiets,
    });
  };

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, []);

  useEffect(() => {
    dispatch(filterByAlfabeto(filterAsc));
  }, [filterAsc]);

  const handleByOrder = (e) => {
    const { value } = e.target;
    setFilterAsc(value);
  };

  return (
    <div className={style.container}>
      <div className={style.allFilters}>
        <div className={style.filterDiets}>
          <div className={style.dietsOptions}>
            <p>Selecciona tu tipo de dieta:</p>
            <select onChange={handleByDiets}>
              {diets.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={style.dietsSelec}>
            {filters.diets.map((e) => {
              return (
                <div key={e} className={style.diet}>
                  <h1>{e}</h1>
                  <button onClick={() => handleClose(e)}>x</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.filterTwo}>
          <div className={style.creat}>
            <div>
              <input
                type="radio"
                name="CreatedBy"
                id="all"
                value="all"
                onChange={handleByCreate}
              />
              <label htmlFor="all">ALL</label>
            </div>
            <div>
              <input
                type="radio"
                name="CreatedBy"
                id="created"
                value="created"
                onChange={handleByCreate}
              />
              <label htmlFor="created">BBDD</label>
            </div>
            <div>
              <input
                type="radio"
                name="CreatedBy"
                id="noCreated"
                value="noCreated"
                onChange={handleByCreate}
              />
              <label htmlFor="noCreated">API</label>
            </div>
          </div>
          <div className={style.order}>
            <div>
              <input
                type="radio"
                name="orderBy"
                id="alfabetoAsc"
                value="alfabetoAsc"
                onChange={handleByOrder}
              />
              <label htmlFor="alfabetoAsc">A-Z</label>
            </div>
            <div>
              <input
                type="radio"
                name="orderBy"
                id="alfabetoDes"
                value="alfabetoDes"
                onChange={handleByOrder}
              />
              <label htmlFor="alfabetoDes">Z-A</label>
            </div>
            <div>
              <input
                type="radio"
                name="orderBy"
                id="healtScoreAsc"
                value="healtScoreAsc"
                onChange={handleByOrder}
              />
              <label htmlFor="healtScoreAsc">1-100</label>
            </div>
            <div>
              <input
                type="radio"
                name="orderBy"
                id="healtScoreDes"
                value="healtScoreDes"
                onChange={handleByOrder}
              />
              <label htmlFor="healtScoreDes">100-1</label>
            </div>
          </div>
        </div>
      </div>
      <CardList recipes={recipes} />
    </div>
  );
};

// export const Home = () => {

//   const recipes = useSelector((state) => state.copyRecipes);
//   const diets = useSelector((state) => state.diets);
//   const dispatch = useDispatch();
//   const [filterDiets, setFilterDiets] = useState([]);
//   const [isChecked, setIsChecked] = useState({
//     all: true,
//     created: false,
//     noCreated: false,
//   });
//   const [filterAsc, setFilterAsc] = useState("")

//   useEffect(() => {
//     if (!recipes.length) {
//       dispatch(getRecipes());
//     }
//   }, []);

//   useEffect(() => {
//     dispatch(filterByDiets(filterDiets));
//     console.log(filterDiets)
//   }, [filterDiets]);

//   useEffect(() => {
//     dispatch(filterByCreated(isChecked));
//   }, [isChecked]);

//   useEffect(()=>{
//     dispatch(filterByAlfabeto(filterAsc))
//   },[filterAsc])

//   const handleFilter = (e) => {
//     setFilterDiets([...filterDiets, e.target.value]);
//   };

//   const handleClose = (diet) => {
//     const newDiets = filterDiets.filter((e) => e != diet);
//     setFilterDiets(newDiets);
//   };

//   const handleCheck = (event) => {
//     const { name } = event.target;
//     setIsChecked({
//       all: name === "all",
//       created: name === "created",
//       noCreated: name === "noCreated",
//     });
//   };

//   const handleChangeAsc = (e)=>{
//     const {value} = e.target
//     setFilterAsc(value)
//   }

//   return (
//     <div className={style.container}>
//       <div className={style.filterDiets}>
//         <p>Selecciona tu tipo de dieta:</p>
//         <select onChange={handleFilter}>
//           {diets.map((e) => {
//             return (
//               <option key={e} value={e}>
//                 {e}
//               </option>
//             );
//           })}
//         </select>
//         {filterDiets.map((e) => {
//           return (
//             <div key={e} className={style.diet}>
//               <h1>{e}</h1>
//               <button onClick={() => handleClose(e)}>x</button>
//             </div>
//           );
//         })}
//       </div>
//       <div>
//         <label htmlFor="all">All</label>
//         <input
//           type="checkbox"
//           name="all"
//           id="all"
//           checked={isChecked.all}
//           onChange={handleCheck}
//         />
//         <label htmlFor="created">Created</label>
//         <input
//           type="checkbox"
//           name="created"
//           id="created"
//           checked={isChecked.created}
//           onChange={handleCheck}
//         />
//         <label htmlFor="noCreated">No Created</label>
//         <input
//           type="checkbox"
//           name="noCreated"
//           id="noCreated"
//           checked={isChecked.noCreated}
//           onChange={handleCheck}
//         />
//       </div>
//       <div>
//         <span>filtra por:</span>
//         <select onChange={handleChangeAsc}>
//           <option value="">Selecciona tu opcion</option>
//           <option value="alfabetoAsc">Alfabeto Asc...</option>
//           <option value="alfabetoDes">Alfabeto Des...</option>
//           <option value="healtScoreAsc">HealtScore {"< a >"}</option>
//           <option value="healtScoreDes">HealthScore{"> a <"}</option>
//         </select>
//       </div>
//       <CardList recipes={recipes} />
//     </div>
//   );
// };
