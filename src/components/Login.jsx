import { useLoginUserMutation } from "./../services/userApi.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "./../redux/slices.js";

const Login = () => {
  const [loginUserData] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const body = { name };

    loginUserData(body).then(({ data }) => {
      dispatch(setUserId(data));
    });
    navigate("/contacts", { replace: true });
  };

  return (
    <section>
      <div className="img-logo"></div>
      <form onSubmit={handleSubmit}>
        <label>
          {/* ID: <input name="id" type="text" defaultValue="1" /> */}
          name: <input name="name" type="text" defaultValue="Fake User" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
