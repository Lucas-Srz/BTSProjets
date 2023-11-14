-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 14 nov. 2023 à 13:44
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projet`
--

-- --------------------------------------------------------

--
-- Structure de la table `diag_in_test_lemcom_default_id`
--

DROP TABLE IF EXISTS `diag_in_test_lemcom_default_id`;
CREATE TABLE IF NOT EXISTS `diag_in_test_lemcom_default_id` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `num_pompe` tinyint UNSIGNED DEFAULT NULL,
  `voltage` float(5,2) DEFAULT NULL,
  `temperature` float(5,2) DEFAULT NULL,
  `vaccuum_level` tinyint UNSIGNED DEFAULT NULL,
  `CPT_CMD_SF` int UNSIGNED DEFAULT NULL,
  `CPT_PPIECE` int UNSIGNED DEFAULT NULL,
  `CPT_DEF_PPIECE` int UNSIGNED DEFAULT NULL,
  `CPT_REGUL_ASC` int UNSIGNED DEFAULT NULL,
  `CPT_DEF_REGUL` int UNSIGNED DEFAULT NULL,
  `CPT_ERR_BUS_LOC` int UNSIGNED DEFAULT NULL,
  `CPT_CMD_INT_VD` int UNSIGNED DEFAULT NULL,
  `CPT_CMD_EXT_VD` int UNSIGNED DEFAULT NULL,
  `CPT_DEF_ALIM` int UNSIGNED DEFAULT NULL,
  `CPT_ERR_BUS_EXT` int UNSIGNED DEFAULT NULL,
  `GRIP_STATUS` tinyint UNSIGNED DEFAULT NULL,
  `GRIP_DEF_STATUS` tinyint UNSIGNED DEFAULT NULL,
  `ASC_STATUS` tinyint UNSIGNED DEFAULT NULL,
  `ASC_DEF_STATUS` tinyint UNSIGNED DEFAULT NULL,
  `date` char(15) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `heure` char(15) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Déchargement des données de la table `diag_in_test_lemcom_default_id`
--

INSERT INTO `diag_in_test_lemcom_default_id` (`id`, `num_pompe`, `voltage`, `temperature`, `vaccuum_level`, `CPT_CMD_SF`, `CPT_PPIECE`, `CPT_DEF_PPIECE`, `CPT_REGUL_ASC`, `CPT_DEF_REGUL`, `CPT_ERR_BUS_LOC`, `CPT_CMD_INT_VD`, `CPT_CMD_EXT_VD`, `CPT_DEF_ALIM`, `CPT_ERR_BUS_EXT`, `GRIP_STATUS`, `GRIP_DEF_STATUS`, `ASC_STATUS`, `ASC_DEF_STATUS`, `date`, `heure`) VALUES
(1, 1, 30.90, 40.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200000, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:22:03'),
(2, 1, 30.90, 45.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200000, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:22:46'),
(3, 1, 30.90, 43.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200000, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:24:37'),
(4, 1, 30.90, 47.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200008, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:28:59'),
(5, 2, 30.90, 42.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200008, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:30:29'),
(6, 2, 30.90, 48.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200009, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:32:10'),
(7, 2, 30.90, 43.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200010, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:36:53'),
(8, 2, 30.90, 45.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200011, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:38:35'),
(9, 3, 30.90, 41.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200012, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:38:38'),
(10, 3, 30.90, 44.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200013, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:38:44'),
(11, 3, 30.90, 40.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200013, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:39:59'),
(12, 3, 30.90, 43.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200015, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:40:35'),
(13, 4, 30.90, 48.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200016, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:40:45'),
(14, 4, 30.90, 49.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200017, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:40:47'),
(15, 4, 30.90, 46.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200000, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:32:07'),
(16, 4, 30.90, 50.00, 0, 500, 500, 500, 500, 0, 0, 200000, 200001, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:32:17'),
(17, 5, 30.90, 45.00, 38, 500, 500, 500, 500, 0, 0, 200000, 200002, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:32:20'),
(18, 5, 30.90, 41.00, 38, 500, 500, 500, 500, 0, 0, 200000, 200003, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:32:21'),
(19, 5, 30.90, 44.00, 38, 500, 500, 500, 500, 0, 0, 200001, 200004, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:32:24'),
(20, 5, 30.90, 43.00, 38, 500, 500, 500, 502, 0, 0, 200001, 200005, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:32:28'),
(21, 6, 30.90, 46.00, 38, 500, 500, 500, 502, 0, 0, 200001, 200005, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:35:43'),
(22, 6, 30.90, 41.00, 38, 500, 500, 500, 502, 0, 0, 200001, 200006, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:35:48'),
(23, 6, 30.90, 48.00, 38, 500, 500, 500, 502, 0, 0, 200001, 200007, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:35:51'),
(24, 6, 30.90, 44.00, 38, 500, 500, 500, 502, 0, 0, 200001, 200007, 446, 0, 0, 0, 0, 0, '2023-03-30', '10:37:26');

-- --------------------------------------------------------

--
-- Structure de la table `table_login`
--

DROP TABLE IF EXISTS `table_login`;
CREATE TABLE IF NOT EXISTS `table_login` (
  `nom` text CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `prenom` text CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `mot_de_passe` text CHARACTER SET latin1 COLLATE latin1_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Déchargement des données de la table `table_login`
--

INSERT INTO `table_login` (`nom`, `prenom`, `mot_de_passe`) VALUES
('SUAREZ', 'Lucas', '0000'),
('admin', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `table_select`
--

DROP TABLE IF EXISTS `table_select`;
CREATE TABLE IF NOT EXISTS `table_select` (
  `pompe` varchar(50) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `date1` date NOT NULL,
  `date2` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Déchargement des données de la table `table_select`
--

INSERT INTO `table_select` (`pompe`, `date1`, `date2`) VALUES
('2', '2023-03-30', '2023-03-30');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
