const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

app.use(express.static('./public'))

const routerIndex = require('./router/route')
app.use(routerIndex)

app.listen(80, () => {
  console.log('服务器启动成功...')
})


