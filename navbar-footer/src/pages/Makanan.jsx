import React from "react";
import Layout from "../components/layout/Layout";
import Style from "./Style.module.css";
import { useParams } from "react-router";

function Makanan() {
  const foodList = [
    {
      kategori: "Buah",
      name: "Pepaya",
      imgSrc: "/assets/pepaya.jpg",
      detail:
        "Manfaat pepaya adalah berkat kandungan nutrisinya yang memberikan banyak kebaikan bagi tubuh, mulai dari menjaga kesehatan kulit hingga jantung. Selain itu, banyak manfaat pepaya lainnya yang dapat diperoleh dengan mengonsumsi buah ini secara rutin. Beberapa manfaat lainnya yaitu menjaga kesehatan mata, memelihara kesehatan rambut dan kuku, melancarkan pencernaan, memulihkan kulit yang terbakar sinar matahari, menjaga kesehatan jantung, menjaga kesehatan kulit, dan meningkatkan sistem kekebalan tubuh.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Mangga",
      imgSrc: "/assets/mangga.jpg",
      detail:
        "Mangga mengandung sekitar 2 gram serat dalam setiap 100 gramnya. Inilah yang menjadikan mangga sebagai buah kaya serat. Selain serat, mangga juga mengandung senyawa polifenol yang dapat meningkatkan pertumbuhan bakteri baik dan menghambat bakteri jahat dalam usus. Hal ini tentunya baik untuk kesehatan saluran cerna dan kekebalan tubuh. Selain itu, mangga juga mengandung senyawa antiradang yang dapat mengurangi risiko terjadinya berbagai penyakit, termasuk penyakit jantung koroner dan stroke.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Pisang",
      imgSrc: "/assets/pisang.jpg",
      detail:
        "Di balik rasanya yang manis, pisang mengandung nutrisi yang baik untuk kesehatan tubuh. Manfaat pisang yang beragam pun bisa dengan mudah Anda dapatkan dengan mengonsumsinya secara rutin. Beberapa manfaat lainnya yaitu sebagai sumber energi, menjaga kesehatan jantung dan pembuluh darah, mencegah kerusakan sel dan jaringan tubuh, mengurangi risiko penyakit ginjal, mengurangi mual saat hamil, menjaga kesehatan saluran cerna, dan menurunkan berat badan.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Jeruk",
      imgSrc: "/assets/jeruk.jpg",
      detail:
        "Selain dikenal kaya vitamin C yang dapat meningkatkan sistem kekebalan tubuh, jeruk juga kaya akan serat yang dapat meningkatkan kesehatan pencernaan. Dengan mengonsumsi 1 buah jeruk berukuran sedang, Anda sudah bisa mendapatkan 3 gram serat. Meskipun ada beragam manfaat jeruk untuk kesehatan, buah kaya serat ini sebaiknya tidak dikonsumsi secara berlebih oleh penderita GERD maupun sakit maag. Kandungan asam dalam jeruk mungkin akan mengiritasi lambung dan membuat kondisi tersebut menjadi makin parah.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Alpukat",
      imgSrc: "/assets/alpukat.jpg",
      detail:
        "Buah satu ini memiliki perpaduan lengkap akan kandungan lemak baik, air, dan serat yang membuat Anda akan merasa kenyang lebih lama dan membuat alpukat cocok untuk dijadikan menu sarapan. Selain itu, alpukat dapat Anda padukan dengan roti tawar dan telur rebus, atau Anda dapat membuat jus alpukat dengan sedikit madu sebagai pemanis.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Semangka",
      imgSrc: "/assets/semangka.jpg",
      detail:
        "Meski rasa manis buah semangka dapat meningkatkan kadar gula darah Anda, buah yang kaya akan air ini menjadi cara yang baik untuk menghidrasi tubuh Anda di pagi hari. Selain itu, semangka  seperti buah dan sayuran berwarna merah lainnya adalah salah satu sumber zat likopen terbaik yang bagus untuk menjaga kesehatan mata, jantung, serta mencegah kanker.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Nanas",
      imgSrc: "/assets/nanas.jpg",
      detail:
        "Ada banyak manfaat buah nanas bagi kesehatan, mulai dari meningkatkan imun, membantu diet, hingga mencegah kanker. Hal ini adalah berkat kandungan nutrisi yang melimpah di dalam buah tropis ini, seperti antioksidan, serat, vitamin, dan mineral. Manfaat buah nanas juga bisa dirasakan pada kesehatan tubuh secara umum, karena buah ini mampu memperkuat daya tahan tubuh, mengontrol kolesterol, dan menjaga tekanan darah.",
      id: 1,
    },
    {
      kategori: "Buah",
      name: "Lemon",
      imgSrc: "/assets/lemon.jpg",
      detail:
        "Di balik rasanya yang asam, ada banyak sekali manfaat lemon yang sayang untuk dilewatkan. Lemon mengandung beragam nutrisi yang menjadikannya baik untuk kesehatan, mulai dari meningkatkan daya tahan tubuh hingga mencegah penyakit jantung. Beberapa manfaat lainnya yaitu menyehatkan saluran pencernaan, mencegah anemia, menjaga kesehatan kulit, dan menjaga berat badan.",
      id: 1,
    },
    {
      kategori: "Sayuran",
      name: "Bayam",
      imgSrc: "/assets/bayam.jpg",
      detail:
        "Tak hanya nikmat untuk disantap, berbagai manfaat bayam bagi kesehatan juga sayang untuk dilewatkan. Manfaat tersebut berasal dari beragam nutrisi yang terkandung di dalamnya. Tak heran bila bayam kerap dimasukkan dalam menu makan sehat sehari-hari. Beberapa manfaat bayam bagi kesehatan yaitu meredakan peradangan, meningkatkan sistem kekebalan tubuh, mencegah anemia, menjaga kesehatan mata, menjaga kesehatan kulit, dan mencegah kanker.",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Brokoli",
      imgSrc: "/assets/brokoli.jpg",
      detail:
        "Brokoli sudah lama dikenal sebagai sayuran sehat yang kaya manfaat. Manfaat brokoli ini tak lain berkat kandungan nutrisi di dalamnya yang sangat beragam. Kendati tidak semua orang menyukainya, brokoli dianjurkan untuk tetap rutin dikonsumsi sebagai bagian dari menu harian Anda. Brokoli mengandung aneka nutrisi yang baik untuk kesehatan tubuh, seperti serat, protein, karbohidrat kompleks, air, dan mineral kalium, magnesium, kalsium, fosfor, zinc, serta zat besi. Selain itu, brokoli juga kaya akan vitamin A, vitamin B, folat, vitamin C, vitamin E, dan vitamin K.",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Wortel",
      imgSrc: "/assets/wortel.jpg",
      detail:
        "Wortel merupakan sayuran berwarna oranye yang banyak digemari, karena rasanya yang enak dan manfaat wortel yang melimpah. Wortel bisa dimakan mentah, direbus, atau digoreng, dibuat jus, atau campuran puding. Manfaat wortel didapat dari kandungan beta-karoten di dalamnya, yang berguna sebagai antioksidan. Selain beta-karoten, manfaat wortel juga didapat dari kandungan serat, vitamin K, dan kalium. Wortel mengandung serat makanan yang bisa memperbaiki kondisi saluran pencernaan yang terganggu seperti diare atau konstipasi.",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Kol Merah",
      imgSrc: "/assets/kol-merah.jpg",
      detail:
        "Kol merah ini kaya akan fitokimia, nutrisi, antioksidan, vitamin. Sayuran ini pun kaya akan serat dan mineral yang terdiri dari thiamin, folat, kalsium, magnesium, mangan, riboflavin, zat besi, kalium, vitamin A, vitamin E, vitamin C, vitamin K dan vitamin B. Kol merah dikenal memiliki 10 kali lebih banyak vitamin A daripada kol hijau. Satu cangkir kubis merah cincang memiliki 51 mg vitamin C sementara kol hijau memiliki 37 mg vitamin C. Kol merah juga mengandung dua kali lipat jumlah zat besi dibandingkan dengan kol hijau.",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Ubi",
      imgSrc: "/assets/ubi.jpg",
      detail:
        "Umbi-umbian yang kaya akan nutrisi membuat makanan satu ini disebut sebagai superfood, karena selain kandungan nutrisinya, ubi juga membantu Anda untuk membakar lemak. Ubi memiliki kandungan serat fiber dan memiliki indeks glikemik yang rendah sehingga sistem pencernaan akan menyerap lebih lama serta membuat Anda merasa kenyang dalam waktu yang lebih panjang. Anda dapat mengolah ubi dengan direbus, dikukus, maupun diiris tipis-tipis untuk membuat keripik ubi yang dipanggang maupun menggunakan air fryer sehingga kandungan nutrisi tetap terjaga.",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Buncis",
      imgSrc: "/assets/buncis.jpg",
      detail:
        "Manfaat buncis untuk kesehatan sangat beragam. Sayuran dengan harga terjangkau dan mudah ditemukan ini mengandung gizi yang baik untuk meningkatkan daya tahan tubuh, menurunkan berat badan, serta mencegah sejumlah penyakit. Manfaat buncis diperoleh dari kandungan nutrisi di dalamnya. Buncis terkenal sebagai makanan sumber serat, folat, magnesium, dan vitamin C yang baik untuk tubuh.",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Pare",
      imgSrc: "/assets/pare.jpg",
      detail:
        "Di balik rasanya yang pahit, ada segudang manfaat pare untuk kesehatan. Manfaat tersebut berasal dari kandungan nutrisi di dalamnya yang menjadikan pare baik untuk mengendalikan kadar kolesterol, menurunkan berat badan, dan menjaga daya tahan tubuh. Pare diketahui kaya akan serat dan mengandung makronutrisi, yaitu karbohidrat, protein, dan lemak. Selain itu, pare juga mengandung beragam vitamin dan mineral, seperti vitamin A, vitamin C, folat, dan zat besi.",
      id: 2,
    },
    {
      kategori: "Sayuran",
      name: "Paprika",
      imgSrc: "/assets/paprika.jpg",
      detail:
        "Merah, kuning, maupun hijau, paprika tidak pernah salah dipadukan dengan telur. Dengan kandungan vitamin C yang tinggi, mengonsumsi sayuran ini membantu tubuh untuk mengubah karbohidrat menjadi sumber energi lebih cepat. Selain itu, riset menunjukkan bahwa vitamin C dapat mendorong otot untuk menghasilkan asam lemak yang cocok untuk pembentukan otot serta pemulihan otot yang cedera.",
      id: 2,
    },
    {
      kategori: "Daging",
      name: "Daging Sapi",
      imgSrc: "/assets/daging-sapi.jpg",
      detail:
        "Ada banyak manfaat daging sapi untuk kesehatan dan tumbuh kembang anak. Ini karena daging sapi dikenal sebagai sumber protein yang baik, serta mengandung aneka nutrisi lain, seperti vitamin dan mineral. Berkat manfaatnya tersebut, tak heran jika daging sapi sering termasuk dalam menu makanan sehat untuk anak. Kandungan gizi pada daging sapi cukup melimpah, di antaranya protein, lemak, vitamin B, vitamin E, selenium, zat besi, zinc, fosfor, kalsium, kolin, dan kalium. Aneka nutrisi tersebut sangat dibutuhkan oleh anak untuk menjaga kesehatan serta mendukung proses tumbuh kembangnya.",
      id: 3,
    },
    {
      kategori: "Daging",
      name: "Daging Domba",
      imgSrc: "/assets/daging-domba.jpg",
      detail:
        "Daging domba menjadi salah satu sumber protein hewani dengan cita rasa lezat. Tetapi terdapat kandungan lemak jenuh dan kolesterol tinggi pada daging domba. Hal ini tentu membuat sebagian orang perlu berhati-hati, terutama penderita tekanan darah tinggi (hipertensi) dan penyakit jantung. Batasi konsumsi daging domba sebanyak sekali atau dua kali per minggu. Selain itu, Anda juga perlu memperhatikan teknik pengolahan dari daging domba yang Anda konsumsi.",
      id: 3,
    },
    {
      kategori: "Daging",
      name: "Daging Kambing",
      imgSrc: "/assets/daging-kambing.jpg",
      detail:
        "Daging kambing yang sering diolah menjadi satai atau sop ini tidak hanya enak, tetapi juga menyehatkan karena banyak kandungan gizinya. Manfaat daging kambing ini bisa diperoleh asalkan dimasak dengan cara yang benar. Dalam 100 gram daging kambing, setidaknya terdapat 150 kalori, 27 gram protein, dan 15 gram lemak. Tak hanya itu, daging kambing juga mengandung kalium, vitamin B12, zat besi, magnesium, selenium, dan omega-3.",
      id: 3,
    },
    {
      kategori: "Daging",
      name: "Ayam",
      imgSrc: "/assets/ayam.jpg",
      detail:
        "Manfaat daging ayam yang paling banyak dikenal adalah membangun massa otot dan menurunkan berat badan. Manfaat ini dapat diperoleh karena daging ayam tinggi protein. Namun, pastikan Anda mengolahnya dengan benar agar manfaat yang diperoleh bisa maksimal. Selain dari kandungan proteinnya yang tinggi, manfaat daging ayam juga dapat diperoleh dari kandungan nutrisi lain, seperti selenium, fosfor, vitamin B6, vitamin B12, dan kalium.",
      id: 3,
    },
    {
      kategori: "Daging",
      name: "Bebek",
      imgSrc: "/assets/bebek.jpg",
      detail:
        "Tak hanya telur bebek, daging bebek dianggap sebagai makanan yang sehat karena mengandung berbagai nutrisi, seperti protein, lemak, serta beragam jenis vitamin dan mineral, yang dibutuhkan oleh tubuh. Daging ini juga bisa menjadi pilihan bagi orang yang kurang suka dengan daging ayam. Daging bebek pun mengandung asam lemak omega-3, vitamin B kompleks, khususnya vitamin B3 (niasin) dan vitamin B12 (kobalamin), folat, dan kolin.",
      id: 3,
    },
  ];

  const { makananName } = useParams();
  const selectedFood = foodList.find((food) => food.name === makananName);

  return (
    <Layout>
      <section className={`${Style.font} p-[50px] pb-0`}>
        <div className="flex gap-[30px] p-[30px] rounded-2xl bg-green-background drop-shadow-xl max-lg:flex-col max-lg:items-center">
          <img
            src={selectedFood.imgSrc}
            alt={selectedFood.name}
            className="w-[500px] rounded-2xl max-lg:auto"
          />
          <div>
            <h1 className="text-center text-4xl font-semibold">
              {selectedFood.name}
            </h1>
            <p className="text-justify leading-relaxed pt-[20px] text-lg">
              {selectedFood.detail}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Makanan;
