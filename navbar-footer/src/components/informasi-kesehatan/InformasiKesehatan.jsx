import React from "react";
import { Link } from "react-router-dom";
import LogoKonsultasi from "../assets/logo-konsultasi.png";
import LogoOlahraga from "../assets/logo-olahraga.png";
import LogoMakanan from "../assets/logo-makanan.png";
import LogoMinuman from "../assets/logo-minuman.png";
import LogoPolaTidur from "../assets/logo-pola-tidur.png";
import StyleFont from "./InformasiKesehatan.module.css";

function InformasiKesehatan() {
  return (
    <section>
      <div className={`${StyleFont.font} p-[50px]`}>
        <h1 className="text-2xl font-bold pb-1.5">
          INFORMASI <span className="text-green-theme">KESEHATAN</span>
        </h1>
        <div className="flex justify-between border-t-[2px] p-[20px] text-center text-lg font-semibold">
          <Link to="/konsultasi">
            <div>
              <img
                src={LogoKonsultasi}
                alt="Logo Konsultasi"
                className="w-52"
              />
              <p>Konsultasi Dokter</p>
            </div>
          </Link>
          <Link to="/olahraga">
            <div>
              <img src={LogoOlahraga} alt="Logo Olahraga" className="w-52" />
              <p>Olahraga</p>
            </div>
          </Link>
          <Link to="/makanan-page">
            <div>
              <img src={LogoMakanan} alt="Logo Makanan" className="w-52" />
              <p>Makanan</p>
            </div>
          </Link>
          <Link to="/minuman">
            <div>
              <img src={LogoMinuman} alt="Logo Minuman" className="w-52" />
              <p>Minuman</p>
            </div>
          </Link>
          <Link to="/pola-tidur">
            <div>
              <img src={LogoPolaTidur} alt="Logo Pola Tidur" className="w-52" />
              <p>Pola Tidur</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InformasiKesehatan;
