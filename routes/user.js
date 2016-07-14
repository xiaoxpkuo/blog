var express = require('express');
var router = express.Router();

//注册
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{
	  title:'注册'
  });
});

//接收注册信息
router.post('/reg', function(req, res, next) {

});

//登录
router.get('/login', function(req, res, next) {
  res.render('user/login',{

  });
});
//接收登录信息
router.post('/login', function(req, res, next) {

});
//退出
router.get('/logout', function(req, res, next) {
  res.render('user/logout',{

  });
});
module.exports = router;
