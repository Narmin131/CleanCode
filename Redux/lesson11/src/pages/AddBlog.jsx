import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AddBlogFunction } from "../redux/Actions";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const [blog, setBlog] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    image: "",
  });

  const location = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(AddBlogFunction(blog));
    location("/blogs");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              name="image"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
