import {MenuItems} from "./MenuItems";

export const Dropdown = ({ submenus, dropdown }) => {
 return (
  <ul className={`dropdown ${dropdown ? "show" : ""}`}>
   {submenus.map((submenu, index) => (
    <MenuItems items={submenu} key={index} />
   ))}
  </ul>
 );
};
