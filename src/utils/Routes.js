import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./util";

// handle the private routes
export const PrivateRoutes = () => {
  return getToken() ? <Outlet /> : <Navigate to="/admin/index/login" />;
};




// handle the public routes
export const PublicRoutes = () => {
  return !getToken() ? <Outlet /> : <Navigate to="/" />;
};
