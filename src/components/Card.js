import React from "react";
import { AiOutlineComment, AiOutlineUser } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { title, id, comments, image, description, date } = item;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div>
        <div className="blog_text">
          <div className="content">
            <span>
              <AiOutlineUser className="icon" />
              <span>admin</span>
            </span>
            <span>
              <MdDateRange className="icon" />
              <span>{date}</span>
            </span>
            <span className="comment">
              <AiOutlineComment />
              <span>{comments.length} Comment</span>
            </span>
          </div>
          <div className="title">
            <Link to={`/ai/${id}`}>
              <h3>{title}</h3>
            </Link>
          </div>
          <div className="description">{description}</div>
        </div>
        <Link to={`/ai/${id}`}>
          <button className="btn">Read more...</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
