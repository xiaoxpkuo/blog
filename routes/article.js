var express = require('express');
var router = express.Router();

//文章列表
router.get('/add', function(req, res, next) {
  res.render('article/add',{

  });
});
module.exports = router;
