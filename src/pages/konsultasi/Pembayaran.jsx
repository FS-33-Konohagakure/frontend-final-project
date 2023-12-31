import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Style from "../Style.module.css";
import ReactModal from "react-modal";

function Pembayaran() {
  const doctorList = [
    {
      name: "Dr. I Made Kartika",
      image_normal: "https://i.ibb.co/mHdPt32/dokter-kandungan1.jpg",
      image_crop: "https://i.ibb.co/ZS56Myr/biaya-dokter-kandungan1.jpg",
      spesialisasi: "Kandungan",
      pengalaman: 15,
      str: 4521068907341231,
      hospital: "Rumah Sakit Sentosa",
      biaya: 50000,
      alumnus: "Universitas Kedokteran Kandungan",
      info: "Dr.I Made Surya adalah seorang spesialis Kandungan berpengalaman dengan lebih dari 15 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Sentosa.",
      jadwal_hari: "Senin - Selasa",
      jadwal_jam: "08:00 - 10:00",
      kategoriId: 1,
    },
    {
      name: "Dr. Putri Amelia",
      image_normal: "https://i.ibb.co/BLCDQQW/dokter-kandungan2.jpg",
      image_crop: "https://i.ibb.co/bPd0YhN/biaya-dokter-kandungan2.jpg",
      spesialisasi: "Kandungan",
      pengalaman: 12,
      str: 3125902456789012,
      hospital: "Rumah Sakit Bhakti Medika",
      biaya: 55000,
      alumnus: "Universitas Kedokteran Kandungan",
      info: "Dr.Putri Amelia adalah seorang spesialis Kandungan berpengalaman dengan lebih dari 12 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Bhakti Medika.",
      jadwal_hari: "Senin - Selasa",
      jadwal_jam: "11:00 - 13:00",
      kategoriId: 1,
    },
    {
      name: "Dr. Jessica Milea",
      image_normal: "https://i.ibb.co/RB22RNS/dokter-kandungan3.jpg",
      image_crop: "https://i.ibb.co/p3CnXZZ/biaya-dokter-kandungan3.jpg",
      spesialisasi: "Kandungan",
      pengalaman: 20,
      str: 6789543210678934,
      hospital: "Rumah Sakit Permata Cipta",
      biaya: 60000,
      alumnus: "Universitas Kedokteran Kandungan",
      info: "Dr.Jessica Milea adalah seorang spesialis Kandungan berpengalaman dengan lebih dari 20 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Permata Cipta.",
      jadwal_hari: "Senin - Selasa",
      jadwal_jam: "14:00 - 16:00",
      kategoriId: 1,
    },
    {
      name: "Dr.Dewi Ratnasari",
      image_normal: "https://i.ibb.co/rHKvVhS/dokter-anak1.jpg",
      image_crop: "https://i.ibb.co/d2qmqNh/biaya-dokter-anak1.jpg",
      spesialisasi: "Dokter Anak",
      pengalaman: 10,
      str: 2390578163410927,
      hospital: "Rumah Sakit Citra Medika",
      biaya: 55000,
      alumnus: "Universitas Kedokteran Anak",
      info: "Dr.Dewi Ratnasari adalah seorang spesialis Dokter Anak berpengalaman dengan lebih dari 10 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Citra Medika.",
      jadwal_hari: "Rabu - Kamis",
      jadwal_jam: "08:00 - 10:00",
      kategoriId: 2,
    },
    {
      name: "Dr.Rizki Pratama",
      image_normal: "https://i.ibb.co/Wg4shbg/dokter-anak2.jpg",
      image_crop: "https://i.ibb.co/g97ncfG/biaya-dokter-anak2.jpg",
      spesialisasi: "Dokter Anak",
      pengalaman: 18,
      str: 8901234567012354,
      hospital: "Rumah Sakit Medistra",
      biaya: 45000,
      alumnus: "Universitas Kedokteran Anak",
      info: "Dr.Rizki Pratama adalah seorang spesialis Dokter Anak berpengalaman dengan lebih dari 18 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Medistra.",
      jadwal_hari: "Rabu - Kamis",
      jadwal_jam: "11:00 - 13:00",
      kategoriId: 2,
    },
    {
      name: "Dr. Siti Nurhaliza",
      image_normal: "https://i.ibb.co/gZPVm8f/dokter-anak3.jpg",
      image_crop: "https://i.ibb.co/TkzrGFq/biaya-dokter-anak3.jpg",
      spesialisasi: "Dokter Anak",
      pengalaman: 14,
      str: 7890123456789321,
      hospital: "Rumah Sakit Kasih Sayang",
      biaya: 50000,
      alumnus: "Universitas Kedokteran Anak",
      info: "Dr.Siti Nurhaliza adalah seorang spesialis Dokter Anak berpengalaman dengan lebih dari 14 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Kasih Sayang.",
      jadwal_hari: "Rabu - Kamis",
      jadwal_jam: "14:00 - 16:00",
      kategoriId: 2,
    },
    {
      name: "Dr. Hendra Wijaya",
      image_normal: "https://i.ibb.co/48dd68R/dokter-gigi1.jpg",
      image_crop: "https://i.ibb.co/PcbBB2b/biaya-dokter-gigi1.jpg",
      spesialisasi: "Dokter Gigi",
      pengalaman: 10,
      str: 5432109876321098,
      hospital: "Rumah Sakit Hermina",
      biaya: 55000,
      alumnus: "Universitas Kedokteran Gigi",
      info: "Dr.Hendra Wijaya adalah seorang spesialis Dokter Gigi berpengalaman dengan lebih dari 10 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Hermina.",
      jadwal_hari: "Jumat - Sabtu",
      jadwal_jam: "09:00 - 11:00",
      kategoriId: 3,
    },
    {
      name: "Dr. Dian Purnama",
      image_normal: "https://i.ibb.co/WtrFCD4/dokter-gigi2.jpg",
      image_crop: "https://i.ibb.co/QndYS6f/biaya-dokter-gigi2.jpg",
      spesialisasi: "Dokter Gigi",
      pengalaman: 16,
      str: 1234567890123456,
      hospital: "Rumah Sakit Puri Medika",
      biaya: 60000,
      alumnus: "Universitas Kedokteran Gigi",
      info: "Dr.Dian Purnama adalah seorang spesialis Dokter Gigi berpengalaman dengan lebih dari 16 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Puri Medika.",
      jadwal_hari: "Jumat - Sabtu",
      jadwal_jam: "12:00 - 14:00",
      kategoriId: 3,
    },
    {
      name: "Dr. Tri Utami",
      image_normal: "https://i.ibb.co/DYZjQnQ/dokter-gigi3.jpg",
      image_crop: "https://i.ibb.co/6gJ6jm9/biaya-dokter-gigi3.jpg",
      spesialisasi: "Dokter Gigi",
      pengalaman: 13,
      str: 4321098765432109,
      hospital: "Rumah Sakit Sejahtera",
      biaya: 45000,
      alumnus: "Universitas Kedokteran Gigi",
      info: "Dr.Tri Utami adalah seorang spesialis Dokter Gigi berpengalaman dengan lebih dari 13 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Sejahtera.",
      jadwal_hari: "Jumat - Sabtu",
      jadwal_jam: "15:00 - 17:00",
      kategoriId: 3,
    },
    {
      name: "Dr. Sarah Louis",
      image_normal: "https://example.com/images/dr_sarah_normal.jpg",
      image_crop: "https://example.com/images/dr_sarah_crop.jpg",
      spesialisasi: "Dokter Hewan",
      pengalaman: 10,
      str: 927276463743928,
      hospital: "Animal Care Center",
      biaya: 150000,
      alumnus: "University of Veterinary Medicine",
      info: "Dokter hewan berpengalaman dalam perawatan hewan peliharaan.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "09:00 - 17:00",
      kategoriId: 4,
    },
    {
      name: "Dr. John Saga",
      image_normal: "https://example.com/images/dr_john_normal.jpg",
      image_crop: "https://example.com/images/dr_john_crop.jpg",
      spesialisasi: "Dokter Hewan",
      pengalaman: 8,
      str: 7896372468322012,
      hospital: "Happy Paws Veterinary Clinic",
      biaya: 120000,
      alumnus: "School of Veterinary Science",
      info: "Spesialis perawatan kesehatan kucing dan anjing.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "10:00 - 18:00",
      kategoriId: 4,
    },
    {
      name: "Dr. Michael Reeves",
      image_normal: "https://example.com/images/dr_michael_normal.jpg",
      image_crop: "https://example.com/images/dr_michael_crop.jpg",
      spesialisasi: "Dokter Hewan",
      pengalaman: 12,
      str: 3456847846345478,
      hospital: "Pet Wellness Center",
      biaya: 180000,
      alumnus: "College of Veterinary Medicine",
      info: "Pakar dalam perawatan hewan eksotis.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 4,
    },
    {
      name: "Dr. Lisa Fitriana",
      image_normal: "https://example.com/images/dr_lisa_normal.jpg",
      image_crop: "https://example.com/images/dr_lisa_crop.jpg",
      spesialisasi: "Diabetes",
      pengalaman: 15,
      str: 2345919784631367,
      hospital: "Diabetes Care Center",
      biaya: 200000,
      alumnus: "School of Endocrinology",
      info: "Pakar dalam pengelolaan diabetes mellitus.",
      jadwal_hari: "Senin - Kamis",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 5,
    },
    {
      name: "Dr. Kevin Shou",
      image_normal: "https://example.com/images/dr_kevin_normal.jpg",
      image_crop: "https://example.com/images/dr_kevin_crop.jpg",
      spesialisasi: "Diabetes",
      pengalaman: 12,
      str: 3451000751511678,
      hospital: "Glucose Wellness Clinic",
      biaya: 180000,
      alumnus: "College of Diabetology",
      info: "Fokus pada manajemen gula darah dan komplikasi diabetes.",
      jadwal_hari: "Selasa - Jumat",
      jadwal_jam: "09:00 - 17:00",
      kategoriId: 5,
    },
    {
      name: "Dr. Maria Betha",
      image_normal: "https://example.com/images/dr_maria_normal.jpg",
      image_crop: "https://example.com/images/dr_maria_crop.jpg",
      spesialisasi: "Diabetes",
      pengalaman: 10,
      str: 4561003094681789,
      hospital: "Insulin Health Center",
      biaya: 150000,
      alumnus: "University of Diabetes Studies",
      info: "Ahli dalam penanganan insulin dan pengendalian gula darah.",
      jadwal_hari: "Rabu - Sabtu",
      jadwal_jam: "10:00 - 18:00",
      kategoriId: 5,
    },
    {
      name: "Dr. Andrew Kurniawan",
      image_normal: "https://example.com/images/dr_andrew_normal.jpg",
      image_crop: "https://example.com/images/dr_andrew_crop.jpg",
      spesialisasi: "Penyakit Dalam",
      pengalaman: 18,
      str: 5670890324311890,
      hospital: "Internal Medicine Clinic",
      biaya: 250000,
      alumnus: "Medical School of Internal Medicine",
      info: "Menangani berbagai penyakit dalam dewasa.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 6,
    },
    {
      name: "Dr. Michelle Lee",
      image_normal: "https://example.com/images/dr_michelle_normal.jpg",
      image_crop: "https://example.com/images/dr_michelle_crop.jpg",
      spesialisasi: "Penyakit Dalam",
      pengalaman: 20,
      str: 6785432145652901,
      hospital: "Health First Internal Medicine",
      biaya: 280000,
      alumnus: "International School of Internal Medicine",
      info: "Spesialis dalam diagnosis dan perawatan penyakit dalam.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 6,
    },
    {
      name: "Dr. Christopher Nelwan",
      image_normal: "https://example.com/images/dr_christopher_normal.jpg",
      image_crop: "https://example.com/images/dr_christopher_crop.jpg",
      spesialisasi: "Penyakit Dalam",
      pengalaman: 15,
      str: 7891019473862012,
      hospital: "Endoterra Medical Center",
      biaya: 220000,
      alumnus: "Endoterra School of Medicine",
      info: "Fokus pada perawatan penyakit dalam kronis.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 6,
    },
    {
      name: "Dr. Dewi Sarah",
      image_normal: "https://example.com/images/dr_Dewi_normal.jpg",
      image_crop: "https://example.com/images/dr_Dewi_crop.jpg",
      spesialisasi: "Dokter Umum",
      pengalaman: 8,
      str: 901249090372634,
      hospital: "General Medical Center",
      biaya: 150000,
      alumnus: "Medical School of General Medicine",
      info: "Melayani berbagai kondisi kesehatan umum.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 7,
    },
    {
      name: "Dr. William Robbert",
      image_normal: "https://example.com/images/dr_william_normal.jpg",
      image_crop: "https://example.com/images/dr_william_crop.jpg",
      spesialisasi: "Dokter Umum",
      pengalaman: 10,
      str: 1234018273865256,
      hospital: "Commons Family Clinic",
      biaya: 180000,
      alumnus: "Commons Medical School",
      info: "Menyediakan perawatan umum untuk seluruh keluarga.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 7,
    },
    {
      name: "Dr. Jackson Genn",
      image_normal: "https://example.com/images/dr_normal.jpg",
      image_crop: "https://example.com/images/dr_crop.jpg",
      spesialisasi: "Dokter Umum",
      pengalaman: 12,
      str: 2341039849733567,
      hospital: "General Health Hub",
      biaya: 200000,
      alumnus: "University of General Medicine",
      info: "Memberikan layanan kesehatan umum yang holistik.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 7,
    },
    {
      name: "Dr. Brodin Plet",
      image_normal: "https://example.com/images/dr_normal.jpg",
      image_crop: "https://example.com/images/dr_crop.jpg",
      spesialisasi: "Jantung",
      pengalaman: 15,
      str: 3456098193876678,
      hospital: "Heart Health Center",
      biaya: 250000,
      alumnus: "Cardiology Institute",
      info: "Spesialis dalam masalah kesehatan jantung.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 8,
    },
    {
      name: "Dr. Emily Jess",
      image_normal: "https://example.com/images/dr_emily_normal.jpg",
      image_crop: "https://example.com/images/dr_emily_crop.jpg",
      spesialisasi: "Jantung",
      pengalaman: 18,
      str: 4567086562560989,
      hospital: "Cardio Care Clinic",
      biaya: 280000,
      alumnus: "Heart Institute of Medicine",
      info: "Menangani berbagai gangguan kardiovaskular.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 8,
    },
    {
      name: "Dr. Ludwig Aghren",
      image_normal: "https://example.com/images/dr_normal.jpg",
      image_crop: "https://example.com/images/dr_crop.jpg",
      spesialisasi: "Jantung",
      pengalaman: 20,
      str: 5679219740204890,
      hospital: "Cardiothoracic Hospital",
      biaya: 300000,
      alumnus: "University of Cardiovascular Medicine",
      info: "Ahli bedah jantung dan dada.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 8,
    },
    {
      name: "Dr. Laura Levanya",
      image_normal: "https://example.com/images/dr_laura_laktasia_normal.jpg",
      image_crop: "https://example.com/images/dr_laura_laktasia_crop.jpg",
      spesialisasi: "Laktasi MPASI",
      pengalaman: 12,
      str: 6789865412355901,
      hospital: "Mother and Baby Care Center",
      biaya: 180000,
      alumnus: "Breastfeeding Institute",
      info: "Menyediakan konsultasi laktasi dan pendampingan MPASI.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 9,
    },
    {
      name: "Dr. Mark Josheph",
      image_normal:
        "https://example.com/images/dr_mark_pediatric_lacto_normal.jpg",
      image_crop: "https://example.com/images/dr_mark_pediatric_lacto_crop.jpg",
      spesialisasi: "Laktasi MPASI",
      pengalaman: 15,
      str: 7891265321219012,
      hospital: "Pediatric Nutrition Clinic",
      biaya: 200000,
      alumnus: "Lactation and Pediatric Nutrition School",
      info: "Ahli gizi anak dan konsultan laktasi.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 9,
    },
    {
      name: "Dr. Natalie Chris",
      image_normal: "https://example.com/images/dr_natalie_babycare_normal.jpg",
      image_crop: "https://example.com/images/dr_natalie_babycare_crop.jpg",
      spesialisasi: "Laktasi MPASI",
      pengalaman: 10,
      str: 8900987125464123,
      hospital: "Baby Wellness Center",
      biaya: 150000,
      alumnus: "Child Nutrition and Care Institute",
      info: "Dokter anak dengan fokus pada gizi dan perawatan bayi.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 9,
    },
    {
      name: "Dr. James Franken",
      image_normal: "https://example.com/images/dr_ophthalmicus_normal.jpg",
      image_crop: "https://example.com/images/dr_ophthalmicus_crop.jpg",
      spesialisasi: "Mata",
      pengalaman: 14,
      str: 901108982716234,
      hospital: "Eye Care Center",
      biaya: 220000,
      alumnus: "Ophthalmology School",
      info: "Spesialis dalam masalah kesehatan mata.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 10,
    },
    {
      name: "Dr. Ethan Barack",
      image_normal: "https://example.com/images/dr_ethan_eyecare_normal.jpg",
      image_crop: "https://example.com/images/dr_ethan_eyecare_crop.jpg",
      spesialisasi: "Mata",
      pengalaman: 16,
      str: 1224869734970956,
      hospital: "Vision Health Clinic",
      biaya: 250000,
      alumnus: "Eye Health Institute",
      info: "Fokus pada diagnosis dan perawatan penyakit mata.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 10,
    },
    {
      name: "Dr. Roberto Damian",
      image_normal: "https://example.com/images/dr_optometria_normal.jpg",
      image_crop: "https://example.com/images/dr_optometria_crop.jpg",
      spesialisasi: "Mata",
      pengalaman: 20,
      str: 2345098975445667,
      hospital: "Optometry Excellence Center",
      biaya: 280000,
      alumnus: "College of Optometry",
      info: "Optometris dengan pengalaman luas dalam uji mata.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 10,
    },
    {
      name: "Dr. Thomas Dylan",
      image_normal: "https://example.com/images/dr_thomas_orl_normal.jpg",
      image_crop: "https://example.com/images/dr_thomas_orl_crop.jpg",
      spesialisasi: "THT",
      pengalaman: 18,
      str: 3450971367675678,
      hospital: "Ear, Nose, and Throat Clinic",
      biaya: 200000,
      alumnus: "ORL School of Medicine",
      info: "Spesialis dalam gangguan telinga, hidung, dan tenggorokan.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 11,
    },
    {
      name: "Dr. Bruno Chuck",
      image_normal: "https://example.com/images/dr_entcare_normal.jpg",
      image_crop: "https://example.com/images/dr_entcare_crop.jpg",
      spesialisasi: "THT",
      pengalaman: 20,
      str: 4569877654242789,
      hospital: "ENT Wellness Center",
      biaya: 250000,
      alumnus: "Ear, Nose, and Throat Institute",
      info: "Fokus pada diagnosis dan perawatan gangguan THT.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 11,
    },
    {
      name: "Dr. Steven Dough",
      image_normal: "https://example.com/images/dr_otologist_normal.jpg",
      image_crop: "https://example.com/images/dr_otologist_crop.jpg",
      spesialisasi: "THT",
      pengalaman: 15,
      str: 5670896123240890,
      hospital: "Otology Specialist Hospital",
      biaya: 180000,
      alumnus: "Otology School of Medicine",
      info: "Ahli otologi dengan fokus pada gangguan telinga.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 11,
    },
    {
      name: "Dr. Samuel imaguno",
      image_normal:
        "https://example.com/images/dr_samuel_neurologio_normal.jpg",
      image_crop: "https://example.com/images/dr_samuel_neurologio_crop.jpg",
      spesialisasi: "Saraf",
      pengalaman: 22,
      str: 6781987524354901,
      hospital: "Neurology Care Center",
      biaya: 280000,
      alumnus: "Neurology Institute",
      info: "Spesialis dalam gangguan sistem saraf.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 12,
    },
    {
      name: "Dr. Sophia CLarasia",
      image_normal: "https://example.com/images/dr_sophia_neurocare_normal.jpg",
      image_crop: "https://example.com/images/dr_sophia_neurocare_crop.jpg",
      spesialisasi: "Saraf",
      pengalaman: 25,
      str: 7891455786654012,
      hospital: "Neurological Wellness Clinic",
      biaya: 300000,
      alumnus: "Neuroscience School",
      info: "Fokus pada diagnosis dan perawatan gangguan neurologis.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 12,
    },
    {
      name: "Dr. Nathan Victory",
      image_normal: "https://example.com/images/dr_nathan_neuropath_normal.jpg",
      image_crop: "https://example.com/images/dr_nathan_neuropath_crop.jpg",
      spesialisasi: "Saraf",
      pengalaman: 20,
      str: 8900871326578123,
      hospital: "Neuropathic Care Hospital",
      biaya: 250000,
      alumnus: "Neuropathy Medical School",
      info: "Ahli saraf dengan fokus pada penyakit neuropati.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 12,
    },
    {
      name: "Psikolog Dr. Roubert Goulet",
      image_normal:
        "https://example.com/images/psikolog_dr_mindcare_normal.jpg",
      image_crop: "https://example.com/images/psikolog_dr__mindcare_crop.jpg",
      spesialisasi: "Psikolog",
      pengalaman: 15,
      str: 1234082938912756,
      hospital: "Mindcare Psychology Center",
      biaya: 200000,
      alumnus: "Psychology Institute",
      info: "Psikolog klinis dengan pengalaman dalam berbagai kondisi mental.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 13,
    },
    {
      name: "Psikolog Dr. Vaina Loressa",
      image_normal:
        "https://example.com/images/psikolog_dr_psychowell_normal.jpg",
      image_crop: "https://example.com/images/psikolog_dr_psychowell_crop.jpg",
      spesialisasi: "Psikolog",
      pengalaman: 18,
      str: 2310043467784567,
      hospital: "Psychowell Counseling Services",
      biaya: 250000,
      alumnus: "Counseling and Psychology School",
      info: "Berpengalaman dalam konseling individu dan keluarga.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 13,
    },
    {
      name: "Psikolog Dr. Alessia Tara",
      image_normal:
        "https://example.com/images/psikolog_dr_mentalwise_normal.jpg",
      image_crop: "https://example.com/images/psikolog_dr_mentalwise_crop.jpg",
      spesialisasi: "Psikolog",
      pengalaman: 20,
      str: 3451467500099678,
      hospital: "Mentalwise Psychology Clinic",
      biaya: 280000,
      alumnus: "Mental Health Institute",
      info: "Terapi psikologis untuk berbagai masalah mental.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 13,
    },
    {
      name: "Dr. Mandy Ugene",
      image_normal: "https://example.com/images/dr_pulmonar_normal.jpg",
      image_crop: "https://example.com/images/dr_pulmonar_crop.jpg",
      spesialisasi: "Paru-Paru",
      pengalaman: 15,
      str: 4567927382372189,
      hospital: "Pulmonary Care Center",
      biaya: 220000,
      alumnus: "Pulmonology Institute",
      info: "Spesialis dalam gangguan pernapasan dan paru-paru.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 14,
    },
    {
      name: "Dr. Pamela Respira",
      image_normal: "https://example.com/images/dr_pamela_respira_normal.jpg",
      image_crop: "https://example.com/images/dr_pamela_respira_crop.jpg",
      spesialisasi: "Paru-Paru",
      pengalaman: 18,
      str: 5670928371362890,
      hospital: "Respiratory Health Clinic",
      biaya: 240000,
      alumnus: "Respiratory Medicine School",
      info: "Fokus pada perawatan penyakit pernapasan dan paru-paru.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 14,
    },
    {
      name: "Dr. Andy Dandeloni",
      image_normal: "https://example.com/images/dr_pneumologia_normal.jpg",
      image_crop: "https://example.com/images/dr_pneumologia_crop.jpg",
      spesialisasi: "Paru-Paru",
      pengalaman: 20,
      str: 678901,
      hospital: "Pneumology Specialist Hospital",
      biaya: 260000,
      alumnus: "Pneumology School of Medicine",
      info: "Ahli paru-paru dengan pengalaman luas dalam diagnosis penyakit pernapasan.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 14,
    },
    {
      name: "Dr. Patricia Anna",
      image_normal: "https://example.com/images/dr_patricia_digesta_normal.jpg",
      image_crop: "https://example.com/images/dr_patricia_digesta_crop.jpg",
      spesialisasi: "Pencernaan",
      pengalaman: 15,
      str: 7892947823761012,
      hospital: "Digestive Health Center",
      biaya: 220000,
      alumnus: "Digestive Medicine Institute",
      info: "Spesialis dalam gangguan pencernaan dan saluran pencernaan.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 15,
    },
    {
      name: "Dr. Derek Zikko",
      image_normal: "https://example.com/images/dr_derek_gastrocare_normal.jpg",
      image_crop: "https://example.com/images/dr_derek_gastrocare_crop.jpg",
      spesialisasi: "Pencernaan",
      pengalaman: 18,
      str: 8909087573810123,
      hospital: "Gastrointestinal Wellness Clinic",
      biaya: 240000,
      alumnus: "Gastroenterology School",
      info: "Fokus pada perawatan gangguan pencernaan.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 15,
    },
    {
      name: "Dr. Randy Grande",
      image_normal: "https://example.com/images/dr_gastronome_normal.jpg",
      image_crop: "https://example.com/images/dr_gastronome_crop.jpg",
      spesialisasi: "Pencernaan",
      pengalaman: 20,
      str: 901643217893234,
      hospital: "Gastronome Medical Center",
      biaya: 260000,
      alumnus: "Gastrology School of Medicine",
      info: "Ahli pencernaan dengan pengalaman dalam diagnosis penyakit pencernaan.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 15,
    },
    {
      name: "Dr. Kevin Cheeck",
      image_normal: "https://example.com/images/dr_kevin_oncologist_normal.jpg",
      image_crop: "https://example.com/images/dr_kevin_oncologist_crop.jpg",
      spesialisasi: "Kanker",
      pengalaman: 15,
      str: 1224827389216756,
      hospital: "Oncology Care Center",
      biaya: 220000,
      alumnus: "Oncology Institute",
      info: "Spesialis dalam diagnosis dan perawatan kanker.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 16,
    },
    {
      name: "Dr. Karen Will",
      image_normal: "https://example.com/images/dr_karen_cancercare_normal.jpg",
      image_crop: "https://example.com/images/dr_karen_cancercare_crop.jpg",
      spesialisasi: "Kanker",
      pengalaman: 18,
      str: 2347365233004567,
      hospital: "Cancer Treatment Clinic",
      biaya: 240000,
      alumnus: "Cancer Research Institute",
      info: "Fokus pada terapi dan penelitian kanker.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 16,
    },
    {
      name: "Dr. Jaden Jerry",
      image_normal: "https://example.com/images/dr_oncology_normal.jpg",
      image_crop: "https://example.com/images/dr_oncology_crop.jpg",
      spesialisasi: "Kanker",
      pengalaman: 20,
      str: 3459283472319678,
      hospital: "Oncology Specialist Hospital",
      biaya: 260000,
      alumnus: "Oncology School of Medicine",
      info: "Ahli kanker dengan pengalaman dalam berbagai jenis kanker.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 16,
    },
    {
      name: "Dr. Kristina Dona",
      image_normal:
        "https://example.com/images/dr_kristina_dermatolog_normal.jpg",
      image_crop: "https://example.com/images/dr_kristina_dermatolog_crop.jpg",
      spesialisasi: "Kulit",
      pengalaman: 15,
      str: 4567734678347389,
      hospital: "Dermatology Skin Center",
      biaya: 220000,
      alumnus: "Dermatology Institute",
      info: "Spesialis dalam perawatan kulit dan penyakit kulit.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 17,
    },
    {
      name: "Dr. Christina Paulera",
      image_normal: "https://example.com/images/dr_skincare_normal.jpg",
      image_crop: "https://example.com/images/dr_skincare_crop.jpg",
      spesialisasi: "Kulit",
      pengalaman: 18,
      str: 5674676201237890,
      hospital: "Skin Wellness Clinic",
      biaya: 240000,
      alumnus: "Skin Health School",
      info: "Fokus pada perawatan kecantikan kulit dan masalah kulit umum.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 17,
    },
    {
      name: "Dr. Sharon Rinncey",
      image_normal: "https://example.com/images/dr_dermatology_normal.jpg",
      image_crop: "https://example.com/images/dr_dermatology_crop.jpg",
      spesialisasi: "Kulit",
      pengalaman: 20,
      str: 6792437982328901,
      hospital: "Dermatology Specialist Hospital",
      biaya: 260000,
      alumnus: "Dermatology School of Medicine",
      info: "Ahli kulit dengan pengalaman luas dalam diagnosis dan perawatan kulit.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 17,
    },
    {
      name: "Dr. Grace Queena",
      image_normal:
        "https://example.com/images/dr_grace_nutritionist_normal.jpg",
      image_crop: "https://example.com/images/dr_grace_nutritionist_crop.jpg",
      spesialisasi: "Ahli Gizi",
      pengalaman: 15,
      str: 7891324134009012,
      hospital: "Nutrition Wellness Center",
      biaya: 220000,
      alumnus: "Nutritionist Institute",
      info: "Spesialis dalam gizi dan kesehatan makanan.",
      jadwal_hari: "Senin - Jumat",
      jadwal_jam: "08:00 - 16:00",
      kategoriId: 18,
    },
    {
      name: "Dr. Gregory Sanary",
      image_normal:
        "https://example.com/images/dr_gregory_dietitian_normal.jpg",
      image_crop: "https://example.com/images/dr_gregory_dietitian_crop.jpg",
      spesialisasi: "Ahli Gizi",
      pengalaman: 18,
      str: 8908374289364123,
      hospital: "Diet and Nutrition Clinic",
      biaya: 240000,
      alumnus: "Dietetics School",
      info: "Fokus pada perencanaan nutrisi dan diet seimbang.",
      jadwal_hari: "Selasa - Sabtu",
      jadwal_jam: "09:00 - 18:00",
      kategoriId: 18,
    },
    {
      name: "Dr. Nancy Bennily",
      image_normal:
        "https://example.com/images/dr_nancy_nutritioncare_normal.jpg",
      image_crop: "https://example.com/images/dr_nancy_nutritioncare_crop.jpg",
      spesialisasi: "Ahli Gizi",
      pengalaman: 20,
      str: 901463273462234,
      hospital: "NutritionCare Specialist Hospital",
      biaya: 260000,
      alumnus: "Nutrition Science School of Medicine",
      info: "Ahli gizi dengan pengalaman dalam perawatan nutrisi pasien.",
      jadwal_hari: "Rabu - Minggu",
      jadwal_jam: "10:00 - 19:00",
      kategoriId: 18,
    },
  ];

  const { dokterName, dokterBiaya } = useParams();
  const selectedDoctor = doctorList.find(
    (doctor) => doctor.biaya === dokterBiaya || doctor.name === dokterName
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const [datetime, setDatetime] = useState(null);

  const getDateTime = () => {
    const now = new Date();
    const datetime = `${now.getDate()}-${
      now.getMonth() + 1
    }-${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;
    setDatetime(datetime);
  };

  useEffect(() => {
    getDateTime();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <Layout>
      <section
        className={`${Style.font} flex justify-center items-center p-[50px]`}
      >
        <div className="bg-gray-bg-bayar w-[500px] p-10 rounded-xl shadow-xl">
          <div className="flex justify-between pb-5">
            <p className="text-lg font-semibold">Pembayaran Mu</p>
            <p>Rp. {selectedDoctor.biaya}</p>
          </div>
          <p className="inline-block rounded-xl mb-5 py-2.5 px-5 bg-white">
            Uang Elektronik
          </p>
          <form onSubmit={handleOpenModal}>
            <div className="flex justify-between mb-5">
              <label htmlFor="gopay">
                <img src="/assets/gopay.png" alt="Gopay" className="w-20" />
              </label>
              <input
                type="radio"
                name="isModalOpen"
                value="gopay"
                id="gopay"
                required
              />
            </div>
            <div className="flex justify-between mb-5">
              <label htmlFor="dana">
                <img src="/assets/dana.png" alt="Dana" className="w-20" />
              </label>
              <input
                type="radio"
                name="isModalOpen"
                value="dana"
                id="dana"
                required
              />
            </div>
            <div className="flex justify-between mb-5">
              <label htmlFor="linkaja">
                <img src="/assets/linkaja.png" alt="Linkaja" className="w-20" />
              </label>
              <input
                type="radio"
                name="isModalOpen"
                value="linkaja"
                id="linkaja"
                required
              />
            </div>
            <div className="flex justify-between mb-5">
              <label htmlFor="ovo">
                <img src="/assets/ovo.png" alt="Ovo" className="w-20" />
              </label>
              <input
                type="radio"
                name="isModalOpen"
                value="ovo"
                id="ovo"
                required
              />
            </div>
            <div className="mt-7 px-5 py-2 text-center bg-teal-400 rounded-xl hover:bg-teal-600">
              <button type="submit" className="text-white font-medium">
                Konfirmasi Pembayaran
              </button>
            </div>
          </form>
        </div>
      </section>

      <ReactModal isOpen={isModalOpen}>
        <div
          className={`${Style.font} relative h-full py-10 px-20 bg-slate-300`}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold border-b-4 pb-2.5">SEHATIN</h1>
          </div>
          <p className="pt-10 text-lg">{datetime}</p>
          <div className="pt-10 leading-loose text-xl border-b-4 pb-10">
            <p className="border-b-2 inline-block">
              Konsultasi dengan Dokter {selectedDoctor.name}
            </p>{" "}
            <br />
            <p className="border-b-2 inline-block">
              Dokter {selectedDoctor.spesialisasi}
            </p>{" "}
            <br />
            <p className="border-b-2 inline-block">
              Biaya konsultasi Rp. {selectedDoctor.biaya}
            </p>{" "}
            <br />
            <p className="border-b-2 inline-block">Konsultasi selama 1 jam</p>
          </div>
          <div className="text-xl text-end pt-5">
            <button
              onClick={handleSubmit}
              className="py-2.5 px-5 bg-blue-theme text-white font-medium rounded-xl hover:bg-blue-theme-hover"
            >
              Close
            </button>
          </div>
        </div>
      </ReactModal>
    </Layout>
  );
}

export default Pembayaran;
