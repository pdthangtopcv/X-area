import React from "react";
import { Outlet } from "react-router-dom";

const MiddleContentLayout = () => {
    return (
        <div className="flex align-middle items-center h-screen flex-col">
            <Outlet />
        </div>
    );
};

export default MiddleContentLayout;
