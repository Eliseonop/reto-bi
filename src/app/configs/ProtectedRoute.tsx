import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { UserState } from "../store/slices/user/models/user.state";
import { IRootState } from "../store/store";
export const ProtectedRoute = () => {

    const user = useSelector<IRootState, UserState>((state) => state.user)

    if (!user.user.isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};