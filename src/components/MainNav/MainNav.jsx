import { NavLink } from "react-router-dom";

const MainNav = () => { 
  return (
    <nav className="navStyles">
      <NavLink className="navLink" activeStyle={{color: "darkgreen"}} to="/" exact>
        Home
      </NavLink>
      <NavLink className="navLink" activeStyle={{color: "darkgreen"}} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}

export default MainNav;