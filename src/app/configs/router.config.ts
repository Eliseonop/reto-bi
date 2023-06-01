import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const Main = lazy(() => import('../main/Main'))
const Layout = lazy(() => import('../layout/Layout'))
const Tables = lazy(() => import('../../app/main/pages/tables/Tables'))

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: '/', Component: Main },
      { path: '/tables', Component:  Tables }

    ]
  }
])
