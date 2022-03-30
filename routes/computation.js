var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var y1 = Math.fround(x);
  var y2 = Math.random(x);
  var y3 = Math.round(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.fround(${x}) is ${y1} ; Math.random(${x}) is ${y2} ; Math.round(${x}) is ${y3}\n`);
});

module.exports = router;