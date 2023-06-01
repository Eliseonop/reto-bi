
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from './auth'
// importar tipo componente
type Props = {
    children: React.ReactNode
}


export default function PrivateRoute({ children }: Props) {

    return (
        <>
            {isAuthenticated() ? children : <Navigate to="/login" />}
        </>
    )

}