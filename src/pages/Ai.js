import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Side from "../components/Side";
import { AppContext } from "../context/AppProvider";
import { allSelectedPosts } from "../features/postSlice";

const Ai = () => {
  // const { blogs } = useContext(AppContext);
  const blogs = useSelector(allSelectedPosts);

  return (
    <div className="ai single">
      <h1>Artifial intelligence /</h1>
      <div className="content">
        <div className="allai">
          {blogs?.map((item, index) => {
            return <Card key={item._id} item={item} index={index} />;
          })}
        </div>
        <Side />
      </div>
    </div>
  );
};

export default Ai;
