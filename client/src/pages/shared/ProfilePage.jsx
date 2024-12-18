import React from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { axiosIstance } from "../../.config/axiosInstance";
import { Navigate, useNavigate } from "react-router-dom";


export const ProfilePage = ({role='user'}) => {
    
    const user = {
        role:"user",
        profile_api : "/user/profile",
        logout_api : "/user/logout",
        
    };
    
    if(role === "admin") {
        user.role = "admin",
        (user.profile_api = "/admin/profile"),
        (user.logout_api = "/admin/logout")
        
        
    } 
    
    const [profile, isLoading, error] = UseFetch(user.profile_api);
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
        <img src={profile?.profilePic} alt="image" />
    </div>

    <button className="btn btn-warning" onClick={userLogout}>
        Log out
    </button>
</div>
};