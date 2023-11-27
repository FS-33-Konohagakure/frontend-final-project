import React, { useEffect, useState } from "react";
import FoodCard from "./components/FoodCard";
import Style from "./DaftarMakanan.module.css";

function DaftarMakanan () {
  // TODO: Ganti ini menggunakan API
  const foodList = [
    {
      kategori: "Buah",
      name: "Pepaya",
      imgSrc: "/assets/pepaya.jpg",
      detail: "Manfaat pepaya adalah berkat kandungan nutrisinya yang memberikan banyak kebaikan bagi tubuh, mulai dari menjaga kesehatan kulit hingga jantung. Selain itu, banyak manfaat pepaya lainnya yang dapat diperoleh dengan mengonsumsi buah ini secara rutin. Beberapa manfaat lainnya yaitu menjaga kesehatan mata, memelihara kesehatan rambut dan kuku, melancarkan pencernaan, memulihkan kulit yang terbakar sinar matahari, menjaga kesehatan jantung, menjaga kesehatan kulit, dan meningkatkan sistem kekebalan tubuh.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Mangga",
      imgSrc: "/assets/mangga.jpg",
      detail: "Mangga mengandung sekitar 2 gram serat dalam setiap 100 gramnya. Inilah yang menjadikan mangga sebagai buah kaya serat. Selain serat, mangga juga mengandung senyawa polifenol yang dapat meningkatkan pertumbuhan bakteri baik dan menghambat bakteri jahat dalam usus. Hal ini tentunya baik untuk kesehatan saluran cerna dan kekebalan tubuh. Selain itu, mangga juga mengandung senyawa antiradang yang dapat mengurangi risiko terjadinya berbagai penyakit, termasuk penyakit jantung koroner dan stroke.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Pisang",
      imgSrc: "/assets/pisang.jpg",
      detail: "Di balik rasanya yang manis, pisang mengandung nutrisi yang baik untuk kesehatan tubuh. Manfaat pisang yang beragam pun bisa dengan mudah Anda dapatkan dengan mengonsumsinya secara rutin. Beberapa manfaat lainnya yaitu sebagai sumber energi, menjaga kesehatan jantung dan pembuluh darah, mencegah kerusakan sel dan jaringan tubuh, mengurangi risiko penyakit ginjal, mengurangi mual saat hamil, menjaga kesehatan saluran cerna, dan menurunkan berat badan.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Jeruk",
      imgSrc: "/assets/jeruk.jpg",
      detail: "Selain dikenal kaya vitamin C yang dapat meningkatkan sistem kekebalan tubuh, jeruk juga kaya akan serat yang dapat meningkatkan kesehatan pencernaan. Dengan mengonsumsi 1 buah jeruk berukuran sedang, Anda sudah bisa mendapatkan 3 gram serat. Meskipun ada beragam manfaat jeruk untuk kesehatan, buah kaya serat ini sebaiknya tidak dikonsumsi secara berlebih oleh penderita GERD maupun sakit maag. Kandungan asam dalam jeruk mungkin akan mengiritasi lambung dan membuat kondisi tersebut menjadi makin parah.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Alpukat",
      imgSrc: "/assets/alpukat.jpg",
      detail: "Buah satu ini memiliki perpaduan lengkap akan kandungan lemak baik, air, dan serat yang membuat Anda akan merasa kenyang lebih lama dan membuat alpukat cocok untuk dijadikan menu sarapan. Selain itu, alpukat dapat Anda padukan dengan roti tawar dan telur rebus, atau Anda dapat membuat jus alpukat dengan sedikit madu sebagai pemanis.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Semangka",
      imgSrc: "/assets/semangka.jpg",
      detail: "Meski rasa manis buah semangka dapat meningkatkan kadar gula darah Anda, buah yang kaya akan air ini menjadi cara yang baik untuk menghidrasi tubuh Anda di pagi hari. Selain itu, semangka  seperti buah dan sayuran berwarna merah lainnya adalah salah satu sumber zat likopen terbaik yang bagus untuk menjaga kesehatan mata, jantung, serta mencegah kanker.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Nanas",
      imgSrc: "/assets/nanas.jpg",
      detail: "Ada banyak manfaat buah nanas bagi kesehatan, mulai dari meningkatkan imun, membantu diet, hingga mencegah kanker. Hal ini adalah berkat kandungan nutrisi yang melimpah di dalam buah tropis ini, seperti antioksidan, serat, vitamin, dan mineral. Manfaat buah nanas juga bisa dirasakan pada kesehatan tubuh secara umum, karena buah ini mampu memperkuat daya tahan tubuh, mengontrol kolesterol, dan menjaga tekanan darah.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Lemon",
      imgSrc: "/assets/lemon.jpg",
      detail: "Di balik rasanya yang asam, ada banyak sekali manfaat lemon yang sayang untuk dilewatkan. Lemon mengandung beragam nutrisi yang menjadikannya baik untuk kesehatan, mulai dari meningkatkan daya tahan tubuh hingga mencegah penyakit jantung. Beberapa manfaat lainnya yaitu menyehatkan saluran pencernaan, mencegah anemia, menjaga kesehatan kulit, dan menjaga berat badan.",
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
  
  const [category, setCategory] = useState("Buah");
  
  const activeButtonStyling =
    "bg-green-bg-active-dm py-2.5 px-5 rounded-[32px]";

  const filteredFoodList = foodList.filter(
    (food) => food.kategori === category
  );

  return (
    <section className="px-[50px]">
      <div
        className={`${Style.font} bg-green-background py-[30px] rounded-[36px] shadow-xl`}
      >
        <h1 className="text-center text-3xl font-bold">
          Daftar <span className="text-green-theme">Makanan</span>
        </h1>
        <ul className="flex justify-center items-center text-lg font-semibold gap-[80px] py-[20px]">
          <li
            className={
              category === "Buah"
                ? activeButtonStyling
                : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px]"
            }
            onClick={() => setCategory("Buah")}
          >
            Buah
          </li>
          <li
            className={
              category === "Sayuran"
                ? activeButtonStyling
                : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px]"
            }
            onClick={() => setCategory("Sayuran")}
          >
            Sayuran
          </li>
          <li
            className={
              category === "Daging"
                ? activeButtonStyling
                : "text-gray-non-active hover:bg-gray-bg-non-active hover:py-2.5 hover:px-5 hover:rounded-[32px]"
            }
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
              detail={makanan.detail}
              kategori={makanan.kategori}
              key={makanan.name}
              id={makanan.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DaftarMakanan;
