import React, { useState } from "react";
import Style from "../components/FormLogin.module.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import api from "../../../api";
import Cookies from "js-cookie";
import { useLocalStorage } from "@uidotdev/usehooks";

const FormLogin = () => {
  const [localUser, setLocalUser] = useLocalStorage("user", null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const dataForm = {
      email,
      password,
      role: "user",
    };

    try {
      const response = await api.post("/auth/login", dataForm);
      setLocalUser(JSON.stringify(response.data));
      console.log(response.data.token);
      Cookies.set("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim data login ke API
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch(`http://localhost:3000/auth/login`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          // Simpan data user di local storage
          localStorage.setItem('email', data.data.email);
          localStorage.setItem('password', data.data.password);

          // Set state isLoggedIn
          setIsLoggedIn(true);
        } else {
          // Tampilkan error
          alert(data.message);
        }
      })
      .catch((error) => {
        // Tampilkan error
        alert(error.message);
      });
  };

  return (
    <form className={`${Style.font} max-h-screen`} onSubmit={loginHandler}>
      <div>
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
          Masuk
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
