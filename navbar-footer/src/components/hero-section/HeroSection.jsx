import React from "react";
import Dokter from "../assets/dokter.png";
import StyleFont from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section>
      <div
        className={`${StyleFont.font} flex items-center justify-between px-40`}
      >
        <div>
          <p className="text-3xl">
            Kesehatan bukanlah segalanya, <br />
            tapi tanpa <br />
            <b className="text-blue-theme">KESEHATAN</b>
            <br />
            segalanya menjadi tidak ada gunanya
          </p>
        </div>
        <div>
          <img src={Dokter} alt="Gambar Dokter" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
