# Host: localhost:3307  (Version: 5.5.53)
# Date: 2019-06-05 13:27:02
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "vivouser"
#

DROP TABLE IF EXISTS `vivouser`;
CREATE TABLE `vivouser` (
  `vname` varchar(20) DEFAULT NULL,
  `vtel` varchar(20) DEFAULT NULL,
  `vpwd` char(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vivouser"
#

/*!40000 ALTER TABLE `vivouser` DISABLE KEYS */;
INSERT INTO `vivouser` VALUES ('healer','12345678901','456'),('晓忆','12345678901','123'),('healer2','18191081630','123456');
/*!40000 ALTER TABLE `vivouser` ENABLE KEYS */;
