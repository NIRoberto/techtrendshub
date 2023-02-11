import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

const Analytics = () => {
  const { auth, blogs } = useContext(AppContext);

  return (
    <div className="main_dashboard">
      <div>
        <span className="number">12</span>
        <span>All users</span>
      </div>
      <div>
        <span className="number">{blogs?.length}</span>
        <span>All blogs</span>
      </div>
      <div>
        <span className="number">13</span>
        <span>New letters</span>
      </div>
      <div>
        <span className="number">43</span>
        <span>All queries</span>
      </div>
    </div>
  );
};

export default Analytics;
