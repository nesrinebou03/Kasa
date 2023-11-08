import { NavLink } from "react-router-dom";

import "./Navigation.css";

import Lo_go from "../../assets/LOGO1.png";
export default function Navigation() {
  return (
    <header className="navigation_header">
      <img src={Lo_go} />
      <nav className="navigation">
        <ul className="navigation_bar">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav_bar" : "nav_bar"
              }
              to="/"
            >
              {" "}
              Accueil
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav_bar" : "nav_bar"
              }
              to="/about"
            >
              {" "}
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
