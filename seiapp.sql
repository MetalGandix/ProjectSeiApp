-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ago 07, 2020 alle 17:50
-- Versione del server: 10.4.11-MariaDB
-- Versione PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seiapp`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `associazione_intervento`
--

CREATE TABLE `associazione_intervento` (
  `id` bigint(20) NOT NULL,
  `caratteristica_associazione_intervento_id` bigint(20) DEFAULT NULL,
  `intervento_id` bigint(20) DEFAULT NULL,
  `struttura_associazione_id` bigint(20) DEFAULT NULL,
  `efficacia` int(11) NOT NULL,
  `esiguita_di_ingombro` int(11) NOT NULL,
  `modicita_di_costo` int(11) NOT NULL,
  `reversibilita` int(11) NOT NULL,
  `semplicita_di_cantiere` int(11) NOT NULL,
  `sup_intonacate` int(11) NOT NULL,
  `sup_vista` int(11) NOT NULL,
  `variante` varchar(255) DEFAULT NULL,
  `prezzo` double NOT NULL,
  `unità_misura` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `associazione_intervento`
--

INSERT INTO `associazione_intervento` (`id`, `caratteristica_associazione_intervento_id`, `intervento_id`, `struttura_associazione_id`, `efficacia`, `esiguita_di_ingombro`, `modicita_di_costo`, `reversibilita`, `semplicita_di_cantiere`, `sup_intonacate`, `sup_vista`, `variante`, `prezzo`, `unità_misura`) VALUES
(1, 2, 58, 1, 0, 0, 0, 0, 0, 0, 0, NULL, 94.31, 'm'),
(2, 3, 54, 1, 3, 2, 3, 3, 2, 1, 1, NULL, 33.83, 'm'),
(3, 3, 55, 1, 3, 1, 1, 1, 2, 1, 1, NULL, 166.54, 'mq'),
(4, 3, 56, 1, 3, 3, 2, 2, 1, 3, 3, NULL, 120.66, 'mq'),
(5, 3, 57, 1, 1, 3, 2, 3, 2, 3, 1, NULL, 0, NULL),
(6, 3, 59, 1, 1, 3, 2, 1, 3, 3, 2, NULL, 65.23, 'mq'),
(7, 3, 60, 1, 1, 3, 2, 1, 2, 3, 2, NULL, 87.3, 'mq'),
(8, 1, 31, 2, 3, 3, 2, 3, 1, 3, 3, NULL, 236.75, 'mq'),
(9, 1, 32, 2, 2, 3, 3, 1, 3, 3, 3, NULL, 55.23, 'mq'),
(10, 1, 33, 2, 1, 3, 2, 3, 3, 3, 3, 'a', 158.13, 'mq'),
(11, 1, 37, 2, 3, 3, 1, 1, 2, 3, 1, NULL, 320.94, 'mq'),
(12, 1, 38, 2, 2, 2, 2, 2, 2, 1, 1, NULL, 0, NULL),
(13, 1, 39, 2, 2, 2, 2, 1, 3, 3, 0, NULL, 203.17, 'mq'),
(14, 1, 40, 2, 3, 3, 1, 2, 2, 3, 1, NULL, 266.78, 'mq'),
(15, 1, 43, 2, 3, 1, 2, 1, 1, 2, 2, NULL, 166.54, 'mq'),
(16, 1, 44, 2, 2, 1, 2, 1, 2, 2, 0, NULL, 157, 'mq'),
(17, 2, 31, 2, 0, 0, 0, 0, 0, 0, 0, NULL, 236.75, 'mq'),
(18, 7, 42, 2, 0, 0, 0, 0, 0, 0, 0, NULL, 238, 'mq'),
(19, 8, 1, 2, 3, 3, 3, 3, 2, 2, 2, NULL, 33.83, 'm'),
(20, 8, 2, 2, 2, 3, 3, 3, 2, 3, 3, NULL, 33.83, 'm'),
(21, 8, 3, 2, 3, 3, 2, 2, 2, 3, 1, NULL, 66.7, 'mq'),
(22, 8, 6, 2, 3, 3, 1, 1, 1, 3, 3, 'a', 157.78, 'm'),
(23, 8, 41, 2, 3, 1, 3, 1, 1, 1, 1, NULL, 309.38, 'mq'),
(24, 8, 43, 2, 3, 1, 1, 1, 1, 2, 2, NULL, 166.54, 'mq'),
(25, 4, 1, 2, 3, 3, 3, 3, 2, 2, 2, NULL, 33.83, 'm'),
(26, 4, 2, 2, 2, 3, 3, 3, 2, 3, 3, NULL, 33.83, 'm'),
(27, 4, 3, 2, 3, 3, 2, 2, 2, 3, 1, NULL, 66.7, 'mq'),
(28, 4, 4, 2, 3, 3, 3, 3, 1, 3, 3, NULL, 236.75, 'mq'),
(29, 4, 5, 2, 1, 3, 3, 1, 2, 3, 2, NULL, 87.3, 'mq'),
(30, 4, 6, 2, 3, 3, 1, 1, 1, 3, 1, 'a', 157.78, 'm'),
(31, 1, 31, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 236.75, 'mq'),
(32, 1, 32, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 55.23, 'mq'),
(33, 1, 33, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(34, 1, 37, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 320.94, 'mq'),
(35, 1, 38, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(36, 1, 39, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 203.17, 'mq'),
(37, 1, 40, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 266.78, 'mq'),
(38, 1, 43, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 166.54, 'mq'),
(39, 1, 44, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 157, 'mq'),
(40, 2, 31, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 236.75, 'mq'),
(41, 7, 42, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 238, 'mq'),
(42, 8, 1, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 33.83, 'm'),
(43, 8, 2, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 33.83, 'm'),
(44, 8, 3, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 66.7, 'mq'),
(45, 8, 6, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(46, 8, 41, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 309.38, 'mq'),
(47, 9, 34, 3, 3, 3, 3, 1, 2, 3, 2, NULL, 97.7, 'mq'),
(48, 9, 35, 3, 3, 3, 3, 2, 2, 3, 3, NULL, 97.7, 'mq'),
(49, 9, 36, 3, 3, 3, 3, 2, 2, 1, 1, NULL, 0, NULL),
(50, 4, 1, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 33.83, 'm'),
(51, 4, 2, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 33.83, 'm'),
(52, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 66.7, 'mq'),
(53, 9, 4, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 236.75, 'mq'),
(54, 9, 5, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 87.3, 'mq'),
(55, 9, 6, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(56, 51, 7, 4, 2, 3, 2, 3, 3, 2, 2, NULL, 90, 'm'),
(57, 51, 8, 4, 3, 2, 3, 3, 2, 2, 2, NULL, 71.13, 'm'),
(58, 52, 9, 4, 3, 2, 2, 2, 1, 3, 3, NULL, 41.63, 'mq'),
(59, 52, 10, 4, 3, 2, 2, 2, 1, 3, 3, NULL, 51.57, 'mq'),
(60, 52, 11, 4, 3, 2, 3, 2, 1, 3, 3, NULL, 15.08, 'mq'),
(61, 52, 12, 4, 2, 2, 1, 1, 1, 3, 3, NULL, 63, 'mq'),
(62, 52, 15, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 140.96, 'm'),
(63, 52, 16, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 50.5, 'm'),
(64, 52, 17, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 1152.73, 'mc'),
(65, 52, 18, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 140.96, 'm'),
(66, 52, 19, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(67, 52, 20, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(68, 52, 21, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 140.96, 'm'),
(69, 52, 22, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 140.96, 'm'),
(70, 51, 8, 5, 0, 0, 0, 0, 0, 0, 0, NULL, 71.13, 'm'),
(71, 52, 11, 5, 3, 2, 2, 2, 1, 3, 3, NULL, 15.08, 'mq'),
(72, 52, 12, 5, 2, 2, 1, 1, 1, 3, 3, NULL, 63, 'mq'),
(73, 52, 13, 5, 2, 3, 2, 2, 1, 3, 3, NULL, 14.37, 'mq'),
(74, 52, 14, 5, 2, 3, 3, 3, 3, 3, 1, NULL, 4.24, 'mq'),
(75, 3, 1, 7, 3, 3, 3, 3, 2, 2, 2, NULL, 33.83, 'm'),
(76, 3, 2, 7, 2, 3, 3, 3, 2, 3, 3, NULL, 33.83, 'm'),
(77, 3, 3, 7, 3, 3, 2, 2, 2, 3, 1, NULL, 66.7, 'mq'),
(78, 101, 6, 7, 3, 3, 1, 1, 1, 3, 3, 'a', 157.78, 'm'),
(79, 102, 23, 7, 3, 2, 2, 2, 1, 3, 3, NULL, 115.27, 'mq'),
(80, 102, 24, 7, 3, 2, 3, 2, 1, 3, 3, NULL, 88.72, 'mq'),
(81, 102, 25, 7, 2, 2, 1, 1, 1, 3, 3, NULL, 0, NULL),
(82, 102, 26, 7, 0, 0, 0, 0, 0, 0, 0, NULL, 1152.73, 'mc'),
(83, 102, 27, 7, 0, 0, 0, 0, 0, 0, 0, NULL, 1152.73, 'mc'),
(84, 102, 28, 7, 0, 0, 0, 0, 0, 0, 0, NULL, 50.5, 'm'),
(85, 102, 28, 7, 0, 0, 0, 0, 0, 0, 0, NULL, 50.5, 'm'),
(86, 102, 29, 7, 0, 0, 0, 0, 0, 0, 0, NULL, 140.96, 'm'),
(87, 102, 30, 7, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(88, 2, 58, 8, 0, 0, 0, 0, 0, 0, 0, NULL, 94.31, 'm'),
(89, 3, 54, 8, 3, 2, 3, 3, 2, 1, 1, NULL, 33.83, 'm'),
(90, 3, 55, 8, 3, 1, 1, 1, 2, 1, 1, NULL, 166.54, 'mq'),
(91, 3, 56, 8, 3, 3, 1, 2, 1, 3, 3, NULL, 120.66, 'mq'),
(92, 3, 57, 8, 2, 1, 1, 2, 1, 1, 1, NULL, 0, NULL),
(93, 3, 59, 8, 1, 3, 2, 1, 3, 3, 2, NULL, 65.23, 'mq'),
(94, 3, 62, 8, 1, 3, 1, 1, 1, 3, 3, NULL, 90.25, 'mq'),
(95, 2, 61, 9, 0, 0, 0, 0, 0, 0, 0, NULL, 65.85, 'mq'),
(96, 3, 54, 9, 3, 2, 3, 3, 2, 1, 1, NULL, 33.83, 'm'),
(97, 3, 55, 9, 3, 1, 1, 1, 2, 1, 1, NULL, 166.54, 'mq'),
(98, 3, 56, 9, 3, 3, 1, 2, 1, 3, 3, NULL, 120.66, 'mq'),
(99, 3, 62, 9, 1, 3, 1, 1, 1, 3, 3, NULL, 90.25, 'mq'),
(100, 6, 50, 10, 3, 1, 2, 2, 1, 1, 1, NULL, 180, 'm'),
(101, 6, 51, 10, 2, 2, 2, 3, 2, 1, 1, NULL, 140.96, 'm'),
(102, 6, 52, 10, 2, 3, 3, 3, 3, 2, 2, NULL, 50.5, 'm'),
(103, 6, 50, 11, 3, 1, 2, 2, 1, 1, 0, NULL, 180, 'm'),
(104, 6, 51, 11, 2, 2, 2, 3, 2, 1, 0, NULL, 140.96, 'm'),
(105, 6, 52, 11, 2, 3, 3, 3, 3, 2, 0, NULL, 50.5, 'm'),
(106, 6, 50, 12, 3, 1, 2, 2, 1, 1, 0, NULL, 180, 'm'),
(107, 6, 51, 12, 2, 2, 2, 3, 2, 1, 0, NULL, 140.96, 'm'),
(108, 6, 52, 12, 2, 3, 3, 3, 3, 2, 0, NULL, 50.5, NULL),
(109, 6, 50, 13, 3, 1, 2, 2, 1, 1, 0, NULL, 180, 'm'),
(110, 6, 51, 13, 2, 2, 2, 3, 2, 1, 0, NULL, 140.96, 'm'),
(111, 6, 52, 13, 2, 3, 3, 3, 3, 2, 0, NULL, 50.5, 'm'),
(112, 6, 53, 13, 0, 0, 0, 0, 0, 0, 0, NULL, 395, 'm'),
(113, 12, 66, 14, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(114, 12, 67, 14, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(115, 2, 74, 1, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(116, 2, 74, 2, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(117, 2, 74, 3, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(118, 2, 75, 4, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(119, 2, 75, 7, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(120, 2, 74, 8, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(121, 2, 74, 10, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(122, 2, 74, 11, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(123, 2, 75, 12, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(124, 2, 74, 13, 0, 0, 0, 0, 0, 0, 0, NULL, 0, NULL),
(126, 1, 33, 2, 2, 3, 2, 3, 2, 3, 2, 'b', 186.31, 'mq'),
(127, 8, 6, 2, 3, 2, 2, 3, 2, 2, 2, 'b', 71.13, 'm'),
(128, 8, 6, 2, 2, 3, 1, 1, 1, 3, 1, 'c', 131.85, 'm'),
(129, 8, 6, 2, 3, 3, 1, 1, 1, 3, 1, 'd', 112.78, 'm'),
(130, 4, 6, 2, 3, 2, 2, 3, 2, 2, 2, 'b', 71.13, 'm'),
(131, 4, 6, 2, 2, 3, 1, 1, 1, 3, 1, 'c', 131.85, 'm'),
(132, 4, 6, 2, 3, 3, 1, 1, 1, 3, 1, 'd', 112.78, 'm'),
(133, 101, 6, 7, 3, 2, 3, 3, 2, 2, 2, 'b', 71.13, 'm'),
(134, 101, 6, 7, 2, 3, 2, 1, 1, 3, 1, 'c', 131.85, 'm'),
(135, 101, 6, 7, 3, 3, 2, 1, 1, 3, 1, 'd', 112.78, 'm');

-- --------------------------------------------------------

--
-- Struttura della tabella `caratterisitche_qualitative`
--

CREATE TABLE `caratterisitche_qualitative` (
  `id` bigint(20) NOT NULL,
  `caratteristiche_qualitative` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `caratterisitche_qualitative`
--

INSERT INTO `caratterisitche_qualitative` (`id`, `caratteristiche_qualitative`) VALUES
(1, 'Scarsa qualità costruttiva'),
(2, 'Elevato degrado'),
(3, 'Spinte orizzontali non contrastate'),
(4, 'Pannelli murari male ammorsati tra loro'),
(6, 'Aperture di elevate dimensioni non controventate'),
(7, 'Presenza di numerose nicchie'),
(8, 'Pareti di elevate dimensioni non controventate'),
(9, 'Pannelli murari a doppio strato con camera d\'aria - decoesione tra i paramenti'),
(12, 'Presenza di elementi non strutturali - valutazione connessione/massa'),
(51, 'Efficacia dei collegamenti con la muratura'),
(52, 'Qualità delle strutture orizzontali'),
(101, 'Efficacia dei collegamenti con la muratura'),
(102, 'Qualità della copertura');

-- --------------------------------------------------------

--
-- Struttura della tabella `caratterisitche_qualitative_meccanismi_associati`
--

CREATE TABLE `caratterisitche_qualitative_meccanismi_associati` (
  `caratteristiche_qualitative_id` bigint(20) NOT NULL,
  `meccanismi_associati_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `caratterisitche_qualitative_meccanismi_associati`
