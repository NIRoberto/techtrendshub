import React, { useLayoutEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "../axios/axios";
import { AppContext } from "../context/AppProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../features/userSlice";

const Register = () => {
  const [error, setError] = useState("");

  const { auth, setAuth } = useContext(AppContext);
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      dispatch(signup(data));
    } catch (error) {
      if (error.response.status === 400) {
        setError("Email already exists");
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="exit">{error || ""}</span>
        <div>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name here..."
            {...register("name")}
          />
          <span className="error">{errors?.name?.message}</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email here..."
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password here..."
            {...register("password")}
          />
          <span className="error">{errors.password?.message}</span>
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
