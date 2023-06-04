
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../store/slices/user/models/user.state';
import { IRootState } from '../store/store';

import Login from '../main/pages/login/Login';
import Order from '../main/pages/orders/Order';
import Register from '../main/pages/register/Register';
import Tables from '../main/pages/tables/Tables';
import { ProtectedRoute } from './ProtectedRoute';
import { Main } from '../main/Main';
import Home from '../main/pages/home/home';


export const MyRoutesFaq = () => {
    const user = useSelector<IRootState, UserState>((state) => state.user);

    return (
        <Router>
            <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<Main />} loader={() => user}>
                    <Route path="/" element={<Home />} />

                    {/* Rutas solo para usuarios autenticados */}
                    <Route path="/" element={<ProtectedRoute />} >


                        <Route path="/orders" element={<Order />} />
                        <Route path="/tables" element={<Tables />} />

                    </Route>

                    {/* Rutas para usuarios no autenticados */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
                {/* Ruta por defecto si no se encuentra ninguna coincidencia */}

            </Routes>
        </Router >
    );
};


