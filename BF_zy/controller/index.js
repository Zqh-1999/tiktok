const mysql = require('../db')



// 视频
// 查询所有视频
module.exports.index = (req, res) => {
  mysql.query('SELECT * FROM video', (error, results) => {
    if (error) return console.log(error)
    res.json({
      code: 200,
      data: results
    })
  })
}

// 条件查询视频
module.exports.videos = (req, res) => {
  // 获取查询参数
  // 城市
  let city = req.query.city
  // 用户id
  let user_id = req.query.user_id
  // 视频简介
  let vtext = req.query.vtext

  console.log(city);
  console.log(user_id);
  console.log(vtext)
  if (city) {
    mysql.query("SELECT * FROM video WHERE city = ?", city, (error, result) => {
      if (error) return console.log(error);
      res.json({
        ok: 1,
        data: result[0]
      })
    })
  } else if (user_id) {
    mysql.query("SELECT * FROM video WHERE user_id = ?", user_id, (error, result) => {
      if (error) return console.log(error);
      res.json({
        ok: 2,
        data: result[0]
      })
    })
  } else if (vtext) {
    mysql.query(`SELECT * FROM video WHERE vtext LIKE '%${vtext}%'`, (error, result) => {
      if (error) return console.log(error);
      res.json({
        ok: 3,
        data: result
      })
    })
  }

}


// 根据id查询视频
module.exports.video = (req, res) => {
  let id = req.params.id
  console.log(id)
  mysql.query("SELECT * FROM video WHERE id = ?", id, (error, result) => {
    if (error) return console.log(error);
    console.log(result)
    res.json({
      ok: 1,
      data: result[0]
    })
  })
}


// 根据用户id查询用户信息
module.exports.user = (req, res) => {
  let id = req.params.id
  mysql.query("SELECT * FROM user WHERE id = ?", id, (error, result) => {
    if (error) return console.log(error);
    console.log(result)
    res.json({
      ok: 1,
      data: result[0]
    })
  })
}

// 根据视频id查询视频评论
module.exports.comment = (req, res) => {
  let num=0
  let id = req.params.id
  mysql.query("SELECT * FROM comment where v_id = ?", id, (error, result1) => {
    if (error) return console.log(error)
    num=result1.length
    mysql.query("SELECT * FROM com_son", (error1, result2) => {
    
      if (error1) return console.log(error1)
      for (let i = 0; i < result1.length; i++) {
        result1[i].arr = []
        for (let j = 0; j < result2.length; j++) {
          if (result2[j].gen_id == result1[i].id) {
            result1[i].arr.push(result2[j])
            num++
          }
        }
      }
      res.json({
        ok: 1,
        data: result1,
        num:num
      })
    })
  })
}


// 添加父评论
module.exports.comadd = (req, res) => {
  let params = req.body
  mysql.query("INSERT INTO comment SET ?",params,(err,result)=>{
    if(err)return console.log(err);
    res.json({
      ok:1
    })
  })
}

// 添加子评论
module.exports.comaddson = (req, res) => {
  let params = req.body
  mysql.query("INSERT INTO com_son SET ?",params,(err,result)=>{
    if(err)return console.log(err);
    res.json({
      ok:1
    })
  })
}

// 视频点赞



// 评论点赞



// 用户关注