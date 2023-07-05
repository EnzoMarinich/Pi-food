import React, { useEffect, useState } from "react";
import { CardList } from "../../components/cardList/CardList";
import { useDispatch, useSelector } from "react-redux";
import {
  filter,
  filterByAlfabeto,
  getRecipes,
} from "../../redux/actions";
import style from "./Home.module.css";

export const Home = () => {

  const recipes = useSelector((state) => state.copyRecipes);
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  const [filterAsc, setFilterAsc] = useState("")
  const [filters, setFilters] = useState({
    diets: [],
    checkbox : {
      all : false,
      created : false,
      noCreated : false
    }
  })


const handleFilters = (e)=>{
  if(e.target.type == "select-one"){
    setFilters({
      ...filters,
      diets : [...filters.diets, e.target.value]
    })
  } else {
    const {name} = e.target
    if(!filters.diets.includes(name)){
      setFilters({
        ...filters,
        checkbox : {
          all: name === "all",
        created: name === "created",
        noCreated: name === "noCreated",
        }
      })
    }
  }
} 

const handleClose = (diet)=>{
  const newDiets = filters.diets.filter(e=> e != diet)
  setFilters({
    ...filters,
    diets : newDiets
  })
}


useEffect(()=>{
  dispatch(filter(filters))
}, [filters])


  useEffect(() => {
      dispatch(getRecipes());
  }, []);


  useEffect(()=>{
    dispatch(filterByAlfabeto(filterAsc))
  },[filterAsc])

  const handleChangeAsc = (e)=>{
    const {value} = e.target 
    setFilterAsc(value)
  }

  return (
    <div className={style.container}>
      <div className={style.filterDiets}>
        <p>Selecciona tu tipo de dieta:</p>
        <select onChange={handleFilters}>
          {diets.map((e) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
        {filters.diets.map((e) => {
          return (
            <div key={e} className={style.diet}>
              <h1>{e}</h1>
              <button onClick={() => handleClose(e)}>x</button>
            </div>
          );
        })}
      </div>
      <div>
        <label htmlFor="all">All</label>
        <input
          type="checkbox"
          name="all"
          id="all"
          checked={filters.checkbox.all}
          onChange={handleFilters}
        />
        <label htmlFor="created">Created</label>
        <input
          type="checkbox"
          name="created"
          id="created"
          checked={filters.checkbox.created}
          onChange={handleFilters}
        />
        <label htmlFor="noCreated">No Created</label>
        <input
          type="checkbox"
          name="noCreated"
          id="noCreated"
          checked={filters.checkbox.noCreated}
          onChange={handleFilters}
        />
      </div>
      <div>
        <span>filtra por:</span>
        <select onChange={handleChangeAsc}>
          <option value="">Selecciona tu opcion</option>
          <option value="alfabetoAsc">Alfabeto Asc...</option>
          <option value="alfabetoDes">Alfabeto Des...</option>
          <option value="healtScoreAsc">HealtScore {"< a >"}</option>
          <option value="healtScoreDes">HealthScore{"> a <"}</option>
        </select>
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