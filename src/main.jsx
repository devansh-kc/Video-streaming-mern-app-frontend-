import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Page/Register.jsx";
import Login from "./Page/Login.jsx";
import Layout from "./outlet/Layout.jsx";
import { HorizontalVideosPage, VerticalVideoPage } from "./Page/VideosPage.jsx";
import { VideoPlayerPage } from "./Page/VideoPlayerPage.jsx";
import ChannelPage from "./Page/ChannelPage.jsx";
import PlayListVideoPage from "./Page/PlayListVideoPage.jsx";
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
        path: "/channel",
        element: <ChannelPage />,
      },
      {
        path: "/channel/playlist/:id",
        element: <PlayListVideoPage />,

      },
      {
        path: "/videoPage",
        element: <VideoPlayerPage />,
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
