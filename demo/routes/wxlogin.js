// var express = require('express');
// var app = express();
// var router = express.Router();
// var https = require('https');
// /* GET wxlogin listing. */
// router.get('/:code', function(req, res, next) {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// 	// console.log(req.method);
// 	if(req.method=="OPTIONS") res.send(200);
// 	var js_code = req.params.code;
// 	var url = "https://api.weixin.qq.com/sns/jscode2session?appid=wx508b77d804c62587&secret=";
// 		url += "d0b3c87c4e3c3990a1413b1678a77e73&js_code="+js_code+"&grant_type=authorization_code";
// 	https.get(url, (res1) => {
// 		console.log('statusCode:', res.statusCode);
// 		console.log('headers:', res.headers);
//
// 		res1.on('data', (d) => {
// 			res.send({
// 				data:JSON.parse(d)
// 			});
// 		});
//
// 	}).on('error', (e) => {
// 		console.error(e);
// 	});
//
// 	// app.get(url, function(req1, res1){
// 	// 	console.log(res1);
//
// 	// });
//
// });
//
// module.exports = router;