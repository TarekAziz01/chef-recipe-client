/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Layout from "../layouts/Layout";
import Favorite from "../pages/Favorite/Favorite";
import Blog from "../pages/Blog/Blog";
import ChefDetail from "../pages/ChefDetail/ChefDetail";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../component/NotFound/NotFound";

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
        path: "/favorite",
        element: <Favorite></Favorite>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetail></ChefDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-tarekaziz01.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;