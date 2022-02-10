import React from "react";
import { useRegisterUserMutation } from "./../services/userApi.js";

const Register = () => {
  const [data] = useRegisterUserMutation();

  const sendData = (e) => {
    e.preventDefault();

    const body = {
      name: "New User",
    };
    data(body);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={sendData}>
        <input type="submit" value="Create new user" />
      </form>
    </div>
  );
};

export default Register;
