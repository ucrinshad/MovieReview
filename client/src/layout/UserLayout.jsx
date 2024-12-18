import React, { useEffect } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { axiosIstance } from "../.config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData, saveUserData } from "../redux/features/userSlice";

export const UserLayout = () => {
    const { isUserAuth, userData } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();

    const checkUser = async () => {
        try {
            const response = await axiosIstance({
                method: "GET",
                url: "/user/check-user",
                withCredentials: true,  // Ensure credentials (cookies) are sent
            });

            dispatch(saveUserData(response.data));  // Save user data to Redux store
            console.log(response, '=====checkuser response');
        } catch (error) {
            dispatch(clearUserData());
            console.log(error, '=====checkuser error response');
        }
    };

    // Trigger checkUser only once when user is not authenticated
    useEffect(() => {
        if (!isUserAuth) {
            checkUser();
        }
    }, [isUserAuth]);  // Dependency on isUserAuth

    return (
        <div>
            {isUserAuth ? <UserHeader /> : <Header />}
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
