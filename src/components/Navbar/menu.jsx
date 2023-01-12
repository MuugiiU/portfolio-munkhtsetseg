const menus = [
  { title: "Home", link: "" },
  { title: "About", link: "" },
  { title: "Skills", link: "" },
  { title: "Education", link: "" },
  { title: "Work", link: "" },
  { title: "Experience", link: "" },
  { title: "Contact", link: "" },
];
const Menu = () => {
  return (
    <div className="file">
      <h2>Munkhtsetseg's portfolio</h2>
      {menus.map((menus, index) => {
        return (
          <ul>
            <li>
              <a href="" key={index}>
                {menus.title}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default Menu;
