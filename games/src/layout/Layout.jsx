import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
