const mysql = require('../db')

module.exports.index = (req, res) => {
  mysql.query('SELECT * FROM user', (error, results) => {
    if (error) return console.log(error)
    res.json( {
      data: results
    })
  })
}