import { useEffect, useState } from "react";
import { CheckboxField } from "../fields/checkbox/CheckboxField";
import { InputField } from "../fields/input/InputField";
import style from "./CreateForm.module.css"
import { validateForm } from "../../../utils/validateForm";
import { useSelector } from "react-redux"
import { createRecipe } from "../../../utils/createRecipe";
import axios, { all } from "axios";


export const CreateForm = ({ diets }) => {
  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    diets: [],
    steps: ""
  })
  const [image, setImage] = useState("")


  const [formErrors, setFormErrors] = useState({
    name: "",
    summary: "",
    healthScore: "",
    diets: "",
    steps: ""
  })
  const recipes = useSelector(state=> state.recipes)

  const handleInput = (e)=>{
    setFormData({
    ...formData,
    [e.target.name] : e.target.value
    })
  }

  const handleCheckbox = (e)=>{
    if(e.target.checked){
      setFormData({
        ...formData,
        diets: [...formData.diets, e.target.value]
      })
    } else {
      setFormData({
        ...formData,
        diets : formData.diets.filter(diet=> diet !== e.target.value)
      })
    }
  }


  useEffect(()=>{
    setFormErrors(validateForm(formData, recipes))
  },[formData])


  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!Object.keys(formErrors).length){
      const rsta = await createRecipe({formData, image})
      if(rsta.status == 200){
        alert("Receta creada correctamente!")
        setFormData({
          name: "",
        summary: "",
        healthScore: 0,
        diets: [],
        steps: ""
        }) 
      } else {
        console.log(rsta)
      }
    }
  }

  const handleImage = async (e)=>{
    const file = e.target.files[0];
    const data = new FormData();

    data.append("file", file)
    data.append("upload_preset", "pifood")
    
    const response = await axios.post("https://api.cloudinary.com/v1_1/dgctf25s6/image/upload", data)
    setImage(response.data.secure_url)
}

  return (
      <form className={style.form} onSubmit={handleSubmit}>
        <InputField  name="name" label="Name:" type="text" formData={formData} handleInput={handleInput} error={formErrors.name}/>
        <InputField name="summary" label="Summary:" type="text" formData={formData} handleInput={handleInput}  error={formErrors.summary}/>
        <div className={style.image}>
          <InputField name="image" label="image:" type="file" formData={formData} handleInput={handleImage}/>
          <InputField name="healthScore" label="HealthScore:" type="range" formData={formData} handleInput={handleInput} error={formErrors.healthScore}/>
        </div>
        <div className={style.diets}>
          <span>Diets:</span>
          <div>
            {diets.map((diet) => {
              return <CheckboxField handleCheckbox={handleCheckbox} formData={formData} key={diet} label={diet} value={diet} error={formErrors.diets} />;
            })}
          </div>
          {formErrors.diets? <span className={style.error}>{formErrors.diets}</span> : null }
        </div>
        <InputField name="steps" type="textarea" label="Steps:" formData={formData} handleInput={handleInput} error={formErrors.steps}/>
        <button type="onSubmit" className={`${style.submit} ${ Object.keys(formErrors).length? style.locked : ""}`}>¡CREAR!</button>
      </form>
  );
};
