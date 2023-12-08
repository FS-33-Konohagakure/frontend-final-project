import React, { useState, useEffect } from "react";
import FoodCard from "./components/FoodCard";
import Style from "./DaftarMakanan.module.css";
import api from "../../api"
import Cookies from "js-cookie"


function DaftarMakanan() {

  const [makanan, setMakanan] = useState([])

  useEffect(() => {
    daftarMakanan();
  },[])

  const [category, setCategory] = useState("1");

  const activeButtonStyling =
    "bg-green-bg-active-dm py-2.5 px-5 rounded-[32px]";

  const filteredFoodList = makanan.filter(
    (food) => food.kategoriId == category
  );

  const token = Cookies.get("token");

  const daftarMakanan = async () => {
    const response = await api.get("/foods", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data.data);
    setMakanan(response.data.data);
  }

  return (
    <section className="px-[50px] pb-[50px]">
      <div
        className={`${Style.font} bg-green-background py-[30px] rounded-[36px] shadow-xl`}
      >
        <h1 className="text-center text-3xl font-bold">
          Daftar <span className="text-green-theme">Makanan</span>
        </h1>
        <ul className="flex flex-wrap justify-center items-center text-lg font-semibold gap-[80px] py-[20px]">
          <li
            className={
              category == "1"
                ? activeButtonStyling
                : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px] hover:cursor-pointer"
            }
            onClick={() => setCategory("1")}
          >
            Buah
          </li>
          <li
            className={
              category == "2"
                ? activeButtonStyling
                : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px] hover:cursor-pointer"
            }
            onClick={() => setCategory("2")}
          >
            Sayuran
          </li>
          <li
            className={
              category == "3"
                ? activeButtonStyling
                : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px] hover:cursor-pointer"
            }
            onClick={() => setCategory("3")}
          >
            Daging
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-[30px] py-2.5">
          {filteredFoodList.map((food) => (
            <FoodCard
              name={food.name}
              imgSrc={food.image}
              detail={food.detail}
              kategori={food.kategoriId}
              key={food.name}
              id={food.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DaftarMakanan;
