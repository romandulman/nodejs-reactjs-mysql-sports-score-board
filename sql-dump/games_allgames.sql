-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 192.168.2.14    Database: games
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `allgames`
--

DROP TABLE IF EXISTS `allgames`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allgames` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teamA` varchar(45) DEFAULT NULL,
  `teamB` varchar(45) DEFAULT NULL,
  `ScoreA` varchar(45) DEFAULT NULL,
  `ScoreB` varchar(45) DEFAULT NULL,
  `Time` varchar(45) DEFAULT NULL,
  `Category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allgames`
--

LOCK TABLES `allgames` WRITE;
/*!40000 ALTER TABLE `allgames` DISABLE KEYS */;
INSERT INTO `allgames` VALUES (1,'FC-Barcelona','Real-Madrid','3','1','2019-06-11 14:22:22','Football'),(2,'Chelsea','Man-United','2','2','2019-06-12 11:12:22','Football'),(3,'Maccabi Tel-Aviv','Maccabi Haifa','2','0','2019-06-15 16:32:12','Football'),(4,'Maccabi Tel-Aviv','cska-Moscow','82','61','2019-06-17 14:22:22','Basketball'),(5,'Maccabi Tel-Aviv','Real-Madrid','88','91','2019-06-18 11:52:42','Basketball'),(6,'FC-Barcelona','Real-Madrid','80','81','2019-07-19 14:22:23','Basketball'),(7,'Maccabi Haifa','Chelsea','1','1','2019-07-29 10:12:11','Football'),(8,'cska-Moscow','Real-Madrid','77','89','2019-08-01 09:13:16','Basketball');
/*!40000 ALTER TABLE `allgames` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-29 23:18:46
