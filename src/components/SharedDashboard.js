import React from "react";
import { Link, Outlet } from "react-router-dom";

const SharedDashboard = () => {
  return (
    <div className="dashboard">
      <div className="nav">
        <div className="logo">
          <h1>
            <span>Tech</span>Trends
          </h1>
        </div>
        <div className="logout">
          <div className="user_logout">
            <span className="user">Robert</span>
          </div>
          <div className="">
            <span className="logout_btn">Logout</span>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <Link className="link" to="/query">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="link" to="/query">
              Queries
            </Link>
          </li>
        </ul>
      </div>
      <div className="out">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedDashboard;
