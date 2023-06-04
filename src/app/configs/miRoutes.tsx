import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { UserState } from '../store/slices/user/models/user.state'
import { IRootState } from '../store/store'

import Login from '../main/pages/login/Login'
import Order from '../main/pages/orders/Order'
import Register from '../main/pages/register/Register'
import Tables from '../main/pages/tables/Tables'
import { Main } from '../main/Main'
import Home from '../main/pages/home/home'

export const MyRoutesFaq = () => {
    const user = useSelector<IRootState, UserState>(state => state.user)

    return (
        <Router>
            <Routes>
                {/* Rutas públicas */}
                <Route path='/' element={<Main />}>
                    <Route path='/' element={<Home />} />

                    <Route
                        path='/orders'
                        element={
                            user?.user?.isLoggedIn ? <Order /> : <Navigate to='/login' />
                        }
                    />
                    <Route
                        path='/tables'
                        element={
                            user?.user?.isLoggedIn ? <Tables /> : <Navigate to='/login' />
                        }
                    />

                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />


                </Route>
            </Routes>
        </Router>
    )
}
