const express = require('express')
const bdParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bdParser.urlencoded({extended:true}))
app.use(cors())

// 挂载首页路由
app.use(require('./routers/index'))
app.use(require("./routers/route"))

app.listen(8181)
