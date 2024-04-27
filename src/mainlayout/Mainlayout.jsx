import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Mainlayout = () => {

    return (
        <div className="w-11/12 mx-auto">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Mainlayout;