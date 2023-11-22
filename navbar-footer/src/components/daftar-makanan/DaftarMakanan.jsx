import React, { useState } from "react";
import FoodCard from "./components/FoodCard";
import Style from "./DaftarMakanan.module.css";

function DaftarMakanan() {
  // TODO: Ganti ini menggunakan API
  const foodList = [
    {
      kategori: "Buah",
      name: "Pepaya",
      imgSrc: "/assets/pepaya.jpg",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Mangga",
      imgSrc: "/assets/mangga.jpg",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Pisang",
      imgSrc: "/assets/pisang.jpg",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Jeruk",
      imgSrc: "/assets/jeruk.jpg",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Alpukat",
      imgSrc: "/assets/alpukat.jpg",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Semangka",
      imgSrc: "/assets/semangka.jpg",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Nanas",
      imgSrc: "/assets/nanas.jpg",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Lemon",
      imgSrc: "/assets/lemon.jpg",
      id: 1,
    },
    {
      kategori: "Sayuran",
      name: "Bayam",
      imgSrc: "/assets/bayam.jpg",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Brokoli",
      imgSrc: "/assets/brokoli.jpg",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Wortel",
      imgSrc: "/assets/wortel.jpg",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Kol Merah",
      imgSrc: "/assets/kol-merah.jpg",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Ubi",
      imgSrc: "/assets/ubi.jpg",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Buncis",
      imgSrc: "/assets/buncis.jpg",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Pare",
      imgSrc: "/assets/pare.jpg",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Paprika",
      imgSrc: "/assets/paprika.jpg",
      id: 2,
    },
    {
      kategori: "Daging",
      name: "Daging Sapi",
      imgSrc: "/assets/daging-sapi.jpg",
      id: 3,
    },
    {
      kategori: "Daging",
      name: "Daging Domba",
      imgSrc: "/assets/daging-domba.jpg",
      id: 3,
    },
    {
      kategori: "Daging",
      name: "Daging Kambing",
      imgSrc: "/assets/daging-kambing.jpg",
      id: 3,
    },
    {
      kategori: "Daging",
      name: "Ayam",
      imgSrc: "/assets/ayam.jpg",
      id: 3,
    },
    {
      kategori: "Daging",
      name: "Bebek",
      imgSrc: "/assets/bebek.jpg",
      id: 3,
    },
  ];

  const [category, setCategory] = useState({
    category1: "Buah",
    category2: "Sayuran",
    category3: "Daging",
  });

  const activeButtonStyling =
    "bg-green-bg-active-dm py-2.5 px-5 rounded-[32px]";

  const filteredFoodList = foodList.filter(
    (food) => food.kategori === category
  );

  return (
    <section className="px-[50px]">
      <div
        className={`${Style.font} bg-green-background py-[30px] rounded-[36px]`}
      >
        <h1 className="text-center text-3xl font-bold">
          Daftar <span className="text-green-theme">Makanan</span>
        </h1>
        <ul className="flex justify-center items-center text-lg font-semibold gap-[80px] py-[20px]">
          <li
            className={category === "Buah" ? activeButtonStyling : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px]"}
            onClick={() => setCategory("Buah")}
          >
            Buah
          </li>
          <li
            className={category === "Sayuran" ? activeButtonStyling : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px]"}
            onClick={() => setCategory("Sayuran")}
          >
            Sayuran
          </li>
          <li
            className={category === "Daging" ? activeButtonStyling : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px]"}
            onClick={() => setCategory("Daging")}
          >
            Daging
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-[30px] py-2.5">
          {filteredFoodList.map((makanan) => (
            <FoodCard
              name={makanan.name}
              imgSrc={makanan.imgSrc}
              key={makanan.id}
              id={makanan.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DaftarMakanan;
