import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;