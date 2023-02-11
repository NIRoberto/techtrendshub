import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../axios/axios";
import { Report } from "notiflix/build/notiflix-report-aio";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

const schema = yup.object().shape({
  image: yup.mixed().test("required", "Choose an Image for blog", (value) => {
    return value && value.length;
  }),
  title: yup.string().required(),
  description: yup.string().required(),
});

const Create = () => {
  const { auth } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ image, title, description }) => {
    try {
      const formData = new FormData();
      formData.append("image", image[0]);
      formData.append("title", title);
      formData.append("description", description);
      await axios.post("/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      Report.success("You made it!", "Blog created successfully ", "Ok", {
        timeout: 2000,
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
      reset();
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
            {/* {...register("description")} */}
            <textarea
              name="description"
              id=""
              {...register("description")}
            ></textarea>
            <span className="error">{errors?.description?.message}</span>
            {/* <CKEditor
              editor={ClassicEditor}
              data=""
              name="description"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
              {...register("description")}
            /> */}
            {/* <textarea
              name="description"
              id="desc"
              {...register("description")}
            ></textarea> */}
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