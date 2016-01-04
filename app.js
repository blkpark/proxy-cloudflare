var cloudscraper = require('cloudscraper');
var express = require('express');
var app = express();

app.get('/', function(req,res,next) {

  var url = req.query.url;

  if (!url) {
    // default response
    res.json({})
    return;
  }

  cloudscraper.get(url, function(error, response, body) {

    res.send(body);

  });
});

app.listen(process.env.PORT || 3000)