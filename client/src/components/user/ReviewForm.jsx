import React from "react";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form"
import {  Link, useNavigate } from "react-router-dom";
import { axiosIstance } from "../../.config/axiosInstance";




export const ReviewForm = ({ role = "user"})=> {
    const {register, handleSubmit} = useForm();
    const navigate =useNavigate()

    const user = {
        role:"user",
        login_api : "/user/login",
        profile_route : "/user/profile",
        signup_route : "/signup",
        review_route : "review/add-review"
    };

    if(role === "admin") {
        user.role = "admin",
        (user.login_api = "/admin/login"),
        (user.profile_route = "/admin/profile"),
        (user.signup_route = "/admin/signup")

    }

    console.log(user,"===user");
    

    const onSubmit = async (data) => {
        try {
            console.log(data,"===data");
            
            const response = await axiosIstance({ method:"POST", url: user.review_route, data});
            console.log(response, "====response");
            toast.success(" success");
            
            
        } catch (error) {
            toast.error(" failed")
            console.log(error);
            
            
        }
        
    }

    return (
        <>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input textarea row={20} type="text" {...register("review")} placeholder="text" className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <input textarea row={50} type="text" {...register("review")} placeholder="text" className="input input-bordered" required />
                    


                    <button className="btn btn-primary"><input type="submit" value={"Add Review"} /></button>
                    
                </form>
            </>


    )
};