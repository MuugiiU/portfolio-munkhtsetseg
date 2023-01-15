import edus from "../../data/edu";
import style from "./style.module.css";

const Education = () => {
  return edus.map((edu, index) => {
    return (
      <div key={index} className={style.border}>
        <div>
          {" "}
          <img src={edu.ImageURL} className={style.pic} />
        </div>
        <div>
          <h1 className={style.name}>{edu.name}</h1>
          <h2 className={style.title}>{edu.title}</h2>
          <h3 className={style.major}>{edu.major}</h3>
          <p className={style.years}>{edu.years}</p>
        </div>
      </div>
    );
  });
};

export default Education;
