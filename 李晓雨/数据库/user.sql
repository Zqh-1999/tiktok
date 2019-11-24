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

 Date: 24/11/2019 18:33:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `phone` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机号',
  `intro` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '简介',
  `sex` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '性别',
  `birth` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '生日',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '市',
  `photo` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '头像',
  `attention` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关注',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `love` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '喜欢',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '13952130301', '', '', '', '', 'https://tse3-mm.cn.bing.net/th?id=OIP.1LDXHrNwBtQu-T_YSW6GNQHaGy&w=215&h=197&c=7&o=5&pid=1.7', '3,5', '李小雨', '5,9,22,3,7,12,14,4,23');
INSERT INTO `user` VALUES (2, '13', '', '21', '21', NULL, 'https://tse3-mm.cn.bing.net/th?id=OIP.QNGmLsUJkqUpgMbYBMpPqQAAAA&w=220&h=220&c=7&o=5&pid=1.7', '4', '张宇', '3,9,18');
INSERT INTO `user` VALUES (3, '12', NULL, NULL, NULL, NULL, 'https://tse4-mm.cn.bing.net/th?id=OIP.czefpJXnF2fjMSFUBG1FiwHaHC&w=232&h=220&c=7&o=5&pid=1.7', '1', '福江浩', '2,3');
INSERT INTO `user` VALUES (4, '12', NULL, NULL, NULL, NULL, 'https://tse2-mm.cn.bing.net/th?id=OIP.nFsXpXu_nDJ5-eL687PhGAHaHa&w=220&h=219&c=7&o=5&pid=1.7', '2', '团团', '1,2');
INSERT INTO `user` VALUES (5, '87', NULL, NULL, NULL, NULL, 'https://tse3-mm.cn.bing.net/th?id=OIP.ynDXw7ibobFM0I4TO-rF6wAAAA&w=188&h=188&c=7&o=5&pid=1.7', NULL, '幂幂', '1');
INSERT INTO `user` VALUES (6, '897', NULL, NULL, NULL, NULL, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1897589137,2261370756&fm=26&gp=0.jpg', NULL, '钱小渣', '12');
INSERT INTO `user` VALUES (7, '456', NULL, NULL, NULL, NULL, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=452037148,398661658&fm=26&gp=0.jpg', NULL, '保安', '11');
INSERT INTO `user` VALUES (8, '456', NULL, NULL, NULL, NULL, 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=262678998,1473136312&fm=26&gp=0.jpg', NULL, '东方明珠', '12');
INSERT INTO `user` VALUES (9, '546', NULL, NULL, NULL, NULL, 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=407330226,2522323334&fm=85&app=63&f=JPEG?w=121&h=75&s=A4449C4E805DB2751855C53F03007043', NULL, '普陀', '3,4');
INSERT INTO `user` VALUES (10, '1980', NULL, NULL, NULL, NULL, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1117044760,1113260002&fm=26&gp=0.jpg', NULL, '徐汇', '5');
INSERT INTO `user` VALUES (11, '19805', '默', '0', '2019-11-23', '北京', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2229346952,2661940409&fm=26&gp=0.jpg', NULL, '默认', '6');
INSERT INTO `user` VALUES (12, '19805298262', NULL, NULL, NULL, NULL, 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3276179142,1686381254&fm=26&gp=0.jpg', NULL, '123', '8');
INSERT INTO `user` VALUES (13, '15751571780', NULL, NULL, NULL, NULL, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763262020,244896505&fm=26&gp=0.jpg', NULL, '1', '19');
INSERT INTO `user` VALUES (14, '13961229063', NULL, NULL, NULL, NULL, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg', NULL, '2', '2,3');
INSERT INTO `user` VALUES (15, '13778424516', NULL, NULL, NULL, NULL, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=498753096,2625518&fm=11&gp=0.jpg', NULL, '3', NULL);
INSERT INTO `user` VALUES (16, '18374600544', NULL, NULL, NULL, NULL, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2851017046,348008308&fm=11&gp=0.jpg', NULL, '4', NULL);
INSERT INTO `user` VALUES (17, '55', NULL, NULL, NULL, NULL, 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574421833214&di=fcec15c6515163f1b9ff6c4ed7a8e740&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201409%2F20%2F20140920154943_CxJtd.thumb.700_0.png', NULL, NULL, NULL);
INSERT INTO `user` VALUES (18, '13627465432', NULL, NULL, NULL, NULL, 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1575287272,3827217976&fm=26&gp=0.jpg', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
