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

module.exports = router