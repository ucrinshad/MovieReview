import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { isUserAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuth) {
      navigate("/login");
    }
  }, [isUserAuth, navigate]); // Ensure dependencies are added

  // Prevent rendering the Outlet until authentication is confirmed
  if (!isUserAuth) {
    return null; // Render nothing or a loading spinner while redirecting
  }

  return <Outlet />;
};
