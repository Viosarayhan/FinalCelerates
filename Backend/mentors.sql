-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Des 2024 pada 01.23
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
-- Struktur dari tabel `mentors`
--

CREATE TABLE `mentors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `zoomLink` varchar(255) DEFAULT NULL,
  `classType` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `mentors`
--

INSERT INTO `mentors` (`id`, `name`, `job`, `date`, `time`, `zoomLink`, `classType`, `image`) VALUES
(1, 'Tiara Dewi', 'CV Consultant', '2024-12-01', '10:00:00', 'https://zoom.us/j/123456789', 'Review CV', '/public/assetsvivit/5d9783cb0a04030c4556d7079ddf57af.png'),
(2, 'Siska Larasati', 'CV Consultant', '2024-12-02', '14:00:00', 'https://zoom.us/j/987654321', 'Review CV\r\nReview Portfolio\r\nLatihan Interview', '/public/assetsvivit/2f1ba397127e4944daa182d5fa83e820.png'),
(3, 'Andi Wirawan', 'Portfolio Advisor', '2024-12-03', '09:00:00', 'https://zoom.us/j/112233445', 'Review Portfolio', '/public/assetsvivit/4d45e0232a205087c7b514010ab84cac.png'),
(4, 'Nadia Kurnia', 'HR Specialist', '2024-12-03', '16:00:00', 'https://zoom.us/j/112233445', 'Review Portfolio', '/src/assets/NadiaPoster.jpg'),
(5, 'Maya Putri', 'Portfolio Advisor', '2024-12-03', '08:00:00', 'https://zoom.us/j/112233445', 'Review Portfolio', '/src/assets/Maya Putri.jpg'),
(6, 'Raka Nugraha', 'Portfolio Advisor', '2024-12-03', '17:00:00', 'https://zoom.us/j/112233445', 'Review Portfolio', '/src/assets/RakaPoster.jpg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `mentors`
--
ALTER TABLE `mentors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `mentors`
--
ALTER TABLE `mentors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
