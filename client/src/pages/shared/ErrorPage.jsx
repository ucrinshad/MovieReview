import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ErrorPage =  ()=> {

    const navigate = useNavigate()
    return (<div>
        <h1>404 not found</h1>
        <h2 onClick={()=>navigate('/')}> Navigate To Home</h2>
        </div>
    )
}