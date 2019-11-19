const mysql = require('../db')

module.exports.index = (req, res) => {
  mysql.query('SELECT * FROM video', (error, results) => {
    if (error) return console.log(error)
    res.json({
      code: 200,
      data: results
    })
  })
}