import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const DropdownWhyPT = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className="text-xl font-semibold">
        Waktu Tidur Ideal Berdasarkan Kelompok Usia{" "}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {isOpen && (
        <ul className="pt-2.5 px-[30px] leading-loose text-lg">
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Bayi baru lahir (0–3 bulan): 14–17 jam setiap hari
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Bayi (4–11 bulan): 12–15 jam setiap hari
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Balita (1–2 tahun): 11–14 jam setiap hari
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Prasekolah (3–5 tahun): 10–13 jam setiap hari
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Usia sekolah (6–13 tahun): 9–11 jam setiap hari
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Remaja (14–17 tahun): 8–10 jam setiap hari
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Dewasa muda (18–25 tahun): 7–9 jam setiap hari
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Dewasa (26–64 tahun): 7–9 jam setiap hari
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Lansia (65 tahun ke atas): 7–8 jam setiap hari
          </li>
          <div className="mt-2.5 text-base">
            <i>
              (Sumber dari{" "}
              <a
                href="https://hellosehat.com/pola-tidur/tips-tidur/manfaat-tidur-cukup/"
                className="font-medium hover:text-blue-theme"
                target="_blank"
              >
                Hello Sehat
              </a>
              )
            </i>
          </div>
        </ul>
      )}
    </div>
  );
};

export default DropdownWhyPT;
