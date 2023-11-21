import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/hero-section/HeroSection";
import InformasiKesehatan from "../components/informasi-kesehatan/InformasiKesehatan";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <InformasiKesehatan />
    </Layout>
  );
}

export default HomePage;
