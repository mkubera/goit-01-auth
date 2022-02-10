import { useLoginUserMutation } from "./../services/userApi.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUserData] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const body = { name };

    loginUserData(body);
    navigate("/contacts", { replace: true });
  };

  return (
    <section>
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
