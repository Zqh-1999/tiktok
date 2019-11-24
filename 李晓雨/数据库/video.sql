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

 Date: 22/11/2019 15:14:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '视频地址',
  `goods` int(255) NOT NULL COMMENT '默认为0   点赞量',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '地址 - 市',
  `addtime` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '添加时间',
  `vtext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '视频简介',
  `vurl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '视频封面',
  `vmusic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '音乐描述',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES (2, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/1pFlmQiE.mp4', 9, '天津', '1234567890', '哦,天哪', 'https://p1.pstatp.com/large/tos-cn-p-0015/3d821e389d2047c78d54dcfbe4e0d449_1574039804.jpg', '小哥哥来咯', 2);
INSERT INTO `video` VALUES (3, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/43n6gl_h.mp4', 15, '南京', '1574147775', '哦买噶', 'https://p1.pstatp.com/large/tos-cn-p-0015/c8f0088266624e64ba8b80c7e8a68203_1574074961.jpg', '李佳奇来咯', 5);
INSERT INTO `video` VALUES (4, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/6kYZFwJY.mp4', 698, '上海', '1574147778', '优酷', 'https://p3.pstatp.com/large/tos-cn-p-0015/90fb652f0b5046439b91f9a7a894667c_1574143593.jpg', '明人不说暗话,啦啦啦', 6);
INSERT INTO `video` VALUES (5, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/BLpAcjiI.mp4', 9000, '北京', '1574147744', '喵喵喵喵喵喵喵喵喵喵喵喵', 'https://p3.pstatp.com/large/tos-cn-p-0015/b42530bc05d94411aea812043da00697_1574153385.jpg', '胖蛋喵喵', 5);
INSERT INTO `video` VALUES (6, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/CD7hvvCy.mp4', 324, '杭州', '1574147794', '优酷', 'https://p1.pstatp.com/large/tos-cn-p-0015/e93cbc9807ba4097a6e65d362155672e_1574081117.jpg', '自制                              ', 7);
INSERT INTO `video` VALUES (7, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/CQHnAyyg.mp4', 234, '重庆', '1574147574', '优酷', 'https://p1.pstatp.com/large/tos-cn-p-0015/ba220e4bf92047d296cc35135fc15eba_1574134010.jpg', '自制                           ', 4);
INSERT INTO `video` VALUES (8, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/Em%2Bsg1ZY.mp4', 45664, '北京', '1574147574', '古力娜扎', 'https://p1.pstatp.com/large/tos-cn-p-0015/5bcd7040c95648a5bc4a857d613a9361_1574149964.jpg', '娜扎自制', 8);
INSERT INTO `video` VALUES (9, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/Em%2Bsg1ZY.mp4', 12323, '苏州', '1574147775', '迪丽热巴', 'https://p9.pstatp.com/large/tos-cn-p-0015/e88354217f974be8870e03aa13bef850_1574143840.jpg', '热巴自制', 9);
INSERT INTO `video` VALUES (10, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/evGkmk1_.mp4', 24344, '深圳', '1574147776', '最右', 'https://p1.pstatp.com/large/tos-cn-p-0015/7799554922e040afb03457a200732eec_1574071226.jpg', '最右自制', 10);
INSERT INTO `video` VALUES (11, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/f1OIvswV.mp4', 234, '韩国', '1574147774', '瞧一瞧', 'https://p3.pstatp.com/large/tos-cn-p-0015/01594e754f4844528becfb84799aaf39_1572759100.jpg', '欧巴来咯', 6);
INSERT INTO `video` VALUES (12, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/hR5%2B37tB.mp4', 98, '重庆', '1574147774', '我们一起学猫叫', 'https://p3.pstatp.com/large/tos-cn-p-0015/8c293c0504744b27a133331437129bde_1574089148.jpg', '冯提莫来咯', 5);
INSERT INTO `video` VALUES (13, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/Lv32_qrx.mp4', 434, '长沙', '1574147774', '我的世界之恶龙咆哮', 'https://p3.pstatp.com/large/tos-cn-p-0015/4f02d67ebae74a45bb7232686c710842.jpg', '盒子怪来咯', 4);
INSERT INTO `video` VALUES (14, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/hR5%2B37tB.mp4', 705, '上海', '1574147774', '我的世界之四个儿子', 'https://p3.pstatp.com/large/tos-cn-p-0015/b42530bc05d94411aea812043da00697_1574153385.jpg', '明人不说暗话,啦啦啦', 2);
INSERT INTO `video` VALUES (15, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/mq0tef_R.mp4', 9000, '北京', '1574147764', '我的世界之课堂调侃', 'https://p3.pstatp.com/large/tos-cn-p-0015/98fc29f79802466fb149231c10ada150_1574139074.jpg', '胖蛋喵喵', 3);
INSERT INTO `video` VALUES (16, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/pQqvg2EN.mp4', 324, '杭州', '1574147274', '我的世界之迷你世界', 'https://p9.pstatp.com/large/tos-cn-p-0015/e08e5621b0244027be36e4ad7c3244d8_1574002621.jpg', '迷你世界来咯', 4);
INSERT INTO `video` VALUES (17, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/PzUvlVKY.mp4', 234, '长沙', '1574147874', '一条小团团吃鸡日常', 'https://p1.pstatp.com/large/tos-cn-p-0015/5b8e3cc393ae488bafe4a514632a96e4_1574151899.jpg', '一条小团团自制', 1);
INSERT INTO `video` VALUES (18, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/qKqpo%2BgM.mp4', 45664, '长沙', '1574147674', '一条小团团吃鸡日常2', 'https://p1.pstatp.com/large/tos-cn-p-0015/3316311aba9346769c6075204cf941d7_1574138490.jpg', '一条小团团自制', 1);
INSERT INTO `video` VALUES (19, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/Ssp5ETDz.mp4', 12322, '长沙', '1574147724', '一条小团团吃鸡日常3', 'https://p1.pstatp.com/large/tos-cn-p-0015/e5294053d4434ff8aaa275e9bbda99d0_1573988010.jpg', '一条小团团自制', 1);
INSERT INTO `video` VALUES (20, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/TeKxa49M.mp4', 24344, '长沙', '1574147674', '陈死狗和团子那些年', 'https://p3.pstatp.com/large/tos-cn-p-0015/843841df8e6c4ad1b34a597d4828c73e_1574163128.jpg', '陈死狗自制', 2);
INSERT INTO `video` VALUES (21, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/Tn2vtoIz.mp4', 234, '长沙', '1574147734', '绝地猛男陈死狗', 'https://p1.pstatp.com/large/tos-cn-p-0015/b10cd52a744d488997928dae4b10466a_1573897631.jpg', '陈死狗自制', 2);
INSERT INTO `video` VALUES (22, 'https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/YekNXv4O.mp4', 122, '北京', '1574147779', '大幂幂', 'https://p1.pstatp.com/large/tos-cn-p-0015/9ec23effa5254168837b31dfba0befb3_1574085479.jpg', '东方自制', 10);

SET FOREIGN_KEY_CHECKS = 1;
