import React from "react";

const BlogCard = ({myBlog}) => {
  return (
    <>
      <div className="col-lg-4 p-2">
        <div className="card" style={{ width: "100%", height: "100%" }}>
          <img src={myBlog.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{myBlog.title}</h5>
            <p className="card-text">{myBlog.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
