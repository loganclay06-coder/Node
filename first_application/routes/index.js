var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Home', rating: 10 },
    { name: 'Grandmas House', rating: 8 },
    { name: 'San Francisco', rating: 9 },
    { name: 'San Antonio', rating: 7 },
    { name: 'Virginia', rating: 9 }
  ];
  
  // create a name
var myname = "Your Name";

res.render('index', {
  title: 'Favorite Places',
  places: places,
  myname: myname
 });
});


module.exports = router;
