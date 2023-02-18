import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  allBlogsError,
  allBlogsStatus,
  allSelectedPosts,
  fetchBlogs,
  selectBlogById,
} from "../features/postSlice";
// import blog from "./data/blog";
import SingleCard from "./SingleCard";

const SingleList = () => {
  const blogs = useSelector(allSelectedPosts);
  // const status = useSelector(allBlogsStatus);
  // const error = useSelector(allBlogsError);

  const f = useSelector((state) =>
    selectBlogById(state, "63e1668fd5f5290e8c4b0f91")
  );
  console.log(f)
  // const { blogs } = useContext(AppContext);
  return (
    <div className="full_category">
      <h4 className="category">Artificial intelligence</h4>
      {blogs.map((item, index) => {
        if (index < 3) {
          return <SingleCard key={index} data={item} />;
        }
      })}
    </div>
  );
};

export default SingleList;
