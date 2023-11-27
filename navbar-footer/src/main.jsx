import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import Konsultasi from "./pages/Konsultasi";
import Olahraga from "./pages/Olahraga";
import Makanan from "./pages/Makanan";
import Minuman from "./pages/Minuman";
import PolaTidur from "./pages/PolaTidur";
import InformasiLainnya from "./pages/InformasiLainnya";
import DetailMinuman from "./pages/DetailMinuman";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MakananPage from "./pages/MakananPage";
import DaftarMakananPage from "./pages/DaftarMakananPage";

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
    element: <Olahraga />,
  },
  {
    path: "/makanan-page",
    element: <MakananPage />,
  },
  {
    path: "/minuman",
    element: <Minuman />,
  },
  {
    path: "/pola-tidur",
    element: <PolaTidur />,
  },
  {
    path: "/informasi-lainnya",
    element: <InformasiLainnya />,
  },
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <RegisterPage />,
  },
  {
    path: "/makanan/:kategori",
    element: <Makanan />,
  },
  {
    path: "/minuman/:minumanId",
    element: <DetailMinuman />,
  },
  {
    path: "/makanan-page/:kategoriId/daftar-makanan",
    element: <DaftarMakananPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
