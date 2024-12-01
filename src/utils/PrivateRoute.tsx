import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { errorMessage } from "./SweetAlertEvent.tsx";
import { authCheck } from "./authCheck.tsx";

const PrivateRoute : React.FC = () => {
    if (authCheck() === 0){
        errorMessage("잘못된 접근입니다..");
        return <Navigate to="/" />
    }
    return <Outlet />;
};

export default PrivateRoute;