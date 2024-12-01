import React, { useEffect, useState } from "react";
import { axiosIstance } from "../.config/axiosInstance";

export const UseFetch = (url)=> {
    const [data,setData] = useState(null)
    const[isLoading,setIsLoading] = useState(true)
    const[error, setError] = useState(null)
    const  fetchData = async()=> {
        try {
            const response  = await axiosIstance({
                url:url
            });
            
            setTimeout(() => {
                
                setData(response?.data?.data);
            }, 1000);
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }finally{
            setIsLoading(false)
        }
        
    };

        
    useEffect(()=>{
        fetchData()
    },[]);

    return [data,isLoading,error]
}