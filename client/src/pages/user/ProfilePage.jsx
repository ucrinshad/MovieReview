import React from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { axiosIstance } from "../../.config/axiosInstance";
import { Navigate, useNavigate } from "react-router-dom";


export const ProfilePage = () => {
    const [profile, isLoading, error] = UseFetch("/user/profile");
    const navigate = useNavigate()
    
    console.log("profile===", profile);

    const userLogout = async () =>{
        try {
            const response = await axiosIstance({ method:"PUT", url:"/user/logout"});
            navigate("/")
        } catch (error) {
            console.log(error);
            
            
        }
    }
    
    
    return <div>
        <div>
            <h1 className="capitalize text-2xl">{profile?.name}</h1>
            <img src={profile?.profilePic} alt="" />
        </div>
        <button className="btn btn-warning" onClick={userLogout}>Log-out</button>
    </div>
};