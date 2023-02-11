import React, { createContext, useLayoutEffect } from "react";
import { useState } from "react";
import axios from "../axios/axios";

export const AppContext = createContext({});
const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const data = await axios("/blog", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      setBlogs(data.data.blogs);
    } catch (error) {
      console.log(error.response);
    }
  };
  useLayoutEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("loggedUserData")));
    // Authorization(auth?.token);
    fetchBlogs();
  }, []);

  return (
    <AppContext.Provider value={{ auth, blogs, setAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
