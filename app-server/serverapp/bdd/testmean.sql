-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 06 Décembre 2018 à 13:27
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `testmean`
--

-- --------------------------------------------------------

--
-- Structure de la table `demande`
--

CREATE TABLE `demande` (
  `id` int(250) NOT NULL,
  `idUtilsateur` int(11) DEFAULT NULL,
  `motif` varchar(100) NOT NULL,
  `quantite` int(11) NOT NULL,
  `produit` varchar(100) NOT NULL,
  `lien` longtext NOT NULL,
  `comentaire_demande` varchar(200) NOT NULL,
  `date_validation` date NOT NULL,
  `etat_commande` varchar(20) NOT NULL,
  `date_creation` date NOT NULL,
  `commentaire_acheteur` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `demande`
--

INSERT INTO `demande` (`id`, `idUtilsateur`, `motif`, `quantite`, `produit`, `lien`, `comentaire_demande`, `date_validation`, `etat_commande`, `date_creation`, `commentaire_acheteur`) VALUES
(1, 2, 'ecran fissuré', 2, 'Ecran dell 24 pouces', 'http://image_decran_dell.fr', 'si possible prenez le en rose ', '2018-12-05', 'en cours', '2018-12-03', 'reception 24/12'),
(2, 3, 'precedente souris cassé ', 2, 'souris', 'https://www.amazon.fr/Razer-Naga-Trinity-interchangeables-programmables/dp/B077KJKMYD/ref=asc_df_B077KJKMYD/?tag=googshopfr-21&linkCode=df0&hvadid=228870960932&hvpos=1o1&hvnetw=g&hvrand=10095477814014912725&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9055729&hvtargid=pla-402351682239&psc=1', 'ma souris se casse tous les 2 mois ', '2018-12-05', 'en cours', '2018-12-13', 'merci pour la demande');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(250) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `role` varchar(40) NOT NULL,
  `motdepasse` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `mail`, `role`, `motdepasse`) VALUES
(1, 'jean', 'pierre', 'JP@gmail.com', 'collaborateur', '123456'),
(2, 'marck', 'antoine', 'MA@gmail.com', 'Manager', 'ma123'),
(3, 'michel', 'sardou', 'MSar@gmail.com', 'manager', 'sardou123');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `demande`
--
ALTER TABLE `demande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUtilsateur` (`idUtilsateur`),
  ADD KEY `idUtilsateur_2` (`idUtilsateur`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `demande`
--
ALTER TABLE `demande`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `demande`
--
ALTER TABLE `demande`
  ADD CONSTRAINT `demande_ibfk_1` FOREIGN KEY (`idUtilsateur`) REFERENCES `utilisateur` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
