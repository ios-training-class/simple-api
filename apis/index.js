var express = require('express');
var router = express.Router();

router.use('/api/v1/quotes', require('./quotes'));

// nothing for root
router.get('/', function(req, res) {
  res.send(JSON.stringify({}));
});

module.exports = router;

