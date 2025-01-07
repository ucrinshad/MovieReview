import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { axiosIstance } from "../../.config/axiosInstance";
import { UseFetch } from "../../hooks/UseFetch";
import toast from "react-hot-toast";
import { ReviewCard } from "../../components/user/ReviewCard";
import { ReviewForm } from "../../components/user/ReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../../redux/features/userSlice";


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


   const { isUserAuth, userData } = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const location = useLocation();

   const checkUser = async () => {
       try {
           const response = await axiosIstance({
               method: "GET",
               url: "/user/check-user",
               withCredentials: true,  // Ensure credentials (cookies) are sent
           });

           dispatch(saveUserData(response.data));  // Save user data to Redux store
           console.log(response, '=====checkuser response');
       } catch (error) {
           dispatch(clearUserData());
           console.log(error, '=====checkuser error response');
       }
   };

   // Trigger checkUser only once when user is not authenticated
   useEffect(() => {
       if (!isUserAuth) {
           checkUser();
       }
   }, [isUserAuth]);  // Dependency on isUserAuth

   


   console.log("profile===", MovieDetails);
    return <div>
        <section>
        <div>
            <h1>{MovieDetails?.title}</h1>
        </div>
        <div>
            <img src={MovieDetails?.image} alt="" />
        </div>
        <div>
            <h2>{MovieDetails?.duration}</h2>
        </div>
        <div>
            <h2>{MovieDetails?.description}</h2>
        </div>
        <div>
            <h2>{MovieDetails?.cast}</h2>
        </div>
        <div>
            <h2>{MovieDetails?.genre}</h2>
        </div>
        </section>

        <section>
        <button className="btn btn-success" onClick={handleAddToWishlist}>Add to Fvorite </button>
        </section>

       <section>
        <h2>REVIEWS</h2>
        {!isUserAuth?(
                <ReviewCard/>
                ):(
                    <>
                    {<ReviewForm/>}
                    </>
                )}
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
       </section>

        
        

        
    </div>;
};