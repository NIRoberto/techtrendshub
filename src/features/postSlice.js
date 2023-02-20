import axios from "../axios/axios";
import { Report } from "notiflix/build/notiflix-report-aio";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  status: "idle",
  error: null,
};
export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async () => {
  try {
    const response = await axios.get("/blog");
    return response.data.blogs;
  } catch (error) {
    return error.response;
  }
});
const formAdd = (t, d, i) => {
  const formData = new FormData();
  formData.append("image", i[0]);
  formData.append("title", t);
  formData.append("description", d);
  return formData;
};
export const addPost = createAsyncThunk(
  "blog/createBlogs",
  async ({ title, description, image }) => {
    try {
      const response = await axios.post(
        "/blog",
        formAdd(title, description, image),
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      Report.success(
        "You made it!",
        "Blog created successfully ",
        "Ok",

        function cb() {
          window.location.reload(true);
          //  reset();
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
export const addComment = createAsyncThunk(
  "blog/createComment",
  async ({ aiId, comment }) => {
    try {
      const response = await axios.post(
        `/comment/${aiId}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      Report.success("You made it!", "Comment posted", "Ok", function cb() {
        window.location.reload(true);
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
export const updatePost = createAsyncThunk(
  "blog/updateBlogs",
  async ({ _id, title, description, image }) => {
    try {
      const response = await axios.patch(
        `/blog/${_id}`,
        formAdd(title, description, image),
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      Report.success(
        "Success",
        "Blog updated successfully ",
        "Ok",
        function cb() {
          window.location.reload(true);
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
export const deletePost = createAsyncThunk(
  "blog/deleteBlogs",
  async ({ _id }) => {
    try {
      const response = await axios.delete(`/blog/${_id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      return response.status;
    } catch (error) {
      return error;
    }
  }
);
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.blogs.push(action.payload);
      },
      prepare(title, description, image) {
        return {
          payload: {
            title,
            description,
            image,
          },
        };
      },
    },
  },
  extraReducers(builders) {
    builders
      .addCase(fetchBlogs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "suceeded";
        state.blogs = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.status = "suceeded";
        // state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        // console.log(action.payload);
        state.blogs.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        // state.status = "succeeded";
        if (!action.payload?.id) return;
        const { _id } = action.payload;
        action.payload.creatededAt = new Date().toISOString();
        const blogs = state.blogs.filter((blog) => blog._id !== _id);
        state.blogs = [...blogs, action.payload];
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        // state.status = "succeeded";
        if (!action.payload?.id) return;
        const { _id } = action.payload;
        action.payload.creatededAt = new Date().toISOString();
        const blogs = state.blogs.filter((blog) => blog._id !== _id);
        state.blogs = blogs;
      });
  },
});
export const { blogAdded } = blogSlice.actions;
export const allSelectedPosts = (state) => state.blogs.blogs;
export const allBlogsStatus = (state) => state.blogs.status;
export const allBlogsError = (state) => state.blogs.error;
export const selectBlogById = (state, id) =>
  state.blogs.blogs.find((blog) => {
    return blog._id === id;
  });

export default blogSlice.reducer;
