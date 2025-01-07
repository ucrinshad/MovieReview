//import { CircleUser } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Darkmode } from "../shared/Darkmode";
//import { Darkmode } from "../shared/Darkmode";

//export const AdminHeader = () => {
    //return (
       // <div className="px-20 py-3 flex w-100 items-center w-full h-24 justify-between shadow-2xl  bg-yellow-500 ">
        //<Link to={"/"}><div className="text-3xl font-bold">Logo</div>
        //</Link>
        
        //<nav>
            //<ul className="flex gap-16 items-center font-bold">
                //<Link to={"/"}>Home</Link>
                //<Link to={"/about"}>About</Link>
                //<Link to={"/movies"}>Movies</Link>
                
            //</ul>
        //</nav>
        //<div className="form-control">
      //<input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    //</div>
        //<div className="flex gap-14 items-center ">
            
            //<Darkmode/>
            //<Link to={'/user/profile'}>
            //<CircleUser/></Link>
        //</div>
        //</div>)
//}

export const AdminHeader = () => {
    return(
        <div className="navbar bg-indigo-700">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        {/*<svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>*/}
      </div>
      
      {/*<ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul> */}
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-end">

  <button className="btn btn-ghost btn-circle">
    <Darkmode sample="2"/>
  </button>
    <button className="btn btn-ghost btn-circle">
       
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
    )
}

