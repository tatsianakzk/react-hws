import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Menu from "./Components/Pages/Menu/Menu";
import OrderPage from "./Components/Pages/Order/Order";
import SuccessOrder from "./Components/Pages/SuccessOrder/SuccesOrder"


const AppRoutes = () => {
    const isAuthenticated = !!localStorage.getItem("authToken");

    return (


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route
                path="/order"
                element={isAuthenticated ? <OrderPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/successOrder"
                element={isAuthenticated ? <SuccessOrder /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>


    );
};

export default AppRoutes;