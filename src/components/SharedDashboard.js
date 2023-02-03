import React from "react";
import { FaBloggerB, FaQuestionCircle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const SharedDashboard = () => {
  return (
    <div className="dashboard">
      <div className="nav">
        <div className="logo">
          <Link to="/" className="link">
            <h1>
              <span>Tech</span>Trends
            </h1>
          </Link>
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
            <Link className="link" to="/dashboard">
              <span>
                <FaBloggerB />
              </span>
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard">
              <span>
                <FaQuestionCircle />
              </span>
              <span>Queries</span>
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
