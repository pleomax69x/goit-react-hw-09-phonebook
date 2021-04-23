import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";

const AppBar = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header className="list">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
