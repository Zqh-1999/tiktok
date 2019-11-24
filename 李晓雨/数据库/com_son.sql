/*
 Navicat Premium Data Transfer

 Source Server         : mymysql
 Source Server Type    : MySQL
 Source Server Version : 50646
 Source Host           : 47.56.172.241:3306
 Source Schema         : TikTok

 Target Server Type    : MySQL
 Target Server Version : 50646
 File Encoding         : 65001

 Date: 22/11/2019 15:13:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for com_son
-- ----------------------------
DROP TABLE IF EXISTS `com_son`;
CREATE TABLE `com_son`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `gen_id` int(11) NULL DEFAULT NULL COMMENT '根评论id',
  `u_id` int(11) NULL DEFAULT NULL,
  `comments_son` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '子评论内容',
  `times_son` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of com_son
-- ----------------------------
INSERT INTO `com_son` VALUES (1, 1, 2, '2', 2312311);
INSERT INTO `com_son` VALUES (3, 1, 21, '21', 12121);
INSERT INTO `com_son` VALUES (4, 2, 1, 'sdsfsdfdsf', 1567777777);
INSERT INTO `com_son` VALUES (5, 4, 1, '123123', 123123123);
INSERT INTO `com_son` VALUES (6, 2, 1, 'sdsfsdfdsf', 1567777777);

SET FOREIGN_KEY_CHECKS = 1;
