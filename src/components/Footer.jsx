import { NavLink } from "react-router-dom";
import WhiteLogo from "../assets/Kasa-white-logo.svg";

const Footer = () => {
  return (
    <nav className="kasa-footer">
      <NavLink to="/" className="kasa-footer__logo">
        <img src={WhiteLogo} alt="Kasa" />
      </NavLink>

      <p className="kasa-footer__text">
        @ 2020 Kasa. All Rights reserved
      </p>
    </nav>
  );
};

export default Footer;