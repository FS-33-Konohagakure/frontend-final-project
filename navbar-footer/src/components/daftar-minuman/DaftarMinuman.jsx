import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Style from "./DaftarMinuman.module.css";

const DaftarMinuman = () => {
  const [data, setData] = useState([]);

  const DATA_MINUMAN =
    "https://655d966c9f1e1093c59987e6.mockapi.io/daftar-minuman";
  useEffect(() => {
    axios
      .get(DATA_MINUMAN)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <section className="px-[50px] pt-[50px]">
      <div
        className={`${Style.font} bg-green-background py-[30px] rounded-[36px] shadow-xl`}
      >
        <h1 className="text-center text-3xl font-bold">
          Daftar <span className="text-green-theme">Minuman</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-[30px] py-[30px]">
          {data.length == 0 ? (
            <div>Loading...</div>
          ) : (
            data.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-3xl shadow-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[230px] h-[150px] rounded-3xl"
                />
                <p className="text-center p-2.5 text-lg font-semibold">
                  {item.name}
                </p>
                <div className="text-right py-1.5">
                  <Link
                    to={`/minuman/${item.id}`}
                    className="py-1.5 px-2.5 text-[10px] border border-green-theme inline rounded-xl"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DaftarMinuman;