--

INSERT INTO `caratterisitche_qualitative_meccanismi_associati` (`caratteristiche_qualitative_id`, `meccanismi_associati_id`) VALUES
(1, 1),
(1, 2),
(1, 5),
(1, 8),
(1, 9),
(1, 12),
(2, 11),
(3, 3),
(3, 4),
(3, 6),
(3, 10),
(3, 13),
(3, 14),
(3, 15),
(4, 3),
(4, 4),
(4, 6),
(4, 8),
(4, 9),
(4, 10),
(4, 14),
(4, 16),
(51, 3),
(51, 4),
(51, 5),
(51, 6),
(51, 10),
(51, 16),
(52, 10),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 12),
(6, 14),
(6, 15),
(7, 1),
(7, 7),
(7, 12),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 8),
(8, 10),
(8, 12),
(8, 14),
(8, 15),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(101, 2),
(101, 3),
(101, 4),
(101, 6),
(101, 13),
(101, 14),
(101, 15),
(102, 2),
(102, 3),
(102, 4),
(102, 13),
(102, 15),
(102, 16),
(12, 12);

-- --------------------------------------------------------

--
-- Struttura della tabella `caratterisitche_qualitative_valutazione_punteggio`
--

CREATE TABLE `caratterisitche_qualitative_valutazione_punteggio` (
  `caratteristiche_qualitative_id` bigint(20) NOT NULL,
  `valutazione_punteggio_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `caratterisitche_qualitative_valutazione_punteggio`
--

INSERT INTO `caratterisitche_qualitative_valutazione_punteggio` (`caratteristiche_qualitative_id`, `valutazione_punteggio_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(4, 11),
(4, 12),
(6, 19),
(6, 20),
(6, 21),
(7, 22),
(7, 23),
(7, 24),
(8, 25),
(8, 26),
(8, 27),
(9, 28),
(9, 29),
(9, 30),
(12, 37),
(12, 38),
(12, 39),
(51, 13),
(51, 14),
(51, 15),
(52, 16),
(52, 17),
(52, 18),
(101, 31),
(101, 32),
(101, 33),
(102, 34),
(102, 35),
(102, 36);

-- --------------------------------------------------------

--
-- Struttura della tabella `caratteristiche_struttura`
--

CREATE TABLE `caratteristiche_struttura` (
  `id` bigint(20) NOT NULL,
  `caratteristica_id` bigint(20) DEFAULT NULL,
  `struttura_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `caratteristiche_struttura`
--

INSERT INTO `caratteristiche_struttura` (`id`, `caratteristica_id`, `struttura_id`) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 2, 3),
(4, 2, 4),
(5, 2, 5),
(6, 2, 7),
(7, 2, 8),
(8, 2, 9),
(9, 2, 10),
(10, 2, 11),
(11, 2, 12),
(12, 2, 13),
(13, 3, 1),
(14, 3, 7),
(15, 3, 8),
(16, 3, 9),
(17, 4, 2),
(18, 4, 3),
(19, 51, 4),
(20, 51, 5),
(21, 6, 10),
(22, 6, 11),
(23, 6, 12),
(24, 6, 13),
(25, 8, 2),
(26, 8, 3),
(27, 9, 3),
(28, 101, 7),
(29, 12, 14);

-- --------------------------------------------------------

--
-- Struttura della tabella `codice_intervento`
--

CREATE TABLE `codice_intervento` (
  `id` bigint(20) NOT NULL,
  `codice` varchar(255) DEFAULT NULL,
  `descrizione` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `codice_intervento`
--

INSERT INTO `codice_intervento` (`id`, `codice`, `descrizione`) VALUES
(1, 'A1', 'Inserimento di tiranti ancorati alle murature mediante capochiave -bolzoni o piastre-'),
(2, 'A2', 'Introduzione di tiranti ancorati alle murature mediante ancoraggi per aderenza'),
(3, 'A3', 'Inserimento di cerchiature esterne con elementi metallici o materiali compositi'),
(4, 'A4', 'Scuci-cuci agli ammorsamenti'),
(5, 'A5', 'Realizzazione di perforazioni armate con barre metalliche'),
(6, 'A6', 'Realizzazione di cordoli in sommità'),
(7, 'A7', 'Ancoraggio delle teste di travi alle murature tramite elementi metallici o in altro materiale resistente a trazione (capichiave)'),
(8, 'A8', 'Cordoli di piano in acciaio'),
(9, 'B1', 'Irrigidimento con introduzione di un secondo tavolato all’estradosso disposto con andamento ortogonale o inclinato'),
(10, 'B2', 'Irrigidimento con introduzione di bandelle metalliche o di materiali compositi fissate al tavolato con andamento incrociato'),
(11, 'B3', 'Controventamento realizzato con tiranti metallici'),
(12, 'B4', 'Irrigidimento attraverso soletta collaborante in calcestruzzo eventualmente alleggerito'),
(13, 'B5', 'Irrigidimento tramite saldatura dei profili con bandelle metalliche trasversali poste all’estradosso'),
(14, 'B6', 'Irrigidimento tramite saldatura dei profili con bandelle metalliche trasversali poste all’intradosso'),
(15, 'B7', 'Inserimento di travi metalliche (profilati metallici HEA) collaboranti all\'estradosso della trave lignea'),
(16, 'B8', 'Rinforzo a flessione e/o riduzione della deformabilità per elementi inflessi in legno con applicazione di lamine pultruse di carbonio'),
(17, 'B9', 'Sostituzione della trave lignea'),
(18, 'B10', 'Introduzione di travi ascellari (travi collaboranti in profilato metallico) ai lati delle orditure principali in legno'),
(19, 'B11', 'Rinforzo delle travi lignee con fasce e tiranti d\'intradosso'),
(20, 'B12', 'Rinforzo delle travi lignee con tirante d\'intradosso e contraffissi (struttura reticolare)'),
(21, 'B13', 'Trasformazione della trave lignea in una struttura con sezione a T attraverso il collocamento di un tavolato nello spessore del massetto (struttura composta legno-legno)'),
(22, 'B14', 'Trasformazione della trave lignea in una struttura con sezione a T attraverso l\'introduzione di un profilato metallico collaborante (struttura composta legno-metallo)'),
(23, 'C1', 'Irrigidimento della falda di copertura con doppio tavolato continuo con assetto preferibilmente a 45°'),
(24, 'C2', 'Irrigidimento della falda di copertura con controventi in acciaio all\'intradosso/estradosso - croci di S.Andrea'),
(25, 'C3', 'Irrigidimento della falda di copertura con cls alleggerito con rete elettrosaldata zincata'),
(26, 'C4', 'Realizzazione di protesi in elementi in legno'),
(27, 'C5', 'Sostituzione della trave lignea'),
(28, 'C6', 'Rinforzo a flessione e/o riduzione della deformabilità per elementi inflessi con applicazione di lamine pultruse di carbonio'),
(29, 'C7', 'Introduzione di travi ascellari (travi collaboranti in profilato metallico) ai lati delle orditure principali in legno'),
(30, 'C8', 'Rinforzo delle travi lignee con fasce e tiranti d\'intradosso'),
(31, 'D1', 'Ripristino della continuità muraria attraverso scuci e cuci'),
(32, 'D2', 'Iniezioni di miscele leganti'),
(33, 'D3', 'Ristilatura dei giunti della muratura'),
(34, 'D4', 'Inserimento di diatoni artificiali in fori di carotaggio: c.a. e acciaio'),
(35, 'D5', 'Inserimento di pietre passanti'),
(36, 'D6', 'Inserimento di tirantini antiesplusivi'),
(37, 'D7', 'Inserimento di tirantature diffuse/CAM'),
(38, 'D8', 'Inserimento di tiranti verticali post-tesi'),
(39, 'D9', 'Placcaggio delle murature con intonaco armato su entrambi i paramenti'),
(40, 'D10', 'Placcaggio con tessuti o lamine in materiale fibroriforzato'),
(41, 'D11', 'Inserimento di nuovo setto di spina con relativa fondazione'),
(42, 'D12', 'Richiusura di nicchie e bucature'),
(43, 'D13', 'Realizzazione di una nuova parte affiancata e resa solidale a quella esistente mediante barre in acciaio inox e resina epossidica'),
(44, 'D14', 'Rivestimento delle pareti verticali all\'esterno con cappotto sismico'),
(45, 'E1', 'Esecuzione di piastra di collegamento delle murature alla base'),
(46, 'E2', 'Introduzione di pali e micropali da estendere all\'intero edificio'),
(47, 'E3', 'Consolidamento dei terreni di fondazione per iniezione nel terreno di resine e di malte cementizie'),
(48, 'E4', 'Realizzazione di sottofondazioni in muratura ammorsate a profondità idonea'),
(49, 'E5', 'Irrigidimento e cerchiaggio della fondazione attraverso la realizzazione di travi in c.a. affiancate alla fondazione esistente (interno/esterno) e collegate tra loro mediante traversi in c.a.'),
(50, 'F1', 'Inserimento di elementi di riquadratura: telai in c.a. o in acciaio'),
(51, 'F2', 'Inserimento di profili in acciaio collegati tra loro da barre filettate in acciaio inox'),
(52, 'F3', 'Consolidamento con inserimento di fibre in carbonio'),
(53, 'F4', 'Consolidamento di piattabande tramite splintaggio degli elementi laterizi'),
(54, 'G1', 'Inserimento di catene alle reni di archi e volte'),
(55, 'G2', 'Realizzazione di contrafforti esterni'),
(56, 'G3', 'Placcaggio all\'estradosso con fasce di materiale composito'),
(57, 'G4', 'Placcaggio all\'intradosso con fasce di mareriale composito'),
(58, 'G5', 'Iniezioni di malta per ripristinare le lesioni'),
(59, 'G6', 'Incuneatura di elementi in legno o metallo con sigillatura e iniezione tramite prodotti specifici'),
(60, 'G7', 'Realizzazione sull\'arco di perforazioni incrociate'),
(61, 'G8', 'Rinforzo tramite accostamento di tavole e solidarizzazione degli elementi portanti tramite fascette in ferro chiodate alla struttura lignea'),
(62, 'G9', 'Alleggerimento/svuotamento del riempimento della volta ed inserimento di frenelli'),
(63, 'H1', 'Cerchiature e tassellature'),
(64, 'H2', 'Incollaggi con resine'),
(65, 'H3', 'Incatenamenti e tirantature'),
(66, 'I1', 'Collegamenti puntuali e diffusi dell\'elemento non strutturale alla struttura muraria'),
(67, 'I2', 'Calastrelli in acciaio per comignoli'),
(68, 'L1', 'Inserimento di setti di irrigidimento'),
(69, 'L2', 'Inserimento di controventi dissipativi'),
(70, 'L3', 'Isolamento alla base'),
(71, 'L4', 'Adeguamento di giunti non sismici tra unità strutturali distinte'),
(72, 'L5', 'Inserimento di giunti sismici in edifici irregolari'),
(73, 'L6', 'Realizzazione di collegamenti strutturali'),
(74, 'Tab.01', NULL),
(75, 'Tab.02', NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `edificio`
--

CREATE TABLE `edificio` (
  `id` bigint(20) NOT NULL,
  `descrizione` varchar(255) DEFAULT NULL,
  `punteggio` int(255) DEFAULT NULL,
  `valutazione` varchar(255) DEFAULT NULL,
  `tipologia` int(11) NOT NULL,
  `quality_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `edificio`
--

INSERT INTO `edificio` (`id`, `descrizione`, `punteggio`, `valutazione`, `tipologia`, `quality_id`) VALUES
(1, 'Inerti di piccole dimensioni e malta di scarsa resistenza sul 30%\r\ndel volume della muratura', 3, 'A', 0, 1),
(2, 'Caso precedente + giunti sottili (<10 mm), listature e/o diatoni\r\noppure caso precedente con incidenza minore del 30%', 2, 'M', 0, 1),
(3, 'Giunti sottili, diatoni o listature per oltre il 70% della muratura con inerti medi o grandi', 0, 'B', 0, 1),
(4, 'Cattivo stato di conservazione per almeno il 70% delle murature, della copertura o dei solai di interpiano', 15, 'A', 0, 2),
(5, 'Percentuale tra 30% e 70%', 8, 'M', 0, 2),
(6, 'Percentuale <30%', 0, 'B', 0, 2),
(7, 'Più del 50% di copertura e solai sono spingenti senza cordoli o catene', 4, 'A', 0, 3),
(8, 'Percentuale tra 20% e 50%', 2, 'M', 0, 3),
(9, 'Percentuale <20%', 0, 'B', 0, 3),
(10, 'Connessioni efficaci per meno del 20%', 4, 'A', 0, 4),
(11, 'Percentuale tra 20% e 80%', 2, 'M', 0, 4),
(12, 'Connessioni efficaci per l\'80%', 0, 'B', 0, 4),
(13, 'Collegamenti di piano efficaci per meno del 50%', 8, 'A', 0, 5),
(14, 'Percentuale tra 50% e 80%', 4, 'M', 0, 5),
(15, 'Collegamenti di piano efficaci per l\'80%', 0, 'B', 0, 5),
(16, 'Strutture non adeguate per oltre il 70%', 20, 'A', 0, 6),
(17, 'Percentuale tra 30% e 70%', 10, 'M', 0, 6),
(18, 'Strutture non adeguate meno del 30%', 0, 'B', 0, 6),
(19, 'Bucature per oltre il 50%', 4, 'A', 0, 7),
(20, 'Percentuale tra 25% e 50%', 2, 'M', 0, 7),
(21, 'Bucature per meno del 25%', 0, 'B', 0, 7),
(22, 'Bucature per oltre il 50%', 4, 'A', 0, 8),
(23, 'Percentuale tra 25% e 50%', 2, 'M', 0, 8),
(24, 'Bucature per meno del 25%', 0, 'B', 0, 8),
(25, 'Rapporto interasse dei muri di spina/spessore >15', 4, 'A', 0, 9),
(26, 'Rapporto tra 10 e 15', 2, 'M', 0, 9),
(27, 'Rapporto <10', 0, 'B', 0, 9),
(28, 'Sviluppo lineare dei pannelli murari a doppio strato con camera d\'aria >15%', 4, 'A', 0, 10),
(29, 'Percentuale tra 5% e 15%', 2, 'M', 0, 10),
(30, 'Sviluppo lineare dei pannelli murari a doppio strato con camera d\'aria <5%', 0, 'B', 0, 10),
(31, 'Collegamenti efficaci per meno del 50%', 4, 'A', 0, 11),
(32, 'Collegamenti efficaci tra il 50% e l\'80%\r\n', 2, 'M', 0, 11),
(33, 'Collegamenti efficaci per almeno l\'80%\r\n', 0, 'B', 0, 11),
(34, 'Strutture non adeguate per oltre il 70%', 8, 'A', 0, 12),
(35, 'Percentuale tra 30% e 70%\r\n', 4, 'M', 0, 12),
(36, 'Strutture non adeguate per meno del 30%\r\n', 0, 'B', 0, 12),
(37, 'Rapporto lato maggiore/lato minore >4', 0, 'A', 0, 13),
(38, 'Rapporto lato maggiore/lato minore tra 3 e 4', 0, 'M', 0, 13),
(39, 'Altri casi\r\n', 0, 'B', 0, 13),
(40, 'Presenza di torrini con h compresa tra il 10% e il 40% dell\'altezza del fabbricato\r\n+ riduzione in pianta >20% rispetto al piano inferiore', 0, 'A', 0, 14),
(41, 'Presenza di torrini con h compresa tra il 10% e il 40% dell\'altezza del fabbricato\r\n+ riduzione in pianta tra il 10% e il 20% rispetto al piano inferiore', 0, 'M', 0, 14),
(42, 'Superfici decrescono con continuità + riduzione <10%', 0, 'B', 0, 14),
(43, 'Elementi non strutturali non ben collegati con dimensioni o massa grandi', 3, 'A', 0, 15),
(44, 'Elementi non strutturali non ben collegati ma con dimensioni o massa piccole', 1, 'M', 0, 15),
(45, 'Elementi non strutturali ben collegati', 0, 'B', 0, 15),
(46, 'Edificio compreso tra edifici di pari h', -5, 'a', 0, 16),
(47, 'Edificio adiacente a edifici più alti o a uno più alto e uno di h uguale', 0, 'b', 0, 16),
(48, 'Edificio adiacente a un edificio più basso e a uno di pari h, o a uno più basso e uno più alto', 4, 'c', 0, 16),
(49, 'Edificio adiacente a due edifici più bassi', 11, 'd', 0, 16),
(50, 'Posizione interclusa e vincolata su tre lati', -15, 'a', 0, 17),
(51, 'Posizione interclusa e vincolata su due lati', -9, 'b', 0, 17),
(52, 'Posizione d\'angolo \r\n', -5, 'c', 0, 17),
(53, 'Posizione di testata', 0, 'd', 0, 17),
(54, 'Assenza di solai sfalsati (differenza di quota pari a 50 cm)', 0, 'a', 0, 18),
(55, 'Presenza di una coppia di solai sfalsati', 2, 'b', 0, 18),
(56, 'Presenza di due coppie di solai sfalsati', 3, 'c', 0, 18),
(57, 'Presenza di più di due coppie di solai sfalsati', 6, 'd', 0, 18),
(58, 'L\'edificio presenta un\'eterogeneità strutturale rispetto all\'edificio adiacente (es. in muratura/c.a)', -4, 'a', 0, 19),
(59, 'L\'edificio confina con un altro in muratura ma con caratteristiche migliori (es. tufo/mur. in blocchi)', -3, 'b', 0, 19),
(60, 'Continuità sia tipologica che strutturale con gli edifici adiacenti', 0, 'c', 0, 19),
(61, 'L\'edificio confina con un altro in muratura ma con caratteristiche peggiori (es. tufo/mur. caotica)', 13, 'd', 0, 19),
(62, 'Differenza tra % di aperture < 5%', -5, 'a', 0, 20),
(63, 'Differenza tra % di aperture compresa tra 5% e 10%', 0, 'b', 0, 20),
(64, 'Differenza tra % di aperture compresa tra 10% e 20%', 6, 'c', 0, 20),
(65, 'Differenza tra % di aperture > 20%', 11, 'd', 0, 20);

-- --------------------------------------------------------

--
-- Struttura della tabella `edifici_in_aggregato_offida`
--

CREATE TABLE `edifici_in_aggregato_offida` (
  `id` bigint(20) NOT NULL,
  `area_di_base_copertura` double NOT NULL,
  `codice_edificio` varchar(255) DEFAULT NULL,
  `totale_superfici_di_contatto` double NOT NULL,
  `totale_superfici_esterne_verticali` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `edifici_in_aggregato_offida`
--

INSERT INTO `edifici_in_aggregato_offida` (`id`, `area_di_base_copertura`, `codice_edificio`, `totale_superfici_di_contatto`, `totale_superfici_esterne_verticali`) VALUES
(1, 120.81, 'E_1000', 401.39, 102.7),
(2, 95.16, 'E_1001', 309.24, 194.21),
(3, 92.75, 'E_1004', 90.77, 254.49),
(4, 49.74, 'E_1007', 90.82, 160.52),
(5, 118.66, 'E_1009', 24.25, 386.03),
(6, 47.68, 'E_1010', 141.7, 127.97),
(7, 27.8, 'E_1011', 97.1, 123.66),
(8, 8.49, 'E_1014', 30.3, 59.01),
(9, 26.96, 'E_1015', 137.2, 58.42),
(10, 66.79, 'E_1016', 319.19, 184.42),
(11, 46.88, 'E_1019', 162.11, 124.51),
(12, 32.15, 'E_1020', 204.43, 76.08),
(13, 106.83, 'E_1022', 462.04, 177.64),
(14, 41.22, 'E_1025', 294.68, 263.29),
(15, 74.4, 'E_1030', 177.51, 224.78),
(16, 93.46, 'E_1033', 429.8, 132.07),
(17, 102.97, 'E_1034', 221.9, 228.18),
(18, 73.09, 'E_1035', 115, 266.48),
(19, 138.6, 'E_1037', 137.2, 408.67),
(20, 33.57, 'E_1038', 31.39, 122.42),
(21, 25.53, 'E_1040', 113.06, 132.01),
(22, 60.67, 'E_1043', 61.58, 363.47),
(23, 28.61, 'E_1046', 112.11, 124.61),
(24, 16.05, 'E_1048', 83.45, 103.14),
(25, 31.4, 'E_1050', 50.53, 137.72),
(26, 105.97, 'E_1051', 322.99, 221.58),
(27, 53.38, 'E_1052', 28.34, 160.51),
(28, 19.69, 'E_1056', 96.62, 128.98),
(29, 125.52, 'E_1058', 202.84, 325.92),
(30, 14.08, 'E_1060', 56.09, 134.93),
(31, 105.59, 'E_1061', 262.51, 319.76),
(32, 325.66, 'E_1064', 729.17, 386.06),
(33, 9.77, 'E_1066', 154.47, 32.87),
(34, 16.59, 'E_1067', 77.28, 115.34),
(35, 43.68, 'E_1068', 220.01, 190.33),
(36, 16.5, 'E_1069', 122.26, 108.66),
(37, 26.3, 'E_1071', 64.07, 157.59),
(38, 126.82, 'E_1072', 133.48, 658.73),
(39, 71.32, 'E_1075', 112.96, 260.7),
(40, 58.96, 'E_1076', 75.25, 273.31),
(41, 78.39, 'E_1077', 129.04, 297.13),
(42, 90.99, 'E_1078', 182.82, 247.45),
(43, 24.22, 'E_1080', 66.17, 191.26),
(44, 167.85, 'E_1085', 409.55, 193.57),
(45, 22.54, 'E_1089', 48.23, 150.81),
(46, 77.4, 'E_1090', 141.52, 232.86),
(47, 20.07, 'E_1091', 105.77, 131.96),
(48, 192.19, 'E_1093', 404.88, 430.46),
(49, 38.45, 'E_1096', 216.2, 134.84),
(50, 54.66, 'E_1098', 363.98, 59.71),
(51, 50.77, 'E_1100', 146.54, 206),
(52, 124.69, 'E_1102', 126.33, 421.93),
(53, 129.68, 'E_1105', 196.91, 454.87),
(54, 32.31, 'E_1108', 147.86, 158.3),
(55, 100.02, 'E_1112', 353.03, 144.81),
(56, 333.94, 'E_1125', 563.44, 673.69),
(57, 192.63, 'E_1129', 120.54, 391.05),
(58, 13.41, 'E_1132', 162.66, 30.65),
(59, 47.27, 'E_1137', 240.24, 207.5),
(60, 60.85, 'E_1139', 59.78, 307.68),
(61, 35.68, 'E_1142', 102.18, 203.55),
(62, 138.15, 'E_1147', 362.65, 412.29),
(63, 61.17, 'E_1152', 99.42, 221.92),
(64, 68.01, 'E_1154', 280.6, 213.9),
(65, 36.97, 'E_1155', 96.84, 152),
(66, 47.36, 'E_1156', 156.64, 158.91),
(67, 43.36, 'E_1157', 100.53, 174.03),
(68, 122.8, 'E_1163', 77.34, 268.52),
(69, 30.18, 'E_1165', 74.51, 123.31),
(70, 22.18, 'E_1167', 155.99, 98.79),
(71, 98.46, 'E_1168', 99.42, 289.04),
(72, 36.02, 'E_1170', 228.18, 119.93),
(73, 41.63, 'E_1173', 138.24, 292.49),
(74, 87.48, 'E_1178', 185.22, 251.19),
(75, 72.59, 'E_1179', 16.08, 344.92),
(76, 16.45, 'E_1180', 82.08, 84.98),
(77, 48.42, 'E_1181', 65.6, 232.76),
(78, 85.51, 'E_1182', 221.3, 196.77),
(79, 12.4, 'E_1183', 59.51, 66.83),
(80, 57.66, 'E_1184', 55.04, 180.61),
(81, 265.35, 'E_1185', 280.3, 394.12),
(82, 336.18, 'E_1188', 137.68, 824.78),
(83, 40.79, 'E_1189', 104.98, 110.53),
(84, 29.41, 'E_1197', 127.76, 91.25),
(85, 15.55, 'E_1198', 7.04, 30.02),
(86, 73.4, 'E_1199', 117.9, 251.44),
(87, 115.52, 'E_1202', 65.6, 449.01),
(88, 45.03, 'E_1204', 23.12, 99.71),
(89, 52.94, 'E_1206', 109.61, 275.07),
(90, 41.86, 'E_1210', 68.27, 182.82),
(91, 50.21, 'E_1211', 71.02, 172.83),
(92, 52.35, 'E_1212', 200.52, 236.66),
(93, 97.73, 'E_1214', 116.66, 322.58),
(94, 57.5, 'E_1217', 217.71, 177.14),
(95, 21.26, 'E_1218', 61.62, 150.26),
(96, 167.82, 'E_1220', 246.33, 521.26),
(97, 85.11, 'E_1222', 174.64, 416.18),
(98, 18.55, 'E_1225', 10.7, 49.06),
(99, 27.57, 'E_1227', 125.11, 102.05),
(100, 42.58, 'E_1228', 105.97, 115.97),
(101, 76.15, 'E_1231', 266.17, 158.4),
(102, 36.84, 'E_1233', 29.34, 104.11),
(103, 101.88, 'E_1234', 466.39, 413.27),
(104, 120.37, 'E_1246', 114.44, 335.47),
(105, 25.25, 'E_1247', 48.32, 94.22),
(106, 123.71, 'E_1248', 181.66, 407.57),
(107, 38.71, 'E_1249', 171.16, 109.49),
(108, 148.15, 'E_1253', 242.21, 463.61),
(109, 14.02, 'E_1254', 130.72, 124.07),
(110, 73.98, 'E_1256', 17.64, 134.65),
(111, 65.8, 'E_1258', 154.49, 354.9),
(112, 116.49, 'E_1260', 124.76, 338),
(113, 59.32, 'E_1264', 114.44, 221.18),
(114, 91.75, 'E_1267', 48.12, 202.26),
(115, 28.83, 'E_1269', 48.12, 88.96),
(116, 50.26, 'E_1270', 89.91, 208.58),
(117, 39.84, 'E_1271', 112.06, 121.11),
(118, 67.41, 'E_1273', 43.12, 195.39),
(119, 41.06, 'E_1274', 89.91, 159.28),
(120, 38.72, 'E_1275', 181.28, 82.92),
(121, 36.87, 'E_1276', 260.72, 136.72),
(122, 26.9, 'E_1279', 120.67, 86.43),
(123, 83.04, 'E_1280', 333.79, 184.92),
(124, 45.14, 'E_1281', 33.57, 156.26),
(125, 35.01, 'E_1285', 43.12, 124.28),
(126, 31.98, 'E_1286', 172.09, 93.09),
(127, 100.59, 'E_1287', 252.56, 296.25),
(128, 28.25, 'E_1291', 20.67, 59.22),
(129, 19.73, 'E_1293', 78.78, 152.05),
(130, 13.61, 'E_1294', 66.26, 79.87),
(131, 36.34, 'E_1301', 11.28, 87.09),
(132, 79.92, 'E_1302', 364.56, 101.5),
(133, 151.81, 'E_1303', 434.54, 328.09),
(134, 13.38, 'E_1304', 11.28, 39.47),
(135, 18.27, 'E_1308', 72.71, 81.37),
(136, 42.11, 'E_1309', 306.66, 397.1),
(137, 21.64, 'E_1311', 79.65, 125.19),
(138, 38.98, 'E_1312', 137.15, 145.08),
(139, 89.33, 'E_1317', 200.46, 294.73),
(140, 57.83, 'E_1318', 58.11, 162.73),
(141, 13.98, 'E_1319', 141.69, 32.38),
(142, 80.24, 'E_1320', 20.67, 111.46),
(143, 87.09, 'E_1321', 263.42, 255.66),
(144, 217.85, 'E_1325', 72.88, 354.04),
(145, 27.97, 'E_1326', 107.09, 127.02),
(146, 45.96, 'E_1327', 193.64, 221.05),
(147, 20.98, 'E_1328', 204.99, 31.69),
(148, 57.37, 'E_1329', 93.7, 208.22),
(149, 12.84, 'E_1330', 102.61, 67.99),
(150, 147.38, 'E_1333', 292.97, 292.33),
(151, 78.29, 'E_1334', 75.77, 213.73),
(152, 43.19, 'E_1335', 198.16, 158.92),
(153, 11.4, 'E_1336', 3.13, 31.22),
(154, 43.68, 'E_1337', 121.88, 135.69),
(155, 54.79, 'E_1338', 216.66, 193.8),
(156, 58.27, 'E_1339', 8.19, 62.11),
(157, 10.76, 'E_1340', 72.68, 54.72),
(158, 95.74, 'E_1341', 94.57, 199.93),
(159, 10.26, 'E_1342', 5.05, 20.12),
(160, 46.42, 'E_1344', 189.62, 167.47),
(161, 48.81, 'E_1345', 158.53, 140.35),
(162, 25.37, 'E_1346', 166.5, 108.65),
(163, 15.74, 'E_1347', 68.27, 73.22),
(164, 62.35, 'E_1348', 266.16, 202.51),
(165, 252.24, 'E_1350', 394.98, 521.78),
(166, 153.24, 'E_1353', 168.34, 318.86),
(167, 19.82, 'E_1355', 146.43, 35.61),
(168, 29.55, 'E_1358', 59.38, 159.3),
(169, 11.98, 'E_1359', 82.56, 107.97),
(170, 26.66, 'E_1363', 26.51, 57.84),
(171, 35.11, 'E_1365', 212, 146.23),
(172, 16.17, 'E_1366', 35.61, 65.29),
(173, 56.29, 'E_1367', 29.36, 168.55),
(174, 4.38, 'E_1369', 10.62, 56.82),
(175, 38.27, 'E_1370', 250.74, 141.72),
(176, 23.52, 'E_1371', 107.2, 71.19),
(177, 17.74, 'E_1375', 163.97, 37.98),
(178, 50.41, 'E_1377', 194.8, 229.01),
(179, 24.54, 'E_1379', 208.17, 129.4),
(180, 8.08, 'E_1382', 77.63, 67.99),
(181, 12.33, 'E_1383', 131.9, 80.45),
(182, 50.74, 'E_1385', 219.62, 138.59),
(183, 52.59, 'E_1387', 109.59, 294.38),
(184, 51.16, 'E_1391', 100.37, 121.94),
(185, 73.37, 'E_1392', 308.86, 275.13),
(186, 57.37, 'E_1394', 227.82, 167.85),
(187, 11.28, 'E_1395', 130.68, 151.97),
(188, 15.8, 'E_1398', 219.91, 31.15),
(189, 119.74, 'E_1399', 340.03, 330.18),
(190, 19.94, 'E_1400', 188.78, 53.63),
(191, 184.7, 'E_1401', 252.58, 327.94),
(192, 50.52, 'E_1402', 288.3, 142.74),
(193, 58.24, 'E_1403', 101.93, 259.48),
(194, 23.54, 'E_1405', 231.76, 37.33),
(195, 47.6, 'E_1406', 214.94, 124.02),
(196, 171.35, 'E_1407', 162.09, 427.54),
(197, 40.1, 'E_1408', 140.06, 171.24),
(198, 12.02, 'E_1409', 120.07, 88.23),
(199, 39.86, 'E_1410', 103.22, 203.16),
(200, 19.65, 'E_1411', 90.82, 83.12),
(201, 46.05, 'E_1412', 95.87, 158.08),
(202, 17.66, 'E_1413', 102.49, 79.39),
(203, 219.01, 'E_1414', 414.15, 717.03),
(204, 24, 'E_1415', 50.73, 162.25),
(205, 22.14, 'E_1416', 52.83, 148.48),
(206, 22.81, 'E_1418', 56.39, 85.79),
(207, 59.82, 'E_1420', 228.44, 361.8),
(208, 26.35, 'E_1422', 51.87, 127.29),
(209, 82.94, 'E_1423', 221.84, 383.67),
(210, 123.2, 'E_1425', 135.42, 483.21),
(211, 14.11, 'E_1427', 122.61, 52.55),
(212, 89.35, 'E_1428', 214.51, 234.91),
(213, 23.37, 'E_1429', 63.46, 111.01),
(214, 71.26, 'E_1430', 94.44, 269.54),
(215, 42.83, 'E_1431', 128.54, 153.03),
(216, 76.57, 'E_1434', 331.33, 163.71),
(217, 5.37, 'E_1437', 59.72, 52.53),
(218, 30.09, 'E_1438', 166.91, 238.99),
(219, 20.81, 'E_1439', 84.74, 107.42),
(220, 41.12, 'E_1445', 146.16, 119.54),
(221, 26.3, 'E_1446', 193.78, 178.99),
(222, 15.34, 'E_1448', 109.53, 99.81),
(223, 55.61, 'E_1449', 123.81, 188.37),
(224, 42.08, 'E_1450', 123.66, 206.89),
(225, 9.85, 'E_1451', 112.26, 75.3),
(226, 32.61, 'E_1452', 60.71, 174.95),
(227, 78.84, 'E_1453', 191.24, 358.81),
(228, 32.2, 'E_1454', 87.7, 122.92),
(229, 33.93, 'E_1455', 133.15, 145.76),
(230, 20.92, 'E_1456', 138.03, 85.84),
(231, 10.47, 'E_1457', 29.2, 76.93),
(232, 17.2, 'E_1458', 64.98, 88.46),
(233, 29.38, 'E_1459', 127.67, 143.68),
(234, 81.62, 'E_1461', 165.13, 250.02),
(235, 30.16, 'E_1462', 13.82, 146.94),
(236, 24.12, 'E_1464', 127.82, 71.99),
(237, 65.46, 'E_1465', 196.24, 244.76),
(238, 27.96, 'E_1466', 188.04, 90.03),
(239, 49.96, 'E_1467', 276.72, 57.38),
(240, 86.82, 'E_1469', 119.28, 232.03),
(241, 26.75, 'E_1470', 131.88, 129.92),
(242, 24.71, 'E_1471', 84.57, 210.18),
(243, 28.28, 'E_1473', 188.75, 88.02),
(244, 33.87, 'E_1475', 73.8, 210.2),
(245, 34.56, 'E_1476', 255.61, 64.08),
(246, 30.22, 'E_1479', 208.22, 101.94),
(247, 96.33, 'E_1480', 126.26, 280.25),
(248, 21.9, 'E_1481', 226.45, 54.59),
(249, 36.12, 'E_1482', 89.68, 215.91),
(250, 70.55, 'E_1483', 336.64, 154.08),
(251, 37.43, 'E_1484', 109.46, 167.48),
(252, 41.95, 'E_1486', 102.52, 180.03),
(253, 97.55, 'E_1487', 191.24, 360.06),
(254, 245.99, 'E_1489', 374.83, 394.32),
(255, 41.12, 'E_1490', 125.01, 155.16),
(256, 33.28, 'E_1491', 209.61, 121.37),
(257, 62.58, 'E_1492', 159.37, 326.42),
(258, 15.52, 'E_1493', 79.38, 90.2),
(259, 14.53, 'E_1494', 121.77, 21.92),
(260, 16.48, 'E_1496', 125.93, 54.79),
(261, 58.11, 'E_1498', 152.72, 272.73),
(262, 154.59, 'E_1499', 166.19, 407.67),
(263, 52, 'E_1500', 227.05, 219.59),
(264, 62.59, 'E_1501', 221.21, 189.68),
(265, 13.03, 'E_1502', 30.05, 100.5),
(266, 24.96, 'E_1503', 143.97, 95.49),
(267, 8.58, 'E_1504', 96.94, 84.7),
(268, 21.94, 'E_1505', 52.58, 129.12),
(269, 62.38, 'E_1506', 128.39, 211.88),
(270, 50.81, 'E_1508', 239.22, 119.23),
(271, 12.92, 'E_1510', 55.61, 75.34),
(272, 235.62, 'E_1511', 185.64, 606.52),
(273, 39.13, 'E_1512', 137.54, 114.76),
(274, 35.27, 'E_1513', 91.59, 273.33),
(275, 23.17, 'E_1514', 136.05, 66.94),
(276, 30, 'E_1516', 14.87, 74.41),
(277, 160.15, 'E_1519', 167.18, 336.78),
(278, 31.17, 'E_1521', 26.33, 41.25),
(279, 57, 'E_1522', 155.33, 128.79),
(280, 8.14, 'E_1523', 22.25, 99.9),
(281, 91.11, 'E_1526', 274.96, 239.69),
(282, 41.32, 'E_1527', 32.76, 119.31),
(283, 38.75, 'E_1528', 109.58, 116.92),
(284, 39.05, 'E_1529', 64.27, 251.15),
(285, 23.86, 'E_1531', 102.96, 67.98),
(286, 25.03, 'E_1533', 146.42, 114.38),
(287, 27.5, 'E_1535', 87.84, 102.43),
(288, 127.19, 'E_1537', 207.57, 352.11),
(289, 28.73, 'E_1542', 11.46, 55.24),
(290, 8.31, 'E_1543', 5.03, 53.91),
(291, 26.8, 'E_1544', 122.45, 94.26),
(292, 35.23, 'E_1546', 61.08, 155.3),
(293, 32.11, 'E_1547', 82.33, 145.24),
(294, 17.74, 'E_1548', 98.57, 68.07),
(295, 43, 'E_1550', 164.21, 113.57),
(296, 18.27, 'E_1551', 18.18, 103.97),
(297, 24.77, 'E_1552', 12.56, 91.62),
(298, 75.89, 'E_1553', 175.09, 119.66),
(299, 129.06, 'E_1554', 258.88, 323.64),
(300, 17.47, 'E_1556', 146.67, 32.21),
(301, 130.92, 'E_1557', 317.06, 337.61),
(302, 109.5, 'E_1558', 68.94, 255.05),
(303, 41.32, 'E_1560', 212.01, 113.54),
(304, 40.94, 'E_1562', 184.93, 104.44),
(305, 57.21, 'E_1564', 123.63, 200.56),
(306, 44.64, 'E_1566', 85.27, 143.5),
(307, 19.46, 'E_1567', 108.34, 129.8),
(308, 22.47, 'E_1568', 136.36, 64.86),
(309, 24.06, 'E_1570', 76.77, 116.65),
(310, 35.86, 'E_1572', 48.43, 132.61),
(311, 28.05, 'E_1573', 119.97, 85.58),
(312, 22.84, 'E_1575', 183.75, 101.24),
(313, 101.93, 'E_1576', 175.78, 394.09),
(314, 36.28, 'E_1577', 62.98, 143.13),
(315, 35.03, 'E_1579', 249.51, 70.77),
(316, 59.47, 'E_1580', 320.97, 283.24),
(317, 25.18, 'E_1581', 18.18, 68.42),
(318, 53.27, 'E_1583', 169.24, 226.41),
(319, 49.63, 'E_1585', 176.43, 117.7),
(320, 16.98, 'E_1588', 94.17, 54.33),
(321, 349.64, 'E_1590', 440.1, 783.05),
(322, 60.54, 'E_1595', 99.44, 140.47),
(323, 275.51, 'E_1596', 142.54, 683.75),
(324, 36.88, 'E_1597', 150.82, 132.99),
(325, 88.71, 'E_1598', 101.62, 185.36),
(326, 45.57, 'E_1600', 49.37, 183.73),
(327, 43.64, 'E_1601', 157.67, 142.08),
(328, 51.95, 'E_1602', 193.99, 142.57),
(329, 42.49, 'E_1603', 254.47, 74.3),
(330, 212.01, 'E_1604', 108.26, 480.72),
(331, 62.55, 'E_1605', 103.72, 217.34),
(332, 43.04, 'E_1608', 176.19, 84.7),
(333, 9.3, 'E_1609', 116.17, 34.69),
(334, 40.21, 'E_1611', 97.11, 188.77),
(335, 41.31, 'E_1612', 40.59, 89.57),
(336, 66.41, 'E_1613', 252.56, 158.33),
(337, 49.48, 'E_1614', 52.86, 160.79),
(338, 103.96, 'E_1615', 62.98, 367.02),
(339, 23.23, 'E_1616', 201.28, 50),
(340, 37.5, 'E_1617', 140.9, 115.26),
(341, 65.86, 'E_1618', 226.33, 103.54),
(342, 91.67, 'E_1620', 295.01, 283.69),
(343, 101.74, 'E_1621', 224.3, 273.29),
(344, 206.08, 'E_1624', 189.63, 632.58),
(345, 66.11, 'E_1625', 45.87, 169.76),
(346, 154.66, 'E_1628', 205.93, 414.75),
(347, 37.36, 'E_1629', 166.64, 134.08),
(348, 120.29, 'E_1630', 248.98, 275.11),
(349, 58.5, 'E_1631', 218.09, 103.58),
(350, 25.43, 'E_1633', 130.22, 71.25),
(351, 13.11, 'E_1635', 18.08, 47.73),
(352, 15.78, 'E_1637', 98.63, 110.47),
(353, 62.28, 'E_1638', 69.4, 311.97),
(354, 87.98, 'E_1640', 146.75, 285.56),
(355, 8.91, 'E_1642', 80.56, 103.89),
(356, 132.36, 'E_1643', 11.06, 567.73),
(357, 33.63, 'E_1644', 58.35, 120.34),
(358, 25.04, 'E_1647', 232.23, 99.56),
(359, 16.44, 'E_1648', 42.87, 96.76),
(360, 20.07, 'E_1650', 144.22, 98.59),
(361, 56.39, 'E_1652', 149.24, 169.32),
(362, 121.79, 'E_1654', 189.3, 255.48),
(363, 73.34, 'E_1655', 141.05, 220.75),
(364, 77.5, 'E_1656', 269.96, 167.3),
(365, 72.8, 'E_1657', 101.9, 245.03),
(366, 51.74, 'E_1664', 68.77, 241.23),
(367, 15.71, 'E_1665', 102.15, 118.05),
(368, 58.65, 'E_1666', 156.01, 251.82),
(369, 42.35, 'E_1669', 191.06, 164.62),
(370, 22.71, 'E_1670', 167.2, 124.33),
(371, 54.91, 'E_1671', 187.91, 150.07),
(372, 58.87, 'E_1673', 312.24, 164.89),
(373, 9.12, 'E_1675', 50.74, 62.55),
(374, 40.99, 'E_1676', 161.01, 233.13),
(375, 39.4, 'E_1677', 114.14, 161.95),
(376, 169.34, 'E_1678', 63.74, 663.17),
(377, 272.7, 'E_1686', 148.79, 595.72),
(378, 20.71, 'E_1687', 105.24, 106.44),
(379, 16.08, 'E_1688', 137.71, 66.62),
(380, 72.11, 'E_1689', 200.71, 206.74),
(381, 50.59, 'E_1690', 155.93, 181.48),
(382, 57.03, 'E_1691', 121.39, 239.05),
(383, 14.03, 'E_1692', 104.3, 73.96),
(384, 33.9, 'E_1694', 97.75, 126.97),
(385, 80.18, 'E_1697', 106.02, 301.3),
(386, 132.5, 'E_1700', 71.63, 375.39),
(387, 55.91, 'E_1702', 49.36, 249.23),
(388, 27.8, 'E_1704', 100.04, 54.83),
(389, 91.38, 'E_1708', 74.05, 320.44),
(390, 21.84, 'E_1711', 155.87, 152.65),
(391, 37.16, 'E_1714', 166.73, 159.95),
(392, 22.08, 'E_1715', 102.84, 31.66),
(393, 185.38, 'E_1717', 209.11, 395.4),
(394, 71.5, 'E_1718', 145.69, 191.78),
(395, 82.73, 'E_1720', 100.4, 216.98),
(396, 72.12, 'E_1721', 131.44, 152.2),
(397, 106.59, 'E_1723', 156.74, 254.79),
(398, 44.71, 'E_1725', 100.97, 94.86),
(399, 124.99, 'E_1728', 55.96, 512.36),
(400, 23.44, 'E_1729', 50.09, 87.33),
(401, 72.69, 'E_1730', 204.19, 137.08),
(402, 47.49, 'E_1731', 69.75, 331.33),
(403, 22.55, 'E_1734', 141.65, 78.27),
(404, 52.36, 'E_1736', 108.7, 119.48),
(405, 37.11, 'E_1737', 40.4, 190.16),
(406, 43.15, 'E_1738', 106.83, 99.58),
(407, 62.94, 'E_1739', 316.13, 102.33),
(408, 44.63, 'E_1744', 280.8, 163.47),
(409, 23.35, 'E_1746', 69.27, 79.44),
(410, 111.1, 'E_1747', 150.19, 269.05),
(411, 30.13, 'E_1748', 69.93, 91.37),
(412, 13.64, 'E_1758', 23.7, 67.39),
(413, 24.34, 'E_1795', 28.44, 78.85),
(414, 29.28, 'E_1796', 54.24, 78.76),
(415, 7.49, 'E_699', 14.08, 41.39),
(416, 58.41, 'E_700', 14.08, 146.48),
(417, 52.62, 'E_708', 39.36, 230.22),
(418, 16.37, 'E_709', 64.79, 58.13),
(419, 12.27, 'E_710', 12.25, 48.74),
(420, 41.15, 'E_713', 37.69, 102.15),
(421, 20.48, 'E_718', 4.08, 66.35),
(422, 37.39, 'E_725', 16.8, 113.32),
(423, 8.4, 'E_727', 119.95, 45.07),
(424, 19.53, 'E_728', 155.33, 99.22),
(425, 44.01, 'E_730', 36.09, 110.82),
(426, 53.44, 'E_732', 26.86, 100.97),
(427, 41.08, 'E_737', 49.52, 161.11),
(428, 28.88, 'E_738', 12.72, 69.58),
(429, 35.35, 'E_740', 91.48, 201.62),
(430, 37.48, 'E_741', 92.84, 127.44),
(431, 123.41, 'E_742', 203.23, 547.11),
(432, 26.01, 'E_743', 54.78, 162.85),
(433, 231.99, 'E_744', 20.75, 479.97),
(434, 54.41, 'E_749', 67.45, 218.39),
(435, 35.17, 'E_750', 60.18, 104.88),
(436, 44.14, 'E_751', 127.95, 237.16),
(437, 12.16, 'E_752', 22.06, 65.57),
(438, 130.29, 'E_755', 213.61, 419.94),
(439, 78.35, 'E_756', 108.49, 129.54),
(440, 26.78, 'E_757', 14.57, 110.11),
(441, 51.21, 'E_758', 139.4, 139.9),
(442, 34.55, 'E_761', 75.08, 151.15),
(443, 35.85, 'E_763', 85.38, 85.95),
(444, 70.36, 'E_767', 71.08, 136.01),
(445, 9.32, 'E_768', 5.89, 26.35),
(446, 37.58, 'E_769', 31.77, 156.19),
(447, 105.94, 'E_771', 249.38, 301.94),
(448, 73.55, 'E_773', 123.71, 254.18),
(449, 38.96, 'E_774', 43.51, 145.04),
(450, 44.25, 'E_776', 147.36, 87.95),
(451, 20.02, 'E_781', 30.6, 98.59),
(452, 29.48, 'E_782', 40.63, 85),
(453, 12.45, 'E_784', 34.11, 75.97),
(454, 199.07, 'E_785', 137.18, 539.14),
(455, 41.81, 'E_786', 32.45, 119.41),
(456, 48.42, 'E_788', 64.56, 143.35),
(457, 21.46, 'E_789', 83.48, 101.56),
(458, 38.69, 'E_790', 25.73, 277.6),
(459, 58.27, 'E_792', 141.51, 194.67),
(460, 118.45, 'E_794', 220.99, 414.4),
(461, 33.08, 'E_795', 56.36, 85.21),
(462, 31.69, 'E_797', 93.59, 121.44),
(463, 10.35, 'E_798', 40.96, 107.61),
(464, 15.81, 'E_799', 17.26, 75.86),
(465, 117.36, 'E_801', 91.97, 336.87),
(466, 43.3, 'E_802', 88.79, 201.04),
(467, 87.5, 'E_804', 55.04, 386.36),
(468, 127.38, 'E_805', 206.64, 285.22),
(469, 41.74, 'E_806', 128.7, 92.74),
(470, 29.8, 'E_807', 96.55, 124.35),
(471, 13.02, 'E_808', 40.96, 86.7),
(472, 66.25, 'E_809', 183.61, 290.26),
(473, 54.56, 'E_810', 326.84, 151.13),
(474, 46.67, 'E_811', 47.8, 106.37),
(475, 22.55, 'E_812', 32.81, 89.82),
(476, 49.19, 'E_813', 211.47, 179.82),
(477, 18.66, 'E_814', 114.14, 93.62),
(478, 27.1, 'E_815', 107.23, 133.91),
(479, 21.49, 'E_816', 90.05, 128.91),
(480, 10.2, 'E_817', 76.68, 92.32),
(481, 18.54, 'E_821', 17.76, 103.84),
(482, 73.64, 'E_822', 53.23, 167.69),
(483, 99.68, 'E_823', 217.34, 200.97),
(484, 67.26, 'E_824', 82.68, 246.21),
(485, 19.86, 'E_826', 26.78, 110.08),
(486, 75.99, 'E_827', 82.68, 286.23),
(487, 14.72, 'E_828', 26.83, 112.87),
(488, 89.56, 'E_830', 143.63, 163.82),
(489, 150.74, 'E_831', 232.76, 436.38),
(490, 32.39, 'E_832', 126.33, 99.55),
(491, 5.15, 'E_833', 65.25, 59.52),
(492, 63.33, 'E_834', 26.83, 339.57),
(493, 153.09, 'E_835', 192.48, 366.83),
(494, 29.54, 'E_836', 165.44, 48.3),
(495, 14.26, 'E_837', 139.8, 57.77),
(496, 55.01, 'E_838', 196.72, 272.09),
(497, 193.13, 'E_839', 178.66, 474.27),
(498, 32.56, 'E_840', 90.01, 79.91),
(499, 104.83, 'E_841', 62.02, 225.17),
(500, 146.47, 'E_846', 264.47, 429.21),
(501, 89.46, 'E_847', 86.2, 172.28),
(502, 39.58, 'E_850', 126.71, 232.66),
(503, 31.54, 'E_855', 130.1, 97.76),
(504, 82.16, 'E_856', 204.67, 278.04),
(505, 38.3, 'E_857', 92.75, 100.07),
(506, 90.45, 'E_859', 95.72, 285.53),
(507, 130.26, 'E_861', 371.96, 257.98),
(508, 4.35, 'E_862', 7.15, 38.59),
(509, 215.41, 'E_864', 116.25, 555.48),
(510, 128.67, 'E_865', 7.15, 506.41),
(511, 16.08, 'E_869', 64.54, 108.75),
(512, 26.29, 'E_871', 125.58, 111.32),
(513, 15.39, 'E_873', 63.12, 99.98),
(514, 61.03, 'E_875', 161.55, 141.06),
(515, 88.58, 'E_876', 107.38, 173.04),
(516, 62.92, 'E_877', 147.44, 166.63),
(517, 9.23, 'E_878', 26.8, 53.81),
(518, 16.32, 'E_880', 92.19, 98.5),
(519, 3.96, 'E_881', 18.21, 71.83),
(520, 156.97, 'E_882', 68.28, 532.32),
(521, 34.3, 'E_883', 251.86, 80.82),
(522, 35.28, 'E_884', 96.97, 145.16),
(523, 90.54, 'E_885', 279.89, 340.26),
(524, 28.7, 'E_886', 115.4, 186.25),
(525, 60.11, 'E_887', 127.36, 152.63),
(526, 21.65, 'E_889', 103.08, 59.36),
(527, 145.05, 'E_890', 147.57, 533.19),
(528, 39.21, 'E_891', 259.6, 205.56),
(529, 9.65, 'E_892', 95.8, 164.61),
(530, 128.99, 'E_893', 135.4, 300.84),
(531, 52.44, 'E_895', 308.75, 167.69),
(532, 82.54, 'E_896', 34.6, 261.73),
(533, 86.68, 'E_900', 96.37, 347.82),
(534, 13.04, 'E_901', 7.8, 44.58),
(535, 216.82, 'E_903', 279.89, 1065.01),
(536, 43.84, 'E_904', 121.21, 115.2),
(537, 14.74, 'E_905', 88.16, 36.04),
(538, 23.6, 'E_906', 2.44, 140.95),
(539, 143.31, 'E_908', 322.39, 244.18),
(540, 55.62, 'E_911', 476.26, 158.42),
(541, 16.37, 'E_912', 19, 73.73),
(542, 70.23, 'E_914', 206.13, 181.85),
(543, 9.55, 'E_916', 5.96, 48.18),
(544, 111.63, 'E_918', 111.49, 325.35),
(545, 29.21, 'E_920', 32.09, 80.48),
(546, 12.86, 'E_925', 43.94, 126.51),
(547, 111.81, 'E_927', 103, 253.42),
(548, 194.77, 'E_931', 559.09, 805.57),
(549, 108.76, 'E_932', 171.55, 282.22),
(550, 68.85, 'E_934', 70.91, 272.86),
(551, 128.86, 'E_935', 136.19, 610.92),
(552, 153.87, 'E_938', 200.04, 446.71),
(553, 44.1, 'E_940', 210.65, 171.1),
(554, 247.2, 'E_943', 127.48, 576.77),
(555, 72.94, 'E_945', 5.04, 212.9),
(556, 197.51, 'E_948', 275.53, 299.02),
(557, 342.53, 'E_950', 46.38, 1405.9),
(558, 69.04, 'E_951', 293.55, 153.35),
(559, 106.4, 'E_956', 308.6, 341.41),
(560, 156.65, 'E_957', 188.32, 326.52),
(561, 189.67, 'E_960', 530.31, 416.99),
(562, 35.89, 'E_966', 205.46, 122.61),
(563, 84.54, 'E_968', 238.93, 250.34),
(564, 45.91, 'E_971', 176.4, 192.2),
(565, 29.23, 'E_974', 24.25, 92.18),
(566, 150.7, 'E_975', 372.63, 383.02),
(567, 24.51, 'E_977', 168.3, 153.41),
(568, 34.36, 'E_979', 215.56, 67.56),
(569, 68.1, 'E_982', 101.66, 184.01),
(570, 53.2, 'E_984', 167.13, 155.23),
(571, 333.16, 'E_985', 64.69, 987.85),
(572, 15.7, 'E_987', 48.87, 65.82),
(573, 46.14, 'E_988', 221.26, 165.35),
(574, 107.77, 'E_989', 184.87, 306.35),
(575, 205.16, 'E_991', 355.83, 346.34),
(576, 23.68, 'E_994', 107.98, 66.16),
(577, 17.98, 'E_995', 24.08, 69.87),
(578, 86.76, 'E_996', 62.8, 145.5),
(579, 29.65, 'E_997', 94.98, 104.39),
(580, 52.39, 'E_999', 283.38, 170.17);

-- --------------------------------------------------------

--
-- Struttura della tabella `edifici_isolati_offida`
--

CREATE TABLE `edifici_isolati_offida` (
  `id` bigint(20) NOT NULL,
  `area_di_base_copertura` double NOT NULL,
  `codice_edificio` varchar(255) DEFAULT NULL,
  `rapporto_lato_maggiore_lato_minore` varchar(255) DEFAULT NULL,
  `totale_superfici_esterne_verticali` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `edifici_isolati_offida`
--

INSERT INTO `edifici_isolati_offida` (`id`, `area_di_base_copertura`, `codice_edificio`, `rapporto_lato_maggiore_lato_minore`, `totale_superfici_esterne_verticali`) VALUES
(1, 11.98, 'E_1002', '1,31_B', 62.77),
(2, 11.98, 'E_1021', '1,26_B', 62.77),
(3, 108.76, 'E_1042', '2,35_B', 486.83),
(4, 245.98, 'E_1055', '1,21_B', 601.55),
(5, 21.46, 'E_1097', '1,62_B', 39.01),
(6, 147.04, 'E_1103', '1,96_B', 568.81),
(7, 15.9, 'E_1159', '1,37_B', 38),
(8, 134.96, 'E_1192', '1,82_B', 618.89),
(9, 22.34, 'E_1219', '1,64_B', 124.28),
(10, 35.54, 'E_1239', '1,12_B', 128.21),
(11, 143.22, 'E_1241', '1,08_B', 589.23),
(12, 29.66, 'E_1314', '7,1_A', 63.68),
(13, 151.49, 'E_1356', '1,1_B', 474.93),
(14, 10.61, 'E_1364', '1,29_B', 57.01),
(15, 52.1, 'E_1372', '1,38_B', 254.94),
(16, 204.6, 'E_1378', '6,38_A', 241.68),
(17, 151.52, 'E_1538', '4,24_A', 345.32),
(18, 47.5, 'E_1565', '1,46_B', 184.65),
(19, 75.55, 'E_1649', '3,07_M', 464.97),
(20, 15.62, 'E_1781', '1,4_B', 37.77),
(21, 15.48, 'E_715', '2,15_B', 80.47),
(22, 57.47, 'E_717', '3,45_M', 178.71),
(23, 13.63, 'E_724', '1,92_B', 38.32),
(24, 10.02, 'E_726', '1,53_B', 39.88),
(25, 13.31, 'E_753', '1,69_B', 55.56),
(26, 26.11, 'E_803', '1,06_B', 103.86),
(27, 29.54, 'E_894', '2,18_B', 169.81),
(28, 47.36, 'E_936', '1,18_B', 153.32);

-- --------------------------------------------------------

--
-- Struttura della tabella `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Struttura della tabella `interventoa1`
--

CREATE TABLE `interventoa1` (
  `id` bigint(20) NOT NULL,
  `corpo` varchar(255) DEFAULT NULL,
  `immagine` varchar(255) DEFAULT NULL,
  `titolo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `interventoa1`
--

INSERT INTO `interventoa1` (`id`, `corpo`, `immagine`, `titolo`) VALUES
(22, 'Questo è ciò che fa', NULL, 'Intervento A1');

-- --------------------------------------------------------

--
-- Struttura della tabella `interventoa2`
--

CREATE TABLE `interventoa2` (
  `id` bigint(20) NOT NULL,
  `corpo` varchar(255) DEFAULT NULL,
  `immagine` varchar(255) DEFAULT NULL,
  `titolo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `interventoa2`
--

INSERT INTO `interventoa2` (`id`, `corpo`, `immagine`, `titolo`) VALUES
(1, 'Questo è ciò che fa', 'img', 'Intervento A2');

-- --------------------------------------------------------

--
-- Struttura della tabella `meccanismi`
--

CREATE TABLE `meccanismi` (
  `id` bigint(20) NOT NULL,
  `codice` int(11) DEFAULT NULL,
  `descrizione` varchar(255) DEFAULT NULL,
  `modi_di_danno_alle_strutture_orizzontali` varchar(255) DEFAULT NULL,
  `modi_di_danno_alle_strutture_verticali` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `meccanismi`
--

INSERT INTO `meccanismi` (`id`, `codice`, `descrizione`, `modi_di_danno_alle_strutture_orizzontali`, `modi_di_danno_alle_strutture_verticali`) VALUES
(1, 1, 'Da taglio nella parete per azioni nel piano', 'V1, V3,V7, V8, V10, V11,V15, V16', 'H8, H11'),
(2, 2, 'Da taglio nella parete per azioni nel piano localizzato nella zona alta', 'V2, V4, V8, V10, V11, V15', 'H8, H11'),
(3, 3, 'Da ribaltamento dell\'intera parete', 'V9, V10, V11, V14, V21', 'H5, H6, H8, H9, H10, H11, H12'),
(4, 4, 'Da ribaltamento parziale della parete', 'V6, V9, V10, V11, V13, V14, V21', 'H5, H6, H8, H9, H10, H11, H12'),
(5, 5, 'Da instabilità verticale della parete', 'V19, V20', 'H5, H6, H8, H9, H10, H11, H12'),
(6, 6, 'Da rottura a flessione della parete', 'V1, V2, V9, V11, V20', 'H5, H6, H10, H11, H12'),
(7, 7, 'Da scorrimento di piano orizzontale', 'V3, V6, V14', 'H12, H13'),
(8, 8, 'Da cedimento fondale', 'V5, V22, V23', 'H7, H11'),
(9, 9, 'Da irregolarità tra strutture adiacenti', 'V17, V18', 'H12'),
(10, 10, 'Per sfilamento delle travi del solaio dalla parete di supporto', 'V9, V11, V19', 'H10, H12'),
(11, 11, 'Per cedimento di architravi e/o piattabande', 'V6, V13', 'H11'),
(12, 12, 'Da irregolarità del materiale, debolezze locali, etc', 'V1, V6, V13, V16, V17, V18', 'H11'),
(13, 13, 'Da ribaltamento della parete del timpano', 'V12, V19', 'H10'),
(14, 14, 'Da ribaltamento della parte alta del cantonale', 'V4, V6, V13', 'H10, H11'),
(15, 15, 'Da ribaltamento della fascia sottotetto', 'V6, V13, V19', 'H9, H10, H11, H12'),
(16, 16, 'Da rotazione delle spalle di volte e archi', 'V16, V21', 'H1, H2, H3, H4, H7');

-- --------------------------------------------------------

--
-- Struttura della tabella `quality`
--

CREATE TABLE `quality` (
  `id` bigint(20) NOT NULL,
  `quality` varchar(255) DEFAULT NULL,
  `t_quality_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `quality`
--

INSERT INTO `quality` (`id`, `quality`, `t_quality_id`) VALUES
(1, 'Scarsa qualità costruttiva', 1),
(2, 'Elevato degrado e/o danneggiamento', 1),
(3, 'Spinte orizzontali non contrastate\r\n\r\n\r\n', 1),
(4, 'Pannelli murari male ammorsati tra loro\r\n\r\n\r\n', 1),
(5, 'Orizzontamenti male ammorsati alle pareti: efficacia dei collegamenti con la muratura\r\n\r\n\r\n', 1),
(6, 'Orizzontamenti male ammorsati alle pareti: qualità delle strutture orizzontali\r\n\r\n\r\n', 1),
(7, 'Aperture di elevate dimensioni intervallate da maschi di ridotte dimensioni\r\n\r\n\r\n', 1),
(8, 'Presenza di numerose nicchie che riducono significativamente l\'area resistente della muratura\r\n\r\n\r\n', 1),
(9, 'Pareti di elevate dimensioni (larghezza e altezza) non controventate a sufficienza\r\n\r\n\r\n', 1),
(10, 'Pannelli murari a doppio strato con camera d\'aria\r\n\r\n\r\n', 1),
(11, 'Assenza di cordoli e qualità della copertura: efficacia dei collegamenti con la muratura\r\n\r\n\r\n', 1),
(12, 'Assenza di cordoli e qualità della copertura: qualità della copertura\r\n\r\n\r\n', 1),
(13, 'Elevata irregolarità in pianta e/o altezza: irregolarità in pianta\r\n\r\n\r\n', 1),
(14, 'Elevata irregolarità in pianta e/o altezza: irregolarità in altezza\r\n\r\n\r\n', 1),
(15, 'Presenza numerosa di elementi non-strutturali che modificano negativamente il comportamento locale e/o globale\r\n\r\n\r\n', 1),
(16, 'INTERAZIONE IN ALTEZZA ', 2),
(17, 'POSIZIONE PLANIMETRICA DELL\'EDIFICIO NELL\'AGGREGATO\r\n\r\n\r\n\r\n', 2),
(18, 'PRESENZA E NUMERO DI SOLAI SFALSATI CON GLI EDIFICI ADIACENTI\r\n\r\n\r\n\r\n', 2),
(19, 'PRESENZA DI ETEROGENEITÀ TIPOLOGICHE O STRUTTURALI TRA EDIFICI ADIACENTI\r\n\r\n\r\n\r\n', 2),
(20, 'DIFFERENZA TRA % DI APERTURE IN FACCIATA TRA EDIFICI ADIACENTI\r\n\r\n\r\n\r\n', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `quality_edificio`
--

CREATE TABLE `quality_edificio` (
  `quality_id` bigint(20) NOT NULL,
  `edificio_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `quality_edificio`
--

INSERT INTO `quality_edificio` (`quality_id`, `edificio_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(4, 11),
(4, 12),
(5, 13),
(5, 14),
(5, 15),
(6, 16),
(6, 17),
(6, 18),
(7, 19),
(7, 20),
(7, 21),
(8, 22),
(8, 23),
(8, 24),
(9, 25),
(9, 26),
(9, 27),
(10, 28),
(10, 29),
(10, 30),
(11, 31),
(11, 32),
(11, 33),
(12, 34),
(12, 35),
(12, 36),
(13, 37),
(13, 38),
(13, 39),
(14, 40),
(14, 41),
(14, 42),
(15, 43),
(15, 44),
(15, 45),
(16, 46),
(16, 47),
(16, 48),
(16, 49),
(17, 50),
(17, 51),
(17, 52),
(17, 53),
(18, 54),
(18, 55),
(18, 56),
(18, 57),
(19, 58),
(19, 59),
(19, 60),
(19, 61),
(20, 62),
(20, 63),
(20, 64),
(20, 65);

-- --------------------------------------------------------

--
-- Struttura della tabella `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `role`
--

INSERT INTO `role` (`id`, `description`, `name`) VALUES
(1, 'Amministratore del sito', 'Admin'),
(2, 'Utente del sito', 'User');

-- --------------------------------------------------------

--
-- Struttura della tabella `struttura`
--

CREATE TABLE `struttura` (
  `id` bigint(20) NOT NULL,
  `struttura` varchar(255) DEFAULT NULL,
  `tipo_struttura_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `struttura`
--

INSERT INTO `struttura` (`id`, `struttura`, `tipo_struttura_id`) VALUES
(1, 'Struttura ad arco in muratura', 1),
(2, 'Strutture a pareti portanti in muratura	piena\r\n', 1),
(3, 'Strutture a pareti portanti in muratura	a sacco', 1),
(4, 'Strutture per impalcati piani in legno	\r\n', 2),
(5, 'Strutture per impalcati piani metalliche	\r\n', 2),
(7, 'Strutture per coperture inclinate in legno	\r\n', 3),
(8, 'Strutture voltate in muratura	\r\n', 4),
(9, 'Strutture voltate in camorcanna	\r\n', 4),
(10, 'Aperture con architravi in pietra	\r\n', 5),
(11, 'Aperture con architravi in mattoni	\r\n', 5),
(12, 'Aperture con architravi in legno	\r\n', 5),
(13, 'Aperture con piattabande', 5),
(14, 'Elementi non strutturali', 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `struttura_car_quality`
--

CREATE TABLE `struttura_car_quality` (
  `struttura_id` bigint(20) NOT NULL,
  `car_quality_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `struttura_car_quality`
--

INSERT INTO `struttura_car_quality` (`struttura_id`, `car_quality_id`) VALUES
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 4),
(2, 7),
(2, 8),
(3, 1),
(3, 2),
(3, 4),
(3, 7),
(3, 8),
(3, 9),
(4, 2),
(4, 51),
(4, 52),
(5, 2),
(5, 51),
(5, 52),
(7, 2),
(7, 3),
(7, 101),
(7, 102),
(8, 2),
(8, 3),
(9, 2),
(9, 3),
(10, 2),
(10, 6),
(11, 2),
(11, 6),
(12, 2),
(12, 6),
(13, 2),
(13, 6),
(14, 12);

-- --------------------------------------------------------

--
-- Struttura della tabella `tipologia_struttura`
--

CREATE TABLE `tipologia_struttura` (
  `id` bigint(20) NOT NULL,
  `tipologia_struttura` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `tipologia_struttura`
--

INSERT INTO `tipologia_struttura` (`id`, `tipologia_struttura`) VALUES
(1, 'Muratura di pietra a secco \r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti'),
(2, 'Muratura di mattoni di terra cruda (adobe)\r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti'),
(3, 'Muratura di pietra sbozzata\r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti'),
(4, 'Muratura di pietra massiccia per costruzioni monumentali\r\nOrizzontamenti a volta o in legno con scarsa rigidezza'),
(5, 'Muratura di mattoni e pietra lavorata\r\nOrizzontamenti in mattoni o in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti'),
(6, 'Muratura di mattoni e solai di rigidezza elevata\r\nOrizzontamenti in c.a. ben collegati alla muratura\r\n'),
(7, 'Muratura rinforzata e/o confinata\r\nOrizzontamenti in c.a. o comunque con elevata rigidezza');

-- --------------------------------------------------------

--
-- Struttura della tabella `tipologia_struttura_car_qual_ems`
--

CREATE TABLE `tipologia_struttura_car_qual_ems` (
  `tipologia_struttura_id` bigint(20) NOT NULL,
  `car_qual_ems_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `tipologia_struttura_car_qual_ems`
--

INSERT INTO `tipologia_struttura_car_qual_ems` (`tipologia_struttura_id`, `car_qual_ems_id`) VALUES
(3, 2),
(3, 3),
(3, 8),
(3, 51),
(3, 101),
(3, 4),
(3, 6),
(5, 2),
(5, 3),
(5, 8),
(5, 51),
(5, 101),
(5, 12),
(5, 4),
(5, 6),
(6, 2),
(6, 3),
(6, 8),
(6, 9),
(6, 12),
(6, 4),
(6, 6),
(7, 2),
(7, 8),
(7, 12),
(7, 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `type_quality`
--

CREATE TABLE `type_quality` (
  `id` bigint(20) NOT NULL,
  `tipo_struttura` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `type_quality`
--

INSERT INTO `type_quality` (`id`, `tipo_struttura`) VALUES
(1, 'Edificio Singolo'),
(2, 'Edificio In Aggregato');

-- --------------------------------------------------------

--
-- Struttura della tabella `type_struttura`
--

CREATE TABLE `type_struttura` (
  `id` bigint(20) NOT NULL,
  `type_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `type_struttura`
--

INSERT INTO `type_struttura` (`id`, `type_name`) VALUES
(1, 'Strutture di elevazione verticali'),
(2, 'Strutture di elevazione orizzontali'),
(3, 'Strutture di elevazione inclinate'),
(4, 'Strutture di elevazione spaziali'),
(5, 'Infissi esterni verticali'),
(6, 'Elementi non strutturali');

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `username`) VALUES
(1, 'leonardo.mogianesi@studenti.unicam.it', '$2a$04$VLfuPg3CHUwNXZm.AsVdOu32OV680pSmfo.kvcp/59/AhMt3nZr0m', 'leonardo');

-- --------------------------------------------------------

--
-- Struttura della tabella `user_roles`
--

CREATE TABLE `user_roles` (
  `role_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `user_roles`
--

INSERT INTO `user_roles` (`role_id`, `user_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `valutazione_punteggio`
--

CREATE TABLE `valutazione_punteggio` (
  `id` bigint(20) NOT NULL,
  `punteggio` int(11) DEFAULT NULL,
  `valutazione` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `valutazione_punteggio`
--

INSERT INTO `valutazione_punteggio` (`id`, `punteggio`, `valutazione`) VALUES
(1, 3, 'A'),
(2, 2, 'M'),
(3, 0, 'B'),
(4, 15, 'A'),
(5, 8, 'M'),
(6, 0, 'B'),
(7, 4, 'A'),
(8, 2, 'M'),
(9, 0, 'B'),
(10, 4, 'A'),
(11, 2, 'M'),
(12, 0, 'B'),
(13, 8, 'A'),
(14, 4, 'M'),
(15, 0, 'B'),
(16, 20, 'A'),
(17, 10, 'M'),
(18, 0, 'B'),
(19, 4, 'A'),
(20, 2, 'M'),
(21, 0, 'B'),
(22, 4, 'A'),
(23, 2, 'M'),
(24, 0, 'B'),
(25, 4, 'A'),
(26, 2, 'M'),
(27, 0, 'B'),
(28, 4, 'A'),
(29, 2, 'M'),
(30, 0, 'B'),
(31, 4, 'A'),
(32, 2, 'M'),
(33, 0, 'B'),
(34, 8, 'A'),
(35, 4, 'M'),
(36, 0, 'B'),
(37, 3, 'A'),
(38, 1, 'M'),
(39, 0, 'B');

-- --------------------------------------------------------

--
-- Struttura della tabella `valutazioni`
--

CREATE TABLE `valutazioni` (
  `id` bigint(20) NOT NULL,
  `classe_rischio` varchar(255) DEFAULT NULL,
  `pam` varchar(255) DEFAULT NULL,
  `punteggio` int(11) DEFAULT NULL,
  `vulnerability_grade` varchar(255) DEFAULT NULL,
  `zona_sismica` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `associazione_intervento`
--
ALTER TABLE `associazione_intervento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1ubt1do9bbln7sddfy5w3cgw4` (`caratteristica_associazione_intervento_id`),
  ADD KEY `FKgg9x8sypaf66qi9st6mln8rfv` (`intervento_id`),
  ADD KEY `FKr6x7mwp155w8khgpr8sa3ohde` (`struttura_associazione_id`);

--
-- Indici per le tabelle `caratterisitche_qualitative`
--
ALTER TABLE `caratterisitche_qualitative`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `caratterisitche_qualitative_meccanismi_associati`
--
ALTER TABLE `caratterisitche_qualitative_meccanismi_associati`
  ADD KEY `FK812mc641jr6q5wfsd0cl5grl` (`meccanismi_associati_id`),
  ADD KEY `FK15cu3jstiktv7xuvro3i7ys8c` (`caratteristiche_qualitative_id`);

--
-- Indici per le tabelle `caratterisitche_qualitative_valutazione_punteggio`
--
ALTER TABLE `caratterisitche_qualitative_valutazione_punteggio`
  ADD UNIQUE KEY `UK_2glwplh52xpmrev9gb9rx36s5` (`valutazione_punteggio_id`),
  ADD KEY `FKa4kfapuapftgxx3gbydnuurmr` (`caratteristiche_qualitative_id`);

--
-- Indici per le tabelle `caratteristiche_struttura`
--
ALTER TABLE `caratteristiche_struttura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKgjs4836f2pjdfks7pbocr7no9` (`caratteristica_id`),
  ADD KEY `FK2oojtnpvav2yfqc086daowvcv` (`struttura_id`);

--
-- Indici per le tabelle `codice_intervento`
--
ALTER TABLE `codice_intervento`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `edificio`
--
ALTER TABLE `edificio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKipm7snploikid5ubp4xpu8xgl` (`quality_id`);

--
-- Indici per le tabelle `edifici_in_aggregato_offida`
--
ALTER TABLE `edifici_in_aggregato_offida`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `edifici_isolati_offida`
--
ALTER TABLE `edifici_isolati_offida`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `interventoa1`
--
ALTER TABLE `interventoa1`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `interventoa2`
--
ALTER TABLE `interventoa2`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `meccanismi`
--
ALTER TABLE `meccanismi`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `quality`
--
ALTER TABLE `quality`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjr27a6sqv89nt0r005tbe59lf` (`t_quality_id`);

--
-- Indici per le tabelle `quality_edificio`
--
ALTER TABLE `quality_edificio`
  ADD UNIQUE KEY `UK_h06scxcm2lalk0qo07307ctrr` (`edificio_id`),
  ADD KEY `FK9m6k6h7rrca4tfwlw2cgbl9th` (`quality_id`);

--
-- Indici per le tabelle `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `struttura`
--
ALTER TABLE `struttura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKmyjrvt2f4gug0ux6hjgyuyge2` (`tipo_struttura_id`);

--
-- Indici per le tabelle `struttura_car_quality`
--
ALTER TABLE `struttura_car_quality`
  ADD KEY `FKhcj4uahfo3gljxf762hs6dihh` (`car_quality_id`),
  ADD KEY `FKcsyr6nm6jp1y3j08xquinw3ba` (`struttura_id`);

--
-- Indici per le tabelle `tipologia_struttura`
--
ALTER TABLE `tipologia_struttura`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tipologia_struttura_car_qual_ems`
--
ALTER TABLE `tipologia_struttura_car_qual_ems`
  ADD KEY `FKkah86ex11nyjvuc5qegug90ei` (`car_qual_ems_id`),
  ADD KEY `FKnp7j5lpwnichkjstk1be7ilr5` (`tipologia_struttura_id`);

--
-- Indici per le tabelle `type_quality`
--
ALTER TABLE `type_quality`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `type_struttura`
--
ALTER TABLE `type_struttura`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKrhfovtciq1l558cw6udg0h0d3` (`role_id`);

--
-- Indici per le tabelle `valutazione_punteggio`
--
ALTER TABLE `valutazione_punteggio`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `valutazioni`
--
ALTER TABLE `valutazioni`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `associazione_intervento`
--
ALTER TABLE `associazione_intervento`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT per la tabella `caratterisitche_qualitative`
--
ALTER TABLE `caratterisitche_qualitative`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT per la tabella `caratteristiche_struttura`
--
ALTER TABLE `caratteristiche_struttura`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT per la tabella `codice_intervento`
--
ALTER TABLE `codice_intervento`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT per la tabella `edificio`
--
ALTER TABLE `edificio`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT per la tabella `edifici_in_aggregato_offida`
--
ALTER TABLE `edifici_in_aggregato_offida`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=581;

--
-- AUTO_INCREMENT per la tabella `edifici_isolati_offida`
--
ALTER TABLE `edifici_isolati_offida`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT per la tabella `interventoa1`
--
ALTER TABLE `interventoa1`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT per la tabella `interventoa2`
--
ALTER TABLE `interventoa2`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `meccanismi`
--
ALTER TABLE `meccanismi`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT per la tabella `quality`
--
ALTER TABLE `quality`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT per la tabella `struttura`
--
ALTER TABLE `struttura`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT per la tabella `tipologia_struttura`
--
ALTER TABLE `tipologia_struttura`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `type_quality`
--
ALTER TABLE `type_quality`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `type_struttura`
--
ALTER TABLE `type_struttura`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT per la tabella `valutazione_punteggio`
--
ALTER TABLE `valutazione_punteggio`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT per la tabella `valutazioni`
--
ALTER TABLE `valutazioni`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `associazione_intervento`
--
ALTER TABLE `associazione_intervento`
  ADD CONSTRAINT `FK1ubt1do9bbln7sddfy5w3cgw4` FOREIGN KEY (`caratteristica_associazione_intervento_id`) REFERENCES `caratterisitche_qualitative` (`id`),
  ADD CONSTRAINT `FKgg9x8sypaf66qi9st6mln8rfv` FOREIGN KEY (`intervento_id`) REFERENCES `codice_intervento` (`id`),
  ADD CONSTRAINT `FKr6x7mwp155w8khgpr8sa3ohde` FOREIGN KEY (`struttura_associazione_id`) REFERENCES `struttura` (`id`);

--
-- Limiti per la tabella `caratterisitche_qualitative_meccanismi_associati`
--
ALTER TABLE `caratterisitche_qualitative_meccanismi_associati`
  ADD CONSTRAINT `FK15cu3jstiktv7xuvro3i7ys8c` FOREIGN KEY (`caratteristiche_qualitative_id`) REFERENCES `caratterisitche_qualitative` (`id`),
  ADD CONSTRAINT `FK812mc641jr6q5wfsd0cl5grl` FOREIGN KEY (`meccanismi_associati_id`) REFERENCES `meccanismi` (`id`);

--
-- Limiti per la tabella `caratterisitche_qualitative_valutazione_punteggio`
--
ALTER TABLE `caratterisitche_qualitative_valutazione_punteggio`
  ADD CONSTRAINT `FKa4kfapuapftgxx3gbydnuurmr` FOREIGN KEY (`caratteristiche_qualitative_id`) REFERENCES `caratterisitche_qualitative` (`id`),
  ADD CONSTRAINT `FKc3d91xqvrxewhwjaotyyybien` FOREIGN KEY (`valutazione_punteggio_id`) REFERENCES `valutazione_punteggio` (`id`);

--
-- Limiti per la tabella `caratteristiche_struttura`
--
ALTER TABLE `caratteristiche_struttura`
  ADD CONSTRAINT `FK2oojtnpvav2yfqc086daowvcv` FOREIGN KEY (`struttura_id`) REFERENCES `struttura` (`id`),
  ADD CONSTRAINT `FKgjs4836f2pjdfks7pbocr7no9` FOREIGN KEY (`caratteristica_id`) REFERENCES `caratterisitche_qualitative` (`id`);

--
-- Limiti per la tabella `edificio`
--
ALTER TABLE `edificio`
  ADD CONSTRAINT `FKipm7snploikid5ubp4xpu8xgl` FOREIGN KEY (`quality_id`) REFERENCES `quality` (`id`);

--
-- Limiti per la tabella `quality`
--
ALTER TABLE `quality`
  ADD CONSTRAINT `FKjr27a6sqv89nt0r005tbe59lf` FOREIGN KEY (`t_quality_id`) REFERENCES `type_quality` (`id`);

--
-- Limiti per la tabella `quality_edificio`
--
ALTER TABLE `quality_edificio`
  ADD CONSTRAINT `FK9m6k6h7rrca4tfwlw2cgbl9th` FOREIGN KEY (`quality_id`) REFERENCES `quality` (`id`),
  ADD CONSTRAINT `FKlv0vgpuvrl5s2s5l6pbyfrkqk` FOREIGN KEY (`edificio_id`) REFERENCES `edificio` (`id`);

--
-- Limiti per la tabella `struttura`
--
ALTER TABLE `struttura`
  ADD CONSTRAINT `FKmyjrvt2f4gug0ux6hjgyuyge2` FOREIGN KEY (`tipo_struttura_id`) REFERENCES `type_struttura` (`id`);

--
-- Limiti per la tabella `struttura_car_quality`
--
ALTER TABLE `struttura_car_quality`
  ADD CONSTRAINT `FKcsyr6nm6jp1y3j08xquinw3ba` FOREIGN KEY (`struttura_id`) REFERENCES `struttura` (`id`),
  ADD CONSTRAINT `FKhcj4uahfo3gljxf762hs6dihh` FOREIGN KEY (`car_quality_id`) REFERENCES `caratterisitche_qualitative` (`id`);

--
-- Limiti per la tabella `tipologia_struttura_car_qual_ems`
--
ALTER TABLE `tipologia_struttura_car_qual_ems`
  ADD CONSTRAINT `FKkah86ex11nyjvuc5qegug90ei` FOREIGN KEY (`car_qual_ems_id`) REFERENCES `caratterisitche_qualitative` (`id`),
  ADD CONSTRAINT `FKnp7j5lpwnichkjstk1be7ilr5` FOREIGN KEY (`tipologia_struttura_id`) REFERENCES `tipologia_struttura` (`id`);

--
-- Limiti per la tabella `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKrhfovtciq1l558cw6udg0h0d3` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
