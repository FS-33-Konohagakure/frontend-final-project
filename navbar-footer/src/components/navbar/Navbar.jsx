import React from "react";
import Logo from "../assets/logo.png";
import StyleFont from "./Navbar.module.css";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav
        className={`${StyleFont.font} flex justify-between items-center px-[50px] text-lg font-medium`}
      >
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo Sehatin" className="w-36" />
          </Link>
          <ul className="flex gap-5">
            <li className="hover:text-blue-theme hover:border-b hover:border-b-blue-theme">
              <Link to="/konsultasi">Konsultasi</Link>
            </li>
            <Dropdown />
            <li className="hover:text-blue-theme hover:border-b hover:border-b-blue-theme">
              <Link to="/informasi-lanjutan">Informasi Lainnya</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 items-center">
            <li className="text-blue-theme">
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li className="bg-blue-theme text-white p-2.5 rounded-xl">
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
