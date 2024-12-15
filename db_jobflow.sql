-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Des 2024 pada 13.53
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
('ARTIKEL-1', 1, 'Mengenal_Profesi_UI_UX_Designer_Tugas_Skill_dan_karir', 'Mengenal Profesi UI/UX Designer: Tugas, Skill, dan Karir', '', '/src/assets/Artikel 1.png', 'Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.', '1. Apa Itu UI/UX Designer?\n\nUI/UX Designer adalah profesional ...'),
('ARTIKEL-2', 1, 'Data_Analyst_Peran_Penting_dan_Skill_Wajib_dalam_Pengambilan_Keputusan', 'Data Analyst: Peran Penting dan Skill Wajib dalam Pengambilan Keputusan', '', '/src/assets/Artikel 2.png', 'Profesi Data Analyst memiliki peran penting dalam membantu perusahaan membuat keputusan berdasarkan data yang akurat.', '<div><span style=\"text-black text-lg font-bold ... </div>'),
('ARTIKEL-3', 1, 'Mengenal_Profesi_UI_UX_Designer_Tugas_Skill_dan_karir', 'Mengenal Profesi UI/UX Designer: Tugas, Skill, dan Karir dan ', '', '/src/assets/Artikel 1.png', 'Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.', '1. Apa Itu UI/UX Designer?\n\nUI/UX Designer adalah profesional ...'),
('ARTIKEL-4', 1, 'Data_Scientist_Profesi_dengan_Prospek_Tinggi_di_Era_Big_Data', 'Data Scientist: Profesi dengan Prospek Tinggi di Era Big Data', 'Engineer', '/src/assets/Artikel 4.png', 'Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.', 'Data Scientist adalah profesional yang menggabungkan keahlian dalam ilmu komputer, matematika, dan statistik untuk menganalisis dan menginterpretasikan data yang sangat besar dan kompleks. Mereka bekerja dengan data dalam jumlah besar (Big Data) untuk menemukan wawasan yang dapat membantu perusahaan membuat keputusan yang lebih baik dan lebih cepat.\r\n\r\nTugas utama Data Scientist meliputi pemrograman, pemodelan statistik, dan penggunaan algoritma pembelajaran mesin untuk menganalisis data. Mereka juga bertanggung jawab untuk merancang dan mengembangkan sistem yang dapat mengumpulkan, menyimpan, dan menganalisis data secara efisien. Selain itu, mereka sering bekerja dengan tim pengembang untuk membangun infrastruktur yang memungkinkan perusahaan untuk mengakses dan memproses data dengan lebih mudah.\r\n\r\nData Scientist memiliki keterampilan teknis yang kuat, terutama dalam bahasa pemrograman seperti Python, R, dan SQL, serta alat-alat pembelajaran mesin seperti TensorFlow dan Scikit-Learn. Mereka juga harus mampu mengembangkan model prediktif dan algoritma untuk membantu memecahkan masalah bisnis yang kompleks, seperti memperkirakan tren penjualan atau memprediksi permintaan produk.\r\n\r\nDalam peran mereka, Data Scientist berkolaborasi erat dengan manajer dan pemangku kepentingan bisnis lainnya untuk memahami masalah yang perlu diselesaikan dan kemudian menggunakan data untuk merancang solusi. Mereka juga bertanggung jawab untuk mengkomunikasikan temuan mereka kepada pihak yang tidak memiliki latar belakang teknis, seperti manajer atau eksekutif perusahaan, untuk memastikan bahwa wawasan yang diperoleh dapat diimplementasikan dalam strategi bisnis yang lebih luas.\r\n\r\nKarena jumlah data yang tersedia terus meningkat, permintaan untuk Data Scientist semakin tinggi. Selain memiliki keterampilan teknis yang mendalam, Data Scientist juga diharapkan memiliki kemampuan analitis yang tajam, berpikir kritis, dan keterampilan komunikasi yang baik. Posisi ini memiliki prospek yang sangat baik, terutama dalam industri teknologi, keuangan, dan kesehatan.'),
('ARTIKEL-5', 1, 'Mengenal_Profesi_UI_UX_Designer_Tugas_Skill_dan_karir', 'Mengenal Profesi UI/UX Designer: Tugas, Skill, dan Karir', '', '/src/assets/Artikel 1.png', 'Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.', 'UI/UX Designer adalah profesional yang bertanggung jawab untuk merancang antarmuka (User Interface/UI) yang menarik secara visual dan memberikan pengalaman pengguna (User Experience/UX) yang mudah, intuitif, dan menyenangkan. Peran ini menggabungkan dua aspek penting: UI, yang berfokus pada tampilan visual seperti tata letak, warna, dan ikon, serta UX, yang memastikan navigasi dan interaksi pengguna terasa alami dan memuaskan.\r\n\r\nTugas UI/UX Designer cukup beragam, mulai dari riset pengguna, di mana mereka memahami kebutuhan dan preferensi pengguna, hingga pembuatan wireframe dan prototipe yang menjadi rancangan awal produk digital. Mereka juga melakukan uji coba pengguna untuk memastikan desain yang dibuat sesuai harapan pengguna dan bekerja sama dengan tim lain, seperti pengembang dan manajer produk, agar desain dapat diimplementasikan dengan baik.\r\n\r\nMenjadi UI/UX Designer membutuhkan perpaduan antara keterampilan desain visual dan pemahaman analitik. Keterampilan utama meliputi penguasaan alat desain seperti Figma atau Adobe XD, pemahaman prinsip desain grafis, serta kemampuan berpikir kritis dan empati untuk memahami perspektif pengguna. Pemahaman dasar coding juga dapat menjadi nilai tambah dalam komunikasi dengan tim pengembang.\r\n\r\nProfesi UI/UX Designer memiliki prospek karir yang cerah, dengan banyak posisi di industri teknologi dan digital yang menawarkan gaji kompetitif dan peluang pengembangan karir. Posisi entry-level biasanya dimulai dari Junior UI/UX Designer, yang kemudian dapat berkembang menjadi Senior Designer, Product Designer, hingga peran manajerial seperti UI/UX Manager atau Head of Design. Profesi ini juga membuka peluang untuk bekerja secara freelance atau membangun karir sebagai konsultan desain digital.\r\n\r\nSebagai peran yang vital dalam pengembangan produk digital, UI/UX Designer memiliki peran penting dalam memastikan pengalaman pengguna yang memuaskan dan meningkatkan kesuksesan produk di pasaran.'),
('ARTIKEL-6', 1, 'The_Future_of_Quantum_Computing_How_It_Will_Change_The_World', 'The Future of Quantum Computing: How It Will Change The World', '', '/src/assets/Artikel 2.png', 'Quantum computing is an emerging field with the potential to revolutionize industries like healthcare, finance, and technology.', 'Quantum computing is a rapidly evolving field that harnesses the principles of quantum mechanics to process information in ways that classical computers cannot. Unlike traditional binary computing, which uses bits to represent either a 0 or a 1, quantum computers use quantum bits, or qubits, that can exist in multiple states at once, thanks to a phenomenon called superposition.\r\n\r\nThis ability to represent and process a vast amount of information simultaneously gives quantum computers the potential to solve complex problems much faster than current supercomputers. In the coming years, quantum computing could revolutionize fields like artificial intelligence, drug discovery, material science, and cryptography.\r\n\r\nOne of the most promising applications of quantum computing is in the field of cryptography. Current encryption systems, which are designed to secure digital information, rely on mathematical algorithms that are extremely difficult to crack using classical computers. However, quantum computers could break these encryption methods, potentially disrupting global security systems. This has led to the development of quantum-resistant encryption algorithms that are being researched to ensure data security in a quantum computing era.\r\n\r\nAnother area where quantum computing has significant potential is in drug discovery and material science. Quantum computers could simulate molecular structures and interactions at an unprecedented level of detail, making it easier to design new drugs or discover new materials with specific properties. This could lead to breakthroughs in healthcare and technology, with the potential to solve pressing global challenges.\r\n\r\nDespite its potential, quantum computing is still in its early stages, and there are significant technical challenges that need to be overcome, such as reducing error rates in quantum calculations and scaling quantum systems. However, as researchers continue to make strides in this field, it is likely that quantum computers will play a major role in shaping the future of technology, science, and society.');

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
(1, 'viosa rayhan', 'viosa@gmail.com', '08342342564', 'tiara', '2024-12-26', '20:33:00', 'uploads\\1733664551046.pdf', '2024-12-08 13:29:11', 'JobReady CV'),
(2, 'vivit', 'vivit@gmail.com', '0896384834732', 'siska', '2024-12-19', '20:35:00', 'uploads\\1733664773984.pdf', '2024-12-08 13:32:54', 'CareerStarterKit'),
(3, 'Cryl', 'cryl@gmail.com', '0896347478234', 'tiara', '2024-12-19', '12:08:00', 'uploads\\1733666937024.jpg', '2024-12-08 14:08:57', 'Chit-ChatView'),
(4, 'wildan', 'wildan@gmail.com', '0868638832424', 'siska', '2024-12-18', '14:36:00', 'uploads\\1733675569979.jpg', '2024-12-08 16:32:50', 'SuccesSprintFour'),
(5, 'akmaludin', 'akmaldesigner@gmail.com', '08634282348', 'siska', '2024-12-17', '10:05:00', 'uploads\\1733702760882.pdf', '2024-12-09 00:06:00', 'Chit-ChatView'),
(6, 'Floria', 'floria@gmail.com', '08638434882', 'siska', '2024-12-25', '11:06:00', 'uploads\\1733702809779.pdf', '2024-12-09 00:06:49', 'CareerExcellentPack'),
(7, 'fathur', 'fathur01@gmail.com', '08967827332', 'andi', '2025-01-01', '10:25:00', 'uploads\\1733707524819.pdf', '2024-12-09 01:25:24', 'CareerStarterKit'),
(20, 'rafi', 'rafi@gmail.com', '0834234242', 'tiara', '2024-12-26', '08:04:00', 'uploads\\1733965292352.pdf', '2024-12-12 01:01:32', 'PortoPolish'),
(21, 'rani', 'rani@gmail.com', '082397298312', 'siska', '2024-12-28', '08:32:00', 'uploads\\1733966975735.pdf', '2024-12-12 01:29:35', 'PortoPolish'),
(22, 'razi', 'rzi@gmail.com', '084384324', 'siska', '2024-12-07', '08:56:00', 'uploads\\1733968421247.pdf', '2024-12-12 01:53:41', 'PortoPolish'),
(23, 'zani', 'zanii@gmail.com', '08893492343', 'tiara', '2024-12-25', '10:35:00', 'uploads\\1733974284484.pdf', '2024-12-12 03:31:24', 'PortoPolish');

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
(4, 'Nadia Kurnia', 'HR Specialist', '2024-12-03', '16:00:00', 'https://zoom.us/j/112233445', 'Review Portfolio', '/src/assets/Nadia Kurnia.jpg'),
(5, 'Maya Putri', 'Portfolio Advisor', '2024-12-03', '08:00:00', 'https://zoom.us/j/112233445', 'Review Portfolio', '/src/assets/Maya Putri.jpg'),
(6, 'Raka Nugraha', 'Portfolio Advisor', '2024-12-03', '17:00:00', 'https://zoom.us/j/112233445', 'Review Portfolio', '/src/assets/Raka Nugraha.jpg');

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
(3, 1733586150231, '2025-01-02 22:42:00', 'wildan@gmail.com', '089734824628', 'Dana', 'belum bayar', '2024-12-07 15:42:30'),
(4, 1733586404043, '2025-01-14 22:49:00', 'cryl@gmail.com', '087834282433', 'ShopeePay', 'berhasil', '2024-12-07 15:46:44'),
(5, 1733586483041, '2024-12-20 13:47:00', 'vivit@gmail.com', '08123445833', 'Ovo', 'belum bayar', '2024-12-07 15:48:03'),
(6, 1733587112174, '2024-12-24 22:01:00', 'floria@gmail.com', '08573482234', 'Ovo', 'berhasil', '2024-12-07 15:58:32'),
(13, 1733640923313, '2024-12-23 13:58:00', 'rayhan@gmail.com', '08648136812', 'Gopay', 'berhasil', '2024-12-08 06:55:23'),
(17, 1733644652766, '2025-01-01 17:57:00', 'viosa@gmail.com', '08312638213', 'Ovo', 'berhasil', '2024-12-08 07:57:32'),
(25, 1733702765614, '2024-12-17 10:05:00', 'akmaldesigner@gmail.com', '08634282348', 'Gopay', 'berhasil', '2024-12-09 00:06:05'),
(40, 1733965310090, '2024-12-26 08:04:00', 'rafi@gmail.com', '0834234242', 'Ovo', 'belum bayar', '2024-12-12 01:01:50'),
(42, 1733968429216, '2024-12-07 08:56:00', 'rzi@gmail.com', '084384324', 'Gopay', 'belum bayar', '2024-12-12 01:53:49');

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
(11, 'Pratama', 'pratama@gmail.com', 'pratama#25'),
(12, 'wildaan', 'wildaan@gmail.com', 'wil123'),
(13, 'rafi', 'rafi@gmail.com', 'rafi'),
(14, 'rani', 'rani@gmail.com', '123'),
(15, 'razi', 'razi@gmail.com', '123'),
(16, 'zani', 'zani@gmail.com', '123');

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
-- Indeks untuk tabel `mentors`
--
ALTER TABLE `mentors`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT untuk tabel `e_learning`
--
ALTER TABLE `e_learning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `mentors`
--
ALTER TABLE `mentors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
