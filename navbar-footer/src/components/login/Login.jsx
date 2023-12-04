import React from "react";
import Style from "../login/components/FormLogin.module.css";
import FormLogin from "./components/FormLogin";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className={`${Style.font} bg-blue-theme text-white`}>
      <div className="flex">
        <div className="relative flex flex-col justify-center items-center w-[50%] max-md:flex max-md:justify-center max-md:items-center max-md:min-h-screen max-md:w-full">
          <img
            src="assets/logo-2.png"
            alt="Logo SEHATIN"
            className="w-[150px]"
          />
          <div className="py-[20px] text-center">
            <h1 className="text-3xl font-bold">Selamat Datang</h1>
            <p className="font-semibold">di Sehatin</p>
          </div>
          <FormLogin />
          <p className="absolute inset-x-0 bottom-2.5 text-center">
            Belum punya akun?
            <Link to="/sign-up" className="hover:text-blue-theme-hover">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
        <div className="w-[50%] max-md:w-0">
          <img
            src="assets/dokter-lr.jpg"
            alt="Dokter"
            className="w-full h-screen max-md:hidden"
          />
        </div>
      </div>
    </main>
  );
}

export default Login;
