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

 Date: 22/11/2019 15:13:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `v_id` int(11) NOT NULL COMMENT '视频id',
  `u_id` int(11) NOT NULL COMMENT '用户id',
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '评论内容',
  `times` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '评论时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 1, 1, 'a', 'asd');
INSERT INTO `comment` VALUES (2, 1, 2, 'b', '123213');
INSERT INTO `comment` VALUES (3, 1, 2, 'asdasdasdasd', '1577777777');
INSERT INTO `comment` VALUES (4, 2, 1, '按时大苏打', '1324546');
INSERT INTO `comment` VALUES (5, 2, 2, '而且我都是v现场', '123213123');
INSERT INTO `comment` VALUES (6, 1, 2, 'asdasdasdasd', '1577777777');
INSERT INTO `comment` VALUES (7, 2, 1, '123123123', '1574320942');
INSERT INTO `comment` VALUES (8, 2, 1, 'asdasdasddddddddd', '1574327044');
INSERT INTO `comment` VALUES (9, 2, 1, 'asd', '1574327063');
INSERT INTO `comment` VALUES (10, 2, 1, '你好', '1574340456');
INSERT INTO `comment` VALUES (11, 2, 1, '321', '1574340531');
INSERT INTO `comment` VALUES (12, 2, 1, '123', '1574340534');
INSERT INTO `comment` VALUES (13, 2, 1, '热歌友会啊速度大哥', '1574340538');
INSERT INTO `comment` VALUES (14, 2, 1, '会发生的风格是滴是滴', '1574340542');
INSERT INTO `comment` VALUES (15, 2, 1, '按时艰苦奋斗韩国v哈哈', '1574340546');
INSERT INTO `comment` VALUES (16, 2, 1, '大厦股份的韩国印度的原因', '1574340558');
INSERT INTO `comment` VALUES (17, 2, 1, '傻瓜速度大厦股份v哈哈哈', '1574340564');
INSERT INTO `comment` VALUES (18, 2, 1, '阿三', '1574340577');
INSERT INTO `comment` VALUES (19, 2, 1, '啊实打实打算', '1574340590');
INSERT INTO `comment` VALUES (20, 2, 1, '欺我辱恶意', '1574340611');
INSERT INTO `comment` VALUES (21, 2, 1, '123321', '1574340630');
INSERT INTO `comment` VALUES (22, 2, 1, '好机会', '1574340643');
INSERT INTO `comment` VALUES (23, 2, 1, '岸上的', '1574340664');
INSERT INTO `comment` VALUES (24, 2, 1, '为', '1574340672');

SET FOREIGN_KEY_CHECKS = 1;
