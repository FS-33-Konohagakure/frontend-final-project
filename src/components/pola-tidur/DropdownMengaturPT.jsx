import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const DropdownMengaturPT = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className="text-xl font-semibold">
        Cara Mengatur Waktu Tidur Yang Cukup{" "}
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
            Membuat jadwal tidur, yakni dengan mulai memejamkan dan membuka mata
            pada waktu yang sama setiap hari.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Menghindari berbagai pemicu gangguan tidur beberapa jam sebelum
            tidur, seperti kafein, nikotin, dan alkohol.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Menciptakan suasana yang nyaman, misalnya dengan menyesuaikan suhu
            AC dan mematikan lampu.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Melakukan olahraga secara teratur, minimal 30 menit setiap hari.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              className="text-blue-theme"
            />{" "}
            Mengurangi dan mengelola stres dengan cara yang sehat.
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

export default DropdownMengaturPT;
