const mysql = require('../db')



// 视频
// 查询所有视频
module.exports.index = (req, res) => {
  mysql.query('SELECT * FROM video', (error, results) => {
    if (error) {
      res.json({
        ok: 0,
        err: error
      })
    }
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

  // console.log(city);
  // console.log(user_id);
  // console.log(vtext)
  if (city) {
    mysql.query("SELECT * FROM video WHERE city = ?", city, (error, result) => {
      if (error) {
        res.json({
          ok: 0,
          err: error
        })
      }
      res.json({
        ok: 1,
        data: result[0]
      })
    })
  } else if (user_id) {
    mysql.query("SELECT * FROM video WHERE user_id = ?", user_id, (error, result) => {
      if (error) {
        res.json({
          ok: 0,
          err: error
        })
      }
      res.json({
        ok: 2,
        data: result[0]
      })
    })
  } else if (vtext) {
    mysql.query(`SELECT * FROM video WHERE vtext LIKE '%${vtext}%'`, (error, result) => {
      if (error) {
        res.json({
          ok: 0,
          err: error
        })
      }
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
  // console.log(id)
  mysql.query("SELECT * FROM video WHERE id = ?", id, (error, result) => {
    if (error) {
      res.json({
        ok: 0,
        err: error
      })
    }
    // console.log(result)
    res.json({
      ok: 1,
      data: result[0]
    })
  })
}


// 根据用户id查询用户信息
module.exports.user = (req, res) => {
  let id = req.params.id
  mysql.query("SELECT * FROM user WHERE id in ?", id, (error, result) => {
    if (error) {
      res.json({
        ok: 0,
        err: error
      })
    }
    // console.log(result)
    res.json({
      ok: 1,
      data: result[0]
    })
  })
}
// 查询多个用户信息
module.exports.users = (req, res) => {
  let id = req.query.id
  // let id = [1,2,3,4]
  mysql.query(`SELECT * FROM user WHERE id in (${id})`, (error, result) => {
    if (error) {
      res.json({
        ok: 0,
        err: error
      })
    }
    // console.log(result)
    res.json({
      ok: 1,
      data: result
    })
  })
}

// 根据视频id查询视频评论
module.exports.comment = (req, res) => {
  let num = 0
  let id = req.params.id
  mysql.query("SELECT * FROM comment where v_id = ?", id, (error, result1) => {
    if (error) {
      res.json({
        ok: 0,
        err: error
      })
    }
    num = result1.length
    mysql.query("SELECT * FROM com_son", (error1, result2) => {

      if (error1) {
        res.json({
          ok: 0,
          err: error1
        })
      }
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
        num: num
      })
    })
  })
}


// 添加父评论
module.exports.comadd = (req, res) => {
  let params = req.body
  mysql.query("INSERT INTO comment SET ?", params, (err, result) => {
    if (err) {
      res.json({
        ok: 0,
        err: err
      })
    }
    res.json({
      ok: 1
    })
  })
}

// 添加子评论
module.exports.comaddson = (req, res) => {
  let params = req.body
  mysql.query("INSERT INTO com_son SET ?", params, (err, result) => {
    if (err) {
      res.json({
        ok: 0,
        err: err
      })
    }
    res.json({
      ok: 1
    })
  })
}

// 视频点赞
module.exports.praise = (req, res) => {
  let zan = req.body.zan
  let id = req.body.id
  let user_id = req.body.user_id
  if (zan == "true") {
    zen = true
    mysql.query("SELECT goods FROM video WHERE id = ?", id, (err, ret) => {
      if (err) {
        res.json({
          ok: 0,
          err: err
        })
      }
      // console.log(ret[0].goods)
      mysql.query(`UPDATE video SET goods = ? WHERE id = ${id}`, ret[0].goods + 1, (err1, ret1) => {
        if (err1) {
          res.json({
            ok: 0,
            err: err1
          })
        } else {
          res.json({
            ok: 1,
            data: {
              goods: ret[0].goods + 1
            }
          })
        }
      })
      mysql.query("select love from user where user_id = ?",user_id,(err2,ret2)=>{
        if(err2){
          res.json({
            ok:0,
            err
          })
        }
      })
    })
  } else if (zan == "false") {
    mysql.query("SELECT goods FROM video WHERE id = ?", id, (err, ret) => {
      if (err) {
        res.json({
          ok: 0,
          err: err
        })
      }
      // console.log(ret[0].goods)

      mysql.query(`UPDATE video SET goods = ? WHERE id = ${id}`, ret[0].goods - 1, (err1, ret1) => {
        if (err1) {
          res.json({
            ok: 0,
            err: err1
          })
        } else {
          res.json({
            ok: 2,
            data: {
              goods: ret[0].goods - 1
            }
          })
        }
      })
    })
  }
}


// 评论点赞



// 用户关注