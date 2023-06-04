import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'


import Login from '../main/pages/login/Login'
import Order from '../main/pages/orders/Order'
import Register from '../main/pages/register/Register'
import Tables from '../main/pages/tables/Tables'
import { Main } from '../main/Main'
import Home from '../main/pages/home/home'
import { ProtectedRoute } from './ProtectedRoutes'
export const MyRoutesFaq = () => {

    return (
        <Router>
            <Routes>
                {/* Rutas públicas */}
                <Route path='/' element={<Main />}>
                    <Route path='/' element={<Home />} />

                    {/* Rutas privadas */}
                    <Route path='/' element={<ProtectedRoute />} >
                        <Route
                            path='/orders'
                            element={
                                <Order />}
                        />
                        <Route
                            path='/tables'
                            element={
                                <Tables />}
                        />
                    </Route>

                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />


                </Route>
            </Routes>
        </Router>
    )
}
