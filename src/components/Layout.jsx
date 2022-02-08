import { Link, Outlet } from "react-router-dom";
import { useLogoutUserMutation } from "./../services/userApi.js";

const Layout = () => {
  const [logoutUserData] = useLogoutUserMutation();

  const logoutEvent = (e) => {
    const body = { name: "Fake User" };
    logoutUserData(body);
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home (Public)</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <button onClick={logoutEvent}>Logout</button>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
