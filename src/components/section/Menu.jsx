import { NavLink } from "react-router-dom";
import arrLinks from '../../data/Data';

function Menu() {

    const elLinks = arrLinks.map((item) => (
        <NavLink
            key={item.link}
            to={item.link}
            className={({ isActive }) =>
                `menu__item ${isActive ? `menu__item-active` : ''}`}>
            {item.name}
        </NavLink>
    ))

    return (
        <nav className="menu">
            {elLinks}
        </nav>
    );
}

export default Menu;
