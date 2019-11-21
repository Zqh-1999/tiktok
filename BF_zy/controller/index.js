const mysql = require('../db')



// 视频
// 查询所有视频
module.exports.index = (req, res) => {
  mysql.query('SELECT * FROM video', (error, results) => {
    if (error) {
      return res.json({
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
        return res.json({
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
        return res.json({
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
        return res.json({
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
      return res.json({
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
  mysql.query("SELECT * FROM user WHERE id = ?", id, (error, result) => {
    if (error) {
      return res.json({
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
      return res.json({
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
      return res.json({
        ok: 0,
        err: error
      })
    }
    num = result1.length
    mysql.query("SELECT * FROM com_son", (error1, result2) => {

      if (error1) {
        return res.json({
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
      return res.json({
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
      return res.json({
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
  let user_id = req.body.user_id
  let id = req.body.id
  console.log(user_id)
  if (zan == "true") {
    mysql.query("SELECT goods FROM video WHERE id = ?", id, (err, ret) => {
      if (err) {
        return res.json({
          ok: 0,
          err: err
        })
      }
      // console.log(ret[0].goods)
      mysql.query(`UPDATE video SET goods = ? WHERE id = ${id}`, ret[0].goods + 1, (err1, ret1) => {
        if (err1) {
          return res.json({
            ok: 0,
            err: err1
          })
        } else {
          mysql.query("select love from user where id = ?", user_id, (err2, ret2) => {
            if (err2) {
              return res.json({
                ok: 0,
                err: err2
              })
            }
            // console.log(ret2)
            let arr = ret2[0].love.split(",")
            arr.push(id)

            function unique(arr) {
              return Array.from(new Set(arr))
            }
            const str = unique(arr).join(",")
            // console.log(str)
            mysql.query(`update user set love = ? where id = ${user_id}`, str, (error, result) => {
              if (error) return console.log(error)
              res.json({
                ok: 1,
                data: {
                  goods: ret[0].goods + 1
                }
              })
            })
          })

        }
      })

    })
  } else if (zan == "false") {
    mysql.query("SELECT goods FROM video WHERE id = ?", id, (err, ret) => {
      if (err) {
        return res.json({
          ok: 0,
          err: err
        })
      }
      // console.log(ret[0].goods)

      mysql.query(`UPDATE video SET goods = ? WHERE id = ${id}`, ret[0].goods - 1, (err1, ret1) => {
        if (err1) {
          return res.json({
            ok: 0,
            err: err1
          })
        } else {
          // 查询用户的
          mysql.query("select love from user where id = ?", user_id, (err2, ret2) => {
            if (err2) {
              return res.json({
                ok: 0,
                err: err2
              })
            }
            Array.prototype.remove = function (val) {
              var index = this.indexOf(val);
              if (index > -1) {
                this.splice(index, 1);
              }
            };
            let arr = ret2[0].love.split(",")
            arr.forEach(v => {
              if (v == id) {
                arr.remove(v)
                // console.log(v)
              }
            });
            // console.log(arr)
            const str = arr.join(",")
            // console.log(str)
            mysql.query(`update user set love = ? where id = ${user_id}`, str, (error, result) => {
              if (error) {
                return res.json({
                  ok: 0,
                  error: error
                })
              }
              res.json({
                ok: 1,
                data: {
                  goods: ret[0].goods - 1
                }
              })
            })
          })
        }
      })
    })
  }
}


// 用户关注
module.exports.follow = (req, res) => {
  let id = req.body.id;
  let att_id = req.body.att_id;
  let atten = req.body.atten;
  // 查询用户的关注用户
  mysql.query("select attention from user where id = ?", id, (error, result) => {
    if (error) {
      res.json({
        ok: 0,
        error: error
      })
    }
    let str = result[0].attention
    let arr = str.split(",")
    if (atten == "true") {
      // 关注用户
      function unique(arr) {
        return Array.from(new Set(arr))
      }
      arr.forEach((v, i) => {
        if (v == id) {
          arr.splice(i, 1)
        }
      })
      arr.push(att_id);
      str = unique(arr).join(",")
      // console.log(str)
      mysql.query(`update user set attention = ? where id = ${id}`, str, (error1, result1) => {
        if (error1) {
          return res.json({
            ok: 0,
            error: error1
          })
        }
        res.json({
          ok: 1
        })
      })
    } else if (atten == "false") {
      // 取消关注
      function unique(arr) {
        return Array.from(new Set(arr))
      }
      arr.forEach((v, i) => {
        if (v == att_id) {
          arr.splice(i, 1)
        }
      })
      str = unique(arr).join(",")
      mysql.query(`update user set attention = ? where id = ${id}`, str, (error1, result1) => {
        if (error1) {
          return res.json({
            ok: 0,
            error: error1
          })
        }
        res.json({
          ok: 1
        })
      })
    }
  })
}