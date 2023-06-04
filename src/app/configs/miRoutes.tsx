import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Login from '../main/pages/login/Login'
import Order from '../main/pages/orders/Order'
import Register from '../main/pages/register/Register'
import Tables from '../main/pages/tables/Tables'
import { Main } from '../main/Main'
import Home from '../main/pages/home/home'
import { LoaderSpinner } from '../shared-components/loader-spiner/Loader'

const ProtectedRoute = lazy(() => import('./ProtectedRoutes'))

export const MyRoutesFaq = () => {

    return (
        <Router>
            <Routes>
                {/* Rutas públicas */}
                <Route path='/' element={<Main />}>
                    <Route path='/' element={<Home />} />

                    {/* Rutas privadas */}
                    <Route path='/' element={
                        <Suspense fallback={<LoaderSpinner/>}>
                            <ProtectedRoute />
                        </Suspense>
                    } >
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
