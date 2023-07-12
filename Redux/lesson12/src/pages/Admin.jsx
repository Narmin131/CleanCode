import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RemoveAllBlogsFunction, RemoveBlogFunction } from "../redux/Actions";

const Admin = () => {
  const myBLogs = useSelector((store) => store.AppReducer);

  const dispatch = useDispatch();

  return (
    <>
      <NavLink to="/addBlog" className="btn btn-primary">
        Add new blog
      </NavLink>
      <button
        onClick={() => dispatch(RemoveAllBlogsFunction())}
        className="btn btn-danger"
      >
        Clear All blogs
      </button>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">image</th>
              <th scope="col">title</th>
              <th scope="col">description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {myBLogs.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>
                    <img src={item.image} alt="" style={{ width: "120px" }} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <NavLink
                      className="btn btn-warning"
                      to={`/editBlog/${item.id}`}
                    >
                      edit
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(RemoveBlogFunction(item.id))}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
