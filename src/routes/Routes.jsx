/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Layout from "../layouts/Layout";
import Favorite from "../pages/Favorite/Favorite";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/favorite",
        element:<Favorite></Favorite>
      },
      {
        path: "/blog",
          element: <Blog></Blog>
      },
    ],
  }
]);

export default router;