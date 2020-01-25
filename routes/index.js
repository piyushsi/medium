var express = require('express');
var router = express.Router();
var Feed = require('rss-to-json');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.post('/medium', function(req, res, next) {
  Feed.load(`https://medium.com/feed/@${req.body.id}/`, function(err, rss){
    res.render('medium', { rss });
});

});


 
module.exports = router;
