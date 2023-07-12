import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Header from "../components/Header";
import PrivateRoute from "../routes/PrivateRoute";
import { ContextProvider } from "../context/GlobalState";
import Blogs from "../pages/Blogs";
import AddBlog from "../pages/AddBlog";
import { useSelector } from "react-redux";
import EditPage from "../pages/EditPage";

const AppRouter = () => {
  const myBLogs = useSelector((store) => store.AppReducer);

  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(myBLogs));
  }, [myBLogs]);

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/addBlog" element={<AddBlog />} />
            <Route path="/editBlog/:id" element={<EditPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default AppRouter;
