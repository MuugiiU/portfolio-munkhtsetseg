import { Link, NavLink } from "react-router-dom";

import style from "./style.module.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

const menus = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Skills", link: "/skill" },
  { title: "Education", link: "/education" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];

const Menu = () => {
  return (
    // <div className={style.file}>
    <>
      <Navbar collapseOnSelect expand="lg" className={style.file}>
        <Navbar.Brand href="/">
          <div className={style.new}>
            <img src="./img/rose.jpeg" className={style.img} />
            <h2 className={style.h2}>Munkhtsetseg's portfolio</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={style.a_tag}>
          <Nav className={style.file}>
            {menus.map((menus, index) => {
              return (
                <Nav.Link
                  as={NavLink}
                  to={menus.link}
                  key={index}
                  className={style.li}
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
