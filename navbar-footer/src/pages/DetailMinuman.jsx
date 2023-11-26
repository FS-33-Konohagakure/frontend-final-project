import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../components/layout/Layout";
import axios from "axios";

function DetailMinuman() {
  const params = useParams();
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
    <Layout>
      <section>
        {params.id}
        <p>{data.name}</p>
      </section>
    </Layout>
  );
}

export default DetailMinuman;
