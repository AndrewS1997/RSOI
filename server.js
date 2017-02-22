var express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.route('/')
  .get(function(req, res) {
    res.render('maps.ejs');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

app.listen(3000 , function(){
	console.log('Listen on port 3000')
});