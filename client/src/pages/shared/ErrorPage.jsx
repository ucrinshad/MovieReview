import { Home } from "lucide-react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ErrorPage =  ({role="user"})=> {
    const url = {
        home:"/",
    };

    if(role == "admin"){
        url.home='/mentor/dashboard'
    }
    


    const navigate = useNavigate()
    return (<div>
        <h1>404 not found</h1>
        <h2 onClick={()=>navigate(url.home)}> Navigate To Home</h2>
        </div>
    )
}