import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, Outlet } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useLogoutUserMutation,
} from "./../services/userApi.js";
import { setUserId } from "./../redux/slices.js";

const Layout = () => {
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const { data, isError, isLoading } = useGetUserByIdQuery(userId);
  const [logoutUserData] = useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutEvent = (e) => {
    const body = { name: "Fake User" };
    logoutUserData(body).then(() => {
      dispatch(setUserId(null));
    });

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
      ) : data || data === null ? (
        <>
          <h3>{data?.loggedIn ? `Hello, ${data.name}.` : ""}</h3>
          {navLinks}
        </>
      ) : null}

      <Outlet />
    </div>
  );
};

export default Layout;
