-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Jul 2019 pada 04.42
-- Versi server: 10.1.31-MariaDB
-- Versi PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_crudionic`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `master_customer`
--

CREATE TABLE `master_customer` (
  `customer_id` int(11) NOT NULL,
  `name_customer` varchar(50) DEFAULT NULL,
  `desc_customer` text,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `master_customer`
--

INSERT INTO `master_customer` (`customer_id`, `name_customer`, `desc_customer`, `created_at`) VALUES
(1, 'Chandra Gustiya', 'Yea simple easy', '2019-05-15'),
(2, 'Hi Digital Update IONIC 4', 'Work it yes', '2019-05-15'),
(3, 'GOOD IONIC', 'Channel recommened', '2019-05-15'),
(17, 'IONIC 4 CRUD PHP MYSQL', 'Simple Description', '2019-05-18'),
(18, 'IONIC 4 LOGIN PHP MYSQL', 'Simple Description', '2019-05-18'),
(19, 'IONIC SIMPLE', 'Ionic Simple Description', '2019-05-18'),
(20, 'HAPPY CODING', 'IOnic Happy Simple Description', '2019-05-19'),
(21, 'IONIC EASY', 'Easy Simple Description', '2019-05-19'),
(22, 'IONIC HAPPY', 'Ionic Simple', '2019-05-19'),
(23, 'IONIC', 'Simple Description', '2019-05-19'),
(24, 'IONIC FRAMEWORK XXXXX', 'Simple Description Framework', '2019-05-19'),
(26, 'aaa', 'aaa', '2019-07-10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `master_user`
--

CREATE TABLE `master_user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `status` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `master_user`
--

INSERT INTO `master_user` (`user_id`, `username`, `password`, `status`) VALUES
(4, 'dev', '5e8edd851d2fdfbd7415232c67367cc3', 'y'),
(5, 'syad', '202cb962ac59075b964b07152d234b70', 'y');

-- --------------------------------------------------------

--
-- Struktur dari tabel `peralatan`
--

CREATE TABLE `peralatan` (
  `id_peralatan` int(11) NOT NULL,
  `nama_peralatan` varchar(100) NOT NULL,
  `daerah` varchar(100) NOT NULL,
  `jenis_form` varchar(20) NOT NULL,
  `kondisi` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesan`
--

CREATE TABLE `pesan` (
  `id_pesan` int(11) NOT NULL,
  `isi_pesan` text NOT NULL,
  `dari` varchar(100) NOT NULL,
  `untuk` varchar(100) NOT NULL,
  `tanggal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `pesan`
--

INSERT INTO `pesan` (`id_pesan`, `isi_pesan`, `dari`, `untuk`, `tanggal`) VALUES
(3, 'DFR TLKP 1,2 rusak', 'bejo', 'admin', '2019-07-11'),
(4, 'w', 'w', 'w', '2019-07-11'),
(5, 'w', 'w', 'w', '2019-06-07'),
(6, 'qqq', 'w', 'w', '2019-07-11'),
(7, 's', 'w', 'w', '2019-07-11'),
(8, 'ya', 'admin', 'bejo', '2019-07-11');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `nama`, `username`, `password`, `status`) VALUES
(1, 'admin', 'adm', '1', 'admin'),
(2, 'user1', 'usr', '1', 'user');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `master_customer`
--
ALTER TABLE `master_customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indeks untuk tabel `master_user`
--
ALTER TABLE `master_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indeks untuk tabel `peralatan`
--
ALTER TABLE `peralatan`
  ADD PRIMARY KEY (`id_peralatan`);

--
-- Indeks untuk tabel `pesan`
--
ALTER TABLE `pesan`
  ADD PRIMARY KEY (`id_pesan`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `master_customer`
--
ALTER TABLE `master_customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `master_user`
--
ALTER TABLE `master_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `peralatan`
--
ALTER TABLE `peralatan`
  MODIFY `id_peralatan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `pesan`
--
ALTER TABLE `pesan`
  MODIFY `id_pesan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
