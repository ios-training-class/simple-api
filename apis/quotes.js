var express = require('express');
var axios = require('axios');
var logger = require('../helpers/logger');
var router = express.Router();
var API_QUOTE = 'http://quotesondesign.com/wp-json/posts';

router.get('/hello', function(req, res) {
  res.send('hello world');
});

router.post('/hello', function(req, res) {
  res.send('hello world from post method');
});

router.get('/hello1', function(req, res) {
  res.send(JSON.stringify({'hello': 'world'}));
});

router.get('/:code', function(req, res) {
  res.status(req.params.code).send('Status code:' + req.params.code);
})

router.get('/', function(req, res) {
  axios.get(API_QUOTE, {
	  params: {
	    'filter[orderby]': req.query.orderby || 'rand',
      'filter[posts_per_page]': req.query.posts_per_page || 1,
      'timestamp': new Date().getTime()
	  }
  })
	.then(function (response) {
    return response.data;
  })
   .then(function (response) {
    res.send(response);
  })
  .catch(function (error) {
    logger.error(error);
  });
});

router.get('/:id(\\d+)', function(req, res) {
  axios.get(API_QUOTE + '/' + req.params['id'])
	.then(function (response) {
    return response.data;
  })
   .then(function (response) {
    res.send(response);
  })
  .catch(function (error) {
    logger.error(error);
  });
});

module.exports = router;

