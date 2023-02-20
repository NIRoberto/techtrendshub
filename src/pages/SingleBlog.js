import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Report } from "notiflix/build/notiflix-report-aio";
import Side from "../components/Side";
import Notiflix from "notiflix";
// import { AppContext } from "../context/AppProvider";
import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "../axios/axios";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { addComment, selectBlogById } from "../features/postSlice";

const schema = yup.object().shape({
  comment: yup.string().min(3).required(),
});
const SingleBlog = () => {
  const { aiId } = useParams();
  // const { blogs, auth } = useContext(AppContext);
  // const filtered = blogs.find((item) => item._id === aiId);

  const filtered = useSelector((state) => selectBlogById(state, aiId));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async ({ comment }) => {
    try {
      if (sessionStorage.getItem("token")) {
        dispatch(addComment({ aiId, comment })).unwrap();
      
      } else {
        Notiflix.Report.failure(
          "Failed",
          "Login  first to comment on this post",
          "Ok",
          function cb() {
            navigate("/login");
          }
        );
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  // if (!filtered) return;

  return (
    <div className="singleBlog">
      <div className="desc">
        <img src={filtered?.image} alt={filtered?.title} />
        <h1>{filtered?.title}</h1>
        <div className="description">{parse(filtered?.description)}</div>
      </div>
      <div className="comments">
        <h5>({filtered?.comments.length}) Comment</h5>
        <div className="comment">
          {filtered?.comments.map((item) => {
            return (
              <div key={item._id}>
                <h3>{item?.name}</h3>
                <p>{item?.comment}</p>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
