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
import UploadVideoModalComponent from "./components/Upload Video Component/UploadVideoModalComponent.jsx";
import EditInfoPage from "./Page/EditInfoPage.jsx";
import AdminPage from "./Page/AdminPage.jsx";
import EditVideoModalPage from "./Page/EditVideoModalPage.jsx";
import PrivacyPage from "./Page/PrivacyPage.jsx";
import TermsAndConditionPage from "./Page/TermsAndConditionsPage.jsx";
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
        path:"/query",
        element:<VerticalVideoPage/>

      },
      {
        path: "/channel",
        element: <ChannelPage />,
        children: [
          {
            path: "/channel/videoUpload",
            element: <UploadVideoModalComponent />,
          },
        ],
      },
      {
        path: "/editInfo",
        element: <EditInfoPage />,
      },
      {
        path: "/channel/playlist/:id",
        element: <PlayListVideoPage />,
      },
      {
        path: "/videoPage/:id",
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
      {
        path: "/admin",
        element: <AdminPage />,

      },
      {
        path:"/privacyPolicy",
        element:<PrivacyPage/>
      },
      {
        path:"/termsandconditions",
        element:<TermsAndConditionPage/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
