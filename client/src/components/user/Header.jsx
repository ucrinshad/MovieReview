import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Darkmode } from "../shared/Darkmode";


export const Header = ()=> {

    const navigate = useNavigate()
    return (
    <div className="px-20 py-3 flex w-100 items-center w-full h-24 justify-between shadow-2xl bg-indigo-600">
        <Link to={"/"}><div className="text-3xl font-bold">Logo</div>
        </Link>
        
        <nav>
            <ul className="flex gap-16 items-center font-bold">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/movies"}>Movies</Link>
            </ul>
        </nav>
        <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
        <div className="flex items-center gap-10">
            <Darkmode/>
            <button onClick={()=>navigate('/signup')} className="btn btn-primary">Join us</button>
        </div>
    </div>
)};