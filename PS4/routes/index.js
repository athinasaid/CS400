const express = require('express');
const router = express.Router();

router.get('/', function(req,res,next){
  const request = require('request');
  const options = {
    'method': 'GET',
    'url': 'http://restapi.demoqa.com/utilities/weather/city/Paris',
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.render('index',
        {x:response.body});
  });
})


module.exports = router;

