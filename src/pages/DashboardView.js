import React from "react";
import { useState } from "react";
import blog from "../components/data/blog";
const DashboardView = () => {
  const [add, setAdd] = useState(false);
  return (
    <div className="content">
      <div className="navigation">
        <button onClick={() => setAdd(false)}>All post</button>
        <button onClick={() => setAdd(true)}>Add post</button>
      </div>
      {add ? (
        <div className="add">
          <form>
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" placeholder="Enter title here..." />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea name="description" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <label htmlFor="">Image</label>
              <input type="file" />
            </div>
            <div>
              <button>Create</button>
            </div>
          </form>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>N</th>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
            {blog.map((item, index) => {
              const { title, date } = item;
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{title}</td>
                  <td>{date}</td>
                  <td className="actions">
                    <span className="edit">Edit</span>
                    <span className="delete">Delete</span>
                  </td>
                </tr>
              );
            })}
            {/* </tr> */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DashboardView;
