import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Videos from "./pages/Videos";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Not Found🥲</h1>,
    children: [
      { index: true, element: <Hoem /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetail /> },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
