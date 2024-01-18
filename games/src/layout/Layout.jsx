import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
