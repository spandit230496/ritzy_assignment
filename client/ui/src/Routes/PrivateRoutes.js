import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


const PrivateRoutes = () => {
    const loggedInStatus =Cookies.get('user')==null?localStorage.getItem("clientId"):Cookies.get('user');

    return <div>{loggedInStatus? <Outlet /> : <Navigate to="/login" />}</div>;

};

export default PrivateRoutes;