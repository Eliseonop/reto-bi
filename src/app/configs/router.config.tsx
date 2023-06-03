import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routesNotAutenticados, routesPublicas, routesSoloAuntenticado } from './list.routes'
import { Main } from "../main/Main";

export const MyRoutes = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        ...routesPublicas,
        ...routesSoloAuntenticado,
        ...routesNotAutenticados
      ]
    }
  ])


  return <RouterProvider router={router} />
}


