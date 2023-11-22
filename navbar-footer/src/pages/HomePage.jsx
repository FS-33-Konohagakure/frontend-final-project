import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/hero-section/HeroSection";
import InformasiKesehatan from "../components/informasi-kesehatan/InformasiKesehatan";
import DaftarMakanan from "../components/daftar-makanan/DaftarMakanan";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <InformasiKesehatan />
      <DaftarMakanan />
    </Layout>
  );
}

export default HomePage;
