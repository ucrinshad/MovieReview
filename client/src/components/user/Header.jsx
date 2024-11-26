import React from "react";
export const Header = ()=> {
    return (
    <div className="px-20 py-3 flex w-100 items-center justify-between bg-red-600">
        <div className="text-3xl-">Logo</div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>About</li>
            </ul>
        </nav>
        <div>
            <button>Join us</button>
        </div>
    </div>
)};