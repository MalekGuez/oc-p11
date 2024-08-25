import { NavLink } from "react-router-dom";
import Logo from "../assets/Kasa-logo.svg";

const Header = () => {
  return (
    <nav className="kasa-header">
      <NavLink to="/" className="kasa-header__logo">
        <img src={Logo} alt="Kasa" />
      </NavLink>

      <div className="kasa-header__items">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "kasa-header__item--active kasa-header__item"
              : "kasa-header__item"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            isActive
              ? "kasa-header__item--active kasa-header__item"
              : "kasa-header__item"
          }
        >
          À propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
