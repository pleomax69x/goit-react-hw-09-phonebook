import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operation";
import { getUserName, getUserMail } from "../../redux/auth/auth-selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const email = useSelector(getUserMail);

  return (
    <div className="userMenu">
      <div className="user-data">
        <span>Welcome, {name}</span>
        <span>E-mail: {email}</span>
      </div>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
