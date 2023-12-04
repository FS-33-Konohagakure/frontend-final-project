import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../components/layout/Layout";
import Style from "./Style.module.css";

function DetailMinuman() {
  const { minumanId } = useParams();
  const [data, setData] = useState(null);

  const DATA_MINUMAN = `https://655d966c9f1e1093c59987e6.mockapi.io/daftar-minuman/${minumanId}`;
  useEffect(() => {
    fetch(DATA_MINUMAN)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data", error));
  }, [minumanId]);

  return (
    <Layout>
      {!data ? (
        <div className={`${Style.font} text-center p-[50px]`}>Loading...</div>
      ) : (
        <section className={`${Style.font} p-[50px] pb-0`}>
          <h1 className="pb-1.5 text-4xl font-semibold border-b-2">
            {data.name}
          </h1>
          <div className="mt-[30px] p-[20px] flex gap-[30px] border rounded-xl text-justify shadow-xl max-lg:flex-col">
            <img
              src={data.image}
              alt={data.name}
              className="w-auto rounded-xl"
            />
            <p className="text-2xl max-sm:text-xl">{data.detail}</p>
          </div>
          {data.ragam ? (
            <div>
              <h1 className="text-center pt-[50px] text-2xl font-medium">
                {data.ragam} :
              </h1>
              <div className="pt-[20px] px-[180px] gap-[30px] flex flex-wrap justify-center items-center max-md:px-[100px] max-sm:px-[50px]">
                <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl max-lg:flex-col max-lg:items-center">
                  <img
                    src={data.daftarRagam[0].imageRagam}
                    alt={data.daftarRagam[0].name}
                    className="w-[200px] rounded-xl max-lg:w-auto"
                  />
                  <div>
                    <h1 className="text-center text-2xl font-medium text-green-minuman">
                      {data.daftarRagam[0].name}
                    </h1>
                    <p className="pt-2.5 text-lg text-justify">
                      {data.daftarRagam[0].detail}
                    </p>
                  </div>
                </div>
                <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl max-lg:flex-col max-lg:items-center">
                  <img
                    src={data.daftarRagam[1].imageRagam}
                    alt={data.daftarRagam[1].name}
                    className="w-[200px] rounded-xl max-lg:w-auto"
                  />
                  <div>
                    <h1 className="text-center text-2xl font-medium text-green-minuman">
                      {data.daftarRagam[1].name}
                    </h1>
                    <p className="pt-2.5 text-lg text-justify">
                      {data.daftarRagam[1].detail}
                    </p>
                  </div>
                </div>
                <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl max-lg:flex-col max-lg:items-center">
                  <img
                    src={data.daftarRagam[2].imageRagam}
                    alt={data.daftarRagam[2].name}
                    className="w-[200px] rounded-xl max-lg:w-auto"
                  />
                  <div>
                    <h1 className="text-center text-2xl font-medium text-green-minuman">
                      {data.daftarRagam[2].name}
                    </h1>
                    <p className="pt-2.5 text-lg text-justify">
                      {data.daftarRagam[2].detail}
                    </p>
                  </div>
                </div>
                <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl max-lg:flex-col max-lg:items-center">
                  <img
                    src={data.daftarRagam[3].imageRagam}
                    alt={data.daftarRagam[3].name}
                    className="w-[200px] rounded-xl max-lg:w-auto"
                  />
                  <div>
                    <h1 className="text-center text-2xl font-medium text-green-minuman">
                      {data.daftarRagam[3].name}
                    </h1>
                    <p className="pt-2.5 text-lg text-justify">
                      {data.daftarRagam[3].detail}
                    </p>
                  </div>
                </div>
                {/* <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl">
                  {data.image === true ? (
                    <img
                      src={data.daftarRagam[4].imageRagam}
                      alt={data.daftarRagam[4].name}
                      className="w-[200px] rounded-xl"
                    />
                  ) : (
                    ""
                  )}
                  <div>
                    <h1 className="text-center text-2xl font-medium text-green-minuman">
                      {data.daftarRagam[4].name}
                    </h1>
                    <p className="pt-2.5 text-lg">
                      {data.daftarRagam[4].detail}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          ) : (
            <>
              {data.manfaat ? (
                <div>
                  <h1 className="text-center pt-[50px] text-2xl font-medium">
                    {data.manfaat} :
                  </h1>
                  <div className="pt-[20px] px-[180px] gap-[30px] flex flex-wrap justify-center items-center max-md:px-[100px] max-sm:px-[50px]">
                    <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl">
                      <div>
                        <h1 className="text-center text-2xl font-medium text-green-minuman">
                          {data.daftarManfaat[0].name}
                        </h1>
                        <p className="pt-2.5 text-lg">
                          {data.daftarManfaat[0].detail}
                        </p>
                      </div>
                    </div>
                    <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl">
                      <div>
                        <h1 className="text-center text-2xl font-medium text-green-minuman">
                          {data.daftarManfaat[1].name}
                        </h1>
                        <p className="pt-2.5 text-lg">
                          {data.daftarManfaat[1].detail}
                        </p>
                      </div>
                    </div>
                    <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl">
                      <div>
                        <h1 className="text-center text-2xl font-medium text-green-minuman">
                          {data.daftarManfaat[2].name}
                        </h1>
                        <p className="pt-2.5 text-lg">
                          {data.daftarManfaat[2].detail}
                        </p>
                      </div>
                    </div>
                    <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl">
                      <div>
                        <h1 className="text-center text-2xl font-medium text-green-minuman">
                          {data.daftarManfaat[3].name}
                        </h1>
                        <p className="pt-2.5 text-lg">
                          {data.daftarManfaat[3].detail}
                        </p>
                      </div>
                    </div>
                    <div className="flex p-[20px] gap-[20px] bg-green-bg-card-minuman rounded-2xl shadow-xl">
                      <div>
                        <h1 className="text-center text-2xl font-medium text-green-minuman">
                          {data.daftarManfaat[4].name}
                        </h1>
                        <p className="pt-2.5 text-lg">
                          {data.daftarManfaat[4].detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </section>
      )}
    </Layout>
  );
}

export default DetailMinuman;
