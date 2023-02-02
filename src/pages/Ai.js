import React from "react";
import Card from "../components/Card";
import blog from "../components/data/blog";
import Side from "../components/Side";

const Ai = () => {
  return (
    <div className="ai single">
      <h1>Artifial intelligence /</h1>
      <div className="content">
        <div className="allai">
          {blog.map((item, index) => {
            return <Card key={item.id} item={item} index={index} />;
          })}
        </div>
        <Side />
      </div>
    </div>
  );
};

export default Ai;
