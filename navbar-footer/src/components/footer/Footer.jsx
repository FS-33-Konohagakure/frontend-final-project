import React from "react";
import Logo from "../assets/logo.png";
import StyleFont from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className={`${StyleFont.font} bg-teal-50 mt-12 pt-9`}>
        <div className="flex justify-between px-14 py-5 border border-x-0 max-[768px]:flex-col max-[768px]:items-center max-[768px]:py-0">
          <div className="max-[768px]:text-center">
            <div className="max-[768px]:justify-center max-[768px]:flex">
              <img src={Logo} alt="Logo Sehatin" className="w-36" />
            </div>
            <p className="text-lg">
              Kesehatan bukanlah segalanya, tapi tanpa <br />
              <b className="text-xl text-blue-theme">KESEHATAN</b>
              <br />
              segalanya menjadi tidak ada gunanya
            </p>
          </div>
          <div className="flex gap-20 max-[768px]:flex-col max-[768px]:m-5 max-[768px]:gap-5">
            <div className="max-[768px]:text-center">
              <h4 className="font-semibold text-lg mb-2.5 max-[768px]:mb-1">
                ABOUT
              </h4>
              <ul className="leading-relaxed max-[768px]:leading-loose">
                <li>KESEHATAN</li>
                <li>HEALTHY FOOD & DRINK</li>
                <li>OLAHRAGA</li>
                <li>POLA TIDUR</li>
              </ul>
            </div>
            <div className="max-[768px]:text-center">
              <h4 className="font-semibold text-lg mb-2.5 max-[768px]:mb-1">
                PRODUK & LAYANAN
              </h4>
              <ul className="leading-relaxed max-[768px]:leading-loose ">
                <li>KONSULTASI DOKTER</li>
                <li>CHALLENGE WORKOUT</li>
                <li>HEALTH INFORMATION</li>
              </ul>
            </div>
            <div className="max-[768px]:text-center">
              <h4 className="font-semibold text-lg mb-2.5">CONTACT</h4>
              <ul className="leading-relaxed max-[768px]:leading-loose">
                <li>sehatinFS33@skilvul.com</li>
                <li>+62 222 3344 5566</li>
              </ul>
            </div>
            <div className="max-[768px]:text-center">
              <h4 className="font-semibold text-lg mb-2.5">SOCIAL</h4>
              <ul className="max-[768px]:flex max-[768px]:justify-between">
                <li className="my-2.5">
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </li>
                <li className="my-2.5">
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </li>
                <li className="my-2.5">
                  <FontAwesomeIcon icon={faXTwitter} size="xl" />
                </li>
                <li className="my-2.5">
                  <FontAwesomeIcon icon={faYoutube} size="xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center my-2.5 font-light text-xs">
          <p>
            Copyright @2023 All rights reserved | Design by Konohakogure FS-33
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
