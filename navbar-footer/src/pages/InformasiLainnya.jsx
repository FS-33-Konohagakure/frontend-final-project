import React from "react";
import Layout from "../components/layout/Layout";
import Style from "./Style.module.css";

function InformasiLainnya() {
  return (
    <Layout>
      <section className={`${Style.font} px-[50px] pt-[50px]`}>
        <div className="leading-7">
          <h1 className="text-xl font-semibold">
            Keunggulan <span className="text-blue-theme">SEHATIN.ID</span>
          </h1>
          <p>
            Satu aplikasi untuk melakukan konsultasi bersama dokter spesialis
            secara online.
          </p>
          <p>
            Dapatkan rujukan ke pemeriksaan offline di RS atau pemeriksaan
            diagnostik jika diperlukan.
          </p>
          <p>
            Dapat diintegrasikan dengan asuransimu agar kebutuhan kesehatan
            online terjamin asuransi.
          </p>
        </div>
        <br />
        <div className="leading-7">
          <h1 className="text-xl font-semibold">
            Tanya Dokter{" "}
            <span className="text-blue-theme">Umum dan Spesialis</span>
          </h1>
          <p>
            Kini kamu bisa tanya dokter online langsung dari website. Layanan
            kesehatan online terpercaya di Indonesia ini memiliki daftar dokter
            pilihan terbaik di bidangnya masing-masing. Mulai dari dokter umum
            yang bisa membantu menjawab keluhan ringan, hingga dokter spesialis
            berpengalaman dan terpercaya Terdiri dari banyak jenis dokter
            spesialis. Mulai dari dokter gigi, ahli kebidanan, spesialis
            penyakit dalam, THT, spesialis mata, hingga dokter spesialis anak.
            Semua dokter akan memberikan layanan kesehatan yang kamu butuhkan.
            untuk memberi jalan keluar atas masalah kesehatan yang lebih berat.
            Jangan tunggu hingga parah, langsung konsultasikan kondisi Ksehatan
            kamu agar bisa segera ditangani oleh yang berpengalaman.
          </p>
        </div>
        <br />
        <div className="leading-7">
          <h1 className="text-xl font-semibold">
            Mengapa Pilih <span className="text-blue-theme">SEHATIN</span>
          </h1>
          <p>
            SEHATIN adalah aplikasi yang menawarkan berbagai layanan konsultasi
            dengan dokter umum maupun spesialis. Keputusan untuk menyediakan
            layanan ini didasari oleh beberapa pertimbangan penting. Setiap
            spesialis medis memiliki pengetahuan dan keahlian yang berbeda.
          </p>
          <p>
            Dalam banyak kasus, masalah kesehatan memerlukan pendekatan dan
            penanganan yang sesuai dengan jenis keluhan atau kondisi yang
            dialami. Oleh karena itu, dengan menyediakan berbagai spesialis,
            aplikasi ini dapat memenuhi kebutuhan spesifik pengguna yang mungkin
            memiliki masalah kesehatan dalam berbagai bidang.
          </p>
          <p>
            Keluarga seringkali membutuhkan layanan kesehatan untuk berbagai
            anggota keluarga. Dengan menghadirkan dokter umum dan spesialis,
            aplikasi ini dapat membantu keluarga untuk mendapatkan layanan
            kesehatan yang mereka butuhkan dalam satu platform.
          </p>
          <br />
          <p>
            Aplikasi ini bertujuan untuk memberikan kemudahan akses ke layanan
            kesehatan dengan cepat dan mudah, terutama dalam kasus konsultasi
            jarak jauh atau online. Pengguna dapat dengan mudah mencari dan
            berkomunikasi dengan dokter yang sesuai dengan kebutuhan mereka
            tanpa harus melakukan perjalanan ke fasilitas medis fisik.
          </p>
          <p>
            Dengan menyediakan berbagai spesialis, aplikasi ini dapat
            meningkatkan pengalaman pengguna. Pengguna dapat mendapatkan
            informasi dan nasihat yang akurat dan relevan sesuai dengan kondisi
            kesehatan mereka, meningkatkan kepuasan pengguna dan mengakomodasi
            berbagai jenis kondisi kesehatan yang mungkin dihadapi oleh
            pengguna.
          </p>
          <br />
          <p>
            Dalam rangka memberikan solusi yang komprehensif dan relevan bagi
            pengguna, SEHATIN telah merenungkan berbagai faktor untuk
            menyediakan layanan konsultasi dengan dokter kandungan, dokter gigi,
            dan dokter anak. Ini dapat memberikan nilai tambah bagi pengguna
            yang mencari solusi untuk berbagai masalah kesehatan.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default InformasiLainnya;
