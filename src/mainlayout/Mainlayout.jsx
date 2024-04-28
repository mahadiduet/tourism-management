import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mainlayout = () => {

    return (
        <div className="w-11/12 mx-auto">
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Mainlayout;