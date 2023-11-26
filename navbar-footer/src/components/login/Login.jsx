import React from "react";
import Style from "../login/components/FormLogin.module.css";
import FormLogin from "./components/FormLogin";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main
      className={`${Style.font} bg-blue-theme flex items-center justify-between pl-[12.5%] text-white`}
    >
      <div className="relative flex flex-col items-center">
        <img src="assets/logo-2.png" alt="Logo SEHATIN" className="w-[150px]" />
        <div className="py-[20px] text-center">
          <h1 className="text-3xl font-bold">Selamat Datang</h1>
          <p className="font-semibold">di Sehatin</p>
        </div>
        <FormLogin />
        <p className="absolute inset-x-0 bottom-[-80px] text-center">
          Belum punya akun?
          <Link to="/sign-up" className="hover:text-blue-theme-hover">
            Sign Up
          </Link>
        </p>
      </div>
      <img src="assets/dokter-lr.jpg" alt="Dokter" className="max-h-screen" />
    </main>
  );
}

export default Login;
