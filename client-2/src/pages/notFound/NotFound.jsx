import style from "./NotFound.module.css"


export const NotFound = () => {
  return (
    <div className={style.container}>
      <h1>Not Found 404</h1>
      <img className={style.img} src="https://img.freepik.com/foto-gratis/guisantes-plato_23-2148177805.jpg?w=740&t=st=1688401139~exp=1688401739~hmac=bdd856f41349223f7d6e102951a7c3188162d07e99f8e10b5e9b60bfa6fd0047" alt="" />
      <button>Back to Home</button>
    </div>
  )
}
