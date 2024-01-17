import { Link, Outlet } from "react-router-dom";
import Footer from "../src/components/footer/Footer.jsx";
import Header from "../src/components/header/Header";


const Layout = () => {

    const paths = [
        {
            path: '/',
            name: 'Accueil'
        }
    ]
    return (
    <>
        <div className="flex gap-10 w-full">
            <Link to={paths.path}>Logo</Link>
            <Header/>
        </div>
        <Outlet/>
        <Footer/>
    </>
    )
}

export default Layout;