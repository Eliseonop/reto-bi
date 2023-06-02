
import { ProtectedRoute } from "./ProtectedRoute";
import { Main } from "../main/Main";
import Home from "../main/pages/home/home";
import Login from "../main/pages/login/Login";
import Register from "../main/pages/register/Register";
import Tables from "../main/pages/tables/Tables";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Orders from "../main/pages/orders/Orders";

const Routes = () => {



    // Define public routes accessible to all users
    const routesForPublic = [{
        path: "/",
        element: <Home />,
    },
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",

            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [

                {
                    path: "/orders",
                    element: <Orders/>,
                },
                {
                    path: "/tables",
                    element: <Tables />,
                }
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        }
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [

                ...routesForPublic,
                ...routesForNotAuthenticatedOnly ,
                ...routesForAuthenticatedOnly,

            ],

        }
    ]
    );

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />

};

export default Routes;