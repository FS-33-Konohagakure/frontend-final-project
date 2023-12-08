import React, { useState } from "react";
import Style from "../components/FormRegister.module.css";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../../api";
import { useNavigate } from "react-router";

function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const data = {
      username: name,
      email,
      password,
      role: "user",
    };

    try {
      const response = await api.post("/auth/regis", data);
      console.log(response);
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={`${Style.font}`} onSubmit={registerHandler}>
      <div>
        <label htmlFor="name" className="text-white text-lg font-semibold">
          <FontAwesomeIcon icon={faUser} /> Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-[300px] p-1.5 pl-2.5 rounded-md text-sm text-black"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mt-2.5">
        <label htmlFor="email" className="text-white text-lg font-semibold">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </label>
        <br />
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          className="w-[300px] p-1.5 pl-2.5 rounded-md text-sm text-black"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mt-2.5">
        <label htmlFor="password" className="text-white text-lg font-semibold">
          <FontAwesomeIcon icon={faLock} /> Password
        </label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-[300px] p-1.5 pl-2.5 rounded-md text-sm text-black"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mt-5 font-bold text-white">
        <button
          className="w-[300px] p-2.5 bg-blue-bg-lr rounded-xl hover:bg-blue-theme-hover"
          type="submit"
        >
          Daftar
        </button>
      </div>
    </form>
  );
}

export default FormRegister;
