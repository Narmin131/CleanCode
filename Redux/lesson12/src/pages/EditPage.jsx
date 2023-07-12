import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EditBlogFunction } from "../redux/Actions";

const EditPage = () => {
  const { id } = useParams();

  const myBlogs = useSelector((store) => store.AppReducer);

  const mySelectedBlogForEdit = myBlogs.find((item) => item.id === id);

  console.log(mySelectedBlogForEdit);

  const [currentBlog, setCurrentBlog] = useState(mySelectedBlogForEdit);

  const location = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
    console.log(currentBlog);
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(EditBlogFunction(currentBlog));
    location("/blogs");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Blog id
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            disabled="disabled"
            defaultValue={currentBlog.id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            defaultValue={currentBlog.title}
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
            defaultValue={currentBlog.description}
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
            defaultValue={currentBlog.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditPage;
