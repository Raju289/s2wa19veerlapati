var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let fround = Math.fround(x)
  let random =Math.random(x)
  let round = Math.round(x)
  
  res.render('computation', {
    title: 'Computation',
    v1: `applied to ` + x + ` is ` + fround ,
    v2: `applied to ` + x + ` is ` + random,
    v3: `applied to ` + x + ` is ` + round,
    
  });
});

module.exports = router;