import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import Cookies from "js-cookie";
import Layout from "../../components/layout/Layout";

function DaftarDokter() {
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
      <section className="p-[50px] pb-0">
        <div className="flex-col gap-5">
          <div className="flex gap-5">
            <img src={`${dokter[0].image_crop}`} alt={`${dokter[0].name}`} className="w-[200px] h-[200px]" />
            <div>
              <h1>{dokter[0].name}</h1>
              <p>{dokter[0].spesialisasi}</p>
              <p>{dokter[0].pengalaman}</p>
              <p>{dokter[0].biaya}</p>
              <Link to={""}>Lihat Selengkapnya</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DaftarDokter;
