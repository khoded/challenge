var express = require('express');
var router = express.Router();
var readline = require('readline');
var fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Customer Reward System', reward : 'upload input File' });
});



			// console.log(b);
			// res.send(b);
			
module.exports = router;