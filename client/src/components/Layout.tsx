import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-14">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
