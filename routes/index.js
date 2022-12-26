var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello from the back end')
});

router.get('/test', function(req, res, next) {
  res.send('hello from the back end')
});

module.exports = router;
