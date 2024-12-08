-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Des 2024 pada 02.59
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
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(4, 'satify', 'viosarayhan.p@gmail.com', '$2a$10$RaHxzPuynnCFaIAbHu9k6.3f8OZmjvWUcHJPpJeVm98w.pLLfzsQG', '2024-11-26 16:47:25'),
(5, 'wildan', 'wildan@gmail.com', '$2a$10$TCQHQ6SivhDIBOqupHbX..xoSp4eOaMok9TlPrRuE4goLtDc.Mdz2', '2024-11-27 12:22:31'),
(6, 'Cryl', 'cryl@gmail.com', '$2a$10$zn96mWxu/pSFP2hx5GzHoeu84/omroIFt2tQwp/zkczDnE3MmTjDa', '2024-11-27 12:38:00'),
(7, 'vivit lestari', 'vivit@gmail.com', '$2a$10$qtH5ebnOI464k/H1mqcEReaSL33e8puyDaQNy9IncLmOrF9xQ2A2a', '2024-11-27 16:25:40'),
(8, 'pratama', 'pratama@gmail.com', '$2a$10$LTaK8/uBKT1JPMIJiLti7eEpmjC9.C1jJpQulXWNMOJBHMQx3F4Ym', '2024-11-27 16:37:23'),
(11, 'floria', 'floria@gmail.com', '$2a$10$TArGIcWI6r3J1sznRja5/.BQqCmPAz3wyR0CrRXKUxIt9lZa8gX/G', '2024-11-27 17:27:27'),
(12, 'kevin', 'kevin@gmail.com', '$2a$10$dT5hAq0L4jbKJbbDQTZu8uv5eYmXPyfbyJxffi/VDONgYWGgeicKq', '2024-11-28 02:50:59'),
(13, 'vio', 'vio@gmail.com', '$2a$10$XIGu7hWsZvj2EG4OOwibOuTWfq8lVnXl6waB128IK2FLNeB0fYnSK', '2024-11-28 03:06:42'),
(14, 'figma', 'figma@gmail.com', '$2a$10$1zqBVU3sLkl3Zezfk562z./ruTq.0M/pmiw7UyunFL/FlHWygNUj2', '2024-12-01 01:39:16'),
(15, 'fami', 'fami@gmail.com', '$2a$10$cGAdMrFQZPlMwt.8h0qTau8r0xSNxf/onriFVaXt5L4hHnjHFHtoe', '2024-12-01 12:18:14'),
(16, 'gajah', 'gajah@gmail.com', '$2a$10$dhSU.vmPTGsuCsHj5DA7Mubx85ZCXTOPMRXlU1MuLK5qPSVZmb2D2', '2024-12-05 02:33:50'),
(17, 'saya', 'saya@gmail.com', '$2a$10$4oMdJBUoIgEJ/i73xaPuWubh49Hz0KBSSJjrzvTwQwZ68h3e4ESqi', '2024-12-05 03:41:54'),
(18, 'salsha', 'salsha@gmail.com', '$2a$10$XFCwO5DFB.La0LDwK3F4Ku3pnSTY3tIEn/Om7Z75fM3Cm7jD.X2vG', '2024-12-05 08:50:47'),
(19, 'harimau', 'harimau@gmail.com', '$2a$10$Cu//DC.RSU8zCwSCNYWzXu1u55uTUv02w.gl5ZryKrRtZkIyffBgW', '2024-12-08 00:54:25'),
(20, 'kagura', 'kagura@gmail.com', 'kagura', '2024-12-08 00:57:20');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
