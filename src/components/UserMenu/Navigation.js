import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <ul className="navigation">
      <li>
        <NavLink
          exact
          className="navLink"
          activeClassName="navLink--active"
          to="/"
        >
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink
            exact
            className="navLink"
            activeClassName="navLink--active"
            to="/contacts"
          >
            Contacts{" "}
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
