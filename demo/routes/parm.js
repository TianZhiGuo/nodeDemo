// var express = require('express');
// var router = express.Router();
// router.all("/",function(req,res,next){
//
// 	//html5  跨域
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//
// 	console.log(req.query.a);
//
// 	var number = req.body.a;
//
// 	if(req.method=="OPTIONS") {
// 		res.send(200)
// 	}else{
// 		res.send({
// 			data:number*number
// 		});
// 	};
	// var code = req.params.code;
	// var js_code = req.query.id;
	// var pos = req.body;
	// console.log(js_code);
	// res.send({
	// 	code:200,
	// 	data:{
	// 		par:code,
	// 		que:js_code,
	// 		pos:pos
	// 	}
	// })
// })

// router.post("/add",function (req,res,next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     if(req.method=="OPTIONS") {
//         res.send(200)
//     }else{
//         res.send({
//             data:111
//         });
//     };
// })

// module.exports = router;

module.exports = function (app) {
    app.all("/parm/add",function(req,res,next) {
        //html5  跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

        console.log(req.query.a);

        var number = req.query.a;
        number = number || 0;
        if (req.method == "OPTIONS") {
            res.send(200)
        } else {
            res.send({
                data: number*number
            });
        };
    })
}