import React from "react";
import { useParams } from "react-router-dom";
import blog from "../components/data/blog";
import Side from "../components/Side";

const SingleBlog = () => {
  const { aiId } = useParams();
  console.log(typeof aiId);
  const filtered = blog.find((item) => item.id === Number(aiId));
  if (!filtered) return;
  const { image, description, title, comments } = filtered;
  return (
    <div className="singleBlog">
      <div className="desc">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <div className="description">{description}</div>
      </div>
      <div className="comments">
        <h5>({comments.length}) Comment</h5>
        <div className="comment">
          {filtered.comments.map((item) => {
            return (
              <div>
                <h3>{item.username}</h3>
                <p>{item.comment}</p>
              </div>
            );
          })}
        </div>

        <form>
          <div>
            <label htmlFor="email">Full name</label>
            <input type="text" placeholder="Enter name here..." />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter email here..." />
          </div>
          <div>
            <label htmlFor="comment">comment</label>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
          </div>
          <button>Post comment</button>
        </form>
      </div>
      <Side />
    </div>
  );
};

export default SingleBlog;
