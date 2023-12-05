import React, { useEffect, useState } from "react";
import Style from "./Spesialisasi.module.css";
import { Link } from "react-router-dom";
import api from "../../api"
import Cookies from "js-cookie"

function Spesialisasi() {
  const [dokter, setDokter] = useState([]);

  useEffect(() => {
    daftarDokter();
  }, [])

  const token = Cookies.get("token");

  const daftarDokter = async () => {
    const response = await api.get("/dokters", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data.data);
    setDokter(response.data.data);
  }

  return (
    <section className={`${Style.font} p-[50px] pb-0`}>
      {dokter.map((item) => (
        <div key={item.id}>
          <Link to={""}>
            <div>
              <img src="" alt="" />
              <p>{item.name}</p>
            </div>
          </Link>
        </div>
      ))}

      <div className="flex flex-wrap gap-[30px] justify-between items-center text-center font-medium">
        <Link to={`/konsultasi/1`}>
          <div className="flex flex-col items-center">
            <img
              src="assets/kandungan.png"
              alt="Logo Kandungan"
              className="w-[100px]"
            />
            <p>Kandungan</p>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/dokter-umum.png"
            alt="Logo Dokter Umum"
            className="w-[100px]"
          />
          <p>Dokter Umum</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/dokter-hewan.png"
            alt="Logo Dokter Hewan"
            className="w-[100px]"
          />
          <p>Dokter Hewan</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/diabetes.png"
            alt="Logo Diabetes"
            className="w-[100px]"
          />
          <p>Diabetes</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/penyakit-dalam.png"
            alt="Logo Penyakit Dalam"
            className="w-[100px]"
          />
          <p>Penyakit Dalam</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/dokter-gigi.png"
            alt="Logo Dokter Gigi"
            className="w-[100px]"
          />
          <p>Dokter Gigi</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/jantung.png"
            alt="Logo Jantung"
            className="w-[100px]"
          />
          <p>Jantung</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/laktasi-mpasi.png"
            alt="Logo Laktasi MPASI"
            className="w-[100px]"
          />
          <p>Laktasi MPASI</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img src="assets/mata.png" alt="Logo Mata" className="w-[100px]" />
          <p>Mata</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img src="assets/tht.png" alt="Logo THT" className="w-[100px]" />
          <p>THT</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img src="assets/saraf.png" alt="Logo Saraf" className="w-[100px]" />
          <p>Saraf</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/psikolog.png"
            alt="Logo Psikolog"
            className="w-[100px]"
          />
          <p>Psikolog</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/paru-paru.png"
            alt="Logo Paru-paru"
            className="w-[100px]"
          />
          <p>Paru-paru</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/dokter-anak.png"
            alt="Logo Dokter Anak"
            className="w-[100px]"
          />
          <p>Dokter Anak</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/pencernaan.png"
            alt="Logo Pencernaan"
            className="w-[100px]"
          />
          <p>Pencernaan</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/kanker.png"
            alt="Logo Kanker"
            className="w-[100px]"
          />
          <p>Kanker</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img src="assets/kulit.png" alt="Logo Kulit" className="w-[100px]" />
          <p>Kulit</p>
        </div>
        <div className="flex flex-col items-center">
          <Link to=""></Link>
          <img
            src="assets/ahli-gizi.png"
            alt="Logo Ahli Gizi"
            className="w-[100px]"
          />
          <p>Ahli Gizi</p>
        </div>
      </div>
    </section>
  );
}

export default Spesialisasi;
