import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Style from "./Style.module.css";

function DaftarMakananPage() {
  const { kategoriId } = useParams();
  const [data, setData] = useState(null);

  const DATA_MAKANAN = `https://65642e66ceac41c0761d8f0e.mockapi.io/kategori/${kategoriId}/daftar-makanan`;
  useEffect(() => {
    fetch(DATA_MAKANAN)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data", error));
  }, [kategoriId]);

  return (
    <Layout>
      {!data ? (
        <div className={`${Style.font} text-center pt-[50px]`}>Loading...</div>
      ) : (
        <section className={`${Style.font} p-[50px] pb-0`}>
          <div className="flex gap-[30px] justify-center max-lg:flex-col max-lg:items-center">
            <img
              src={data[0].image}
              alt={data[0].name}
              className="w-[400px] rounded-[50px]"
            />
            <div className="w-[500px] p-[30px] bg-green-bg-card-makanan rounded-[50px] drop-shadow-xl max-sm:w-auto">
              <h1 className="pb-2.5 text-5xl font-semibold text-center text-green-theme border-b-2 border-b-green-theme">
                {data[0].name}
              </h1>
              <p className="p-[30px] leading-relaxed">{data[0].detail}</p>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export default DaftarMakananPage;
