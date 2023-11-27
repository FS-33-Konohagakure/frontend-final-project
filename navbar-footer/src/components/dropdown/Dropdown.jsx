import React from "react";
import DropdownMenu from "./Dropdown.module.css";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <li className={`${DropdownMenu.dropdown} relative inline-block text-left`}>
      <Link
        to=""
        className="hover:text-blue-theme hover:border-b hover:border-b-blue-theme"
      >
        Pola Hidup Sehat
      </Link>
      <div
        className={`${DropdownMenu.dropdownContent} hidden p-2 origin-top-right absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <Link
          to="/olahraga"
          className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-theme-transparant hover:border-l-[3px] hover:border-l-blue-theme hover:text-white"
        >
          Olahraga
        </Link>
        <Link
          to="/makanan-page"
          className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-theme-transparant hover:border-l-[3px] hover:border-l-blue-theme hover:text-white"
        >
          Makanan
        </Link>
        <Link
          to="/minuman"
          className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-theme-transparant hover:border-l-[3px] hover:border-l-blue-theme hover:text-white"
        >
          Minuman
        </Link>
        <Link
          to="/pola-tidur"
          className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-theme-transparant hover:border-l-[3px] hover:border-l-blue-theme hover:text-white"
        >
          Pola Tidur
        </Link>
      </div>
    </li>
  );
}

export default Dropdown;
