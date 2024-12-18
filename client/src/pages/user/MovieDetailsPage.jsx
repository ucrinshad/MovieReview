import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosIstance } from "../../.config/axiosInstance";
import { UseFetch } from "../../hooks/UseFetch";
import toast from "react-hot-toast";


export const MovieDetailsPage = ()=> {
    const {id} = useParams()

   const [MovieDetails, isLoading ,error ] = UseFetch(`/movie/get-movieDetails/${id}`)
    
   const handleAddToWishlist = async ()=> {
    try {
        const response = await axiosIstance({
            url:"/wishlist/add-to-wishlist",
            data:{ movieId:MovieDetails?._id},
            method:"POST"
        })
        toast.success("Movie added to wishlist")


    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message)
        
        
    }
   }


   console.log("profile===", MovieDetails);
    return <div>
        <div>
            <h1>{MovieDetails?.title}</h1>
        </div>
        <div>
            <img src={MovieDetails?.image} alt="" />
        </div>

        <button className="btn btn-success" onClick={handleAddToWishlist}>Add to Fvorite </button>
    </div>;
};