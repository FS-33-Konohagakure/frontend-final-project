import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Style from "./Style.module.css";
import api from "../api";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
// import Spesialisasi from "../components/konsultasi/Spesialisasi";

function Konsultasi() {
  const [dokter, setDokter] = useState([]);

  useEffect(() => {
    daftarDokter();
  }, []);

  const token = Cookies.get("token");

  const daftarDokter = async () => {
    const response = await api.get("/dokters", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data);
    setDokter(response.data.data);
  };

  return (
    <Layout>
      {/* <Spesialisasi /> */}

      <section
        className={`${Style.font} p-[50px] pb-[50px] flex flex-wrap justify-center gap-10`}
      >
        {dokter.length == 0 ? (
          <div>Loading...</div>
        ) : (
          dokter.map((item) => (
            <div
              key={item.id}
              className="w-[550px] p-5 rounded-2xl bg-slate-100 drop-shadow-xl"
            >
              <div className="flex gap-5 max-sm:flex-col max-sm:items-center max-sm:text-center">
                <img
                  src={item.image_normal}
                  alt={item.name}
                  className="w-[250px] rounded-xl"
                />
                <div className="leading-loose">
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-lg">{item.spesialisasi}</p>
                  <p className="text-lg py-1.5 px-2.5 rounded-xl bg-green-bg-card-minuman inline-block">
                    <FontAwesomeIcon icon={faSuitcase} size="sm" />{" "}
                    {item.pengalaman} Tahun
                  </p>
                  <p>Rp. {item.biaya}</p>
                  <div className="bg-green-bg-button text-center text-white rounded-xl px-5 mt-2.5 hover:bg-green-bg-button-hover">
                    <Link to={`/konsultasi/${item.name}`}>
                      Lihat Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </Layout>
  );
}

export default Konsultasi;
