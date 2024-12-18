import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { axiosIstance } from "../.config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData, saveUserData } from "../redux/features/userSlice";
import { AdminHeader } from "../components/admin/AdminHeader";
import { AdminFooter } from "../components/admin/AdminFooter";
import { Sidebar } from "../components/admin/Sidebar";
import { clearAdminData, saveAdminData } from "../redux/features/adminSlice";

export const AdminLayout = () => {
//const [isAdminAuth,setIsAdminAuth]=useState(true)

const {isAdminAuth,adminData} = useSelector((state)=>state.admin);
    const dispatch = useDispatch();
    const location = useLocation();
    
    


    const checkAdmin = async()=> {
        try {
            const response = await axiosIstance({
                method:"GET",
                url:"/admin/check-admin"
            })

            dispatch(saveAdminData());
            console.log(response, '=====checkuser response');
            
        } catch (error) {
            dispatch(clearAdminData());
            console.log(error);
            console.log(error, '=====checkuser error response');
        }
    }

    useEffect(() =>{
        checkAdmin()
    },[location.pathname])
    return (
        <div className="flex flex-row min-h-dvh ">
            {isAdminAuth && (
            <div className="w-2/12 shadow-xl">
                <Sidebar />
            </div> 
        )}
            <div className="w-full">
            <AdminHeader/>
            <div className="min-h-96">
            <Outlet />
            </div>
            
            <AdminFooter/>
            </div>
            
        </div>
    )
       
};