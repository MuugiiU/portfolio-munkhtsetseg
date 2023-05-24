/* eslint-disable jsx-a11y/alt-text */
import { Link, NavLink } from "react-router-dom";

import style from "./style.module.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

const menus = [
  { title: "Нүүр хуудас", link: "/" },
  { title: "Миний тухай", link: "/about" },
  { title: "Ур Чадвар", link: "/skill" },
  { title: "Боловсрол", link: "/education" },
  { title: "Төсөл", link: "/projects" },
  { title: "Холбоо барих", link: "/contact" },
];

const Menu = () => {
  return (
    // <div className={style.file}>
    <>
      <Navbar collapseOnSelect expand="lg" className={style.file}>
        <Navbar.Brand href="/">
          <div className={style.new}>
            <img src="./img/rose.jpeg" className={style.img} />
            <h2 className={style.h2}>Мөнхцэцэг танилцуулга</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={style.file}>
            {menus.map((menus, index) => {
              return (
                <Nav.Link
                  className={style.a_tag}
                  as={NavLink}
                  to={menus.link}
                  key={index}
                >
                  {menus.title}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    // </div>
  );
};
export default Menu;
