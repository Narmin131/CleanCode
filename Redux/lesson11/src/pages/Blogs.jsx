import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const myBLogs = useSelector((store) => store.AppReducer);

  return (
    <div className="container">
      <div className="row">
        {myBLogs.map((item, index) => {
          return <BlogCard myBlog={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
