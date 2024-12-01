import React, { useState } from "react";
import { Carrousel } from "../../components/user/carrousel";

export const Home = ()=> {

    const [user,setUser] = useState('')

    return <div className="px-20">
        <section className="min-h-96 flex gap-20 px-20 py-10 w-full">
            <div className="w-8/12">
                <h1 className="font-bold text-4xl my-5">Welcome {user}</h1>
                <p className="text-xl font-normal">lorum ipsum dolor sit aamet consectotr adipsicing elite. Nobis aspernatur ratioine sint odit minus sampe cupdate neccessitatibate nemo, laborous perspicatus vero blanditis , ut corrupt
                </p>
            </div>
            <div className="w-5/12">
                <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949" alt="Home-image" />
            </div>
        </section>
        <section className="my-16">
            <Carrousel/>
        </section>
    </div>;
};