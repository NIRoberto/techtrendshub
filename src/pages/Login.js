import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import axios from "../axios/axios";
import { allUserState, login } from "../features/userSlice";

// const schema = yup.object().shape({
//   email: yup.string().required(),
//   password: yup.string().min(6).max(12).required(),
// });
const Login = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm({});

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      dispatch(login(data)).unwrap();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter email here..."
            {...register("email")}
          />
          <span className="error">{error || ""}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password here..."
            {...register("password")}
          />
          <span className="error">{error || ""}</span>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
