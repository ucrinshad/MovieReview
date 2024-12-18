import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutesAdmin = () => {
  const { isAdminAuth } = useSelector((state) => state.admin);
  const navigate = useNavigate();

  if(!isAdminAuth){
    navigate("/login");
    return;
  }

  return isAdminAuth &&<Outlet />;
};
