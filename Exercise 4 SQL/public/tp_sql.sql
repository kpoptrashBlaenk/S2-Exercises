-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2024 at 11:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tp_sql`
--

-- --------------------------------------------------------

--
-- Table structure for table `achat`
--

CREATE TABLE `achat` (
  `ticket_id` varchar(10) NOT NULL,
  `prestation_id` int(11) NOT NULL,
  `achat_nombre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `achat`
--

INSERT INTO `achat` (`ticket_id`, `prestation_id`, `achat_nombre`) VALUES
('T01', 1, 1),
('T01', 7, 2),
('T02', 1, 1),
('T02', 4, 2),
('T02', 9, 3),
('T03', 6, 1),
('T03', 8, 1),
('T04', 1, 1),
('T04', 4, 2),
('T04', 7, 1),
('T05', 6, 3),
('T06', 3, 1),
('T07', 2, 3),
('T08', 1, 2),
('T08', 7, 3),
('T09', 1, 1),
('T09', 5, 2),
('T09', 8, 3),
('T10', 1, 1),
('T10', 9, 4),
('T11', 3, 1),
('T11', 7, 2),
('T12', 1, 2),
('T12', 4, 3),
('T13', 9, 4),
('T14', 6, 4),
('T15', 2, 1),
('T15', 7, 3),
('T15', 8, 2),
('T16', 2, 1),
('T16', 9, 2),
('T17', 6, 2),
('T18', 6, 1),
('T19', 1, 2),
('T19', 9, 4),
('T20', 6, 2),
('T21', 1, 3),
('T21', 8, 3),
('T22', 2, 1),
('T22', 7, 1),
('T22', 8, 1),
('T23', 6, 2),
('T24', 1, 3),
('T25', 3, 2),
('T25', 9, 2),
('T26', 6, 1),
('T27', 2, 1),
('T27', 7, 2),
('T28', 6, 4),
('T29', 3, 3),
('T29', 9, 3),
('T30', 1, 1),
('T30', 7, 1),
('T30', 9, 1),
('T31', 6, 1),
('T32', 2, 1),
('T33', 3, 2),
('T34', 6, 1),
('T34', 7, 1),
('T35', 3, 1),
('T35', 7, 2),
('T36', 6, 1),
('T37', 3, 1),
('T37', 8, 2),
('T38', 2, 1),
('T38', 7, 1),
('T39', 1, 1),
('T39', 5, 2),
('T40', 1, 3),
('T40', 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `carte`
--

CREATE TABLE `carte` (
  `carte_id` varchar(10) NOT NULL,
  `carte_nom` varchar(255) NOT NULL,
  `categorie_id` int(11) NOT NULL,
  `carte_caution` int(11) NOT NULL,
  `carte_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carte`
--

INSERT INTO `carte` (`carte_id`, `carte_nom`, `categorie_id`, `carte_caution`, `carte_date`) VALUES
('C1', 'Nina Mcdowell', 3, 6, '2022-08-27'),
('C10', 'Francesca Briggs', 2, 9, '2022-08-16'),
('C11', 'Abdul Weiss', 2, 9, '2022-09-19'),
('C12', 'Rinah Reilly', 1, 8, '2022-09-11'),
('C13', 'Kimberly Bryan', 1, 9, '2022-09-17'),
('C14', 'Galena Keller', 1, 7, '2022-08-16'),
('C15', 'Francesca Briggs', 1, 9, '2022-08-16'),
('C2', 'Murphy Lane', 2, 9, '2022-08-15'),
('C3', 'Hillary Garza', 2, 7, '2022-09-07'),
('C4', 'Ciaran Ball', 3, 6, '2022-09-11'),
('C5', 'Kirsten Norton', 3, 7, '2022-09-28'),
('C6', 'Abdul Weiss', 3, 9, '2022-09-19'),
('C7', 'Rinah Reilly', 1, 8, '2022-09-11'),
('C8', 'Kimberly Bryan', 3, 9, '2022-09-17'),
('C9', 'Galena Keller', 4, 7, '2022-08-16');

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `categorie_id` int(11) NOT NULL,
  `categorie_libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`categorie_id`, `categorie_libelle`) VALUES
(1, 'Petits revenus'),
(2, 'Revenus moyens'),
(3, 'Gros revenus'),
(4, 'Visiteurs');

-- --------------------------------------------------------

--
-- Table structure for table `depot`
--

CREATE TABLE `depot` (
  `carte_id` varchar(10) NOT NULL,
  `depot_date` date NOT NULL,
  `depot_montant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `depot`
--

INSERT INTO `depot` (`carte_id`, `depot_date`, `depot_montant`) VALUES
('C1', '2022-09-01', 5),
('C1', '2022-10-13', 30),
('C10', '2022-08-18', 5),
('C10', '2022-09-01', 25),
('C10', '2022-09-14', 30),
('C10', '2022-10-14', 25),
('C12', '2022-09-14', 80),
('C12', '2022-09-16', 30),
('C13', '2022-09-23', 40),
('C13', '2022-10-01', 20),
('C14', '2022-08-17', 20),
('C14', '2022-09-14', 30),
('C15', '2022-08-18', 30),
('C15', '2022-09-23', 30),
('C15', '2022-12-01', 45),
('C2', '2022-09-05', 20),
('C2', '2022-09-07', 30),
('C2', '2022-11-03', 15),
('C3', '2022-09-10', 40),
('C4', '2022-09-12', 20),
('C4', '2022-10-03', 30),
('C6', '2022-09-23', 60),
('C7', '2022-09-14', 5),
('C7', '2022-10-05', 20),
('C7', '2022-11-14', 30),
('C8', '2022-09-22', 20),
('C8', '2022-09-30', 30),
('C9', '2022-08-20', 5),
('C9', '2022-09-02', 20);

-- --------------------------------------------------------

--
-- Stand-in structure for view `depot_average`
-- (See below for the actual view)
--
CREATE TABLE `depot_average` (
`depot_montant_average` decimal(14,4)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `depot_par_usager`
-- (See below for the actual view)
--
CREATE TABLE `depot_par_usager` (
`carte_nom` varchar(255)
,`SUM(depot.depot_montant)` decimal(32,0)
);

-- --------------------------------------------------------

--
-- Table structure for table `prestation`
--

CREATE TABLE `prestation` (
  `prestation_id` int(11) NOT NULL,
  `prestation_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prestation`
--

INSERT INTO `prestation` (`prestation_id`, `prestation_type`) VALUES
(1, 'Plat principal'),
(2, 'Plat + Dessert'),
(3, 'Entrée + Plat'),
(4, 'Supplément Entrée'),
(5, 'Supplément dessert'),
(6, 'Repas complet'),
(7, 'Alcool'),
(8, 'Apéritif'),
(9, 'Soda');

-- --------------------------------------------------------

--
-- Stand-in structure for view `recette_supplement_entree`
-- (See below for the actual view)
--
CREATE TABLE `recette_supplement_entree` (
`recette` decimal(42,2)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `supplemenet_entree_achetee`
-- (See below for the actual view)
--
CREATE TABLE `supplemenet_entree_achetee` (
`carte_nom` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `tarif`
--

CREATE TABLE `tarif` (
  `prestation_id` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL,
  `tarif_prix` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tarif`
--

INSERT INTO `tarif` (`prestation_id`, `categorie_id`, `tarif_prix`) VALUES
(1, 1, 2.50),
(1, 2, 2.70),
(1, 3, 3.10),
(1, 4, 5.00),
(2, 1, 3.10),
(2, 2, 3.80),
(2, 3, 4.50),
(2, 4, 7.00),
(3, 1, 2.90),
(3, 2, 3.10),
(3, 3, 3.70),
(3, 4, 6.50),
(4, 1, 0.20),
(4, 2, 0.40),
(4, 3, 0.90),
(4, 4, 1.20),
(5, 1, 0.10),
(5, 2, 0.30),
(5, 3, 0.70),
(5, 4, 1.10),
(6, 1, 3.80),
(6, 2, 4.00),
(6, 3, 4.30),
(6, 4, 9.00),
(7, 1, 1.20),
(7, 2, 1.30),
(7, 3, 1.50),
(7, 4, 2.00),
(8, 1, 1.30),
(8, 2, 1.40),
(8, 3, 1.60),
(8, 4, 2.10),
(9, 1, 0.80),
(9, 2, 0.90),
(9, 3, 1.00),
(9, 4, 2.30);

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `ticket_id` varchar(10) NOT NULL,
  `carte_id` varchar(10) NOT NULL,
  `ticket_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`ticket_id`, `carte_id`, `ticket_date`) VALUES
('T01', 'C1', '2022-10-03'),
('T02', 'C1', '2022-10-05'),
('T03', 'C1', '2022-10-10'),
('T04', 'C1', '2022-10-11'),
('T05', 'C1', '2022-11-02'),
('T06', 'C2', '2022-10-11'),
('T07', 'C2', '2022-10-13'),
('T08', 'C2', '2022-11-02'),
('T09', 'C2', '2022-11-10'),
('T10', 'C2', '2022-11-14'),
('T11', 'C3', '2022-10-11'),
('T12', 'C3', '2022-11-20'),
('T13', 'C3', '2022-10-24'),
('T14', 'C4', '2022-11-02'),
('T15', 'C4', '2022-11-14'),
('T16', 'C4', '2022-11-24'),
('T17', 'C4', '2022-12-12'),
('T18', 'C6', '2022-12-27'),
('T19', 'C6', '2022-11-14'),
('T20', 'C7', '2022-12-19'),
('T21', 'C7', '2022-11-22'),
('T22', 'C7', '2022-11-10'),
('T23', 'C7', '2022-11-08'),
('T24', 'C7', '2022-10-12'),
('T25', 'C8', '2022-11-22'),
('T26', 'C8', '2022-10-18'),
('T27', 'C9', '2022-12-19'),
('T28', 'C9', '2022-11-22'),
('T29', 'C10', '2022-10-20'),
('T30', 'C10', '2022-10-17'),
('T31', 'C10', '2022-10-14'),
('T32', 'C12', '2022-12-08'),
('T33', 'C12', '2022-11-23'),
('T34', 'C12', '2022-11-21'),
('T35', 'C12', '2022-10-19'),
('T36', 'C13', '2022-11-23'),
('T37', 'C13', '2022-11-15'),
('T38', 'C14', '2022-10-12'),
('T39', 'C14', '2022-09-21'),
('T40', 'C15', '2022-09-01');

-- --------------------------------------------------------

--
-- Structure for view `depot_average`
--
DROP TABLE IF EXISTS `depot_average`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `depot_average`  AS SELECT avg(`depot`.`depot_montant`) AS `depot_montant_average` FROM `depot` ;

-- --------------------------------------------------------

--
-- Structure for view `depot_par_usager`
--
DROP TABLE IF EXISTS `depot_par_usager`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `depot_par_usager`  AS SELECT DISTINCT `carte`.`carte_nom` AS `carte_nom`, sum(`depot`.`depot_montant`) AS `SUM(depot.depot_montant)` FROM (`carte` join `depot` on(`carte`.`carte_id` = `depot`.`carte_id`)) GROUP BY `carte`.`carte_nom` ;

-- --------------------------------------------------------

--
-- Structure for view `recette_supplement_entree`
--
DROP TABLE IF EXISTS `recette_supplement_entree`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `recette_supplement_entree`  AS SELECT sum(`achat`.`achat_nombre` * `tarif`.`tarif_prix`) AS `recette` FROM ((((`achat` join `ticket` on(`achat`.`ticket_id` = `ticket`.`ticket_id`)) join `carte` on(`ticket`.`carte_id` = `carte`.`carte_id`)) join `prestation` on(`achat`.`prestation_id` = `prestation`.`prestation_id`)) join `tarif` on(`achat`.`prestation_id` = `tarif`.`prestation_id` and `carte`.`categorie_id` = `tarif`.`categorie_id`)) WHERE `prestation`.`prestation_type` = 'Supplément Entrée' ;

-- --------------------------------------------------------

--
-- Structure for view `supplemenet_entree_achetee`
--
DROP TABLE IF EXISTS `supplemenet_entree_achetee`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `supplemenet_entree_achetee`  AS SELECT DISTINCT `carte`.`carte_nom` AS `carte_nom` FROM (((`carte` join `achat`) join `ticket` on(`carte`.`carte_id` = `ticket`.`carte_id` and `achat`.`ticket_id` = `ticket`.`ticket_id`)) join `prestation` on(`achat`.`prestation_id` = `prestation`.`prestation_id`)) WHERE `prestation`.`prestation_type` = 'Supplément Entrée' ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achat`
--
ALTER TABLE `achat`
  ADD PRIMARY KEY (`ticket_id`,`prestation_id`),
  ADD KEY `prestation_id` (`prestation_id`);

--
-- Indexes for table `carte`
--
ALTER TABLE `carte`
  ADD PRIMARY KEY (`carte_id`),
  ADD KEY `categorie_id` (`categorie_id`);

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`categorie_id`);

--
-- Indexes for table `depot`
--
ALTER TABLE `depot`
  ADD PRIMARY KEY (`carte_id`,`depot_date`);

--
-- Indexes for table `prestation`
--
ALTER TABLE `prestation`
  ADD PRIMARY KEY (`prestation_id`);

--
-- Indexes for table `tarif`
--
ALTER TABLE `tarif`
  ADD PRIMARY KEY (`prestation_id`,`categorie_id`),
  ADD KEY `categorie_id` (`categorie_id`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ticket_id`),
  ADD KEY `carte_id` (`carte_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `categorie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prestation`
--
ALTER TABLE `prestation`
  MODIFY `prestation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `achat`
--
ALTER TABLE `achat`
  ADD CONSTRAINT `achat_ibfk_1` FOREIGN KEY (`ticket_id`) REFERENCES `ticket` (`ticket_id`),
  ADD CONSTRAINT `achat_ibfk_2` FOREIGN KEY (`prestation_id`) REFERENCES `prestation` (`prestation_id`);

--
-- Constraints for table `carte`
--
ALTER TABLE `carte`
  ADD CONSTRAINT `carte_ibfk_1` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`categorie_id`);

--
-- Constraints for table `depot`
--
ALTER TABLE `depot`
  ADD CONSTRAINT `depot_ibfk_1` FOREIGN KEY (`carte_id`) REFERENCES `carte` (`carte_id`);

--
-- Constraints for table `tarif`
--
ALTER TABLE `tarif`
  ADD CONSTRAINT `tarif_ibfk_1` FOREIGN KEY (`prestation_id`) REFERENCES `prestation` (`prestation_id`),
  ADD CONSTRAINT `tarif_ibfk_2` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`categorie_id`);

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`carte_id`) REFERENCES `carte` (`carte_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
