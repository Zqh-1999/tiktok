const express = require('express')
const router = express.Router()

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
console.log(params.PhoneNumbers,verify)
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
    console.log(phoneNum,verify,yzm)
    if (verify == yzm) {
        res.json({
            'code':1,
            'msg':'登录成功'
        })
    }else{
        res.json({
            'code':2,
            'msg':'验证码不匹配'
        })
    }
})

module.exports = router