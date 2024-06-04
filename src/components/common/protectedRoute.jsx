import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  const location = useLocation();

  if (!auth.getCurrentUser()) {
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  }

  return Component ? (
    <Component {...rest} />
  ) : render ? (
    render(rest)
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
