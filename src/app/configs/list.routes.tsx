import Home from "../main/pages/home/home";
import Login from "../main/pages/login/Login";
import Order from "../main/pages/orders/Order";
import ListOrders from "../main/pages/orders/listOrders/ListOrders";
import Register from "../main/pages/register/Register";
import Tables from "../main/pages/tables/Tables";
import { ProtectedRoute } from "./ProtectedRoute";


export const routesPublicas = [{
    path: "/",
    element: <Home />,
},
];


export const routesSoloAuntenticado = [
    {
        path: "/",
        loader: () => import("../main/pages/orders/listOrders/ListOrders"),
        element: <ProtectedRoute />, 
        children: [

            {
                path: "/orders",
                element: <Order />,
            },
            {
                path: "/tables",
                element: <Tables />,
            }
        ],
    },
];

export const routesNotAutenticados = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    }
];