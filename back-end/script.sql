-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: pfms
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenses` (
  `username` varchar(255) NOT NULL,
  `expense` bigint NOT NULL,
  `date` date NOT NULL,
  `category` varchar(255) NOT NULL,
  KEY `username` (`username`),
  CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
INSERT INTO `expenses` VALUES ('user2',5707,'2022-02-03','insurance'),('user1',1903,'2023-04-22','food'),('user2',4958,'2020-04-18','shopping'),('user1',5612,'2021-02-26','rent'),('user3',616,'2022-08-06','healthcare'),('user1',2771,'2022-07-28','miscellaneous'),('user2',8576,'2021-01-26','education'),('user3',3913,'2020-01-16','miscellaneous'),('user1',2025,'2020-10-20','transport'),('user1',8768,'2021-06-15','gift'),('user3',2213,'2023-04-15','salary'),('user2',4691,'2021-06-16','transport'),('user3',3045,'2023-08-06','gift'),('user3',883,'2020-03-13','entertainment'),('user2',3359,'2021-01-24','healthcare'),('user1',5672,'2020-03-26','bonus'),('user2',5518,'2021-10-31','investment'),('user3',9178,'2020-01-25','education'),('user2',7056,'2020-09-29','shopping'),('user2',1918,'2021-01-28','gift'),('user1',9187,'2021-10-05','investment'),('user1',9591,'2022-11-01','miscellaneous'),('user2',9928,'2020-04-10','insurance'),('user1',1328,'2021-06-01','transport'),('user2',2651,'2022-10-20','transport'),('user2',2152,'2022-12-18','bonus'),('user3',420,'2022-04-06','shopping'),('user2',4667,'2020-01-07','miscellaneous'),('user1',4837,'2021-10-08','shopping'),('user3',4190,'2021-11-18','investment'),('user1',6328,'2023-03-30','entertainment'),('user3',6143,'2020-12-01','rent'),('user2',9951,'2023-02-03','tax'),('user2',5540,'2020-11-27','gift'),('user1',2424,'2021-10-17','bonus'),('user2',891,'2021-04-05','investment'),('user1',5615,'2023-01-22','shopping'),('user1',5372,'2020-04-07','rent'),('user1',4544,'2020-07-14','transport'),('user3',6089,'2020-04-03','food'),('user1',7484,'2022-06-20','rent'),('user1',7559,'2022-02-21','food'),('user1',6163,'2022-11-11','food'),('user1',8163,'2020-01-03','rent'),('user1',6830,'2022-06-11','healthcare'),('user2',3178,'2022-04-07','insurance'),('user1',6049,'2022-01-02','gift'),('user1',6168,'2021-09-09','investment'),('user2',1591,'2020-04-25','utilities'),('user2',6694,'2020-01-06','tax'),('user3',3066,'2020-09-06','bonus'),('user2',8097,'2021-12-25','food'),('user2',9537,'2020-10-18','healthcare'),('user3',1073,'2020-09-29','entertainment'),('user2',6736,'2020-01-04','shopping'),('user2',9791,'2023-04-20','insurance'),('user3',6960,'2020-04-05','investment'),('user1',2306,'2023-06-09','transport'),('user2',7843,'2022-08-04','transport'),('user2',4195,'2022-10-29','miscellaneous'),('user2',1479,'2020-08-02','food'),('user3',8916,'2021-03-09','shopping'),('user3',222,'2021-03-11','bonus'),('user1',819,'2022-11-18','insurance'),('user2',3032,'2021-10-25','utilities'),('user2',580,'2022-07-28','transport'),('user2',698,'2022-07-05','miscellaneous'),('user3',651,'2023-02-26','investment'),('user1',3703,'2022-10-27','shopping'),('user1',5525,'2020-01-24','transport'),('user2',6973,'2022-07-06','entertainment'),('user1',2295,'2022-03-08','investment'),('user3',1515,'2023-10-05','salary'),('user2',8247,'2021-11-21','salary'),('user3',8520,'2023-02-11','entertainment'),('user3',7076,'2020-08-01','education'),('user2',2238,'2021-09-04','salary'),('user3',254,'2020-07-16','utilities'),('user2',866,'2023-11-05','insurance'),('user2',7715,'2020-07-22','investment'),('user1',789,'2023-08-14','rent'),('user1',7134,'2021-05-02','utilities'),('user3',1671,'2023-10-18','shopping'),('user2',6488,'2022-08-07','tax'),('user2',407,'2023-04-06','insurance'),('user2',2085,'2021-02-26','miscellaneous'),('user3',7771,'2020-02-08','miscellaneous'),('user2',2846,'2021-02-07','insurance'),('user1',4378,'2020-02-20','entertainment'),('user1',5322,'2021-05-31','entertainment'),('user3',9367,'2020-12-24','tax'),('user1',7679,'2021-09-12','utilities'),('user2',222,'2023-04-19','shopping'),('user2',1575,'2020-03-23','education'),('user3',5501,'2020-03-14','insurance'),('user2',7039,'2020-07-04','entertainment'),('user3',4354,'2020-09-05','healthcare'),('user1',1457,'2021-04-02','entertainment'),('user2',1723,'2020-06-22','salary'),('user1',4301,'2023-11-07','healthcare'),('user2',4205,'2023-11-01','investment'),('user3',8895,'2023-06-22','bonus'),('user1',4345,'2023-06-24','tax'),('user2',8209,'2023-07-17','food'),('user1',5664,'2020-09-04','transport'),('user1',4167,'2023-09-20','food'),('user3',9905,'2020-04-05','investment'),('user1',1550,'2021-11-29','miscellaneous'),('user3',6739,'2022-09-24','education'),('user1',6709,'2020-04-26','investment'),('user2',675,'2020-09-22','healthcare'),('user2',8614,'2021-07-13','miscellaneous'),('user1',1823,'2021-03-08','gift'),('user3',6739,'2020-02-27','insurance'),('user1',9952,'2022-03-14','transport'),('user3',7125,'2020-11-10','gift'),('user3',2379,'2022-07-23','bonus'),('user1',3110,'2021-11-12','gift'),('user1',5155,'2022-10-22','rent'),('user2',5174,'2023-01-30','bonus'),('user1',4234,'2022-01-12','tax'),('user1',7277,'2022-10-02','utilities'),('user1',9709,'2020-06-03','food'),('user2',7749,'2020-09-14','transport'),('user3',5524,'2020-12-21','education'),('user3',3853,'2021-09-08','utilities'),('user3',5755,'2020-02-08','shopping'),('user2',8507,'2022-02-09','shopping'),('user1',320,'2021-01-17','shopping'),('user3',3391,'2023-06-16','rent'),('user3',6212,'2022-11-11','rent'),('user1',8174,'2020-12-21','insurance'),('user3',8954,'2022-09-13','investment'),('user2',9020,'2023-05-06','insurance'),('user3',1690,'2020-05-18','investment'),('user1',793,'2020-05-22','education'),('user2',7700,'2021-10-12','food'),('user2',1284,'2022-04-07','salary'),('user3',9928,'2023-07-28','rent'),('user3',7955,'2022-11-21','gift'),('user3',2860,'2023-07-25','bonus'),('user1',756,'2023-08-21','transport'),('user3',4146,'2020-01-16','gift'),('user2',8607,'2021-10-17','insurance'),('user3',5980,'2021-01-23','utilities'),('user1',3896,'2022-12-25','transport'),('user3',3164,'2022-08-22','healthcare'),('user2',1220,'2022-06-23','investment'),('user2',9422,'2020-05-01','utilities'),('user1',5141,'2020-07-21','food'),('user1',6047,'2021-11-19','food'),('user3',1340,'2022-01-17','rent'),('user3',6648,'2023-05-05','insurance'),('user2',9246,'2023-05-08','investment'),('user1',9803,'2023-07-04','investment'),('user1',3338,'2022-07-08','entertainment'),('user2',8459,'2023-11-01','investment'),('user1',7819,'2020-10-29','miscellaneous'),('user3',586,'2020-06-18','utilities'),('user3',9599,'2020-07-12','investment'),('user3',7789,'2023-05-28','transport'),('user1',7679,'2022-02-27','investment'),('user1',8906,'2022-08-11','transport'),('user1',2588,'2020-08-17','rent'),('user2',470,'2022-06-17','insurance'),('user1',444,'2021-12-08','education'),('user3',4078,'2021-10-24','rent'),('user2',7854,'2021-12-28','utilities'),('user2',4345,'2021-07-02','tax'),('user2',2752,'2023-07-12','insurance'),('user2',3786,'2022-03-22','transport'),('user2',2163,'2020-12-20','food'),('user1',9593,'2021-05-07','utilities'),('user2',3072,'2023-05-02','transport'),('user2',6626,'2020-08-28','transport'),('user2',3544,'2022-03-08','education'),('user1',5688,'2022-06-18','miscellaneous'),('user2',5153,'2022-01-30','entertainment'),('user1',6711,'2020-06-24','miscellaneous'),('user2',9885,'2020-01-18','gift'),('user1',2387,'2023-11-03','insurance'),('user2',4982,'2021-07-05','investment'),('user1',8611,'2020-11-22','salary'),('user3',8460,'2023-03-22','insurance'),('user1',2846,'2023-06-15','education'),('user3',9312,'2022-07-14','healthcare'),('user3',5598,'2020-08-11','rent'),('user3',8273,'2021-12-18','bonus'),('user2',8153,'2021-06-27','rent'),('user1',5632,'2021-03-10','miscellaneous'),('user2',469,'2022-10-01','education'),('user3',6800,'2022-08-24','rent'),('user1',5425,'2023-02-17','transport'),('user1',615,'2023-01-16','food'),('user2',4929,'2021-03-31','insurance'),('user2',8360,'2020-10-14','education'),('user1',4073,'2021-03-08','healthcare'),('user3',2422,'2021-04-08','insurance'),('user1',9750,'2021-04-23','investment'),('user2',5484,'2022-09-18','miscellaneous');
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('user1','pass1','name1'),('user2','pass2','name2'),('user3','pass3','name3'),('user4','pass4','name4');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-24 18:49:46
