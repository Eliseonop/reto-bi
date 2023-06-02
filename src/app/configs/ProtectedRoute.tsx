import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { UserState } from "../store/slices/user/models/user.state";
import { IRootState } from "../store/store";
export const ProtectedRoute = () => {

    const user = useSelector<IRootState, UserState>((state) => state.user)




    // Check if the user is authenticated
    if (!user.isLoggedIn) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};