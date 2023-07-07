import style from "./InputField.module.css"

export const InputField = ({label, type, name, handleInput, formData, error}) => {


  return (
    <div className={style[name]}>
        <span>{label} {name == "healthScore"? formData.healthScore : null}</span>
        {name== "steps"? <textarea name={name} onChange={handleInput}></textarea> : <input  autocomplete="off"  value={formData[name]} name={name} onChange={handleInput} type={type} /> }
        {error?  <span className={style.error}>{error}</span> : null}
    </div>
  )
}
