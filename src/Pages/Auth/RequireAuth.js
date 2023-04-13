import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { user } from "../../Context/Context";

function RequireAuth() {
  const user = useContext(user);
  console.log(user);
  const location =useLocation
  return user.auth.Detiles ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} replace to="/login" />
  );
}

export default RequireAuth;
