-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 08, 2020 alle 19:21
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
(14, 'Scarsa qualità costruttiva'),
(15, 'Elevato degrato'),
(16, 'Presenza di numerose nicchie'),
(17, 'Pareti di elevate dimensioni non controventate'),
(18, 'Pannelli murari male ammorsati tra loro');

-- --------------------------------------------------------

--
-- Struttura della tabella `edificio_in_aggregato`
--

CREATE TABLE `edificio_in_aggregato` (
  `id` bigint(20) NOT NULL,
  `descrizione` varchar(255) DEFAULT NULL,
  `punteggio` varchar(255) DEFAULT NULL,
  `valutazione` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `edificio_in_aggregato`
--

INSERT INTO `edificio_in_aggregato` (`id`, `descrizione`, `punteggio`, `valutazione`) VALUES
(1, '\"inerti di piccole dimensioni e malta di scarsa resistenza sul 30%\r\ndel volume della muratura\"', '3\r\n', 'A'),
(2, '\"caso precedente + giunti sottili (<10 mm), listature e/o diatoni\r\noppure caso precedente con incidenza minore del 30%\"\r\n', '2', 'M'),
(3, '\"giunti sottili,diatoni o listature per oltre il 70% della muratura con inerti medi o grandi\"\r\n', '0', 'B'),
(4, 'cattivo stato di conservazione per almeno il 70% delle murature, della copertura o dei solai di interpiano\r\n', '15', 'A'),
(5, 'percentuale tra 30% e 70%\r\n', '8', 'M'),
(6, 'percentuale <30%\r\n', '0', 'B'),
(7, 'più del 50% di copertura e solai sono spingenti senza cordoli o catene\r\n', '4', 'A'),
(8, 'percentuale tra 20% e 50%\r\n', '2', 'M'),
(9, 'percentuale <20%\r\n', '0', 'B'),
(10, 'connessioni efficaci per meno del 20%\r\n', '4', 'A'),
(11, 'percentuale tra 20% e 80%\r\n', '2', 'M'),
(12, 'connessioni efficaci per l\'80%\r\n', '0', 'B'),
(13, 'collegamenti di piano efficaci per meno del 50% (punteggio 8)\r\n', '8', 'A'),
(14, 'percentuale tra 50% e 80% (punteggio 4)\r\n', '4', 'M'),
(15, 'collegamenti di piano efficaci per l\'80% (punteggio 0)\r\n', '0', 'B'),
(16, 'strutture non adeguate per oltre il 70% (punteggio 20)\r\n', '20', 'A'),
(17, 'percentuale tra 30% e 70% (punteggio 10)\r\n', '10', 'M'),
(18, 'strutture non adeguate meno del 30% (punteggio 0)\r\n', '0', 'B'),
(19, 'bucature per oltre il 50%\r\n', '4', 'A'),
(20, 'percentuale tra 25% e 50%\r\n', '2', 'M'),
(21, 'bucature per meno del 25%\r\n', '0', 'B'),
(22, 'bucature per oltre il 50%\r\n', '4', 'A'),
(23, 'percentuale tra 25% e 50%\r\n', '2', 'M'),
(24, 'bucature per meno del 25%\r\n', '0', 'B'),
(25, 'rapporto interasse dei muri di spina/spessore >15\r\n', '4', 'A'),
(26, 'rapporto tra 10 e 15\r\n', '2', 'M'),
(27, 'rapporto <10\r\n', '0', 'B'),
(28, 'sviluppo lineare dei pannelli murari a doppio strato con camera d\'aria >15%\r\n', '4', 'A'),
(29, 'percentuale tra 5% e 15%\r\n', '2', 'M'),
(30, 'sviluppo lineare dei pannelli murari a doppio strato con camera d\'aria <5%\r\n', '0', 'B'),
(31, 'collegamenti efficaci per meno del 50% (punteggio 4)\r\n', '4', 'A'),
(32, 'collegamenti efficaci tra il 50% e l\'80% (punteggio 2)\r\n', '2', 'M'),
(33, 'collegamenti efficaci per almeno l\'80% (punteggio 0)\r\n', '0', 'B'),
(34, 'strutture non adeguate per oltre il 70% (punteggio 8)\r\n', '8', 'A'),
(35, 'percentuale tra 30% e 70% (punteggio 4)\r\n', '4', 'M'),
(36, 'strutture non adeguate per meno del 30% (punteggio 0)\r\n', '0', 'B'),
(37, 'rapporto lato maggiore/lato minore >4 + posizione all\'estremità o d\'angolo\r\n', NULL, 'A'),
(38, 'rapporto lato maggiore/lato minore tra 3 e 4 + posizione all\'estremità o d\'angolo\r\n', NULL, 'M'),
(39, 'altri casi\r\n', NULL, 'B'),
(40, '\"presenza di torrini con h compresa tra il 10% e il 40% dell\'altezza del fabbricato\r\n+ riduzione in pianta >20% rispetto al piano inferiore\"\r\n', NULL, 'A'),
(41, '\"presenza di torrini con h compresa tra il 10% e il 40% dell\'altezza del fabbricato\r\n+ riduzione in pianta tra il 10% e il 20% rispetto al piano inferiore\"\r\n', NULL, 'M'),
(42, 'superfici decrescono con continuità + riduzione <10%\r\n', NULL, 'B'),
(43, 'elementi non strutturali non ben collegati con dimensioni o massa grandi\r\n', '3', 'A'),
(44, 'elementi non strutturali non ben collegati ma con dimensioni o massa piccole\r\n', '1', 'M'),
(45, 'elementi non strutturali ben collegati\r\n', '0', 'B'),
(46, 'edificio compreso tra edifici di pari h\r\n', '-5', 'a'),
(47, 'edificio adiacente a edifici più alti o a uno più alto e uno di h uguale\r\n', '0', 'b'),
(48, 'edificio adiacente a un edificio più basso e a uno di pari h, o a uno più basso e uno più alto\r\n', '4', 'c'),
(49, 'edificio adiacente a due edifici più bassi\r\n', '11', 'd'),
(50, 'posizione interclusa e vincolata su tre lati\r\n', '-15', 'a'),
(51, 'posizione interclusa e vincolata su due lati \r\n', '-9', 'b'),
(52, 'posizione d\'angolo \r\n', '-5', 'c'),
(53, 'posizione di testata\r\n', '0', 'd'),
(54, 'assenza di solai sfalsati (differenza di quota pari a 50 cm)\r\n', '0', 'a'),
(55, 'presenza di una coppia di solai sfalsati\r\n', '2', 'b'),
(56, 'presenza di due coppie di solai sfalsati\r\n', '3', 'c'),
(57, 'presenza di più di due coppie di solai sfalsati\r\n', '6', 'd'),
(58, 'l\'edificio presenta un\'eterogeneità strutturale rispetto all\'edificio adiacente (es. in muratura/c.a)\r\n', '-4', 'a'),
(59, 'l\'edificio confina con un altro in muratura ma con caratteristiche migliori (es. tufo/mur. in blocchi)\r\n', '-3', 'b'),
(60, 'continuità sia tipologica che strutturale con gli edifici adiacenti\r\n', '0', 'c'),
(61, 'l\'edificio confina con un altro in muratura ma con caratteristiche peggiori (es. tufo/mur. caotica)\r\n', '13', 'd'),
(62, 'differenza tra % di aperture < 5%\r\n', '-5', 'a'),
(63, 'differenza tra % di aperture compresa tra 5% e 10%\r\n', '0', 'b'),
(64, 'differenza tra % di aperture compresa tra 10% e 20%\r\n', '6', 'c'),
(65, 'differenza tra % di aperture > 20%\r\n', '11', 'd');

-- --------------------------------------------------------

--
-- Struttura della tabella `edificio_singolo`
--

CREATE TABLE `edificio_singolo` (
  `id` bigint(20) NOT NULL,
  `descrizione` varchar(255) DEFAULT NULL,
  `punteggio` varchar(255) DEFAULT NULL,
  `valutazione` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `edificio_singolo`
--

INSERT INTO `edificio_singolo` (`id`, `descrizione`, `punteggio`, `valutazione`) VALUES
(1, '\"inerti di piccole dimensioni e malta di scarsa resistenza sul 30%\r\ndel volume della muratura\"', '3\r\n', 'A'),
(2, '\"caso precedente + giunti sottili (<10 mm), listature e/o diatoni\r\noppure caso precedente con incidenza minore del 30%\"\r\n', '2', 'M'),
(3, '\"giunti sottili,diatoni o listature per oltre il 70% della muratura con inerti medi o grandi\"\r\n', '0', 'B'),
(4, 'cattivo stato di conservazione per almeno il 70% delle murature, della copertura o dei solai di interpiano\r\n', '15', 'A'),
(5, 'percentuale tra 30% e 70%\r\n', '8', 'M'),
(6, 'percentuale <30%\r\n', '0', 'B'),
(7, 'più del 50% di copertura e solai sono spingenti senza cordoli o catene\r\n', '4', 'A'),
(8, 'percentuale tra 20% e 50%\r\n', '2', 'M'),
(9, 'percentuale <20%\r\n', '0', 'B'),
(10, 'connessioni efficaci per meno del 20%\r\n', '4', 'A'),
(11, 'percentuale tra 20% e 80%\r\n', '2', 'M'),
(12, 'connessioni efficaci per l\'80%\r\n', '0', 'B'),
(13, 'collegamenti di piano efficaci per meno del 50% (punteggio 8)\r\n', '8', 'A'),
(14, 'percentuale tra 50% e 80% (punteggio 4)\r\n', '4', 'M'),
(15, 'collegamenti di piano efficaci per l\'80% (punteggio 0)\r\n', '0', 'B'),
(16, 'strutture non adeguate per oltre il 70% (punteggio 20)\r\n', '20', 'A'),
(17, 'percentuale tra 30% e 70% (punteggio 10)\r\n', '10', 'M'),
(18, 'strutture non adeguate meno del 30% (punteggio 0)\r\n', '0', 'B'),
(19, 'bucature per oltre il 50%\r\n', '4', 'A'),
(20, 'percentuale tra 25% e 50%\r\n', '2', 'M'),
(21, 'bucature per meno del 25%\r\n', '0', 'B'),
(22, 'bucature per oltre il 50%\r\n', '4', 'A'),
(23, 'percentuale tra 25% e 50%\r\n', '2', 'M'),
(24, 'bucature per meno del 25%\r\n', '0', 'B'),
(25, 'rapporto interasse dei muri di spina/spessore >15\r\n', '4', 'A'),
(26, 'rapporto tra 10 e 15\r\n', '2', 'M'),
(27, 'rapporto <10\r\n', '0', 'B'),
(28, 'sviluppo lineare dei pannelli murari a doppio strato con camera d\'aria >15%\r\n', '4', 'A'),
(29, 'percentuale tra 5% e 15%\r\n', '2', 'M'),
(30, 'sviluppo lineare dei pannelli murari a doppio strato con camera d\'aria <5%\r\n', '0', 'B'),
(31, 'collegamenti efficaci per meno del 50% (punteggio 4)\r\n', '4', 'A'),
(32, 'collegamenti efficaci tra il 50% e l\'80% (punteggio 2)\r\n', '2', 'M'),
(33, 'collegamenti efficaci per almeno l\'80% (punteggio 0)\r\n', '0', 'B'),
(34, 'strutture non adeguate per oltre il 70% (punteggio 8)\r\n', '8', 'A'),
(35, 'percentuale tra 30% e 70% (punteggio 4)\r\n', '4', 'M'),
(36, 'strutture non adeguate per meno del 30% (punteggio 0)\r\n', '0', 'B'),
(37, 'rapporto lato maggiore/lato minore >4 + posizione all\'estremità o d\'angolo\r\n', NULL, 'A'),
(38, 'rapporto lato maggiore/lato minore tra 3 e 4 + posizione all\'estremità o d\'angolo\r\n', NULL, 'M'),
(39, 'altri casi\r\n', NULL, 'B'),
(40, '\"presenza di torrini con h compresa tra il 10% e il 40% dell\'altezza del fabbricato\r\n+ riduzione in pianta >20% rispetto al piano inferiore\"\r\n', NULL, 'A'),
(41, '\"presenza di torrini con h compresa tra il 10% e il 40% dell\'altezza del fabbricato\r\n+ riduzione in pianta tra il 10% e il 20% rispetto al piano inferiore\"\r\n', NULL, 'M'),
(42, 'superfici decrescono con continuità + riduzione <10%\r\n', NULL, 'B'),
(43, 'elementi non strutturali non ben collegati con dimensioni o massa grandi\r\n', '3', 'A'),
(44, 'elementi non strutturali non ben collegati ma con dimensioni o massa piccole\r\n', '1', 'M'),
(45, 'elementi non strutturali ben collegati\r\n', '0', 'B');

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
(22, 'Questo è ciò che fa',LOAD_FILE('C:\foto nuovo pc\Belle modificate\Leo e girl'), 'Intervento A1');

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
-- Struttura della tabella `struttura_verticale`
--

CREATE TABLE `struttura_verticale` (
  `id` bigint(20) NOT NULL,
  `struttura_verticale` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `struttura_verticale`
--

INSERT INTO `struttura_verticale` (`id`, `struttura_verticale`) VALUES
(1, 'Struttura ad arco in muratura'),
(2, 'Struttura a pareti portanti in muratura piena'),
(3, 'Struttura a pareti portanti in muratura a sacco');

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
(1, '\"Muratura di pietra a secco \r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti\"\r\n'),
(2, 'DEPRECATO-\"Muratura di mattoni di terra cruda (adobe)\r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti\"\r\n'),
(3, '\"Muratura di pietra sbozzata\r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti\"\r\n'),
(4, 'DEPRECATO-\r\n\"Muratura di pietra massiccia per costruzioni monumentali\r\nOrizzontamenti a volta o in legno con scarsa rigidezza\"\r\n'),
(6, '\"Muratura di mattoni e pietra lavorata\r\nOrizzontamenti in mattoni o in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti\"\r\n'),
(7, '\"Muratura di mattoni e solai di rigidezza elevata\r\nOrizzontamenti in c.a. ben collegati alla muratura\"\r\n'),
(8, '\"Muratura rinforzata e/o confinata\r\nOrizzontamenti in c.a. o comunque con elevata rigidezza\"\r\n');

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

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `caratterisitche_qualitative`
--
ALTER TABLE `caratterisitche_qualitative`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `edificio_in_aggregato`
--
ALTER TABLE `edificio_in_aggregato`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `edificio_singolo`
--
ALTER TABLE `edificio_singolo`
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
-- Indici per le tabelle `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `struttura_verticale`
--
ALTER TABLE `struttura_verticale`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tipologia_struttura`
--
ALTER TABLE `tipologia_struttura`
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
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `caratterisitche_qualitative`
--
ALTER TABLE `caratterisitche_qualitative`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT per la tabella `edificio_in_aggregato`
--
ALTER TABLE `edificio_in_aggregato`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT per la tabella `edificio_singolo`
--
ALTER TABLE `edificio_singolo`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

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
-- AUTO_INCREMENT per la tabella `struttura_verticale`
--
ALTER TABLE `struttura_verticale`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT per la tabella `tipologia_struttura`
--
ALTER TABLE `tipologia_struttura`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Limiti per le tabelle scaricate
--

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
