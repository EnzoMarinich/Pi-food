import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import { NavBar } from "./components/navBar/NavBar"
import { Landing } from "./pages/landing/Landing"
import {Home} from "./pages/home/Home"
import {Detail} from "./pages/details/Detail"
import {Create} from "./pages/create/Create"
import { NotFound } from "./pages/notFound/NotFound"
import style from "./App.module.css"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3001"

//  https://pi-food-production-3371.up.railway.app



function App() {
  
  const location = useLocation()

  return (
    <div className={style.container}>
      {location.pathname === "/"? null : <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/home/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
