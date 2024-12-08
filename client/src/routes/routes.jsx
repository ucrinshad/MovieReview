import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/user/Home";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { NewMovies } from "../pages/user/NewMovies";
import { MovieDetailsPage } from "../pages/user/MovieDetailsPage";

import { Login } from "../pages/shared/Login";
import { UserLayout } from "../layout/userLayout";
import { Moviespage } from "../pages/user/MoviesPage";
import { ErrorPage } from "../pages/shared/errorPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ProfilePage } from "../pages/user/profilePage";
import { AdminLayout } from "../layout/AdminLayout";
import Signup from "../pages/shared/Signup";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<UserLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"signup",
                element:<Signup/>,
            },
            {
                path:"login",
                element:<Login/>,
            },
            
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"newmovies",
                element:<NewMovies/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            },
            {
                path:"movies",
                element:<Moviespage/>,
            },
            {
                path:"movies/movieDetails/:id",
                element:<MovieDetailsPage/>,
            },
            {
                element:<ProtectedRoutes/>,
                path:"user",
                children:[
                    {
                        path:"profile",
                        element:<ProfilePage />
                    },
                    {
                        path:"wishlist",
                        element:<h1>wishlist</h1>
                    }
                ]
            }
            
        ]
    },
    {
        path:"/admin",
        element:<AdminLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"signup",
                element:<Signup role="admin"/>,
            },
            {
                path:"login",
                element:<Login role="admin"/>,
            },
            
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"newmovies",
                element:<NewMovies/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            },
            {
                path:"movies",
                element:<Moviespage/>,
            },
            {
                path:"movies/movieDetails/:id",
                element:<MovieDetailsPage/>,
            },
            {
                element:<ProtectedRoutes/>,
                path:"admin",
                children:[
                    {
                        path:"profile",
                        element:<ProfilePage />
                    },
                    {
                        path:"wishlist",
                        element:<h1>wishlist</h1>
                    }
                ]
            }
            
        ]
    },
    
]);