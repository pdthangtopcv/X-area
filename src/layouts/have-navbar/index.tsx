import { Outlet } from "react-router-dom";

const HaveNavbarLayout = () => {
    return (
        <div className="site-layout-content">
            <Outlet />
        </div>
    );
};

export default HaveNavbarLayout;
