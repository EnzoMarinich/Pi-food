import { useSelector } from "react-redux";
import style from "./Create.module.css";

export const Create = () => {
  const diets = useSelector((state) => state.diets);

  return (
    <div className={style.container}>
      <div
        className={style.form}
        style={{
          backgroundImage:
            "url(https://img.freepik.com/foto-gratis/ingredientes-cerca-pizza_23-2147772081.jpg?w=900&t=st=1688431304~exp=1688431904~hmac=68e11fb760eb3ec3d14348acece98cdc2dd07a5323422680a400ec4b7cc3b41b)",
        }}
      >
        <form>
          <span>Name:</span>
          <input type="text" />
          <span>image</span>
          <input type="file" />
          <span>HealthScore: </span>
          <input type="range" min={0} max={100} />
          <span>Steps:</span>
          <input type="text" />
          <span>Diets:</span>
          {diets.map((e) => {
            return (
              <label>
                <input
                  type="checkbox"
                  name="diets"
                  value={e}
                  // onChange={handleCheckboxChange}
                  // checked={selectedDiets.includes(e)}
                />
                {e}
              </label>
            );
          })}
        </form>
      </div>
    </div>
  );
};
