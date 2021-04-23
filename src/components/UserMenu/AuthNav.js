import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <ul className="AuthNav">
      <li>
        <NavLink
          exact
          className="navLink"
          activeClassName="navLink--active"
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          className="navLink"
          activeClassName="navLink--active"
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};
export default AuthNav;
