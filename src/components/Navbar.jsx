import { NavItems } from "./NavItems";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="NavbarItems">
      <h3 className="logo">
        <i className="fab fa-react"></i>Rayz
      </h3>
      <div className="Hamburger-Cross-Icons" onClick={handleClick}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={open ? "MenuItems active" : "MenuItems"}>
        {NavItems.map((Item, index) => {
          return (
            <li key={index}>
              <a href={Item.url} className={Item.cName}>
                <i className={Item.icon}></i>
                {Item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
