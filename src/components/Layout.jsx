import Header from "./Header"
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#150E28] overflow-hidden relative">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout