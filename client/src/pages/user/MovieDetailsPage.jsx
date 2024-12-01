import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosIstance } from "../../.config/axiosInstance";


export const MovieDetailsPage = ()=> {
    const [movieDetails, setMovieDtails] = useState({})
    const {id} = useParams()

    const fetchMovieDetails = async () =>{
        try {
            const response = await axiosIstance({
                url:`/movie/get-movieDetails/${id}`,
            });
            setMovieDtails(response?.data?.data)

        } catch (error) {
            console.log(error);   
        }
    };

    console.log('movieDetails====',movieDetails);
    

    useEffect(()=>{
        fetchMovieDetails()
    },[])
    
    
    return <div>MovieDetailsPage</div>;
};