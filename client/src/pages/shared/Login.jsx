import React from "react";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form"
import {  useNavigate } from "react-router-dom";
import { axiosIstance } from "../../.config/axiosInstance";




export const Login = ({ role = "user"})=> {
    const {register, handleSubmit} = useForm();
    const navigate =useNavigate()

    const user = {
        role:"user",
        login_api : "/user/login",
        profile_route : "/user/profile",
        signup_route : "/signup"
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
            
            const response = await axiosIstance({ method:"POST", url: user.login_api, data});
            console.log(response, "====response");
            toast.success("Login success");
            navigate(user.profile_route)
            
        } catch (error) {
            toast.error("Login failed")
            console.log(error);
            
            
        }
        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body"   onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={user.signup_route}>New User ?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
};