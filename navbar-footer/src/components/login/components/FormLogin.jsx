import React from "react";
import Style from "../components/FormLogin.module.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormLogin() {
  return (
    <form className={`${Style.font}`}>
      <div>
        <label htmlFor="email" className="text-white text-lg font-semibold">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </label>
        <br />
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          className="w-[300px] p-1.5 pl-2.5 rounded-md text-sm"
        />
      </div>
      <div className="mt-2.5">
        <label htmlFor="password" className="text-white text-lg font-semibold">
          <FontAwesomeIcon icon={faLock} /> Password
        </label>
        <br />
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          className="w-[300px] p-1.5 pl-2.5 rounded-md text-sm"
        />
      </div>
      <div className="mt-5 font-bold text-white">
        <button className="w-[300px] p-2.5 bg-blue-bg-lr rounded-xl hover:bg-blue-theme-hover">
          Masuk
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
