import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage';
import Konsultasi from './pages/Konsultasi';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/konsultasi",
    element: <Konsultasi />,
  },
  {
    path: "/olahraga",
    element: <HomePage />,
  },
  {
    path: "/makanan",
    element: <HomePage />,
  },
  {
    path: "/minuman",
    element: <HomePage />,
  },
  {
    path: "/pola-tidur",
    element: <HomePage />,
  },
  {
    path: "/informasi-lanjutan",
    element: <HomePage />,
  },
  {
    path: "/sign-in",
    element: <HomePage />,
  },
  {
    path: "/sign-up",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
