import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Report } from "notiflix/build/notiflix-report-aio";
// import { useContext } from "react";
// import { AppContext } from "../../context/AppProvider";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/postSlice";
import { useState } from "react";

const schema = yup.object().shape({
  image: yup.mixed().test("required", "Choose an Image for blog", (value) => {
    return value && value.length;
  }),
  title: yup.string().required(),
});

const Create = () => {
  // const { auth } = useContext(AppContext);
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = async ({ title, image }) => {
    if (!description) {
      setError("Description is required");
      return;
    } else {
      setError("");
    }
    try {
      dispatch(addPost({ title, description, image })).unwrap();
      Report.success(
        "You made it!",
        "Blog created successfully ",
        "Ok",

        function cb() {
          window.location.reload(true);
          reset();
        }
      );
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="content">
      <h1>Create post</h1>
      <div className="add">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter title here..."
              {...register("title")}
            />
            <span className="error">{errors?.title?.message}</span>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <CKEditor
              name="description"
              editor={ClassicEditor}
              data={description}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
            <span className="error">{error}</span>
          </div>
          <div>
            <label htmlFor="">Image</label>
            <input type="file" {...register("image")} />
            <span className="error">{errors?.image?.message}</span>
          </div>
          <div>
            <button className="button">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
