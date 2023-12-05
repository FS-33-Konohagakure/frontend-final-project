import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Cookies from "js-cookie";
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
import DaftarDokter from "./pages/konsultasi/DaftarDokter";
import InformasiDokter from "./pages/konsultasi/InformasiDokter";

const Middleware = ({ children }) => {
  const navigate = useNavigate();

  const getToken = Cookies.get("token");
  useEffect(() => {
    if (!getToken) {
      navigate("/sign-in");
    }
  }, [getToken, navigate]);

  return getToken ? children : null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/konsultasi",
    element: (
      <Middleware>
        <Konsultasi />
      </Middleware>
    ),
  },
  {
    path: "/olahraga",
    element: (
      <Middleware>
        <Olahraga />
      </Middleware>
    ),
  },
  {
    path: "/makanan-page",
    element: (
      <Middleware>
        <MakananPage />
      </Middleware>
    ),
  },
  {
    path: "/minuman",
    element: (
      <Middleware>
        <Minuman />
      </Middleware>
    ),
  },
  {
    path: "/pola-tidur",
    element: (
      <Middleware>
        <PolaTidur />
      </Middleware>
    ),
  },
  {
    path: "/informasi-lainnya",
    element: (
      <Middleware>
        <InformasiLainnya />
      </Middleware>
    ),
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
    path: "/makanan/:makananName",
    element: (
        <Makanan />
    ),
  },
  {
    path: "/minuman/:minumanId",
    element: (
      <Middleware>
        <DetailMinuman />
      </Middleware>
    ),
  },
  {
    path: "/makanan-page/:kategoriId/daftar-makanan",
    element: (
      <Middleware>
        <DaftarMakananPage />
      </Middleware>
    ),
  },
  {
    path: "/konsultasi/:dokterId",
    element: (
      <Middleware>
        <InformasiDokter />
      </Middleware>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
