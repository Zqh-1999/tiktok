const mysql = require('mysql');
const oss = require('ali-oss');
const fs = require('fs')


const connection = mysql.createConnection({
    host: '47.56.172.241',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'TikTok'
});

const express = require('express')
const router = express.Router()
// oss
let clientOSS = new oss({
    accessKeyId: 'LTAI4Fc5QcQ5avZwkSYfWXwy',
    accessKeySecret: 'WMxQda0OgWdyCxA9qhJ8vPcig4Ua9m',
    bucket: 'wekfz',
    region: 'oss-cn-shanghai'
});

router.get('/', (req, res) => {
    res.render(index)
})


router.get('/login', (req, res) => {
    let phoneNum = req.query.phoneNum
    let verify = Math.random().toFixed(6) * 1000000

    const Core = require('@alicloud/pop-core');
    var client = new Core({
        accessKeyId: 'LTAI4Fc5QcQ5avZwkSYfWXwy',
        accessKeySecret: 'WMxQda0OgWdyCxA9qhJ8vPcig4Ua9m',
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    });

    var params = {
        "RegionId": "cn-shanghai",
        "PhoneNumbers": `${phoneNum}`,
        "SignName": "乐享逻辑",
        "TemplateCode": "SMS_174725042",
        "TemplateParam": `{'code':${verify}}`
    }

    var requestOption = {
        method: 'POST'
    };
    // console.log(params.PhoneNumbers, verify)
    client.request('SendSms', params, requestOption).then((result) => {
        return res.json({
            'code': 1,
            msg: '验证码获取成功',
            verifys: verify
        })
    }, (ex) => {
        // console.log(ex)
        if (ex.name == 'isv.MOBILE_NUMBER_ILLEGALError') {
            return res.json({
                'code': 2,
                'msg': '请输入正确手机号'
            })
        } else if (ex.code == 'ETIMEDOUT') {
            return res.json({
                'code': 3,
                'msg': '请检查网络连接'
            })
        } else {
            return res.json({
                'code': 4,
                'msg': '号码异常'
            })
        }
    })
})

router.get('/loginY', (req, res) => {
    let phoneNum = req.query.phoneNum;
    let verify = req.query.verify;
    let yzm = req.query.yzm;
    if (verify == yzm) {
        let sqla = 'select phone from user where phone=?'
        connection.query(sqla, phoneNum, (error, results) => {
            // console.log(results)
            if (results.length == 0) {
                let sqlb = "INSERT INTO `user` (phone) VALUES (?);"
                connection.query(sqlb, phoneNum, (error, results) => {
                    let sqlc = 'select id from user where phone=?'
                    connection.query(sqlc, phoneNum, (error, result) => {
                        return res.json({
                            'id':result[0].id,
                            'code': 200,
                            'msg': '注册成功'
                        })
                    })
                })
            } else {
                let sqlc = 'select id from user where phone=?'
                connection.query(sqlc, phoneNum, (error, result) => {
                    return res.json({
                        'id':result[0].id,
                        'code': 202,
                        'msg': '欢迎-' + phoneNum
                    })
                })
            }
        })
    } else {
        return res.json({
            'code': 2,
            'msg': '验证码不匹配'
        })
    }
})





// router.post('/uploader', (req, res) => {
//     let file = req.body.file;
//     let phone = req.body.phone
//     let sql = `UPDATE user set photo=? where phone=${phone}`
//     connection.query(sql, file, (error, results) => {
//         if (error) return console.log(error)
//         res.json({
//             'code': 200,
//             'msg': '成功'
//         })
//     })
//     })

    //     fs.writeFile('./public/upload/' + time, file, (error) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    // })
    // async function put () {
    //     try {
    //       let result = await clientOSS.put('/dou/' + time, './public/upload/' + time);
    //       console.log(result);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }

    //   put();
    // let result = clientOSS.put('/dou/' + time, './public/upload/' + time);
    // return res.json({
    //     data: { pic: result.url },
    //     meta: {
    //         status: "200",
    //         msg: "上传成功！"
    //     }
    // })
// })

router.post('/baocun', (req, res) => {
    console.log(req.body.city)
    let username = req.body.username
    let intro = req.body.intro
    let birth = req.body.birth
    let sex = req.body.sex
    let city = req.body.city
    let phone = req.body.phone
    let arr = [username, intro, birth, sex, city]
    let sql = `UPDATE user set username=?,intro=?,birth=?,sex=?,city=? where phone=${phone}`
    connection.query(sql, arr, (error, results) => {
        if (error) return console.log(error)
        res.json({
            'code': 200,
            'msg': '成功'
        })
    })
})

module.exports = router