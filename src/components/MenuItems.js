import { Dropdown } from './Dropdown';
import { useState, useEffect, useRef } from "react";

export const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    const showDropDownMenu = () => {
        setDropdown(!dropdown)
    }

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };
    
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <li 
            ref={ref}
            className="menu-items"  
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu" onClick={showDropDownMenu}>
                        {items.title}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} /> 
                </>
            ) : (
                <a href="/#">{items.title}</a>
            )}
        </li>
    );
}