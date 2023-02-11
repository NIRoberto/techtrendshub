import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Report } from "notiflix/build/notiflix-report-aio";
import Side from "../components/Side";
import { AppContext } from "../context/AppProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../axios/axios";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  comment: yup.string().min(3).required(),
});
const SingleBlog = () => {
  const { aiId } = useParams();
  const { blogs, auth } = useContext(AppContext);
  const filtered = blogs.find((item) => item._id === aiId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post(`/comment/${aiId}`, data, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      Report.success("You made it!", "Comment posted", "Ok", {
        timeout: 2000,
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };
  // if (!filtered) return;

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
            console.log(item);
            return (
              <div>
                <h3>{item?.name}</h3>
                <p>{item?.comment}</p>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Full name</label>
            <input
              type="text"
              name="name"
              {...register("name")}
              placeholder="Enter name here..."
            />
            <span className="error">{errors?.name?.message}</span>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              {...register("email")}
              placeholder="Enter email here..."
            />
            <span className="error">{errors?.email?.message}</span>
          </div>
          <div>
            <label htmlFor="comment">comment</label>
            <textarea
              name="comment"
              {...register("comment")}
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <span className="error">{errors?.comment?.message}</span>
          </div>
          <br />
          <button>Post comment</button>
        </form>
      </div>
      <Side />
    </div>
  );
};

export default SingleBlog;
