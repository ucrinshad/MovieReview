import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev); // Toggle the sidebar state
    };

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-5 left-5 bg-indigo-500 text-white px-4 py-2 rounded-lg z-50"
            >
                {isOpen ? "Menu" : "Menu"}
            </button>

            {/* Sidebar */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-64 h-screen bg-gray-200 dark:bg-gray-800 shadow-lg p-4 z-40">
                    <div className="h-14 text-center py-4">
                        
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2 px-2 my-7">
                            <Link className="dark:hover:bg-slate-800 hover:bg-indigo-300 px-3 py-2 rounded-lg cursor-pointer" to={"/admin/movies"}>
                                Movies
                            </Link>
                            <Link className="dark:hover:bg-slate-800 hover:bg-indigo-300 px-3 py-2 rounded-lg cursor-pointer" to={"/admin/add-movie"}>
                                Add-Movie
                            </Link>
                            <Link className="dark:hover:bg-slate-800 hover:bg-indigo-300 px-3 py-2 rounded-lg cursor-pointer" to={"/admin/profile"}>
                                Profile
                            </Link>
                            <Link className="dark:hover:bg-slate-800 hover:bg-indigo-300 px-3 py-2 rounded-lg cursor-pointer" to={"/admin/users-list"}>
                                User Details
                            </Link>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
