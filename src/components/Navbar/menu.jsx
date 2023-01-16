import { Link } from "react-router-dom";
import style from "./style.module.css";

const menus = [
  { title: "Home", link: "/header" },
  { title: "About", link: "/about" },
  { title: "Skills", link: "/skill" },
  { title: "Education", link: "/education" },
  { title: "Work", link: "/work" },
  { title: "Experience", link: "/experience" },
  { title: "Contact", link: "/contact" },
];

const Menu = () => {
  return (
    <div className={style.file}>
      <div className={style.new}>
        <img src="./img/rose.jpeg" className={style.img} />
        <h2 className={style.h2}>Munkhtsetseg's portfolio</h2>
      </div>
      <div>
        <ul className={style.MenuItems}>
          {menus.map((menus, index) => {
            return (
              <li className={style.li}>
                <Link to={menus.link} key={index} className={style.a_tag}>
                  {menus.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Menu;
