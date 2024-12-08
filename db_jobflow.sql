-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Des 2024 pada 14.44
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
('ARTIKEL-1', 1, 'Mengenal_Profesi_UI_UX_Designer_Tugas_Skill_dan_karir', 'Mengenal Profesi UI/UX Designer: Tugas, Skill, dan Karir dan management', '', '/src/assets/Artikel 1.png', 'Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.', '1. Apa Itu UI/UX Designer?\n\nUI/UX Designer adalah profesional ...'),
('ARTIKEL-2', 1, 'Data_Analyst_Peran_Penting_dan_Skill_Wajib_dalam_Pengambilan_Keputusan', 'Data Analyst: Peran Penting dan Skill Wajib dalam Pengambilan Keputusan', 'Data', '/src/assets/Artikel 2.png', 'Profesi Data Analyst memiliki peran penting dalam membantu perusahaan membuat keputusan berdasarkan data yang akurat.', '<div><span style=\"text-black text-lg font-bold ... </div>'),
('ARTIKEL-3', 1, 'Digital_Marketing_Specialist_Memahami_Tugas_Skill_dan_Prospek_di_Era_Digital', 'Digital Marketing Specialist: Memahami Tugas, Skill, dan Prospek di Era Digital', 'Industrial', '/src/assets/Artikel 3.png', 'Salah satu peran yang semakin penting dalam upaya bisnis untuk menjangkau pelanggan secara digital adalah Digital Marketing Specialist.', '<div><span style=\"text-black text-lg font-bold ... </div>'),
('ARTIKEL-4', 1, 'Data_Scientist_Profesi_dengan_Prospek_Tinggi_di_Era_Big_Data', 'Data Scientist: Profesi dengan Prospek Tinggi di Era Big Data', 'Engineer', '/src/assets/Artikel 4.png', 'Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.', '<div><span style=\"text-black text-lg font-bold ... </div>');

-- --------------------------------------------------------

--
-- Struktur dari tabel `class_registrations`
--

CREATE TABLE `class_registrations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `mentor` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `program` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `class_registrations`
--

INSERT INTO `class_registrations` (`id`, `name`, `email`, `phone`, `mentor`, `date`, `time`, `file_url`, `created_at`, `program`) VALUES
(1, 'viosa rayhan', 'viosa@gmail.com', '08342342564', 'tiara', '2024-12-26', '20:33:00', 'uploads\\1733664551046.pdf', '2024-12-08 13:29:11', 'PortoPolish'),
(2, 'vivit', 'vivit@gmail.com', '0896384834732', 'siska', '2024-12-19', '20:35:00', 'uploads\\1733664773984.pdf', '2024-12-08 13:32:54', 'JobReady CV');

-- --------------------------------------------------------

--
-- Struktur dari tabel `e_learning`
--

CREATE TABLE `e_learning` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `thumbnail` text NOT NULL,
  `mentor_name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `order_id` bigint(20) NOT NULL,
  `date` datetime NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `payment_status` enum('belum bayar','berhasil') NOT NULL DEFAULT 'belum bayar',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `payments`
--

INSERT INTO `payments` (`id`, `order_id`, `date`, `email`, `phone`, `payment_method`, `payment_status`, `created_at`) VALUES
(1, 1733584905594, '2024-12-28 13:21:00', 'viosa@gmail.com', '08647346846', 'Gopay', 'berhasil', '2024-12-07 15:21:45'),
(3, 1733586150231, '2025-01-02 22:42:00', 'wildan@gmail.com', '089734824628', 'Dana', 'berhasil', '2024-12-07 15:42:30'),
(4, 1733586404043, '2025-01-14 22:49:00', 'cryl@gmail.com', '087834282433', 'ShopeePay', 'belum bayar', '2024-12-07 15:46:44'),
(5, 1733586483041, '2024-12-20 13:47:00', 'vivit@gmail.com', '08123445833', 'Ovo', 'belum bayar', '2024-12-07 15:48:03'),
(6, 1733587112174, '2024-12-24 22:01:00', 'floria@gmail.com', '08573482234', 'Ovo', 'belum bayar', '2024-12-07 15:58:32'),
(7, 1733587596428, '2024-12-28 23:10:00', 'akmaldesigner@gmail.com', '087231266112', 'Gopay', 'belum bayar', '2024-12-07 16:06:36'),
(10, 1733637581591, '2024-12-26 15:59:00', 'andri@gmail.com', '08934878712', 'ShopeePay', 'belum bayar', '2024-12-08 05:59:41'),
(11, 1733637590532, '2024-12-26 15:59:00', 'andri@gmail.com', '08934878712', 'ShopeePay', 'belum bayar', '2024-12-08 05:59:50'),
(12, 1733640506316, '2024-12-25 18:48:00', 'rasmana123@gmail.com', '086726387123', 'Ovo', 'belum bayar', '2024-12-08 06:48:26'),
(13, 1733640923313, '2024-12-23 13:58:00', 'rayhan@gmail.com', '08648136812', 'Gopay', 'belum bayar', '2024-12-08 06:55:23'),
(14, 1733643392593, '2024-12-25 19:36:00', 'floriapm@gmail.com', '08868126387', 'ShopeePay', 'belum bayar', '2024-12-08 07:36:32'),
(15, 1733643825813, '2024-12-25 14:47:00', 'rayan@gmail.com', '08634847323', 'Gopay', 'belum bayar', '2024-12-08 07:43:45'),
(16, 1733643968991, '2025-01-02 14:48:00', 'danu@gmail.com', '08384793242', 'Gopay', 'belum bayar', '2024-12-08 07:46:09'),
(17, 1733644652766, '2025-01-01 17:57:00', 'viosa@gmail.com', '08312638213', 'Ovo', 'belum bayar', '2024-12-08 07:57:32'),
(18, 1733644769725, '2025-01-09 16:59:00', 'vivi@gmail.com', '084749234', 'Ovo', 'belum bayar', '2024-12-08 07:59:29'),
(19, 1733645174422, '2024-12-20 15:08:00', 'han@gmail.com', '08348294243', 'Gopay', 'belum bayar', '2024-12-08 08:06:14'),
(20, 1733645254827, '2024-12-17 17:07:00', 'vivit@gmail.com', '086841124', 'Gopay', 'belum bayar', '2024-12-08 08:07:34'),
(21, 1733664555840, '2024-12-26 20:33:00', 'viosa@gmail.com', '08342342564', 'Ovo', 'belum bayar', '2024-12-08 13:29:15'),
(22, 1733664787140, '2024-12-19 20:35:00', 'vivit@gmail.com', '0896384834732', 'Ovo', 'berhasil', '2024-12-08 13:33:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(2, 'wildan', 'wildan@gmail.com', 'wildan123'),
(3, 'Vivit Lestari', 'vivit@gmail.com', 'vivit123'),
(4, 'akmal', 'akmal@gmail.com', 'akmal123'),
(5, 'viosarayhan', 'viosa@gmail.com', 'viosa123'),
(6, 'cryl', 'cryl@gmail.com', 'cryl123'),
(7, 'fitrian', 'fitrian@gmail.com', 'fitrian123');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `class_registrations`
--
ALTER TABLE `class_registrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `e_learning`
--
ALTER TABLE `e_learning`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`),
  ADD KEY `mentor_name` (`mentor_name`);

--
-- Indeks untuk tabel `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `class_registrations`
--
ALTER TABLE `class_registrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `e_learning`
--
ALTER TABLE `e_learning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
