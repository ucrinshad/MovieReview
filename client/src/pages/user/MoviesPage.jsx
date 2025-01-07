import React, { useEffect, useState } from "react";
import { axiosIstance } from "../../.config/axiosInstance";

import { MovieSkelton } from "../../components/user/Skelton";
import { UseFetch } from "../../hooks/UseFetch";
import { MovieCard } from "../../components/user/card";


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