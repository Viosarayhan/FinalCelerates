-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Des 2024 pada 13.43
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_jobflow`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `articles`
--

CREATE TABLE `articles` (
  `id` varchar(20) NOT NULL,
  `count` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `categori` varchar(50) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `isi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `articles`
--

INSERT INTO `articles` (`id`, `count`, `slug`, `judul`, `categori`, `img`, `description`, `isi`) VALUES
('ARTIKEL-1', 1, 'Mengenal_Profesi_UI_UX_Designer_Tugas_Skill_dan_karir', 'Mengenal Profesi UI/UX Designer: Tugas, Skill, dan Karir', 'Design', '/src/assets/Artikel 1.png', 'Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.', '1. Apa Itu UI/UX Designer?\n\nUI/UX Designer adalah profesional ...'),
('ARTIKEL-2', 1, 'Data_Analyst_Peran_Penting_dan_Skill_Wajib_dalam_Pengambilan_Keputusan', 'Data Analyst: Peran Penting dan Skill Wajib dalam Pengambilan Keputusan', 'Data', '/src/assets/Artikel 2.png', 'Profesi Data Analyst memiliki peran penting dalam membantu perusahaan membuat keputusan berdasarkan data yang akurat.', '<div><span style=\"text-black text-lg font-bold ... </div>'),
('ARTIKEL-3', 1, 'Digital_Marketing_Specialist_Memahami_Tugas_Skill_dan_Prospek_di_Era_Digital', 'Digital Marketing Specialist: Memahami Tugas, Skill, dan Prospek di Era Digital', 'Industrial', '/src/assets/Artikel 3.png', 'Salah satu peran yang semakin penting dalam upaya bisnis untuk menjangkau pelanggan secara digital adalah Digital Marketing Specialist.', '<div><span style=\"text-black text-lg font-bold ... </div>'),
('ARTIKEL-4', 1, 'Data_Scientist_Profesi_dengan_Prospek_Tinggi_di_Era_Big_Data', 'Data Scientist: Profesi dengan Prospek Tinggi di Era Big Data', 'Engineer', '/src/assets/Artikel 4.png', 'Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.', '<div><span style=\"text-black text-lg font-bold ... </div>');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
