import React from "react";
import Logo from "../assets/logo.png";
import StyleFont from "./Navbar.module.css";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

function Navbar() {
  const [localUser, setLocalUser] = useLocalStorage("user", null);

  return (
    <header>
      <nav
        className={`${StyleFont.font} flex justify-between items-center px-[50px] py-[5px] text-lg font-medium shadow-md`}
      >
        <div className="flex items-center text-base gap-8">
          <Link to="/">
            <img src={Logo} alt="Logo Sehatin" className="w-32" />
          </Link>
          <ul className="flex gap-5">
            <li className="hover:text-blue-theme hover:border-b hover:border-b-blue-theme">
              <Link to="/konsultasi">Konsultasi</Link>
            </li>
            <Dropdown />
            <li className="hover:text-blue-theme hover:border-b hover:border-b-blue-theme">
              <Link to="/informasi-lainnya">Informasi Lainnya</Link>
            </li>
          </ul>
        </div>
        <div className="text-base">
          {/* <ul className="flex gap-5 items-center">
            <li className="text-blue-theme">
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li className="bg-blue-theme text-white p-2.5 rounded-xl hover:bg-blue-theme-hover">
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul> */}

          {localUser ? (
            <ul className="flex gap-5 items-center">
              <li>
                <button
                  onClick={() => {}}
                  className="bg-blue-theme text-white p-2.5 rounded-xl hover:bg-blue-theme-hover"
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-5 items-center">
              <li className="text-blue-theme">
                <Link to="/sign-in">Sign In</Link>
              </li>
              <li className="bg-blue-theme text-white p-2.5 rounded-xl hover:bg-blue-theme-hover">
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
