-- MySQL dump 10.13  Distrib 8.0.28, for macos12.0 (arm64)
--
-- Host: 0.0.0.0    Database: student_helper
-- ------------------------------------------------------
-- Server version	5.7.37-0ubuntu0.18.04.1

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
-- Current Database: `student_helper`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `student_helper` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `student_helper`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(30) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email_id` varchar(100) NOT NULL,
  `phone` varchar(14) NOT NULL,
  `role` int NOT NULL,
  `auth_token` mediumtext,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('jesslin','Johny','Doe','johny@uci.edu','6502008088',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDcxNDcwOTgsImV4cCI6MTY0NzIzMzQ5OH0.T47IO7tAOjqTU9OoqocVbFF7OgsfKSr8zOMPPXGwpDw','jesslindef'),('milonis','Miloni','Shah','milonis@uci.edu','6502008089',0,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDcxNDg0NzYsImV4cCI6MTY0NzIzNDg3Nn0.Xyp05kNg0K21jaum4SVdV26hdcepg_5sCrpCiMLse9g','miloniii');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `student_id` int NOT NULL,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  `github_url` varchar(100) NOT NULL,
  `department` int NOT NULL,
  `course_id` int NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `project_id` varchar(40) NOT NULL,
  `project_name` varchar(40) NOT NULL,
  `student_id` varchar(100) NOT NULL,
  `user_id` varchar(30) DEFAULT NULL,
  `status` varchar(14) NOT NULL,
  `group_id` varchar(20) NOT NULL,
  `video_link` varchar(100) DEFAULT NULL,
  `github_link` varchar(100) DEFAULT NULL,
  `gofundme_link` varchar(1000) DEFAULT NULL,
  `domain` varchar(20) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES ('1ed0322af9','Book Library','17961352',NULL,'Ongoing','44','https://www.youtube.com','https://github.com/shubhamn21/docker_sql/','https://modules.nceln.fpg.unc.edu/sites/modules.nceln.fpg.unc.edu/files/foundations/handouts/Mod%204%20Funds%20of%20knowledge.pdf','Software Development','A music library contains music-related materials for patron use. Collections may also include non-print materials, such as digitized music scores or audio recordings. Use of such materials may be limited to specific patron groups, especially in private academic institutions.'),('2f9d10a4ee','Music Library','17961351',NULL,'Ongoing','45','https://www.youtube.com','https://github.com/shubhamn21/docker_sql/','https://modules.nceln.fpg.unc.edu/sites/modules.nceln.fpg.unc.edu/files/foundations/handouts/Mod%204%20Funds%20of%20knowledge.pdf','Software Development','A music library contains music-related materials for patron use. Collections may also include non-print materials, such as digitized music scores or audio recordings. Use of such materials may be limited to specific patron groups, especially in private academic institutions.'),('ca7b18b38e','Pokemon','17961352',NULL,'Ongoing','44','https://www.youtube.com','https://github.com/shubhamn21/docker_sql/','https://modules.nceln.fpg.unc.edu/sites/modules.nceln.fpg.unc.edu/files/foundations/handouts/Mod%204%20Funds%20of%20knowledge.pdf','Software Development','A music library contains music-related materials for patron use. Collections may also include non-print materials, such as digitized music scores or audio recordings. Use of such materials may be limited to specific patron groups, especially in private academic institutions.');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `group_id` varchar(30) NOT NULL,
  `members` varchar(120) NOT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-12 21:33:05

