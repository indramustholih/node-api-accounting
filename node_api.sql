/*
Navicat MySQL Data Transfer

Source Server         : MYSQL
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : node_api

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2019-05-14 11:30:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for set_user
-- ----------------------------
DROP TABLE IF EXISTS `set_user`;
CREATE TABLE `set_user` (
  `set_userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  PRIMARY KEY (`set_userid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of set_user
-- ----------------------------
INSERT INTO `set_user` VALUES ('1', 'tes', 'gh', 'tes123', 'gfhgfh');
