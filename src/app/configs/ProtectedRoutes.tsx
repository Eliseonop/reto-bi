import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { UserState } from '../store/slices/user/models/user.state'
import { IRootState } from '../store/store'

const ProtectedRoute = () => {
    const user = useSelector<IRootState, UserState>(state => state.user)

    const location = useLocation()

    return user.user.isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default ProtectedRoute