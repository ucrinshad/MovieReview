import React, { useEffect, useState } from "react";
import { axiosIstance } from "../../.config/axiosInstance";
import { MovieCard } from "../../components/user/Card";
import { MovieSkelton } from "../../components/user/Skelton";
import { UseFetch } from "../../hooks/UseFetch";

export const Moviespage = ()=> {
    
    const [movies,isLoading,error]= UseFetch('/movie/get-all-movies')

    return (<div>
        {isLoading?(
        <MovieSkelton/>
        ):(
            <>
            {movies?.map((value)=>(
                <MovieCard key={value._id} movie={value}/>
            ))}
            </>
        )}
            

    </div>
    )
};