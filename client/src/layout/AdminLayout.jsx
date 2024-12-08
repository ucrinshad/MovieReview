import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { axiosIstance } from "../.config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData, saveUserData } from "../redux/features/userSlice";
import { AdminHeader } from "../components/admin/AdminHeader";

export const AdminLayout = () => {

    const {isAdminAuth,adminData} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const location = useLocation();
    
    


    const checkAdmin = async()=> {
        try {
            const response = await axiosIstance({
                method:"GET",
                url:"/admin/check-adimn"
            })

            dispatch(saveAdminData());
            console.log(response, '=====checkadmin response');
            
        } catch (error) {
            dispatch(clearAdminData());
            console.log(error);
            console.log(error, '=====checkadmin error response');
        }
    }

    console.log(isAdminAuth, 'isAdminAuth');
    
    console.log(adminData, 'adminData');
    

    useEffect(() =>{
        checkAdmin()
    },[location.pathname])


    return (
        <div>
            {isAdminAuth? <AdminHeader/> : <Header />
        }
            
            <div className="min-h-96"><Outlet/></div>
            
            <Footer />
        </div>
    )
};