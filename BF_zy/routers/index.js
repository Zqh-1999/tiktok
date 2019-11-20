const express = require('express')

const router = express.Router()

const controller = require('../controller')

// 视频
// 查询所有视频
router.get('/index', controller.index)

// 条件查询视频
router.get("/videos",controller.videos)

// 根据id查询视频
router.get("/videos/:id(\\d+)",controller.video)

// 用户
// 根据用户id查询用户信息
router.get("/user/:id(\\d+)",controller.user)

module.exports = router