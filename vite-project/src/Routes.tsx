import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Menu from "./Components/Pages/Menu/Menu";
import OrderPage from "./Components/Pages/Order/Order";
import SuccessOrder from "./Components/Pages/SuccessOrder/succesOrder";


const AppRoutes = () => {
    const isAuthenticated = !!localStorage.getItem("authToken");

    return (

        <Routes>

            <Route
                path="/"
                element={
                    isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/successOrder" element={<SuccessOrder />} />

        </Routes>
    );
};

export default AppRoutes;