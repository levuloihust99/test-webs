import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { MainLayout } from './components/layout/MainLayout'
import { Dashboard } from './components/pages/Dashboard'
import { Order } from './components/pages/Order'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'orders',
        element: <Order />,
      },
    ],
  },
])

export const AppRoutes = <RouterProvider router={router} />
