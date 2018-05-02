var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}); //responding to a GET request

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
  var data = {age: 22, job: 'Ninja'}
  res.render('profile', {person: req.params.name, data:data});
});
app.listen(3000);
