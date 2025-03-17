import Nav from "../Nav/Nav";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/LOGO.svg";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <figure className="header__figure">
          <img src={logo} alt="kasa logo" />
        </figure>
      </NavLink>
      <Nav />
    </header>
  );
}
