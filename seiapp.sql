-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 29, 2020 alle 12:01
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
  `struttura_associazione_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `associazione_intervento`
--

INSERT INTO `associazione_intervento` (`id`, `caratteristica_associazione_intervento_id`, `intervento_id`, `struttura_associazione_id`) VALUES
(1, 2, 58, 1),
(2, 3, 54, 1),
(3, 3, 55, 1),
(4, 3, 56, 1),
(5, 3, 57, 1),
(6, 3, 59, 1),
(7, 3, 60, 1),
(8, 1, 31, 2),
(9, 1, 32, 2),
(10, 1, 33, 2),
(11, 1, 37, 2),
(12, 1, 38, 2),
(13, 1, 39, 2),
(14, 1, 40, 2),
(15, 1, 43, 2),
(16, 1, 44, 2),
(17, 2, 31, 2),
(18, 7, 42, 2),
(19, 8, 1, 2),
(20, 8, 2, 2),
(21, 8, 3, 2),
(22, 8, 6, 2),
(23, 8, 41, 2),
(24, 8, 43, 2),
(25, 4, 1, 2),
(26, 4, 2, 2),
(27, 4, 3, 2),
(28, 4, 4, 2),
(29, 4, 5, 2),
(30, 4, 6, 2),
(31, 1, 31, 3),
(32, 1, 32, 3),
(33, 1, 33, 3),
(34, 1, 37, 3),
(35, 1, 38, 3),
(36, 1, 39, 3),
(37, 1, 40, 3),
(38, 1, 43, 3),
(39, 1, 44, 3),
(40, 2, 31, 3),
(41, 7, 42, 3),
(42, 8, 1, 3),
(43, 8, 2, 3),
(44, 8, 3, 3),
(45, 8, 6, 3),
(46, 8, 41, 3),
(47, 9, 34, 3),
(48, 9, 35, 3),
(49, 9, 36, 3),
(50, 4, 1, 3),
(51, 4, 2, 3),
(52, 4, 3, 3),
(53, 9, 4, 3),
(54, 9, 5, 3),
(55, 9, 6, 3),
(56, 51, 7, 4),
(57, 51, 8, 4),
(58, 52, 9, 4),
(59, 52, 10, 4),
(60, 52, 11, 4),
(61, 52, 12, 4),
(62, 52, 15, 4),
(63, 52, 16, 4),
(64, 52, 17, 4),
(65, 52, 18, 4),
(66, 52, 19, 4),
(67, 52, 20, 4),
(68, 52, 21, 4),
(69, 52, 22, 4),
(70, 51, 8, 5),
(71, 52, 11, 5),
(72, 52, 12, 5),
(73, 52, 13, 5),
(74, 52, 14, 5),
(75, 3, 1, 7),
(76, 3, 2, 7),
(77, 3, 3, 7),
(78, 101, 6, 7),
(79, 102, 23, 7),
(80, 102, 24, 7),
(81, 102, 25, 7),
(82, 102, 26, 7),
(83, 102, 27, 7),
(84, 102, 28, 7),
(85, 102, 28, 7),
(86, 102, 29, 7),
(87, 102, 30, 7),
(88, 2, 58, 8),
(89, 3, 54, 8),
(90, 3, 55, 8),
(91, 3, 56, 8),
(92, 3, 57, 8),
(93, 3, 59, 8),
(94, 3, 62, 8),
(95, 2, 61, 9),
(96, 3, 54, 9),
(97, 3, 55, 9),
(98, 3, 56, 9),
(99, 3, 62, 9),
(100, 6, 50, 10),
(101, 6, 51, 10),
(102, 6, 52, 10),
(103, 6, 50, 11),
(104, 6, 51, 11),
(105, 6, 52, 11),
(106, 6, 50, 12),
(107, 6, 51, 12),
(108, 6, 52, 12),
(109, 6, 50, 13),
(110, 6, 51, 13),
(111, 6, 52, 13),
(112, 6, 53, 13),
(113, 12, 66, 14),
(114, 12, 67, 14);

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
(73, 'L6', 'Realizzazione di collegamenti strutturali');

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
(1, '\"inerti di piccole dimensioni e malta di scarsa resistenza sul 30%\r\ndel volume della muratura\"', 3, 'A', 0, 1),
(2, '\"caso precedente + giunti sottili (<10 mm), listature e/o diatoni\r\noppure caso precedente con incidenza minore del 30%\"\r\n', 2, 'M', 0, 1),
(3, '\"giunti sottili,diatoni o listature per oltre il 70% della muratura con inerti medi o grandi\"\r\n', 0, 'B', 0, 1),
(4, 'cattivo stato di conservazione per almeno il 70% delle murature, della copertura o dei solai di interpiano\r\n', 15, 'A', 0, 2),
(5, 'percentuale tra 30% e 70%\r\n', 8, 'M', 0, 2),
(6, 'percentuale <30%\r\n', 0, 'B', 0, 2),
(7, 'più del 50% di copertura e solai sono spingenti senza cordoli o catene\r\n', 4, 'A', 0, 3),
(8, 'percentuale tra 20% e 50%\r\n', 2, 'M', 0, 3),
(9, 'percentuale <20%\r\n', 0, 'B', 0, 3),
(10, 'connessioni efficaci per meno del 20%\r\n', 4, 'A', 0, 4),
(11, 'percentuale tra 20% e 80%\r\n', 2, 'M', 0, 4),
(12, 'connessioni efficaci per l\'80%\r\n', 0, 'B', 0, 4),
(13, 'collegamenti di piano efficaci per meno del 50% (punteggio 8)\r\n', 8, 'A', 0, 5),
(14, 'percentuale tra 50% e 80% (punteggio 4)\r\n', 4, 'M', 0, 5),
(15, 'collegamenti di piano efficaci per l\'80% (punteggio 0)\r\n', 0, 'B', 0, 5),
(16, 'strutture non adeguate per oltre il 70% (punteggio 20)\r\n', 20, 'A', 0, 6),
(17, 'percentuale tra 30% e 70% (punteggio 10)\r\n', 10, 'M', 0, 6),
(18, 'strutture non adeguate meno del 30% (punteggio 0)\r\n', 0, 'B', 0, 6),
(19, 'bucature per oltre il 50%\r\n', 4, 'A', 0, 7),
(20, 'percentuale tra 25% e 50%\r\n', 2, 'M', 0, 7),
(21, 'bucature per meno del 25%\r\n', 0, 'B', 0, 7),
(22, 'bucature per oltre il 50%\r\n', 4, 'A', 0, 8),
(23, 'percentuale tra 25% e 50%\r\n', 2, 'M', 0, 8),
(24, 'bucature per meno del 25%\r\n', 0, 'B', 0, 8),
(25, 'rapporto interasse dei muri di spina/spessore >15\r\n', 4, 'A', 0, 9),
(26, 'rapporto tra 10 e 15\r\n', 2, 'M', 0, 9),
(27, 'rapporto <10\r\n', 0, 'B', 0, 9),
(28, 'sviluppo lineare dei pannelli murari a doppio strato con camera d\'aria >15%\r\n', 4, 'A', 0, 10),
(29, 'percentuale tra 5% e 15%\r\n', 2, 'M', 0, 10),
(30, 'sviluppo lineare dei pannelli murari a doppio strato con camera d\'aria <5%\r\n', 0, 'B', 0, 10),
(31, 'collegamenti efficaci per meno del 50% (punteggio 4)\r\n', 4, 'A', 0, 11),
(32, 'collegamenti efficaci tra il 50% e l\'80% (punteggio 2)\r\n', 2, 'M', 0, 11),
(33, 'collegamenti efficaci per almeno l\'80% (punteggio 0)\r\n', 0, 'B', 0, 11),
(34, 'strutture non adeguate per oltre il 70% (punteggio 8)\r\n', 8, 'A', 0, 12),
(35, 'percentuale tra 30% e 70% (punteggio 4)\r\n', 4, 'M', 0, 12),
(36, 'strutture non adeguate per meno del 30% (punteggio 0)\r\n', 0, 'B', 0, 12),
(37, 'rapporto lato maggiore/lato minore >4', 0, 'A', 0, 13),
(38, 'rapporto lato maggiore/lato minore tra 3 e 4', 0, 'M', 0, 13),
(39, 'altri casi\r\n', 0, 'B', 0, 13),
(40, '\"presenza di torrini con h compresa tra il 10% e il 40% dell\'altezza del fabbricato\r\n+ riduzione in pianta >20% rispetto al piano inferiore\"\r\n', 0, 'A', 0, 14),
(41, '\"presenza di torrini con h compresa tra il 10% e il 40% dell\'altezza del fabbricato\r\n+ riduzione in pianta tra il 10% e il 20% rispetto al piano inferiore\"\r\n', 0, 'M', 0, 14),
(42, 'superfici decrescono con continuità + riduzione <10%\r\n', 0, 'B', 0, 14),
(43, 'elementi non strutturali non ben collegati con dimensioni o massa grandi\r\n', 3, 'A', 0, 15),
(44, 'elementi non strutturali non ben collegati ma con dimensioni o massa piccole\r\n', 1, 'M', 0, 15),
(45, 'elementi non strutturali ben collegati\r\n', 0, 'B', 0, 15),
(46, 'edificio compreso tra edifici di pari h\r\n', -5, 'a', 0, 16),
(47, 'edificio adiacente a edifici più alti o a uno più alto e uno di h uguale\r\n', 0, 'b', 0, 16),
(48, 'edificio adiacente a un edificio più basso e a uno di pari h, o a uno più basso e uno più alto\r\n', 4, 'c', 0, 16),
(49, 'edificio adiacente a due edifici più bassi\r\n', 11, 'd', 0, 16),
(50, 'posizione interclusa e vincolata su tre lati\r\n', -15, 'a', 0, 17),
(51, 'posizione interclusa e vincolata su due lati \r\n', -9, 'b', 0, 17),
(52, 'posizione d\'angolo \r\n', -5, 'c', 0, 17),
(53, 'posizione di testata\r\n', 0, 'd', 0, 17),
(54, 'assenza di solai sfalsati (differenza di quota pari a 50 cm)\r\n', 0, 'a', 0, 18),
(55, 'presenza di una coppia di solai sfalsati\r\n', 2, 'b', 0, 18),
(56, 'presenza di due coppie di solai sfalsati\r\n', 3, 'c', 0, 18),
(57, 'presenza di più di due coppie di solai sfalsati\r\n', 6, 'd', 0, 18),
(58, 'l\'edificio presenta un\'eterogeneità strutturale rispetto all\'edificio adiacente (es. in muratura/c.a)\r\n', -4, 'a', 0, 19),
(59, 'l\'edificio confina con un altro in muratura ma con caratteristiche migliori (es. tufo/mur. in blocchi)\r\n', -3, 'b', 0, 19),
(60, 'continuità sia tipologica che strutturale con gli edifici adiacenti\r\n', 0, 'c', 0, 19),
(61, 'l\'edificio confina con un altro in muratura ma con caratteristiche peggiori (es. tufo/mur. caotica)\r\n', 13, 'd', 0, 19),
(62, 'differenza tra % di aperture < 5%\r\n', -5, 'a', 0, 20),
(63, 'differenza tra % di aperture compresa tra 5% e 10%\r\n', 0, 'b', 0, 20),
(64, 'differenza tra % di aperture compresa tra 10% e 20%\r\n', 6, 'c', 0, 20),
(65, 'differenza tra % di aperture > 20%\r\n', 11, 'd', 0, 20);

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
(2, 'Elevato degrado e/o danneggiamento*', 1),
(3, 'Spinte orizzontali non contrastate\r\n\r\n\r\n', 1),
(4, 'Pannelli murari male ammorsati tra loro\r\n\r\n\r\n', 1),
(5, 'a) Orizzontamenti male ammorsati alle pareti: efficacia dei collegamenti con la muratura\r\n\r\n\r\n', 1),
(6, 'b) Orizzontamenti male ammorsati alle pareti: qualità delle strutture orizzontali\r\n\r\n\r\n', 1),
(7, 'Aperture di elevate dimensioni intervallate da maschi di ridotte dimensioni\r\n\r\n\r\n', 1),
(8, 'Presenza di numerose nicchie che riducono significativamente l\'area resistente della muratura\r\n\r\n\r\n', 1),
(9, 'Pareti di elevate dimensioni (larghezza e altezza) non controventate a sufficienza\r\n\r\n\r\n', 1),
(10, 'Pannelli murari a doppio strato con camera d\'aria\r\n\r\n\r\n', 1),
(11, 'a) Assenza di cordoli e qualità della copertura: efficacia dei collegamenti con la muratura\r\n\r\n\r\n', 1),
(12, 'b) Assenza di cordoli e qualità della copertura: qualità della copertura\r\n\r\n\r\n', 1),
(13, 'a) Elevata irregolarità in pianta e/o altezza: irregolarità in pianta\r\n\r\n\r\n', 1),
(14, 'b) Elevata irregolarità in pianta e/o altezza: irregolarità in altezza\r\n\r\n\r\n', 1),
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
(1, '\"Muratura di pietra a secco \r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti\"\r\n'),
(2, 'DEPRECATO-\"Muratura di mattoni di terra cruda (adobe)\r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti\"\r\n'),
(3, '\"Muratura di pietra sbozzata\r\nOrizzontamenti in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti\"\r\n'),
(4, 'DEPRECATO-\r\n\"Muratura di pietra massiccia per costruzioni monumentali\r\nOrizzontamenti a volta o in legno con scarsa rigidezza\"\r\n'),
(6, '\"Muratura di mattoni e pietra lavorata\r\nOrizzontamenti in mattoni o in legno o comunque con scarsa rigidezza e scarso collegamento con le pareti portanti\"\r\n'),
(7, '\"Muratura di mattoni e solai di rigidezza elevata\r\nOrizzontamenti in c.a. ben collegati alla muratura\"\r\n'),
(8, '\"Muratura rinforzata e/o confinata\r\nOrizzontamenti in c.a. o comunque con elevata rigidezza\"\r\n');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT per la tabella `caratterisitche_qualitative`
--
ALTER TABLE `caratterisitche_qualitative`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT per la tabella `codice_intervento`
--
ALTER TABLE `codice_intervento`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT per la tabella `edificio`
--
ALTER TABLE `edificio`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

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
-- Limiti per la tabella `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKrhfovtciq1l558cw6udg0h0d3` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
