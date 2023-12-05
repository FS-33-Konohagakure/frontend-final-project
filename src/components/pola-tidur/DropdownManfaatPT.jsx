import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const DropdownManfaatPT = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className="text-xl font-semibold">
        {selectedOption
          ? selectedOption.label
          : "Ragam Manfaat Tidur yang Cukup Untuk Kesehatan"}{" "}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {isOpen && (
        <ul className="pt-2.5 px-[30px]">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className="py-2.5"
            >
              <h1 className="text-xl font-medium">{option.label}</h1>
              <p className="text-lg leading-loose">{option.keterangan}</p>
            </li>
          ))}
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
        </ul>
      )}
    </div>
  );
};

export default DropdownManfaatPT;
