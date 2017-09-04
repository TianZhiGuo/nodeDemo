//小程序code登录获取用户openid
var https = require('https');
var mongodb = require('../module/db');
module.exports = function (app) {
    app.all('/login', function (req, res, next) {
        var code = req.body.code;
        console.log(code);
        var APPID = "wx508b77d804c62587";
        var SECRET = "dab7d68b6b135f7742e12f032494460d";
        var url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + APPID + "&secret=" + SECRET + "&js_code=" + code + "&grant_type=authorization_code";

        https.get(url, function (response) {
            response.on('data', function (data) {
                console.log(data);
                res.send(JSON.parse(data))
            })
        })
    });
};