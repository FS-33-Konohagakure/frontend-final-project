import React from "react";
import Layout from "../components/layout/Layout";
import Style from "./Style.module.css";
import DropdownManfaatPT from "../components/pola-tidur/DropdownManfaatPT";
import DropdownWhyPT from "../components/pola-tidur/DropdownWhyPT";
import DropdownMengaturPT from "../components/pola-tidur/DropdownMengaturPT";

const PolaTidur = () => {
  const options = [
    {
      id: 1,
      label: "Meningkatkan sistem kekebalan tubuh",
      keterangan:
        "Saat tidur, tubuh akan mengeluarkan sejenis protein yang disebut sitokin. Sitokin mampu melindungi tubuh dengan cara meningkatkan kinerja sistem kekebalan tubuh. Nah, sistem imun penting untuk melawan infeksi dan gangguan lainnya. Jika kurang tidur, Anda mungkin tidak memiliki cukup sitokin untuk melindungi tubuh dari penyakit. Sementara itu, kurangnya jam istirahat dapat meningkatkan produksi zat yang memicu peradangan dalam tubuh. Kondisi ini sama seperti saat Anda mengalami asma atau alergi.",
    },
    {
      id: 2,
      label: "Mengendalikan nafsu makan",
      keterangan:
        "Saat Anda tidur pada malam hari, kebutuhan kalori akan berkurang karena minimnya pergerakan. Hal inilah yang membuat kebutuhan energi menjadi menurun. Namun, saat kurang tidur, otak akan menurunkan kadar leptin, yaitu hormon yang menciptakan rasa kenyang dan membuat Anda jadi mudah lapar. Terlalu banyak makan tentu dapat meningkatkan indeks massa tubuh (IMT). Untuk mencegah kelebihan berat badan dan obesitas, Anda bisa cek risikonya dengan kalkulator IMT.",
    },
    {
      id: 3,
      label: "Menjaga kesehatan jantung",
      keterangan:
        "Tidur yang cukup juga memiliki manfaat untuk menurunkan berbagai risiko penyakit kardiovaskular, termasuk tekanan darah tinggi (hipertensi) dan serangan jantung. Saat Anda tidak memperoleh waktu istirahat yang memadai, tubuh akan melepaskan hormon stres yang disebut kortisol. Hormon ini membuat jantung bekerja lebih keras. Sama halnya dengan sistem imun, jantung juga perlu beristirahat agar bisa berfungsi dengan baik. Oleh sebab itu, pastikan Anda selalu tidur cukup setiap malam agar kesehatan jantung terjaga.",
    },
    {
      id: 4,
      label: "Memperbaiki suasana hati",
      keterangan:
        "Tahukah Anda bahwa salah satu fungsi tidur ialah menjaga kesehatan mental? Istirahat yang cukup bisa memperbaiki suasana hati sehingga membuat Anda lebih segar dan bahagia. Waktu tidur yang cukup juga meningkatkan energi. Ini membuat Anda lebih bersemangat untuk kembali beraktivitas ketika bangun pada keesokan paginya. Dengan begitu, Anda akan mampu menebarkan energi positif dalam berkegiatan. Hal ini tentu saja tidak hanya berdampak pada diri Anda, tetapi juga orang lain di sekitar.",
    },
    {
      id: 5,
      label: "Meningkatkan daya ingat",
      keterangan:
        "Anda merasa sering lupa? Nah, bisa jadi ini karena Anda kurang tidur. Waktu tidur yang cukup memang memiliki manfaat untuk memperkuat daya ingat Anda. Bahkan, pada studi yang diterbitkan dalam jurnal PLoS One (2012), tidur setelah belajar dapat membantu meningkatkan memori atau ingatan terhadap informasi baru. Sebaliknya, Anda akan lebih mudah lupa terhadap hal-hal yang pernah dipelajari sebelumnya bila tidak tidak mencukupi waktu tidur.",
    },
    {
      id: 6,
      label: "Membuat Anda panjang umur",
      keterangan:
        "Waktu tidur ternyata berkaitan dengan angka harapan hidup seseorang. Meski begitu, hal ini juga bisa dipengaruhi oleh berbagai faktor, termasuk penyakit yang dialami. Namun, setidaknya lama dan kualitas tidur cukup berperan dalam memperpanjang umur Anda. Makin sedikit waktu tidur seseorang, makin besar risiko terjadinya kematian dini. Bahkan, tidur kurang dari lima jam berisiko menyebabkan kematian yang lebih cepat. Secara tidak langsung, hal ini menunjukkan salah satu manfaat tidur, yakni untuk membuat Anda panjang umur.",
    },
    {
      id: 7,
      label: "Membantu menyalurkan emosi",
      keterangan:
        "Tidur selama 7–8 jam membantu Anda mengalami semua tahapan tidur, dari “tidur ayam” hingga fase tidur mendalam yang disebut rapid eye movement (REM). Dalam buku berjudul AIMS Neuroscience (2017), pada fase REM inilah mimpi biasanya muncul. Para ahli belum sepenuhnya memahami mengapa manusia bermimpi, tetapi mimpi diketahui dapat menjadi media untuk menyalurkan emosi setelah beraktivitas seharian. Emosi ini bisa timbul akibat stres dari masalah sehari-hari hingga gangguan mental seperti depresi dan gangguan kecemasan. Melalui mimpi dalam tahapan tidur REM, Anda dapat menyalurkan dan mengelola emosi tersebut dengan baik. Bahkan, beberapa orang bisa menemukan solusi dari masalahnya ketika bermimpi.",
    },
  ];

  return (
    <Layout>
      <section className={`${Style.font} p-[50px] pt-[30px]`}>
        <h1 className="text-2xl font-bold pb-1.5 border-b-2">
          POLA <span className="text-green-theme">TIDUR</span>
        </h1>
        <p className="pt-5 text-justify text-lg">
          “Pola tidur yang tepat nyatanya sangat penting untuk kesehatan tubuh.
          Pasalnya, kurang tidur dapat meningkatkan risiko penyakit kronis,
          menurunkan sistem kekebalan tubuh, menurunkan fungsi kognitif, dan
          memengaruhi emosi dan mental kamu.”
        </p>
        <div className="mt-5">
          <div className="pb-1.5">
            <DropdownManfaatPT options={options} />
          </div>
          <div className="pb-1.5">
            <DropdownWhyPT />
          </div>
          <div>
            <DropdownMengaturPT />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolaTidur;
