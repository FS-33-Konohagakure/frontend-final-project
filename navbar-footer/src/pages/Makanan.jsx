import React from "react";
import Layout from "../components/layout/Layout";

import { useParams } from "react-router";

function Makanan() {
  const params = useParams();

  return <Layout>Halaman Makanan {params.kategori}</Layout>;
}

export default Makanan;
