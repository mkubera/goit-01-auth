import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { login } from "./../redux/slices.js";
import { skipToken } from "@reduxjs/toolkit/query";
import {
  useGetUsersQuery,
  useGetUserByIdQuery,
} from "./../services/userApi.js";

const Login = () => {
  // redux SET
  // const dispatch = useDispatch();
  // redux GET
  // const user = useSelector((state) => state.user);
  const { data, isError, isLoading } = useGetUsersQuery();

  const [chosenUserId, setChosenUserId] = useState(skipToken); // initialize with skipToken to skip at first
  const userById = useGetUserByIdQuery(chosenUserId);
  console.log("USER!", userById);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = formData.get("id");
    console.log(id);

    setChosenUserId(id);
    // dispatch(login());
  };
  return (
    <section>
      <h1>User by id: {userById.data.name}</h1>
      {isError ? (
        <>Error...</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>User is logged in? {data[0].loggedIn.toString()}</h1>
          <h1>Hello, {data[0].name}</h1>
        </>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>
          ID: <input name="id" type="text" defaultValue="1" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
