import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Style from "./Style.module.css";
import { Link } from "react-router-dom";

const MakananPage = () => {
  const [data, setData] = useState([]);

  const DATA_MAKANAN = "https://65642e66ceac41c0761d8f0e.mockapi.io/kategori";

  useEffect(() => {
    fetch(DATA_MAKANAN)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Layout>
      <section className={`${Style.font} p-[50px] pb-0`}>
        <div className="flex flex-wrap justify-center gap-[20px]">
          {data.length == 0 ? (
            <div>Loading...</div>
          ) : (
            data.map((item) => (
              <Link to={`/makanan-page/${item.id}/daftar-makanan`}>
                <div className="w-[350px] max-sm:w-auto">
                  <img src={item.image} alt={item.name} />
                  <h1 className="pt-5 pb-2.5 text-lg text-center font-semibold border-b-2 border-b-green-minuman">
                    {item.name}
                  </h1>
                  <p className="pt-5 text-justify text-sm font-extralight">
                    {item.detail}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MakananPage;
