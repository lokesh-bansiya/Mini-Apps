import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Routes/Home";
import { LoginStocks } from "./Routes/LoginRoute";
import { PortfolioRoute } from "./Routes/Portfolio";
import { RegisterSignup } from "./Routes/RegisterRoute";
import { StockRoute } from "./Routes/Stocks";
import {Dashboard} from "./Routes/Dashboard";
import { PrivateRoute } from "./Context/PrivateRoute";

const AllRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path="/stocks" element={<PrivateRoute><StockRoute/></PrivateRoute>}/>
            <Route path="/portfolio" element={<PrivateRoute><PortfolioRoute/></PrivateRoute>}/>
            <Route path="/register" element={<RegisterSignup/>}/>
            <Route path="/login" element={<LoginStocks/>}/>
        </Routes>
    );
};

export {AllRoutes};