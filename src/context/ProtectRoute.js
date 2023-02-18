import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppProvider";

const ProtectRoute = ({ children }) => {
  // const { auth } = useContext(AppContext);
  const auth  =  sessionStorage.getItem("token");
  if (!auth) return <Navigate to="/login" />;

  return children;
};

export default ProtectRoute;
