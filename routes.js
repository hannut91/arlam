var crypto = require('crypto');
var express = require('express');
module.exports = function(app) {
  app.use('/static', express.static( './static')).
      use('/lib', express.static( '../lib')
  );
  app.get('/', function(req, res){
      res.render('index');
  });
  app.get('/weather', function(req,res){
      res.render('weather');
  });
}