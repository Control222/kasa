import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__link">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav__link">
        A Propos
      </NavLink>
    </nav>
  );
}
