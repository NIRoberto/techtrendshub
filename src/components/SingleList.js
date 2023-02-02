import React from "react";
import blog from "./data/blog";
import SingleCard from "./SingleCard";

const SingleList = () => {
  return (
    <div className="full_category">
      <h4 className="category">Artificial intelligence</h4>
      {blog.map((item, index) => (
        <SingleCard key={index} data={item} />
      ))}
    </div>
  );
};

export default SingleList;
