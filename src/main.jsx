import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJob/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/statistics',
        element:<Statistics/>
      },
      {
        path: '/applied',
        element:<AppliedJobs/>
      },
      {
        path: '/blog',
        element:<Blogs/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
