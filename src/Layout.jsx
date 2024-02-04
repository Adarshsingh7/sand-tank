/** @format */

import Header from "./componenets/header.jsx";
import Footer from "./componenets/footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
