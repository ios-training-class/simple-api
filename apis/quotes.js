var express = require('express');
var axios = require('axios');
var logger = require('../helpers/logger');
var router = express.Router();
var API_QUOTE = 'http://quotesondesign.com/wp-json/posts';

router.get('/', function(req, res) {
    axios.get(API_QUOTE, {
		  params: {
		    'filter[orderby]': 'rand',
        'filter[posts_per_page]': 1,
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

module.exports = router;

