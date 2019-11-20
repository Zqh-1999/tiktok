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

// 评论
// 查询评论
router.get("/comment/show/:id(\\d+)",controller.comment)

// 添加父评论
router.post("/comment/add",controller.comadd)
// 添加子评论
router.post("/comment/add/son",controller.comaddson)

// 评论点赞





module.exports = router