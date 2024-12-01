import { CircleUser } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Darkmode } from "../shared/Darkmode";

export const UserHeader = () => {
    return (
        <div className="px-20 py-3 flex w-100 items-center w-full h-24 justify-between shadow-2xl  bg-yellow-500 ">
        <Link to={"/"}><div className="text-3xl font-bold">Logo</div>
        </Link>
        
        <nav>
            <ul className="flex gap-16 items-center font-bold">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/movies"}>Movies</Link>
                <Link to={"/mymovies"}>MyMovies</Link>
            </ul>
        </nav>
        <div className="flex gap-14 items-center ">
            <Darkmode/>
            <Link to={'/user/profile'}>
            <CircleUser/></Link>
        </div>
        </div>)
}