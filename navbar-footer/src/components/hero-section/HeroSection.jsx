import React from "react";
import Dokter from "../assets/dokter.png";
import StyleFont from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section>
      <div
        className={`${StyleFont.font} flex items-center justify-between px-40 max-[900px]:px-20 max-[650px]:p-10 max-[600px]:flex-wrap-reverse max-[600px]:justify-center max-[400px]:p-5`}
      >
        <div>
          <p className="text-3xl max-[900px]:text-2xl max-[600px]:text-center max-[500px]:text-xl">
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
