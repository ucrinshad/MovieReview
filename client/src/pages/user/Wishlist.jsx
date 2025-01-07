import React from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { WishlistCards } from "../../components/user/card";


export const Wishlist = () => {
    const [wishlistDetails, isLoading, error] = UseFetch("/wishlist/get-wishlist");

    return (
        <div>
            <h2>Wishlist</h2>
            <div>
                {wishlistDetails?.movies?.map((value) => (
                    <WishlistCards key={value?.movieId?._id} item={value?.movieId} />
                ))}
            </div>
        </div>
    );
};
