import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/user/Home";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { NewMovies } from "../pages/user/NewMovies";
import { MovieDetailsPage } from "../pages/user/MovieDetailsPage";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { UserLayout } from "../layout/UserLayout";
import { Moviespage } from "../pages/user/MoviesPage";
import { ErrorPage } from "../pages/shared/errorPage";

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
                path:"profile",
                element:<h1>Profile</h1>,
            },
        ]
    },
    
]);