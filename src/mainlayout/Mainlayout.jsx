import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Mainlayout = () => {

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Mainlayout;