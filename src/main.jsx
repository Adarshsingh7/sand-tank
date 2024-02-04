/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./componenets/about.jsx";
import Works from "./componenets/Works.jsx";
import PostOverview from "./componenets/minicomponent/PostOverview.jsx";
import "./styles/main.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />}></Route>
      <Route path='about' element={<About />} />
      <Route path='works/' element={<Works />}>
        <Route path=':slug' element={<PostOverview />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
