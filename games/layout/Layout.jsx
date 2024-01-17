import { Outlet } from "react-router-dom";
import Footer from "../src/components/footer/Footer.jsx";
import Header from "../src/components/Header/Header.jsx";


const Layout = () => {

    return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
    )
}

export default Layout;