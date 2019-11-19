const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '47.56.172.241',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'TikTok'
})

module.exports = connection