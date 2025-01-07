import React, { useEffect, useState } from "react";
import { axiosIstance } from "../../.config/axiosInstance";

import { MovieSkelton } from "../../components/user/Skelton";
import { UseFetch } from "../../hooks/UseFetch";
import { MovieCard, UserCard } from "../../components/user/card";


export const UsersList = () => {
    const [users, isLoading, error] = UseFetch('/admin/users-list'); // Update the URL to the correct endpoint

    if (isLoading) {
        return <MovieSkelton />; // Show loading skeleton if data is being fetched
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Display error if there's any
    }

    return (
        <div>
            {users && users.length > 0 ? (
                users?.map((value) => (
                    <UserCard key={value._id} user={value} /> // Render UserCard component for each user
                ))
            ) : (
                <div>No users found.</div> // Show message if no users are found
            )}
        </div>
    );
};