import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>Jobarouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
