var express = require('express');
var router = express.Router();

router.use('/quotes', require('./quotes'));

// nothing for root
router.get('/', function(req, res) {
  res.send(JSON.stringify({}));
});

router.get('/hello', function(req, res) {
  res.send('hello world');
});

router.post('/hello', function(req, res) {
  res.send('hello world from post method');
});

router.get('/hello1', function(req, res) {
  res.send(JSON.stringify({'hello': 'world'}));
});

router.get('/403', function(req, res) {
  res.status(403).send('Status: Forbidden');
});

module.exports = router;
