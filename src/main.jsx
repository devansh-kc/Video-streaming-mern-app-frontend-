import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Page/Register.jsx";
import Login from "./Page/Login.jsx";
import HomePage from "./Page/HomePage.jsx";
import Layout from "./outlet/Layout.jsx";
import { HorizontalVideosPage, VerticalVideoPage } from "./Page/VideosPage.jsx";
import { VideoPage } from "./Page/VideoPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HorizontalVideosPage />,
      },
      {
        path: "/videoPage",
        element: <VideoPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
