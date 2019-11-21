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
// 根据id查询多个视频
router.get("/videod",controller.videod)

// 用户
// 根据用户id查询用户信息
router.get("/user/:id(\\d+)",controller.user)
// 查询多个用户信息
router.get("/users",controller.users)

// 评论
// 查询评论
router.get("/comment/show/:id(\\d+)",controller.comment)

// 添加父评论
router.post("/comment/add",controller.comadd)
// 添加子评论
router.post("/comment/add/son",controller.comaddson)

// 视频点赞
router.put("/praise",controller.praise)

// 用户关注
router.put("/follow",controller.follow)

module.exports = router