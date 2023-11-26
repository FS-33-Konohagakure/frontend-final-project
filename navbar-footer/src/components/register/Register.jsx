import React from "react";
import Style from "../register/components/FormRegister.module.css";
import FormRegister from "./components/FormRegister";
import { Link } from "react-router-dom";

function Register() {
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
        <FormRegister />
        <p className="absolute inset-x-0 bottom-[-50px] text-center">
          Sudah punya akun?
          <Link to="/sign-in" className="hover:text-blue-theme-hover">
            Sign In
          </Link>
        </p>
      </div>
      <img src="assets/dokter-lr.jpg" alt="Dokter" className="max-h-screen" />
    </main>
  );
}

export default Register;
