const express = require('express')
const bdParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bdParser.urlencoded({extended:true}))
app.use(cors())

// 挂载首页路由
app.use(require('./routers/index'))

app.listen(8181)

let OSS = require('ali-oss')
let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAI4FuaZD55WpDTVvxCkvuh',
  accessKeySecret: 'XLq4g4utOao9ohbXnCv6txpX7ABOJ2',
  bucket: 'tiktokdou',
});

async function put () {
  try {
    //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    let result = await client.put('tiktok/object-name', './db/shejiyeicon4xolt01jdpz.png');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}