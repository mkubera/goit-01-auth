import { useNavigate, Link, Outlet } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useLogoutUserMutation,
} from "./../services/userApi.js";

const Layout = () => {
  const userId = 1; // TODO: should be from Redux (after login!)
  const { data, isError, isLoading } = useGetUserByIdQuery(userId);
  const [logoutUserData] = useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutEvent = (e) => {
    const body = { name: "Fake User" };
    logoutUserData(body);
    navigate("/", { replace: true });
  };

  const navLinks = data?.loggedIn ? (
    <ul>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <button onClick={logoutEvent}>Logout</button>
      </li>
    </ul>
  ) : (
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
    </ul>
  );

  return (
    <div>
      {isError ? (
        <>Error...</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.loggedIn ? `Hello, ${data.name}.` : "Pls, log in."}</h3>
          {navLinks}
        </>
      ) : null}

      <Outlet />
    </div>
  );
};

export default Layout;
